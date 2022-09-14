// 对项目路由权限做处理

import { router } from "routes/index";
// import { Message } from 'element-ui'
import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style
import useLoginStore from "store/modules/login"; // loginStore
import getPageTitle from "utils/get-page-title"; // set page title
import { whiteList } from "utils/settings"; // 路由白名单
import { getToken } from "utils/storage"; // get token from localstorage

NProgress.configure({ showSpinner: false }); // NProgress Configuration

// const whiteList = ['/login', '/auth-redirect'] // no redirect whitelist

router.beforeEach(async (to, from, next) => {
  // start progress bar
  NProgress.start();

  // set page title
  document.title = getPageTitle(to.meta.title);

  // determine whether the user has logged in
  const hasToken = getToken();

  const loginStore = useLoginStore();

  if (hasToken) {
    if (to.path === "/login") {
      // 如果已经登录，跳转至登录页面
      next({ path: "/" });
      NProgress.done();
    } else {
      // 尝试获取store中的用户的【角色】信息
      const hasRoles = loginStore.rolesList && loginStore.rolesList.length > 0;

      if (hasRoles) {
        next(); // 如果用户已经获取了角色，直接放行
      } else {
        try {
          // 如果没有查询到本地有用户角色信息，则重新调用接口，获取用户角色信息
          const roles = await loginStore.getRolesInfo();

          // generate accessible routes map based on roles
          const accessRoutes = await loginStore.generateRoutes(roles);
          // console.log(accessRoutes);

          router.addRoute(accessRoutes);

          // hack method to ensure that addRoutes is complete
          // set the replace: true, so the navigation will not leave a history record
          next({ ...to, replace: true });
          // next({ replace: true });
        } catch (error) {
          // remove token and go to login page to re-login
          await loginStore.logout();
          // Message.error(error || "Has Error");
          next(`/login?redirect=${to.path}`);
          NProgress.done();
        }
      }
    }
  } else {
    /* has no token*/

    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next();
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`);
      NProgress.done();
    }
  }
});

router.afterEach(() => {
  // finish progress bar
  NProgress.done();
});

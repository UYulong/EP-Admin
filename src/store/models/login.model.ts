/**
 * @description: 用户提交登录表单 接口类型
 */
export interface userLoginFormModel {
  userName: string;
  userPassword: string;
  verificationCode: string;
}

/**
 * @description: 获取用户角色
 */
export interface userInfoModel {
  roles: string[];
}

/**
 * @description: 路由表过滤所需参数
 */
export type userRoles = string[];

/**
 * @description: 登录store
 */
export type loginStateModel = {
  token: string | null;
  roles: string[];
};

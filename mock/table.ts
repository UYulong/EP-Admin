import { MockMethod } from 'vite-plugin-mock'

const userToken = 'EP_ADMIN_TOKEN'

export default [
  {
    url: '/api/table/basicList',
    method: 'get',
    response: ({ headers }) => {
      const { authorisation } = headers

      if (authorisation && authorisation === userToken) {
        return {
          code: 0,
          message: '数据获取成功!',
          data: [
            {
              date: '2016-05-01',
              name: 'Tom1',
              state: 'California',
              city: 'Los Angeles',
              address: 'No. 189, Grove St, Los Angeles',
              zip: 'CA 90036',
              isShow: true
            },
            {
              date: '2016-05-02',
              name: 'Tom2',
              state: 'California',
              city: 'Los Angeles',
              address: 'No. 189, Grove St, Los Angeles',
              zip: 'CA 90036',
              isShow: true
            },
            {
              date: '2016-05-03',
              name: 'Tom3',
              state: 'California',
              city: 'Los Angeles',
              address: 'No. 189, Grove St, Los Angeles',
              zip: 'CA 90036',
              isShow: true
            },
            {
              date: '2016-05-03',
              name: 'Tom4',
              state: 'California',
              city: 'Los Angeles',
              address: 'No. 189, Grove St, Los Angeles',
              zip: 'CA 90036',
              isShow: true
            },
            {
              date: '2016-05-03',
              name: 'Tom5',
              state: 'California',
              city: 'Los Angeles',
              address: 'No. 189, Grove St, Los Angeles',
              zip: 'CA 90036',
              isShow: true
            },
            {
              date: '2016-05-03',
              name: 'Tom6',
              state: 'California',
              city: 'Los Angeles',
              address: 'No. 189, Grove St, Los Angeles',
              zip: 'CA 90036',
              isShow: true
            },
            {
              date: '2016-05-03',
              name: 'Tom7',
              state: 'California',
              city: 'Los Angeles',
              address: 'No. 189, Grove St, Los Angeles',
              zip: 'CA 90036',
              isShow: true
            },
            {
              date: '2016-05-03',
              name: 'Tom8',
              state: 'California',
              city: 'Los Angeles',
              address: 'No. 189, Grove St, Los Angeles',
              zip: 'CA 90036',
              isShow: true
            }
          ]
        }
      }

      return {
        code: 1000,
        message: '用户token存在问题！',
        data: null
      }
    }
  }
] as MockMethod[]

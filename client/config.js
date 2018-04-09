/**
 * 小程序配置文件
 */


var host = 'https://www.leobob.cn'; //请修改为你的域名

var config = {

  // 下面的地址配合云端 Demo 工作
  service: {
    host,

    // 登录地址，用于建立会话
    loginUrl: `${host}/weapp/login`,

    // 测试的请求地址，用于测试会话
    requestUrl: `${host}/weapp/user`,

    // 测试的信道服务地址
    tunnelUrl: `${host}/weapp/tunnel`,

    // 上传图片接口
    uploadUrl: `${host}/weapp/upload`,

    // 获取分类列表
    getCatagoryList: `${host}/weapp/catagory`,

    getDishDetails: `${host}/weapp/dishDetails`,

    getDishById: `${host}/weapp/dishDetails/id/`,

    getDishByCata: `${host}/weapp/dishDetails/type/`,

    getDishByName: `${host}/weapp/dishDetails/name/`,
    //获取菜品细节
    getDishDetails: `${host}/weapp/dishDetails`,

    getAdvertise: `${host}/weapp/advertise`,

    getFavourite: `${host}/weapp/favourite`

  },
  translation: {
    appKey: '738ab045c2aea7a1',
    appSecret: '8e6fe69bcaf0240aff63ecba368ba0dc'
  }
};

module.exports = config;

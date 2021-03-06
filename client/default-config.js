/**
 * 小程序配置文件
 */


var host = 'https://www.example.cn'; //请修改为你的域名

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
    getCatagoryList: `${host}/weapp/catagory`
  }
};

module.exports = config;

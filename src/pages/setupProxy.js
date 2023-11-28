const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/members/login', // 프록시할 API 경로
    createProxyMiddleware({
      target: 'https://port-0-server-cloudtype-4fju66f2clmyxbee6.sel5.cloudtype.app/', // 프록시할 API 서버 주소
      changeOrigin: true,
      pathRewrite: {
        '^/members/login': '', // 실제 요청할 때 경로에서 '/api' 부분 제거
      },
    })
  );
};
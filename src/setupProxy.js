const createProxyMiddleware = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/v1',
    createProxyMiddleware({
      target: 'http://3.1.5.157/devportal',
     /* target: 'http://localhost:8080', */
      changeOrigin: true,
    })
  );
};
 
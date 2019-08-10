const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(proxy('/apis', {
        target: "https://api.juooo.com",
        secure: false,
        changeOrigin: true,
        pathRewrite: {
            "^/apis": "/"
        }
    }));
    app.use(proxy('/apm', {
        target: "https://m.juooo.com",
        secure: false,
        changeOrigin: true,
        pathRewrite: {
            "^/apm": "/"
        }
    }));
}

module.exports = {
    inject: {
        CDN_URL: 'http://localhost:4000/',
        CONTENT_SECURITY_POLICY: "script-src 'self' http://localhost:4000; object-src 'self'",
    }
};

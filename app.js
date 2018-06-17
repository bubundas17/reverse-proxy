const redbird = require('redbird')({port: 80});

redbird.register('example.com', 'http://172.60.80.2:8082', {
    ssl: {
        port: 443,
        letsencrypt: {
            email: 'john@example.com', // Domain owner/admin email
            production: true, // WARNING: Only use this flag when the proxy is verified to work correctly to avoid being banned!
        }
    }
});

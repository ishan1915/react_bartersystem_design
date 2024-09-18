// craco.config.js
module.exports = {
    webpack: {
        configure: (webpackConfig) => {
            webpackConfig.resolve.fallback = {
                ...webpackConfig.resolve.fallback,
                "http": require.resolve("stream-http"),
                "https": require.resolve("https-browserify"),
                "stream": require.resolve("stream-browserify"),
                "url": require.resolve("url/"),
                "util": require.resolve("util/"),
                "zlib": require.resolve("browserify-zlib"),
                "assert": require.resolve("assert/"),
            };
            return webpackConfig;
        },
    },
};

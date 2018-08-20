module.exports = {
    plugins: [
        require("postcss-apply"),        
        require("postcss-preset-env")({
            autoprefixer: {
              grid: true
            },
            browsers: [
              "last 2 version",
            ],
            stage: 1,
            features: {
                'nesting-rules': true
            }
        })
    ]
}
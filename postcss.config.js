module.exports = {
    plugins: [
        require("autoprefixer")({
            grid:true
        }),
        require("postcss-preset-env")({
            stage: 3,
            features: {
                'nesting-rules': true
            }
        })
    ]
}
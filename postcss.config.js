module.exports = {
    plugins: [
        require("postcss-import")({
          plugins:[
            require("stylelint"),
          ]
        }),
        require("postcss-font-magician")({
          variants: {
            'Lato': {
              '300': [],
              '400': [],
            }
          }
        }),
        require("postcss-apply"),
        require("postcss-color-hwb"),
        require("postcss-preset-env")({
            autoprefixer: {
              grid: true,
            },
            browsers: [
              "last 2 version",
            ],
            stage: 1,
            features: {
                'nesting-rules': true,
                'color-functional-notation':false,
            }
        }),
        require("css-mqpacker"),
        require("cssnano")
    ]
}
module.exports = {
  plugins: [
    require('autoprefixer')({
      browsers: ['last 2 versions'],
    }),
    require('@fullhuman/postcss-purgecss')({
      content: ['./layouts/**/*.html'],
    })
  ]
}

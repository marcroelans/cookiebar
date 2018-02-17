import uglify from 'rollup-plugin-uglify';

// rollup.config.js
export default [
  {
    input: 'cookiebar.js',
    output: {
      file: 'cookiebar.min.js',
      format: 'cjs',
    },
    plugins: [
      uglify()
    ]
  }
]

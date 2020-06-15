const path = require('path'); // "path" je tzv. "core" modul tj. ne moramo ga instalirati ili sl.
             // Sluzi za manipulisanje putanja (do) fajlova

module.exports = {
  // Ovdje definisemo ulaznu tacku
  entry: {
    app: [
      'babel-polyfill',
      './main.js' // Fajl koji zelimo da uzmemo da nam bude "izvorni" fajl (ES6/ES7 kod...)
    ]
  },
  output: {
    path: path.resolve(__dirname, 'build'), // "__dirname" oznacava trenutni folder
    publicPath: '/build/',
    filename: 'bundle.js'
  },
  module: {
    rules: [{ // Ovdje definisemo "loader"-e (kao npr. babel-loader)
      test: /\.js?$/, // Regularni izraz
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: { // Ovdje definisemo "presets"
        presets: ['@babel/preset-env']
      }
    }]
  }
}
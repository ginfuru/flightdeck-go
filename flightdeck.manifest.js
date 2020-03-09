module.exports = {
  tasks: {
    imagemin: true,
    deploy: false,
  },

  paths: {
    images: "./static",
    assets: "./assets",
  },

  deploy: {
    // Server IP ie: root@192.168.0.1 OR ServerName if you use agentforwarding
    remote: "",
    // Path to web root ie: /var/www/html
    root: "",
    exclude: [
      // Excluding files/folders inside of the _site folder
      ".DS_Store",
      "*.lock",
      ".git",
    ],
    // set to false if deploying to production
    dryrun: true,
  },

  // eslintLoader: {
  //   enforce: 'pre',
  //   test: /\.js$/,
  //   exclude: /node_modules/,
  //   loader: 'eslint-loader',
  // },

  hugo: {
    dest: "public",
  },

  imagemin: {
    src: "images",
    dest: "images",
    progressive: true,
    svgoPlugins: [{ removeViewBox: false }, { cleanupIDs: false }],
  },

  // js: {
  //   src: 'js',
  //   dest: 'js',
  //   entry: ['scripts.js'],
  // },
};

const minify = require("babel-minify");

const { code, map } = minify("./src/html-report.js", {
  mangle: {
    keepClassName: true,
  },
});

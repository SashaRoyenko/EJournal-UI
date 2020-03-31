module.exports = {
  "presets": [["@babel/react", {"modules": false}]],
  "env": {
    "test": {
      "plugins": ["@babel/plugin-transform-modules-commonjs"],
      "presets": [["@babel/react"]]
    }
  }
}

const { markdownRenderer } = require('inkdrop')

module.exports = {
  activate() {
    if (markdownRenderer) {
      markdownRenderer.remarkOptions.footnotes = true
    }
  },

  deactivate() {
    if (markdownRenderer) {
      markdownRenderer.remarkOptions.footnotes = false
    }
  }
};

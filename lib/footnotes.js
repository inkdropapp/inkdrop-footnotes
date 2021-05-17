const { markdownRenderer } = require('inkdrop')
const footnotes = require('remark-footnotes')

module.exports = {
  activate() {
    if (markdownRenderer) {
      markdownRenderer.remarkPlugins.push([footnotes, { inlineNotes: true }])
    }
  },

  deactivate() {
    if (markdownRenderer) {
      const { remarkPlugins } = markdownRenderer
      const i = remarkPlugins.indexOf(footnotes)
      if (i >= 0) remarkPlugins.splice(i, 1)
    }
  }
};

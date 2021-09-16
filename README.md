# Footnotes plugin for Inkdrop

Enables reference footnotes and inline footnotes.
Both are wrapped in square brackets and preceded by a caret (`^`), and can be referenced from inside other footnotes.

## Install

```sh
ipm install footnotes
```

## How to use

```markdown
Here is a footnote reference,[^1]
another,[^longnote],
and optionally there are inline
notes.^[you can type them inline, which may be easier, since you don’t
have to pick an identifier and move down to type the note.]

[^1]: Here is the footnote.

[^longnote]: Here’s one with multiple blocks.

    Subsequent paragraphs are indented to show that they
belong to the previous footnote.

        { some.code }

    The whole paragraph can be indented, or just the first
    line.  In this way, multi-paragraph footnotes work like
    multi-paragraph list items.

This paragraph won’t be part of the note, because it
isn’t indented.
```

It produces:

![example](./docs/example.png)

Learn more about [the footnotes syntax](https://github.com/remarkjs/remark-footnotes#use).
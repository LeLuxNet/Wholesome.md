# Wholesome.md

A markdown parser for Reddit-flavored Markdown.

## Examples

### HTML

```ts
import stringify from "rehype-stringify";
import remark from "remark";
import remark2rehype from "remark-rehype";
import wmd from "wholesome.md";

remark()
  .use(wmd)
  .use(remark2rehype)
  .use(stringify)
  .process("Hello, ^(World)!", (err, file) => {
    if (err !== null) throw err;
    console.log(file.toString());
  });
```

### JSX

```tsx
import { createElement, ReactElement } from "react";
import ReactDOM from "react-dom";
import rehype2react from "rehype-react";
import remark from "remark";
import remark2rehype from "remark-rehype";
import wmd from "wholesome.md";

const mark = remark()
  .use(wmd)
  .use(remark2rehype)
  .use(rehype2react, { createElement });

function Markdown({ content }: { content: string }) {
  return mark.processSync(content).result as ReactElement;
}

ReactDOM.render(
  <Markdown content="Hello, ^(World)!" />,
  document.querySelector("#root")
);
```

### Plain

```ts
import stringify from "rehype-stringify";
import remark from "remark";
import remark2retext from "remark-retext";
import wmd from "wholesome.md";

remark()
  .use(wmd)
  .use(remark2retext)
  .use(stringify)
  .process("Hello, ^(World)!", (err, file) => {
    if (err !== null) throw err;
    console.log(file.toString());
  });
```

## Options

```ts
remark().use(wmd, {
  // Replace spoilers with █. Useful for <meta> tags or notifications
  replaceSpoiler: true,

  userURL: "https://old.reddit.com/user/{}",
  subredditURL: "https://old.reddit.com/r/{}",
});
```

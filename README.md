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
import remark from "remark";
import remark2react from "remark-react";
import wmd from "wholesome.md";

<div>
  {remark().use(wmd).use(remark2react).processSync("Hello, ^(World)!").result}
</div>;
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
  replaceSpoiler: true, // Replace spoilers with █. Useful for plain text 'meta' tags or notifications

  userURL: "https://old.reddit.com/user/{}",
  subredditURL: "https://old.reddit.com/r/{}",
});
```

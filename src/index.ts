import { Plugin } from "unified";
import { Node } from "unist";
import { Options } from "./options";
import gfm from "./rules/gfm";
import regex from "./rules/regex";
import superscript from "./rules/superscript";

export = <Plugin>function (options?: Options) {
  this.use(gfm);

  const userURL = options?.userURL || "https://www.reddit.com/user/{}";
  const subredditURL = options?.subredditURL || "https://www.reddit.com/r/{}";
  const reg = regex(userURL, subredditURL, options?.replaceSpoiler || false);

  return (tree: Node) => {
    superscript(tree);
    reg(tree);
  };
};

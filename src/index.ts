import { Plugin } from "unified";
import { Node } from "unist";
import { Options } from "./options";
import gfm from "./rules/gfm";
import mentionCon from "./rules/mention";
import spoilerCon from "./rules/spoiler";
import superscript from "./rules/superscript";

export = <Plugin>function (options?: Options) {
  this.use(gfm);

  const userURL = options?.userURL || "https://www.reddit.com/user/{}";
  const subredditURL = options?.subredditURL || "https://www.reddit.com/r/{}";
  const mention = mentionCon(userURL, subredditURL);

  const spoiler = spoilerCon(options?.replaceSpoiler || false);

  return (tree: Node) => {
    superscript(tree);
    mention(tree);
    spoiler(tree);
  };
};

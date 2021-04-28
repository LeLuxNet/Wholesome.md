import { Plugin } from "unified";
import { Options } from "./options";
import gfm from "./rules/gfm";
import regex from "./rules/regex";

export = <Plugin>function (options?: Options) {
  this.use(gfm);

  const userURL = options?.userURL || "https://www.reddit.com/user/{}";
  const subredditURL = options?.subredditURL || "https://www.reddit.com/r/{}";

  return regex(userURL, subredditURL, options?.replaceSpoiler || false);
};

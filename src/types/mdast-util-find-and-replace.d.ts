declare module "mdast-util-find-and-replace" {
  import { Node } from "unist";

  interface Options {
    ignore?: string[];
  }

  function findAndReplace(
    tree: Node,
    data: [regex: RegExp, match: (...args: RegExpMatchArray) => Node][],
    options?: Options
  ): void;

  export = findAndReplace;
}

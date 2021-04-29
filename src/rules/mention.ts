import findAndReplace from "mdast-util-find-and-replace";
import { Node } from "unist";

const mentionRegex = /\/?([ru])\/([^ ]+)/g;

export default (userURL: string, subredditURL: string) => (tree: Node) => {
  const replaceMention = (...all: string[]) => ({
    type: "link",
    title: null,
    url: (all[1] === "r" ? subredditURL : userURL).replace(/\{\}/g, all[2]),
    children: [{ type: "text", value: all[0] }],
  });

  findAndReplace(tree, [[mentionRegex, replaceMention]], {
    ignore: ["link", "linkReference"],
  });
};

import findAndReplace from "mdast-util-find-and-replace";
import { Node } from "unist";

const mentionRegex = /\/?([ru])\/([^ ]+)/g;
const spoilerRegex = />!(.*)!</g;
const superscriptRegex = /\^(?:(?:\(([^)]+)\))|([^ ]*))/g;

export default (userURL: string, subredditURL: string) => (tree: Node) => {
  const replaceSuperscript = (_: string, value1?: string, value2?: string) => ({
    type: "sup",
    children: [{ type: "text", value: (value1 ?? value2)! }],
    data: { hName: "sup" },
  });

  const replaceSpoiler = (_: string, value: string) => ({
    type: "spoiler",
    children: [{ type: "text", value }],
    data: {
      hName: "span",
      hProperties: { className: "spoiler" },
    },
  });

  const replaceMention = (text: string, type: "r" | "u", value: string) => ({
    type: "link",
    title: null,
    url: (type === "r" ? subredditURL : userURL).replace(/\{\}/g, value),
    children: [{ type: "text", value: text }],
  });

  findAndReplace(
    tree,
    [
      [spoilerRegex, replaceSpoiler],
      [superscriptRegex, replaceSuperscript],
      [mentionRegex, replaceMention],
    ],
    {
      ignore: ["link", "linkReference"],
    }
  );
};

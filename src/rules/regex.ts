import findAndReplace from "mdast-util-find-and-replace";
import { Node } from "unist";

const mentionRegex = /\/?([ru])\/([^ ]+)/g;
const spoilerRegex = />!(.*)!</g;
const superscriptRegex = /\^(?:(?:\(([^)]+)\))|([^ ]*))/g;

export default (userURL: string, subredditURL: string, rSpoiler: boolean) => (
  tree: Node
) => {
  const replaceSuperscript = (...all: string[]) => ({
    type: "sup",
    children: [{ type: "text", value: (all[1] ?? all[2])! }],
    data: { hName: "sup" },
  });

  const replaceSpoiler = (...all: string[]) => ({
    type: "spoiler",
    children: [
      {
        type: "text",
        value: rSpoiler ? "█".repeat(all[1].length) : all[1],
      },
    ],
    data: {
      hName: "span",
      hProperties: { className: "spoiler" },
    },
  });

  const replaceMention = (...all: string[]) => ({
    type: "link",
    title: null,
    url: (all[1] === "r" ? subredditURL : userURL).replace(/\{\}/g, all[2]),
    children: [{ type: "text", value: all[0] }],
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

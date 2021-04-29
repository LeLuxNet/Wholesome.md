import findAndReplace from "mdast-util-find-and-replace";
import { Node } from "unist";
import visit, { Visitor } from "unist-util-visit";

const mentionRegex = /\/?([ru])\/([^ ]+)/g;
const spoilerRegex = />!(.*)!</g;

export default (userURL: string, subredditURL: string, rSpoiler: boolean) => (
  tree: Node
) => {
  const replaceBlockquote: Visitor<Node> = (node, index, parent) => {
    const paragraph = (node.children as Node[])[0];
    if (paragraph.type !== "paragraph") return;

    const text = (paragraph.children as Node[])[0];
    if (text.type !== "text") return;

    const val = (text as any).value as string;

    if (!val.startsWith("!")) return;
    if (!val.includes("!<")) return;

    text.value = ">" + text.value;
    parent!.children[index] = paragraph;
  };

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

  visit(tree, "blockquote", replaceBlockquote);

  findAndReplace(
    tree,
    [
      [spoilerRegex, replaceSpoiler],
      [mentionRegex, replaceMention],
    ],
    {
      ignore: ["link", "linkReference"],
    }
  );
};

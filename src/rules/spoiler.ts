import findAndReplace from "mdast-util-find-and-replace";
import { Node } from "unist";
import visit, { Visitor } from "unist-util-visit";

const spoilerRegex = />!(.*)!</g;

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

export default (rSpoiler: boolean) => (tree: Node) => {
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

  visit(tree, "blockquote", replaceBlockquote);

  findAndReplace(tree, [[spoilerRegex, replaceSpoiler]], {
    ignore: ["link", "linkReference"],
  });
};

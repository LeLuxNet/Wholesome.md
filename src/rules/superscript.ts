import { Node } from "unist";
import visit, { Visitor } from "unist-util-visit";

export default (tree: Node) => {
  const visitor: Visitor<Node> = (node, i, parent) => {
    const val = node.value as string;
    const children = parsePart(
      val,
      node.position?.start.line,
      node.position?.start.column
    );

    parent?.children.splice(i, 1, ...children);

    return i + children.length;
  };

  const parsePart = (text: string, line?: number, column?: number): Node[] => {
    const children: Node[] = [];
    var i = 0;

    while (true) {
      const caretI = text.indexOf("^", i);
      if (caretI === -1) break;

      if (caretI !== i) {
        children.push({
          type: "text",
          value: text.slice(i, caretI),
        });
      }

      var part: string | undefined = undefined;
      if (text[caretI + 1] === "(") {
        const parenI = text.lastIndexOf(")");

        if (parenI !== -1) {
          part = text.slice(caretI + 2, parenI);
          i = parenI + 1;
        }
      }

      if (part === undefined) {
        const spaceI = text.indexOf(" ", caretI);
        const spaceIndex = spaceI === -1 ? undefined : spaceI + 1;

        part = text.slice(caretI + 1, spaceIndex);
        i = spaceIndex ?? text.length;
      }

      children.push({
        type: "sup",
        children: parsePart(
          part,
          line,
          column === undefined ? undefined : column + caretI
        ),
        data: { hName: "sup" },
      });
    }

    if (i !== text.length) {
      children.push({
        type: "text",
        value: text.slice(i),
      });
    }

    return children;
  };

  visit(tree, "text", visitor);
};

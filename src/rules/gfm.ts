import fromMarkdown from "mdast-util-gfm/from-markdown";
import strikethrough from "micromark-extension-gfm-strikethrough";
import table from "micromark-extension-gfm-table";
import { SyntaxExtension } from "micromark/dist/shared-types";
import { Plugin } from "unified";

interface Data {
  [key: string]: SyntaxExtension[];
}

export default <Plugin>function () {
  const data = this.data() as Data;
  function add(field: string, ...values: SyntaxExtension[]) {
    if (data[field]) {
      data[field].push(...values);
    } else {
      data[field] = values;
    }
  }

  add("micromarkExtensions", table, strikethrough());
  add("fromMarkdownExtensions", fromMarkdown);
};

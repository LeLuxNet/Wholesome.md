import fromMarkdown from "mdast-util-gfm/from-markdown";
import strikethrough from "micromark-extension-gfm-strikethrough";
import table from "micromark-extension-gfm-table";
import { Plugin } from "unified";

export default <Plugin>function () {
  const data = this.data();
  function add(field: string, value: any) {
    if (data[field]) {
      (data[field] as any[]).push(value);
    } else {
      data[field] = [value];
    }
  }

  add("micromarkExtensions", table);
  add("micromarkExtensions", strikethrough());

  add("fromMarkdownExtensions", fromMarkdown);
};

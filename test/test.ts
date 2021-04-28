import { readFile, writeFile } from "fs/promises";
import { join } from "path";
import html from "rehype-stringify";
import remark from "remark";
import remark2rehype from "remark-rehype";
import wholesome from "../src";

const u = remark()
  .use(wholesome, { hideSpoiler: true })
  .use(remark2rehype)
  .use(html);

const p = (text: string) =>
  new Promise<string>((resolve, reject) =>
    u.process(text, (err: Error | null, file: any) => {
      if (err !== null) return reject(err);
      resolve(file.toString());
    })
  );

it("should convert", async () => {
  const input = await readFile(join(__dirname, "input.md"), "utf-8");

  const output = await p(input);
  await writeFile(join(__dirname, "output.html"), output);
});

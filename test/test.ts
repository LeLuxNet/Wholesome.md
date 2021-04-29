import { readdirSync } from "fs";
import { readFile } from "fs/promises";
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

readdirSync(join(__dirname, "files")).forEach((f) => {
  it(`should support ${f}`, async () => {
    const path = join(__dirname, "files", f);

    const input = await readFile(join(path, "in.md"), "utf-8");
    const output = await readFile(join(path, "out.html"), "utf-8");

    const outputExp = await p(input);

    // await writeFile(join(path, "out2.html"), outputExp);
    // await unlink(join(path, "out2.html")).catch(() => {});

    expect(outputExp).toBe(output);
  });
});

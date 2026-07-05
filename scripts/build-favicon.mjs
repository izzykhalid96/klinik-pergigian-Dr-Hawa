import sharp from "sharp";
import pngToIco from "png-to-ico";
import { writeFileSync, readFileSync, renameSync } from "fs";

// Rasterize the brand favicon.svg (pink bg + white tooth + light blue crescent).
const svg = readFileSync("public/favicon.svg");

const sizes = [16, 32, 48, 180];
for (const size of sizes) {
  await sharp(svg).resize(size, size).png().toFile(`public/favicon-${size}.png`);
}

const icoBuf = await pngToIco(["public/favicon-16.png", "public/favicon-32.png", "public/favicon-48.png"]);
writeFileSync("public/favicon.ico", icoBuf);

renameSync("public/favicon-180.png", "public/apple-touch-icon.png");

console.log("favicon.ico + apple-touch-icon.png built");

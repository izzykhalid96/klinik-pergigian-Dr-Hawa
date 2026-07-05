import sharp from "sharp";
import pngToIco from "png-to-ico";
import { writeFileSync } from "fs";

// Favicon set built from the clinic's real logo (src/assets/logo.jpg),
// circle-masked so the tab icon shows the round badge, not white corners.
const SRC = "src/assets/logo.jpg";

const circleMask = (size) =>
  Buffer.from(
    `<svg width="${size}" height="${size}"><circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="#fff"/></svg>`
  );

async function roundPng(size) {
  return sharp(SRC)
    .resize(size, size)
    .composite([{ input: circleMask(size), blend: "dest-in" }])
    .png()
    .toBuffer();
}

for (const size of [16, 32, 48]) {
  writeFileSync(`public/favicon-${size}.png`, await roundPng(size));
}

const icoBuf = await pngToIco(["public/favicon-16.png", "public/favicon-32.png", "public/favicon-48.png"]);
writeFileSync("public/favicon.ico", icoBuf);

// apple-touch-icon: opaque square, logo already sits on its white badge
await sharp(SRC).resize(180, 180).png().toFile("public/apple-touch-icon.png");

// favicon.svg: round logo embedded as base64 so SVG-preferring browsers get the real mark
const png256 = await roundPng(256);
const svg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="256" height="256" viewBox="0 0 256 256"><image width="256" height="256" xlink:href="data:image/png;base64,${png256.toString("base64")}"/></svg>`;
writeFileSync("public/favicon.svg", svg);

console.log("favicon.ico + favicon.svg + apple-touch-icon.png built from logo.jpg");

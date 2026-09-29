import sharp from "sharp";
const svg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg"><rect width="1200" height="630" fill="#0b0b0a"/><path d="M60 80H1140M60 548H1140" stroke="#45463b"/><g fill="#f0eee7" font-family="Arial, sans-serif"><text x="60" y="48" font-size="15" letter-spacing="2">CREATIVE DEVELOPER</text><text x="1140" y="48" text-anchor="end" font-size="15">DESIGN + CODE</text><text x="600" y="493" text-anchor="middle" font-size="27" letter-spacing="1">IDEIAS QUE GANHAM PRESENÇA.</text><text x="60" y="590" font-size="14" letter-spacing="1">DESIGN COM INTENÇÃO. CÓDIGO COM PRECISÃO.</text><text x="1140" y="590" text-anchor="end" font-size="15">gabrielmisao.com.br</text></g></svg>`;
const logo = await sharp("src/assets/brand/logo-principal.png")
  .resize({ width: 1080, withoutEnlargement: true })
  .png()
  .toBuffer();
await sharp(Buffer.from(svg))
  .composite([{ input: logo, left: 60, top: 94, blend: "lighten" }])
  .png()
  .toFile("public/social-preview.png");

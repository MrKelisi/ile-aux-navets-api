const skin_colors = require("../data/colors/skin.js");
const hair_colors = require("../data/colors/hair.js");
const eyes_colors = require("../data/colors/eyes.js");
const face        = require("../data/face.js");
const noses       = require("../data/noses.js");
const mouths      = require("../data/mouths.js");
const hairs       = require("../data/hairs.js");
const eyes        = require("../data/eyes.js");

function inRange(x, min, max) {
  return x == parseInt(x) && x >= min && x <= max;
}

exports.generateSVG = (params) => {

  if (! (inRange(params.skin_color, 1, 8) && inRange(params.hair, 1, 30)
    && inRange(params.hair_color, 1, 16) && inRange(params.eyes, 1, 26)
    && inRange(params.eyes_color, 1, 6) && inRange(params.nose, 1, 3)
    && inRange(params.mouth, 1, 4)
  )) {
    return null;
  }

  let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256">\n`;

  // Face
  svg += `<g fill="${skin_colors[params.skin_color]}">\n`;
  svg += face + '\n';
  svg += `</g>\n`;

  // Mouth
  svg += `<g stroke="#765136" stroke-width="3.5" fill="none">\n`;
  svg += mouths[params.mouth] + '\n';
  svg += `</g>\n`;

  // Nose
  svg += `<g fill="#F1692F">\n`;
  svg += noses[params.nose] + '\n';
  svg += `</g>\n`;

  // Eyes
  svg += `<g fill="${eyes_colors[params.eyes_color]}">\n`;
  svg += eyes[params.eyes] + '\n';
  svg += `</g>\n`;

  // Hair
  svg += `<g fill="${hair_colors[params.hair_color]}" transform="translate(0,256) scale(0.1,-0.1)">\n`;
  svg += hairs[params.hair] + '\n';
  svg += `</g>\n`;

  svg += `</svg>`;
  return svg;
};

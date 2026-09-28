const fs = require("fs");
const js = fs.readFileSync("assets/js/india-site.js", "utf8");

// 1) classes my app emits
const mine = new Set();
const re = /class="([^"]+)"/g;
let m;
while ((m = re.exec(js))) {
  m[1].split(/\s+/).forEach(function (c) {
    if (c && !/[+'"]/.test(c)) mine.add(c);
  });
}
console.log("classes emitted by app:", mine.size);

const files = [
  "assets/css/main.css",
  "assets/css/bootstrap.min.css",
  "assets/css/swiper-bundle.min.css",
  "assets/css/aos.css",
  "assets/css/animated-radial-progress.css",
  "assets/css/magnific-popup.css",
];

const mycss = fs.readFileSync("assets/css/india-site.css", "utf8");
const myDefined = new Set();
let mm;
const re2 = /\.([A-Za-z0-9_-]+)/g;
while ((mm = re2.exec(mycss))) myDefined.add(mm[1]);

const props = ["color", "background", "background-color", "opacity", "visibility", "text-shadow", "font-size", "font-family"];
const report = {};

for (const f of files) {
  if (!fs.existsSync(f)) continue;
  const css = fs.readFileSync(f, "utf8");
  const blocks = css.match(/[^{}]+\{[^{}]*\}/g) || [];
  for (const b of blocks) {
    const sel = b.slice(0, b.indexOf("{"));
    const body = b.slice(b.indexOf("{") + 1);
    for (const c of mine) {
      const cre = new RegExp("\\." + c + "(?![A-Za-z0-9_-])");
      if (!cre.test(sel)) continue;
      const hits = props.filter(function (p) {
        return new RegExp("(^|[;\\s{])" + p + "\\s*:").test(body);
      });
      if (!hits.length) continue;
      (report[c] = report[c] || []).push({
        file: f.replace("assets/css/", ""),
        sel: sel.trim().replace(/\s+/g, " ").slice(0, 80),
        hits: hits,
      });
    }
  }
}

const keys = Object.keys(report).sort();
console.log("colliding classes:", keys.length);
for (const k of keys) {
  console.log("\n== ." + k + (myDefined.has(k) ? "   (styled by me too)" : "   *** NOT styled by me -> leak risk"));
  report[k].slice(0, 3).forEach(function (r) {
    console.log("     [" + r.file + "] " + r.sel + "  -> " + r.hits.join(","));
  });
}

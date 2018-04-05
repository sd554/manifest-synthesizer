var fs = require('fs');
var manifest = []
fs.readdirSync("data/").forEach(file => {
  if (file!="manifest.json" && file.substring(file.length-5,file.length)==".json") {
    manifest.push(file);
  }
});
fs.writeFileSync("manifest.json",JSON.stringify(manifest));

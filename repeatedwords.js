const fs = require('fs');
const chalk = require('chalk');

const ARGV = process.argv.slice(2);
for (let file of ARGV) {
  let data = fs.readFileSync(file, {encoding: 'utf8'});
  let count = 0;
  let highlight = data.replace(/\b([a-z]+)((\s|<[^>]+>)+\1)+\b/ig, chalk.blue("$&"));
  let h = highlight.replace(/^|\n(?!$)/g, (x) => { 
      ++count; 
      return `\n${file}(${count}): `; 
  });
  console.log(h);
}
 

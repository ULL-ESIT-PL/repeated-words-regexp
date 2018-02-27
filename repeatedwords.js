const fs = require('fs');
const XRegExp = require('xregexp');
const chalk = require('chalk');
const xreg = XRegExp(`
          \\b                      # frontera de palabra
          ([a-z]+)                 # palabra
          (
            (\\s|<[^>]+>)+         # blancos o HTML tags
            \\1                    # la palabra primera de nuevo
          )+
          \\b                      # frontera de palabra
      `, 
      'xgi'   // opciones: espacios global ignore-case
);
const ARGV = process.argv.slice(2);
for (let file of ARGV) {
  let data = fs.readFileSync(file, {encoding: 'utf8'});
  let count = 0;
  let highlight = data.replace(xreg, chalk.underline("$&"));
  let h = highlight.replace(
    XRegExp(`
      ^           # o bien es el comienzo
      |
      \\n         # o bien es un retorno de carro
      (?!$)       # que no es el último
    `, 'xg'),   // ignorar espacios, global
    (x) => { 
      ++count; 
      return `\n${chalk.bold(file)}(${count}): `; 
  });
  console.log(h);
}

const fs = require('fs');
const XRegExp = require('xregexp');
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
const BLUE = '\033[34m'; // \033 begins the escape sequence
const DEFAULT = '\033[39m';
const ARGV = process.argv.slice(2);
for (let file of ARGV) {
  let data = fs.readFileSync(file, {encoding: 'utf8'});
  let count = 0; 
  let highlight = data.replace(xreg, BLUE+'$&'+DEFAULT);
  let m;
  let r = /.+/g;
  while((m = r.exec(highlight))) {
    console.log(file+": "+m[0]);
    //console.log(r.lastIndex);
  }
  let h = highlight.replace(
    XRegExp(`
      ^           # o bien es el comienzo
      |
      \\n         # o bien es un retorno de carro
      (?!$)       # que no es el último
    `, 'xg'),   // ignorar espacios, global
    (x) => { 
      ++count; 
      return `\n${file}(${count}): `; 
  });
  console.log(h);
}

# repeated-words-regexp

* [Descripción del problema y solución en Perl](http://nereida.deioc.ull.es/~pl/perlexamples/node31.html)
* [Vídeo del profesor](https://youtu.be/GfLkvLM7pA8) Solución en JS
* [Repo en GitHub](https://github.com/ULL-ESIT-PL/oop-strategy-pattern-lying-out-a-table)

### JavaScript - ANSI Escape Codes

ANSI Escape Codes are special characters which can be used to control formatting, colors or other output preferences in a text terminal. Escape Codes are non-printing code and will not appear in the output directly.

- \033 begins the escape sequence
- [ indicates the color
- 33 is the foreground color for yellow
- m indicates the end of the setting

Note: \033[39m is used set the color back to the terminal defult

```JavaScript
console.log('\033[33m Hello World \033[39m');
```

This will give a nice yellow color Hello World.

The complete table of ANSI Escape Codes is available at http://en.wikipedia.org/wiki/ANSI_escape_code

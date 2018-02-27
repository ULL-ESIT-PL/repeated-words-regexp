# repeated-words-regexp

* [Descripción del problema y solución en Perl](http://nereida.deioc.ull.es/~pl/perlexamples/node31.html)
* [Vídeo del profesor](https://youtu.be/GfLkvLM7pA8) Solución en JS
* [Repo en GitHub](https://github.com/ULL-ESIT-PL/oop-strategy-pattern-lying-out-a-table)
* [Como usar xregexp en JavaScript](https://github.com/ULL-ESIT-GRADOII-PL/xregexp-example) GitHub repo en ULL-ESIT-GRADOII-PL

### JavaScript - ANSI Escape Codes

ANSI sequences were introduced in the 1970s to replace vendor-specific
sequences and became widespread in the computer equipment market
by the early 1980s. 

They were used by the [nascent bulletin board systems](https://es.wikipedia.org/wiki/Bulletin_Board_System)
 to offer improved displays compared to earlier systems
lacking cursor movement, a primary reason they became a standard
adopted by all manufacturers.

See the video [Connect: A Look At Bulletin Board Systems](https://youtu.be/ESaTREAAzww)

Certain sequences of bytes, most starting with `Esc` and `[`, are embedded into the text, 
which the terminal looks for and interprets as commands, not as character codes.

- `\033` begins the escape sequence
- `[` indicates the color
- `33` is the foreground color for yellow
- `m` indicates the end of the setting

Note: \033[39m is used set the color back to the terminal defult

```JavaScript
console.log('\033[33m Hello World \033[39m');
```

This will give a nice yellow color Hello World.

The complete table of ANSI Escape Codes is available at http://en.wikipedia.org/wiki/ANSI_escape_code

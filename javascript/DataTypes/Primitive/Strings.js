// Strings
// A string (or a text string) is a series of characters like "John Doe".
// Strings are written with quotes. You can use single or double quotes:

let single = 'single-quoted';

let double = "double-quoted";

let backticks = `backticks`;

// Backticks are “extended functionality” quotes.
// They allow us to embed variables and expressions into a string by wrapping them in ${…}, for example:
function sum(a, b) {
     return a + b;
}

console.log(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.

let guestList = `Guests :
     * John
     * Pete
     * Mary
`

console.log(guestList); // Guests : * John * Pete * Mary
/*
Character	Description
\n	New line
\r	In Windows text files a combination of two characters \r\n represents a new break, while on non-Windows OS it’s just \n. That’s for historical reasons, most Windows software also understands \n.
\', \", \`	Quotes
\\	Backslash
\t	Tab
\b, \f, \v	Backspace, Form Feed, Vertical Tab – mentioned for completeness, coming from old times, not used nowadays (you can forget them right now).
 */

// Strings in JavaScript are encoded using UTF-16. UTF-16 code units are 16-bit unsigned integers.
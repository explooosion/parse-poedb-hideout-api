const fs = require('fs');
const { JSDOM } = require("jsdom");

const file = fs.readFileSync('./Hideouts.json', 'utf-8');
const { data } = JSON.parse(file.toString());

const HIDEOUT = data.map(d => {

    const dom = new JSDOM(d);
    const Icon = dom.window.document.querySelector('img').getAttribute('src');
    const CName = dom.window.document.querySelector('a').textContent
        .replace(/\[.*?\]/g, '')
        .replace(/\s+/g, '');
    const Name = dom.window.document.querySelector('a').getAttribute('href')
        .replace('area.php?n=', '')
        .replace(/\+/g, ' ')
        .replace('%27', "'")
        .replace('/cn/', '')
        .replace('/tw/', '')
    // TODO: replace other locale

    return { CName, Name, Icon };
});

// https://stackoverflow.com/questions/54207701/write-json-content-in-json-format-to-a-new-file-in-node-js
const writeFile = `
{ 
    "data": ${JSON.stringify(HIDEOUT, null, ' ').replace(/^ +/gm, '').replace(/: "(?:[^"]+|\\")*",?$/gm, ' $&')}
}
`

fs.writeFileSync('HideoutsParse.json', writeFile);
console.log('Success');
const fs = require('fs');
const { JSDOM } = require("jsdom");

const file = fs.readFileSync('./Hideouts.json', 'utf-8');
const { data } = JSON.parse(file.toString());

const HIDEOUT = data.map(d => {
    const dom = new JSDOM(d);
    const Icon = dom.window.document.querySelector('img').getAttribute('src');
    const CName = dom.window.document.querySelector('a').textContent.replace(/\[.*?\]/g, '').replace(/\s+/g, '');
    const Name = dom.window.document.querySelector('a').getAttribute('href').replace('area.php?n=', '').replace(/\+/g, ' ').replace('%27', "'");
    return { CName, Name, Icon };
});

const writeFile = `
{ 
    "data": ${JSON.stringify(HIDEOUT)}
}
`
// console.log(writeFile);

fs.writeFileSync('HideoutsParse.json', writeFile);
console.log('Success');
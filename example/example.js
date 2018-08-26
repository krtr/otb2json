const otb2json = require('../index');
const fs = require('fs');

const file = otb2json.read('./data/items.otb');

fs.writeFileSync('server-client-ids.json', JSON.stringify(file.children.map(data => [data.sid, data.cid]), null, 3));


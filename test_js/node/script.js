// const c = require('./func');
// console.log(c.func.a(10));
// console.log(c.func.b(10));

// const os = require('os');

// console.log(os.version());

const fs = require('fs');
let users = [{
    'name': 'Иван',
    'id': 10
}];

fs.writeFile('test.json', JSON.stringify(users), err => {
    if (err) {
        console.log(err);
    }
});

fs.readFile('test.json', 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        let users = JSON.parse(data);
        let user = '{"name": "Петр", "id":15}'
        users.push(JSON.parse(user));
        fs.writeFile('test.json', JSON.stringify(users), err => {
            if (err) {
                console.log(err);
            }
        });
    }
});
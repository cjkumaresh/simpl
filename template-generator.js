const glob = require('glob');
const fs = require('fs');

glob('./src/**/*template.html', function(er, files) {
    console.log(files);

    for (const file of files) {
        fs.readFile(file, 'utf8', (err, data) => {
            let content =
                'export function view(data) { return `' + data + '`};';
            fs.writeFile(file.split('.html')[0] + '.js', content, err => {
                if (err) {
                    return console.log(err);
                }
            });
        });
    }
});

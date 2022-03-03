const http = require('http')
const fs = require('fs')

function panggilCSS(req,res) {
    if (req.url == '/style.css') {
        res.writeHead(200, {
            'Content-Type' : 'text/css'
        });
        const fileContents = fs.readFileSync('./style.css', {encoding : 'utf8'});
        res.write(fileContents);
        res.end();
    }
}
const server = http.createServer((req, res) => {
    let dataResponse,
        url

    res.setHeader("Content-Type", "text/html")

    panggilCSS(req, res);
    url = req.url;
    console.log(url)

    switch (url) {
        case '/about':

            dataResponse = {
                data: fs.readFile('about.html', (err, data) => {
                    if (err) {
                        throw err
                    } else {
                        res.write(data)
                    }

                })
            }
            break;

        case '/form':
            dataResponse = {
                data: fs.readFile('./form.html', (err, data) => {
                    if (err) {
                        throw err
                    } else {
                        res.write(data)

                    }
                })
            }
            break;

        case '/discus':
            dataResponse = {
                data: fs.readFile('./discus.html', (err, data) => {
                    if (err) {
                        throw err
                    } else {
                        res.write(data)
                    }

                })
            }
            break;
        case '/contact':
            fs.readFile('./contact.html', (err, data) => {
                if (err) {
                    throw err
                } else {
                    res.write(data)
                }

            })
            break;

        default:
            fs.readFile('./index.html', (err, data) => {
                if (err) {
                    throw err
                } else {
                    res.write(data)
                }
                res.end
            })
            break;
    }



})

server.listen(3000)
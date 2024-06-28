const http = require('http')
const names = ['Kwasi','Kojo','Kwabena','Kwame','Kokovi']

const fruits = [
{
    id:1,
    name: 'banana',
    color: 'yellow',
    price: 10,
    weight: '1kg'

},
{
    id:2,
    name: 'pawpaw',
    color: 'green',
    price:7,
    weight: '4kg'

},
{
    id:3,
    name: 'grapes',
    color: 'yellow',
    price:11,
    weight: '1kg'

},
{
    id:4,
    name: 'peach',
    color: 'yellow',
    price:15,
    weight: '1kg'

},
{
    id:5,
    name: 'blackberry',
    color: 'yellow',
    price:12,
    weight: '1kg'

}
]
http.createServer(function(req, res){
    res.end('Psalm 23')
    console.log(fruits)
}).listen(8080)
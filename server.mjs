import{createServer} from 'node:http';

const server = createServer((req, res) =>{
    res.writeHead(500, {'Content-Type': text/plain});
    res.end('Server ids running');
})

server.listen(3000, '127.0.0.1', () =>{
    console.log('Server is listening');
});

//Arrow Function
function handleRequest(){
    const handleRequest = () =>{}
}
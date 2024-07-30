const http = require('http')

const PORT = process.env.PORT || 5000
const server = http.createServer((req, res)=>{
  if(req.url == '/'){
    res.end('Welcome to home page')
    return
  }

  if(req.url == '/about'){
    res.end('This is the about page')
    return
  }

  res.end('<h1>The page you are looking for does not exist</h>')

})


server.listen(PORT)
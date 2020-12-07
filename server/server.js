import {} from 'dotenv/config'
import express from 'express'
import http from 'http'
import ws from 'socket.io'
import path from 'path'

const app = express()
const server = http.createServer(app)
const io = ws(server)

app.use(express.static(path.resolve(__dirname, '../client')))

io.on('connection', (socket) => {
  console.log('Somebody connected!')
  // Write your code here
})

const serverPort = process.env.PORT || 3000
server.listen(serverPort, () => {
  console.log('Server is listening on port ' + serverPort)
})

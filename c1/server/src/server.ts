import { Server } from 'ws'
import config from './config'
import { randomStocktimer, randomStock } from './utils'

const wss = new Server({ port: config.server.wsPort }, () => {
    console.log(`Server started on port ${config.server.wsPort}`)
})

wss.on('connection', (ws) => {
    console.log('Client connected')
    if(ws.readyState === 1) {
        setInterval(() => {
            randomStocktimer()
            ws.send(JSON.stringify(randomStock))
        }, 1000)
    }
    ws.on('message', (message) => {
        console.log(message)
    })
    ws.on('close', () => {
        console.log('Client disconnected')
    })
})

export default wss

import React, { useState, useEffect } from 'react'
import Header from './components/UI/Header'
import Container from './components/UI/Container'
import StockContainer from './components/UI/Stocks/StockContainer'
import StockHeader from './components/UI/Stocks/StockHeader'
import SocketError from './components/UI/SocketError'

const initialData: Record<string, number> = {
  AAPL: 0,
  MSFT: 0,
  AMZN: 0,
  GOOG: 0,
  YHOO: 0,
}

const dataKeysInitial = Object.keys(initialData)

const ws = new WebSocket('ws://localhost:8181')

enum SocketState {
  OPEN = 'open',
  CLOSE = 'close'
}

const wsSupport = window.WebSocket

function App() {
  const [data, setData] = useState(initialData)
  const [dataKeys, setDataKeys] = useState(dataKeysInitial)
  const [socketState, setSocketState] = useState<SocketState>(SocketState.CLOSE)

  ws.onopen = () => {
    console.log('Connection to server opened')
    setSocketState(SocketState.OPEN)
  }
  
  ws.onerror = () =>
    setSocketState(SocketState.CLOSE)

  ws.onclose = () => 
    setSocketState(SocketState.CLOSE)
  
  const sendMessage = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault()
    // ws.send(message.toString())
  }
  useEffect(() => {
    ws.onmessage = (e) => {
      setData((prevState) => ({
        ...prevState,
        ...JSON.parse(e.data)
      }))
      setDataKeys([
        ...Object.keys(data)
      ])
    }
  }, [data])

  if(!wsSupport) {
    return <SocketError code={204}>Your browser doens't support WebSocket</SocketError>
  }
  switch(socketState) {
    case SocketState.CLOSE:
      return <SocketError code={500}>Error Connection</SocketError>
    case SocketState.OPEN:
      return (
        <div>
          <Header headerValue='Stock Chart over WebSocket' />
          <Container>
            <StockHeader firstColumn='Symbol' secondColumn='Price' />
            {dataKeys.map((key: string) => {
              return <StockContainer key={key} name={key} value={data[key]} />
            })}
          </Container>
        </div>
      )
    default: return <SocketError code={500}>Error Connection</SocketError>
  }
}

export default App

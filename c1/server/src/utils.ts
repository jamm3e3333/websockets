export const randomStock: Record<string, number> = {
    'AAPL': 0,
    'MSFT': 0,
    'AMZN': 0,
    'GOOG': 0,
    'YHOO': 0,
  }

const randomInterval = (min: number, max: number) =>
    Math.floor(Math.random()*(max-min+1)+min)

const randomStockChange = () => {
    for(const stockKey in randomStock) {
        randomStock[stockKey] = randomInterval(-150, 600)
    }
}

export const randomStocktimer = () => 
    setTimeout(randomStockChange, randomInterval(500, 2500))
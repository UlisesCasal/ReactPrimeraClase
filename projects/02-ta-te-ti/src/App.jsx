import './App.css'
const TURNS = {
  X: 'x',
  O: '0'
}

function App() {
  
  
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)

  return (
    <main className='board'>
      <h1>Ta te ti</h1>
      <section className='game'>
        {
          board.map((_, index) => {
            return (
              <Square
                key = { index }
                index = { index }
              >
                {board[index]}
              </Square>
            )
          })
        }
      </section> 

      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
    </main>
    
  )
}

export default App

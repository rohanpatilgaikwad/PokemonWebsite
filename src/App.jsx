import ContextProvider from "./Components/Context/Context"
import { Pokemon } from "./Components/Pokemon"


function App() {


  return (
    <>
    <ContextProvider>

    <Pokemon/>
    </ContextProvider>
    
    </>
  )
}

export default App

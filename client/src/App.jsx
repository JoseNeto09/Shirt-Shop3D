import Canvas from './Canvas';
import Customizer from './pages/Customizer';
import Home from './pages/Home';


function App() {
  return (
    <main className='app transitions-all ease-in'>
        <Home />
        <Canvas />
        <Customizer />
    </main>
  )
}

export default App

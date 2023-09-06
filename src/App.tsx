import './App.css'
import { PropertiesDisplay } from './components/properties-display'

function App() {
  return (
    <>
      <h1 className=' font-mono '>Welcome to Marvelous Mansions</h1>
      <h2 className='font-mono'>A one stop shop to your dream property!</h2>
      <h3>Current property listings:</h3>
      <PropertiesDisplay />
    </>
  )
}

export default App

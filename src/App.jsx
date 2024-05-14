import './App.css'
import './index.css'
import Players from './features/Players'
function App() {

  return (
    <>
    <div className='App'>
      <div className='intro'>
        <h1>Welcome to the Puppy Bowl Event</h1>
        <h5>Come and join us for a fun-filled day of adorable puppy football!</h5>
        <h5>Get ready to meet the talented pups competing in this year's Puppy Bowl...and here they are:</h5>
      </div>
    <Players/>
    </div>
    </>
  )
}

export default App

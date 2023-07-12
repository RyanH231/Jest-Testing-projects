import Greeting from './greeting';
import './App.css';

const text = "Hello from the greeting card!";

function App() {
  return (
    <div className="App">
      <Greeting prop={text}/>
    </div>
  );
}

export default App;

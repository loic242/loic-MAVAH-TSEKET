
import './App.css';

function App(props) {
  return (
    <div className="App">
      Hello my first react
      <p>The current date is: {props.date}</p>
    </div>
  );
}

export default App;

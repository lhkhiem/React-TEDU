import './App.css';
import Person from './components/Person';

function App() {
  return (
    <>
      <div className="App">
        <h1>Ứng dụng đầu tiên từ ReactJs</h1>
        <Person name="Khiêm 1" age="11"/>
        <br></br>
        <Person name="Khiêm 2" age="12"/>
        <br></br>
        <Person name="Khiêm 3" age="13">Tôi là children</Person>
      </div>
    </>
  );
}

export default App;

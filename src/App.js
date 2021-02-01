import './App.css';
import Person from './components/Person';

function App() {
  const changeameHandler=(e)=>{
    console.log(e);
  }
  return (
    <>
      <div className="App">
        <h1>Ứng dụng đầu tiên từ ReactJs</h1>
        <button onClick={(e)=>changeameHandler(e)}>Change name</button>
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

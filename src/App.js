import './App.css';
import Person from './components/Person';

function App() {
  return (
    <>
      <div className="App">
        <h1>Ứng dụng đầu tiên từ ReactJs</h1>
        <Person/>
        <Person>Khong co gi</Person>
      </div>
    </>
  );
}

export default App;

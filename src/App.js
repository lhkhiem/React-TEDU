import './App.css';
import Person from './components/Person';
import Example from './components/Example';
import { useState } from 'react';

// function App() {
//   const changeameHandler=(e)=>{
//     console.log(e);
//   }
//   return (
//     <>
//       <div className="App">
//         <h1>Ứng dụng đầu tiên từ ReactJs</h1>
//         <button onClick={(e)=>changeameHandler(e)}>Change name</button>
//         <Person name="Khiêm 1" age="11"/>
//         <br></br>
//         <Person name="Khiêm 2" age="12"/>
//         <br></br>
//         <Person name="Khiêm 3" age="13">Tôi là children</Person>
//       </div>
//     </>
//   );
// }
function App() {
  const [persons, setPersons] = useState([
    { name: "Peter", age: "1" },
    { name: "Mark", age: "2" },
    { name: "Napoli", age: "3" }
  ]);
  const changeameHandler = (e) => {
    setPersons([
      { name: "Mr.Khiem", age: "31" },
      { name: "Mr.Ly", age: "28" },
      { name: "Mr.Truong", age: "27" }
    ])
  }
  const switchNameHandler = (event) => {
    console.log(event);
    setPersons([
      { name: event.target.value, age: "31" },
      { name: "Mr.Ly", age: "28" },
      { name: "Mr.Truong", age: "27" }
    ])
  }
  return (
    <>
      <div className="App">
        <h1>Change Person</h1>
        <button onClick={() => changeameHandler()}>Change</button>
        <Person click={() => changeameHandler()} change={(event)=>switchNameHandler(event)} name={persons[0].name} age={persons[0].age}></Person>
        <Person click={() => changeameHandler()} name={persons[1].name} age={persons[1].age}></Person>
        <Person click={() => changeameHandler()} name={persons[2].name} age={persons[2].age}></Person>
      </div>

      <div className="App">
        <h1>Change count</h1>
        <Example></Example>
      </div>
    </>
  );
}
export default App;

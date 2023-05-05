import logo from './logo.svg';
import './css/style.css';
import './App.css';
import MyForm from './components/MyForm';
import { useEffect, useState } from 'react';

function StudentCard(props){
  return(
    <figure key={props.id}>
      <img src={props.avatar}/>
      <figcaption>
        <h3>
          {props.fName} {props.lName}
        </h3>
        <p>
          {props.email}
        </p>
      </figcaption>
    </figure>
  );
}

function App() {
  const [studentList, setList] = useState([]);

  useEffect(
    function(){
      fetch("http://localhost:5000/students-api")
      .then((response) => response.json())
      .then(setList)
    },
    []
  );
  
  return (
    <div className="App">
      <h1>Hello</h1>
      <section>
        <MyForm />
      </section>
      {/* <section>
        {
          studentList.map(
            (student) => (
              <StudentCard
                avatar={student.avatar}
                fName={student.firstName}
                lName={student.lastName}
                email={student.email}
              />
            )
          )
        }
      </section> */}
    </div>
  );
}

export default App;

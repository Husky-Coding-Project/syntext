import { useState, useEffect} from "react" 
import x from './services/examplecode'

const Display = (props) => {

  return (
    <div>
      {props.lines.map((line, i) => <p>{line}</p>)}
    </div>
  )
} 


const App = () => {
  const [display, setDisplay] = useState([])

  useEffect(() => {
    x.getEx('medium')
      .then(r => {
        setDisplay(r.data)
      })
  }, [])

  return (
    <div>
      <p>we are all done with set up!</p>
      <Display lines={display}/>
    </div>
  );
}

export default App;

/*import React, { useState } from 'react';
import axios from 'axios';

function Form() {
  const [formData, setFormData] = useState({});

  const handleChange = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/jwt', formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="sub" placeholder="Name" onChange={handleChange} />
      <input type="text" name="name" placeholder="Age" onChange={handleChange} />
      <button type="submit">Create JWT</button>
    </form>
  );
}

function App() {
  return (
    <div>
      <h1>Learning JWT!</h1>
      <Form />
    </div>
  );
}

export default App; */
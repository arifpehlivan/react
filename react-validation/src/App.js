import { useState } from 'react';
import './App.css';
import FormInput from './components/FormInput';

const App = () => {
  const [username,setUsername] = useState("")
  console.log(username);
  return (
    <div className="app">
      <form>
        <FormInput placeholder="Username" setUsername={setUsername}/>
        <FormInput placeholder="Full Name"/>
        <FormInput placeholder="Email"/>
        <FormInput placeholder="Password"/>
      </form>
    </div>
  );
}

export default App;

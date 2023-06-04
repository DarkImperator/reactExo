import './App.css'
import { useState } from 'react'
import HelloDisplay from './components/HelloDisplay.jsx';
import HelloInput from './components/HelloInput';

function App() {
  const [firstname, setFirstName] = useState ("Dark Chickend");

  return (<>
      <h1>Code qui peut</h1>
      <HelloInput setFirstName={setFirstName} />
      <HelloDisplay firstname={firstname} />
    </>);
}

export default App;

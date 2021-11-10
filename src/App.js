import { useEffect } from 'react';
import './App.css';
import { getWord } from './services';


function App() {
  useEffect(()=> {
    getWord()
  }, [])

  return (
    <div className="space-y-4 ">
      <div className="block">dfd</div>
    </div>
  );
}

export default App;

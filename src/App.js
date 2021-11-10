import { useEffect, useState } from 'react';
import './App.css';
import { dict, getWord } from './services';


function App() {

  const [word, setWord] = useState({})
  const [phonetic, setPhonetic] = useState("")
  const [meaning, setMeaning] = useState({})

  useEffect(() => {
    setWord(getWord())
  }, [])

  useEffect(() => {
    if (word.word_string)
      dict(word.word_string).then(res => {
        setMeaning(res?.data[0]?.meanings[0])
        setPhonetic(res?.data[0].phonetic)
      })
  }, [word])

  const fetchWord = () => {
    setWord(getWord())
  }

  return (
    <div className="items-center justify-center flex flex-col">

      <div className="w-full md:w-96 justify-center items-center bg-white shadow-lg rounded-lg flex flex-col mt-20">
        <div className="w-full p-4 justify-start flex flex-col">
          <h4 className="border-b-2 text-3xl" >{word.word_string}</h4>
          <p className="my-4">\{phonetic}\ - <i>{meaning?.partOfSpeech}</i></p>

          <div class="font-sans flex-row items-center justify-center bg-blue-darker w-full">
            {
              meaning?.definitions?.map(def => {
                return (
                  <div href="#" class="block group p-4 border-b">
                    <p class="font-bold text-lg mb-1 text-black">{def.definition}</p>
                    <p class="text-grey-darker mb-2"> <i>eg.</i> {def.example}</p>
                  </div>
                )
              })
            }
          </div>

          <button value="button" className="my-4 px-4 py-2 text-white hover:bg-blue-700 bg-blue-500" onClick={fetchWord}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

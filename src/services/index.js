import words from "../data/words.json"
import axios from "axios"

export const getWord = () => {
  const total_word_count = words.vocab_overview.length
  return words.vocab_overview[getRandomInt(total_word_count)]
}

export const dict = async (word) => {
  try {
    return await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/de/${word}`)
  } catch (error) {
    console.log(error)
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
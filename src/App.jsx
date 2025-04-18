import axios from "axios"
import { useRef, useState } from "react"
import WeatherInfo from "./components/WeatherInfor/WeatherInfo"
import WeatherInfor5Days from "./components/WeatherInfor5Days/WeatherInfor5Days"

export default function App() {
  const [weather, setWeather] = useState()
  const [weather5Days, setWeather5Days] = useState()
  const inputRef = useRef()

  async function searchCity() {
    const city = inputRef.current.value
    const key = "2f40c44e1a2aba6eade82f958f82937b"

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`

    const url5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`

    const apiInfo = await axios.get(url)
    const apiInfo5Days = await axios.get(url5Days)

    setWeather5Days(apiInfo5Days.data)
    setWeather(apiInfo.data)


  }
  return (

    <div className="container">
      <h1>Previsão do Tempo</h1>
      <input ref={inputRef} type="text" placeholder="Digite o nome da cidade" />
      <button onClick={searchCity}>Buscar</button>

      {weather && <WeatherInfo weather={weather} />}
      {weather5Days && <WeatherInfor5Days weather5Days={weather5Days} />}
    </div >

  )
}
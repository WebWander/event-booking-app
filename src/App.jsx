import React from "react"
import Home from "./assets/components/Home"
import SearchBar from "./assets/components/SearchBar"
import "./App.css"





export default function App() {
  return (
    <div className="p-4 sm md lg xl xxl ">
      <Home />
      <div className="flex flex-row pt-10 justify-center">
        <img src="/catering-buffet.jpg" className="w-3/5 pr-10 rounded"/>
        <SearchBar />
      </div>
    </div>
  )
}

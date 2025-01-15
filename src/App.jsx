import React from "react"
import Home from "./assets/components/Home"
import SearchBar from "./assets/components/SearchBar"
import Footer from "./assets/components/Footer"
import "./App.css"





export default function App() {
  return (
    <div className="pt-4 sm md lg xl xxl ">
      <Home />
      <hr />
      <div className="flex flex-row pt-10 justify-center">
        <img src="/catering-buffet.jpg" className="w-1/3 pr-10 rounded"/>
        <SearchBar />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

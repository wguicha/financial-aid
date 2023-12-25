//Funcionalidad
import { Routes, Route } from "react-router-dom";
import './App.css'

//Components
import { Home } from "./Views";

function App() {

  return (
    <div>
      <Routes>
        <Route exact path="/" Component={Home} />
      </Routes>

    </div>
  )
}

export default App

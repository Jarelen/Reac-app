import './App.css'
//import Footer from './components/Footer' borrado en la tercera parte de la clase
//import Header from './components/Header' borrado en la tercera parte de la clase
//import Add from './components/Add' borrado en la tercera parte de la clase
//import Menu from './components/Menu' borrado en la tercera parte de la clase
import Home from './pages/Home'
import Owner from './pages/Owner'
import Navbar from './components/Navbar'
import {Routes, Route} from 'react-router-dom'
function App() {
   return (
      <>
      <Navbar />
      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/owner" element={<Owner/>}/>
      </Routes>
      </>
   /*<div>
      <h1>Hola, este es un archivo reac</h1>
      <Header/>
      <Add/>
      <Menu/>
      <Footer></Footer>
      <router>
         <route path="/" element={<Home></Home>}/>
         <route path="/Owner" element={<Owner/>}/>
      </router>
       </div>); //no pueden existir dos etiquetas hermanas en el mismo return, por eso pusimos el div
} Esto tambien se borró en la tercera parte de la clase*/
);}


export default App


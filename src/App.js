import './App.css';
import Cards from './components/Cards/Cards.jsx';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import characters from  './data.js';
import NavBar from './components/NavBar/NavBar.jsx';
import logo from "./assets/logo.jpg"
function App() {
   function searchHandler(e){
      window.alert("El ID que estoy buscando");
   }
   function closeHandler(){
      window.alert("Emulamos que se cierre la card");
   }

   return (
      <div className="App">
         <img src={logo} className="title"/>
         <br></br>

        <NavBar/>
         {/* <SearchBar onSearch={searchHandler} /> */}
         <Cards characters={characters} onClose={closeHandler} />
      </div>
   );
}

export default App;

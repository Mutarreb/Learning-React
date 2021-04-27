import Logo from './igloo-solid.png'
import logo from './sorrento_by_the_sea_logo.jpg'
import './App.css';
import {Header} from './components/Header'

const NavItems = [
  { "name": "Home", "link": " /home" },
  { "name": "The Apartment", "link": "/apartment" },
  { "name": "Pricing", "link": " /pricing"},
  { "name": "Book", "link": " /book" },
  { "name": "Local Area", "link": " /link"},
  { "name": "Contact", "link": " /contact" },
]
function App() {
  return (
    <div className=" website">
      <Header logo = {Logo} /> 
      <Header logo = {logo} />
      <main className="content "></main>`
      <footer className="fotter"> </footer>

    </div>

  );
}

export default App;

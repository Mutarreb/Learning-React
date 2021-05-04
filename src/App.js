// import Logo from './igloo-solid.png'
import logo from './sorrento_by_the_sea_logo.jpg'
import './App.css';
import {Header} from './components/Header'
import {Switch, Route} from 'react-router-dom'
import {Home} from './components/Home'
import {Apartment} from './components/Apartment'
import {Pricing} from './components/Pricing'
import {Attractions} from './components/Attractions'
import {Contact} from './components/Contact'
import {Book} from './components/Book'

const NavItems = [
  { "name": "Home", "link": "/home" },
  { "name": "The Apartment", "link": "/apartment" },
  { "name": "Pricing", "link": "/pricing"},
  { "name": "Book", "link": "/book" },
  { "name": "Attractions", "link": "/attractions"},
  { "name": "Contact", "link": "/contact" },
]
function App() {
  return (
    <div className=" website">
      {/* <Header logo = {Logo} nav = {NavItems}/>  */}
      <Header logo = {logo} nav = {NavItems}/>
      <main className="content ">
        <Switch>
          <Route path ="/home">
            <Home/>
          </Route>

          <Route path ="/apartment">
            <Apartment/>
          </Route>

          <Route path = "/book">
            <Book/>
          </Route>

          <Route path ="/pricing">
            <Pricing/>
          </Route>

          <Route path ="/contact">
            <Contact/>
          </Route>

          <Route path ="/attractions">
            <Attractions/>
          </Route>

          </Switch>
          </main>`

      <footer className="fotter"> </footer>

    </div>

  );
}

export default App;

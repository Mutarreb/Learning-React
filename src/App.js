import logo from './logo.svg';
import './App.css';
import {Text} from './components/Text'
import {Button} from './components/Button'
import {List} from './components/List'

const items = [
  {"name" : "banana", "colour":" yellow"},
  {"name" : "apple", "colour":" red"},
  {"name" : "grapes", "colour":" green"},
]
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world!
        </p>
        <Text name = "barry"color ="yellow"/>
        <Text name = "larryy" color ="red"/>
        <Text name ="Ahmed" color =" gold" />
        <Button start= {3}/>
        <Button start = {100} />
        <Button />
        <List items_list = {items}/>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

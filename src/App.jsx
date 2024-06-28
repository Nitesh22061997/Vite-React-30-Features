import './App.css'
import APIFetch from './components/APIFetch'
import BgColor from './components/BgColor'
import CountTime from './components/CountTime'
import Counter from './components/Counter'
import Form from './components/Form'
import HamburgerIcon from './components/HamburgerIcon'
import HelloWorld from './components/HelloWorld'
import ImageUploader from './components/ImageUploader'
import List from './components/List'
import LoginForm from './components/LoginForm'
import Pagination from './components/Pagination'
import RandomJoke from './components/RandomJoke'
import Routing from './components/Routing'
import SearchBar from './components/SearchBar'
import SelectColor from './components/SelectColor'
import Theme from './components/Theme'
import ThemeComp from './components/ThemeComp'
import { ThemeProvider } from './components/ThemeContext'
import TodoList from './components/TodoList'
import Toggle from './components/Toggle'
import Weather from './components/Weather'

function App() {

  // const items = ["Ghee", "Gh", "Gheeed", "Snacks", "aloo", "bhindi", "fruit", "item1", "item2", "item3"]
  return (
    <>
      <div>
        {/* <HelloWorld /> */}
        {/* <Counter /> */}
        {/* <Form /> */}
        {/* <List /> */}
        {/* <Toggle /> */}
        {/* <APIFetch /> */}
        {/* <CountTime /> */}
        {/* <TodoList /> */}
        {/* <BgColor /> */}
        {/* <Routing /> */}
        {/* <RandomJoke /> */}
        {/* <ImageUploader /> */}
        {/* <LoginForm /> */}
        {/* <Weather /> */}
        {/* <SearchBar items={items} /> */}
        {/* <Pagination items={items} itemsPerPage={2} /> */}
        {/* <SelectColor /> */}
        {/* <HamburgerIcon /> */}
        <ThemeProvider>
          <div className='App'>
            <Theme />
            <ThemeComp />
          </div>
        </ThemeProvider>
      </div>
    </>
  )
}

export default App

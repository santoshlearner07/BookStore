import './App.css';
import Home from './Pages/home/Home';
import {
  BrowserRouter, Route, Switch
} from 'react-router-dom';
import Book from './components/book/Book';
import Card from './components/card/Card';
import MainPage from './Pages/mainPage/MainPage';
import DisplayBook from './components/displayBook/DisplayBook';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={MainPage} exact />
        <Route path='/homepage' component={Home} />
        <Route path='/displayPage' component={DisplayBook} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

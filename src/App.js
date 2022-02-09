import './App.css';
import Home from './Pages/home/Home';
import {
  BrowserRouter, Route, Switch
} from 'react-router-dom';
import MainPage from './Pages/mainPage/MainPage';
import DisplayBook from './components/displayBook/DisplayBook';
import WishList from './components/wishList/WishList';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={MainPage} exact />
        <Route path='/homepage' component={Home} />
        <Route path='/displayPage' component={DisplayBook} />
        <Route path='/wishlist' component={WishList} />

      </Switch>
    </BrowserRouter>
  );
}

export default App;

import Home from '../Pages/home/Home';
import {
  BrowserRouter, Route, Switch
} from 'react-router-dom';
import MainPage from '../Pages/mainPage/MainPage';
import DisplayBook from '../components/displayBook/DisplayBook';
import WishList from '../components/wishList/WishList';
import Cart from '../components/cart/Cart';
import CustomerDetails from '../components/customerDetails/CustomerDetails';
import OrderDone from '../components/orderDone/OrderDone';


function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={MainPage} exact />
        <Route path='/homepage' component={Home} />
        <Route path='/displayPage' component={DisplayBook} />
        <Route path='/wishlist' component={WishList} />
        <Route path='/cart' component={Cart} />
        <Route path='/customerdetails' component={CustomerDetails} />
        <Route path='/orderdone' component={OrderDone} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;

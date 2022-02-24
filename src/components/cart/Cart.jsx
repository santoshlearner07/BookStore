import React from 'react'
import Header from '../header/Header'
import thedesign from '../../Assests/thedesign.png'
import { useHistory } from "react-router-dom";
import Footer from '../footer/Footer';

import { Button } from '@material-ui/core'
import {
    cartItemQuantity, getCartItemApi, removeCartItemApi, orderDetailsApi
} from '../../services/axioService';
import CustomerDetails from '../customerDetails/CustomerDetails';
import { connect } from 'react-redux';
import { setCartItem } from '../../redux/Action';


import LocationOnTwoToneIcon from '@mui/icons-material/LocationOnTwoTone';
import AddCircleOutlineTwoToneIcon from '@mui/icons-material/AddCircleOutlineTwoTone';
import RemoveCircleOutlineTwoToneIcon from '@mui/icons-material/RemoveCircleOutlineTwoTone';

import '../cart/Cart.scss'

function Cart(props) {

    const [filterArray, setFilterArray] = React.useState([]);
    const [cardIdDetails, setCartIdDetails] = React.useState([]);
    const [openAddress, setOpenAddress] = React.useState(false);
    const [openOrderSummery, setOpenOrderSummery] = React.useState(false);
    const [quantity, setQuantity] = React.useState([filterArray.quantityToBuy]);
    const [showButton, setShowButton] = React.useState(true);

    let history = new useHistory();

    const deleteCartItem = (id) => {
        console.log(id)
        console.log(filterArray)
        let filterCartData = filterArray.filter((cart) => {
            if (id._id === cart._id) {
                setQuantity(cart.quantityToBuy)
                setCartIdDetails(cart._id)
                return cart;
            }
        })
        setFilterArray(filterCartData)
        console.log(quantity)
        console.log("removed")
        let data = {
            "quantityToBuy": quantity - quantity,
        };

        removeCartItemApi(cardIdDetails, data)
            .then((res) => {
                console.log(res)
                console.log(data)
                showCartItem();
                props.dispatch(setCartItem(0));
                console.log("cart item removed")
            }).catch((err) => {
                console.log(err)
            })
    }

    const bookDecrementItem = (id) => {
        console.log(id)
        console.log(filterArray)
        let filterCartData = filterArray.filter((cart) => {
            if (id._id === cart._id) {
                setQuantity(cart.quantityToBuy)
                setCartIdDetails(cart._id)
                return cart;
            }
        })
        setFilterArray(filterCartData)
        console.log(quantity)
        console.log("decre")
        let data = {
            "quantityToBuy": quantity - 1,
        };

        cartItemQuantity(cardIdDetails, data)
            .then((res) => {
                console.log(res)
                console.log(data)
                showCartItem();
                console.log("Show Cart - Item")
            }).catch((err) => {
                console.log(err)
            })
    }

    const bookIncrementItem = (id) => {
        console.log(id)
        console.log(filterArray)
        let filterCartData = filterArray.filter((cart) => {
            if (id._id === cart._id) {
                setQuantity(cart.quantityToBuy)
                setCartIdDetails(cart._id)
                return cart;
            }
        })
        setFilterArray(filterCartData)
        console.log(quantity)
        console.log("incre")
        let data = {
            "quantityToBuy": quantity + 1,
        };

        cartItemQuantity(cardIdDetails, data)
            .then((res) => {
                // console.log(res)
                console.log(data)
                showCartItem();
                console.log("Show Cart + Item")
            }).catch((err) => {
                console.log(err)
            })
    }

    const showCartItem = () => {
        getCartItemApi()
            .then((res) => {
                console.log(res)
                setFilterArray(res.data.result);


            })
            .catch((err) => {
                console.log(err)
            })
    }

    const orderPlaced = () => {
        setOpenAddress(!openAddress)
        setShowButton(false)
    }

    const continueOrder = () => {
        setOpenOrderSummery(true)
    }

    const home = () => {
        history.push('/homepage')
    }


    const checkoutOrder = () => {


        let array_ordered_books = [];

        filterArray.filter(item => item._id !== '6203ba91f5d029000e43ad01').map((element) => {
            let ordered_book = {
                product_id: element._id,
                product_name: element.bookName,
                product_quantity: element.quantityToBuy,
                product_price: element.price,
            };
            return array_ordered_books.push(ordered_book);
        });

        let orderObj = {
            orders: array_ordered_books,
        };
        orderDetailsApi(orderObj)
            .then((response) => {
                console.log(response.data.message, "order items", response.data.result);
                history.push('/orderdone')
            })
            .catch((err) => {
                console.warn(err);
            });
    };


    React.useEffect(() => {
        showCartItem();
    }, []);
    return (
        <div>
            <Header />
            <div className='wholeCart'>
                <div className='homeLine'>
                    <p onClick={home}
                        style={{
                            color: '#9D9D9D',
                            cursor: 'pointer',
                        }}>Home / </p>
                    <p>My cart</p>
                </div>
                <div className='bookDetailsBox'>
                    <div className='firstLine'>
                        <p className='cart'>My cart ({filterArray.length - 1}) </p>
                        <location className='location'>
                            <div className='bridgeLabz'>
                                <LocationOnTwoToneIcon /> BridgeLabz Solutions LLP, No...
                            </div>
                        </location>
                    </div>
                    <div className='cartMap'>
                        {
                            filterArray.filter(item => item.product_id !== null).map((item, index) => (

                                <div className='imageAndDetails' key={index}>
                                    <div>
                                        <img className='theImage' src={thedesign}></img>
                                    </div>
                                    <div className='mainCartBook'>
                                        <div className='cartBookDetails'>
                                            <span className='cartTitle'>
                                                {item.product_id.bookName}
                                            </span> <br></br>
                                            <span className='cartAuthor'>by-
                                                {item.product_id.author}
                                            </span> <br></br>
                                            <span className='cartNewPrice'>
                                                Rs. {item.product_id.discountPrice}
                                            </span><br></br>
                                            <span className='cartOldPrice'>({item.product_id.price})</span> <br></br>
                                        </div>
                                        <div className='buttonFour'>

                                            <Button className='minus' onClick={() => bookDecrementItem(item)}
                                            > <RemoveCircleOutlineTwoToneIcon /> </Button>

                                            <Button> {item.quantityToBuy} </Button>

                                            <Button className='plus' onClick={() => bookIncrementItem(item)}
                                            > <AddCircleOutlineTwoToneIcon /> </Button>
                                            <Button className='remove' onClick={() => deleteCartItem(item)}
                                            > Remove </Button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    {showButton && (
                        <Button className='submit' variant="contained" onClick={orderPlaced} hidden="hidden" >Place Order</Button>
                    )}
                </div>

                <div className='address'>
                    {!openAddress ? (
                        <div className='addressdefauls'>
                            <div className='detailMain'>
                                <div className='details'>
                                    Address Details
                                </div>
                            </div>

                            <div className='order'>
                                <div className='summary'>
                                    Order summary
                                </div>
                            </div>
                        </div>

                    ) : (
                        <CustomerDetails continueOrder={continueOrder} />
                    )}
                </div>
                <div className="OrderDetailContainer2">
                    {!openOrderSummery ? (
                        <h4 className="txt"></h4>
                    ) : (
                        <div className="orderSummeryContainer">
                            <p className="txt">Order Summary </p>
                            {filterArray.filter(item => item.product_id !== null).map((product, index) => (
                                <div className="bookImgAddDetails" key={index}>
                                    <div className="bookImgDiv">
                                        <img className='theImage' src={thedesign}></img>
                                    </div>
                                    <div className="bookDetailsDiv-text">
                                        <b className='bookName'>{product.product_id.bookName} </b>
                                        <p className='author'>by-{product.product_id.author}</p>
                                        <span style={{ width: "50px" }}>
                                            <b className='discountPrice'>Rs. {product.product_id.discountPrice} </b>
                                        </span>
                                        <del style={{ color: "gray" }} className='price'>Rs {product.product_id.price} </del>
                                    </div>
                                </div>
                            ))}
                            <div className="checkout-btn">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={checkoutOrder}
                                >
                                    Checkout
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className='footer'>
                <Footer />
            </div>
        </div>
    )
}

export default connect()(Cart);

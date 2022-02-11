import React from 'react'
import Header from '../header/Header'
import thedesign from '../../Assests/thedesign.png'
import { Button } from '@material-ui/core'
import {
    cartItemQuantity, getCartItemApi, removeCartItemApi
} from '../../services/axioService';
import CustomerDetails from '../customerDetails/CustomerDetails';

import LocationOnTwoToneIcon from '@mui/icons-material/LocationOnTwoTone';
import AddCircleOutlineTwoToneIcon from '@mui/icons-material/AddCircleOutlineTwoTone';
import RemoveCircleOutlineTwoToneIcon from '@mui/icons-material/RemoveCircleOutlineTwoTone';

import '../cart/Cart.scss'

function Cart() {

    const [filterArray, setFilterArray] = React.useState([]);
    const [cardIdDetails, setCartIdDetails] = React.useState([]);
    const [openAddress, setOpenAddress] = React.useState(false);
    const [openOrderSummery, setOpenOrderSummery] = React.useState(false);
    const [quantity, setQuantity] = React.useState([filterArray.quantityToBuy]);

    // const bookQuantity= React.useRef(null)
    // console.log(bookQuantity.current.value)
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
            "quantityToBuy": quantity * 0,
        };

        removeCartItemApi(cardIdDetails, data)
            .then((res) => {
                // console.log(res)
                console.log(data)
                showCartItem();
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
                // console.log(res)
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
                // console.log([res.data.result.quantityToBuy])
                // let filterCartId = filterArray.filter((cart) =>{
                //         if(cart.product_id._id === cart.product_id._id){
                //             setQuantity(cart.quantityToBuy)
                //             setCartIdDetails(cart._id)
                //             return cart;
                //         }
                //     })
                setFilterArray(res.data.result);


            })
            .catch((err) => {
                console.log(err)
            })
    }

    // const deleteCartItem = (id) => {
    //     console.log("remove")
    //     removeCartItemApi(id)
    //         .then((res) => {
    //             console.log(res)
    //             showCartItem();
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         })
    // }

    const orderPlaced = () => {
        setOpenAddress(!openAddress)
    }

    const continueOrder = () => {
        setOpenOrderSummery(openOrderSummery)
    }



    React.useEffect(() => {
        showCartItem();
    }, []);
    return (
        <div>
            <Header />
            <div className='wholeCart'>
                <div className='homeLine'>
                    <p>Home / </p>
                    <p>My cart</p>
                </div>
                <div className='bookDetailsBox'>
                    <div className='firstLine'>
                        <p className='cart'>My cart ({filterArray.length -1}) </p>
                        <location className='location'>
                            <div className='bridgeLabz'>
                                <LocationOnTwoToneIcon /> BridgeLabz Solutions LLP, No...
                            </div>
                        </location>
                    </div>
                    <div>
                        {
                            filterArray.filter(item => item.product_id !== null).map((item, index) => (

                                <div className='imageAndDetails' key={index}>
                                    <div>
                                        <img className='theImage' src={thedesign}></img>
                                    </div>
                                    <div>
                                        <div className='cartBookDetails'>
                                            <span className='cartTitle'>
                                                {item.product_id.bookName}
                                            </span> <br></br>
                                            <span className='cartAuthor'>by
                                                {item.product_id.author}
                                            </span> <br></br>
                                            <span className='cartNewPrice'>
                                                {item.product_id.discountPrice}
                                            </span><br></br>
                                            <span className='cartOldPrice'>rs2000</span> <br></br>
                                        </div>
                                        <div className='buttonFour'>

                                            <Button className='minus' onClick={() => bookDecrementItem(item)}
                                            > <RemoveCircleOutlineTwoToneIcon /> </Button>

                                            <Button> {item.quantityToBuy} </Button>
                                            {/* <Button> ref ={bookQuantity} defaultValue{item.quantityToBuy} </Button> */}
                                            {/* <input type='text' ref ={bookQuantity} defaultValue={item.quantityToBuy}  />   */}
                                            {/* <Button ref ={bookQuantity} defaultValue={item.quantityToBuy}/> */}

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
                    {filterArray.length !== 0 ? (
                        <Button className='submit' variant="contained" onClick={orderPlaced} >Place Order</Button>
                    ) : null
                    }
                </div>

                <div className='address'>
                    {!openAddress ? (
                        <div>
                            <div className='details'>
                                Address Details
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


            </div>
        </div>
    )
}

export default Cart
import React from 'react'
import Header from '../header/Header'
import thedesign from '../../Assests/thedesign.png'
import { Button } from '@material-ui/core'
import {
  cartItemQuantity
} from '../../services/axioService';

import LocationOnTwoToneIcon from '@mui/icons-material/LocationOnTwoTone';
import AddCircleOutlineTwoToneIcon from '@mui/icons-material/AddCircleOutlineTwoTone';
import RemoveCircleOutlineTwoToneIcon from '@mui/icons-material/RemoveCircleOutlineTwoTone';

import '../cart/Cart.scss'

function Cart(props) {
    const [quantity, setQuantity] = React.useState(0);
    const [cartItem, setCartItem] = React.useState([]);

    const bookDecrementItem = () => {
        let data = {
            "quantityToBuy": quantity - 1,
        };

        cartItemQuantity(cartItem, data)
            .then((res) => {
                console.log(res)
                console.log("Show Cart - Item")
            }).catch((err) => {
                console.log(err)
            })
    }

    const bookIecrementItem = () => {
        let data = {
            "quantityToBuy": quantity + 1,
        };

        cartItemQuantity(cartItem, data)
            .then((res) => {
                console.log(res)
                console.log("Show Cart + Item")
            }).catch((err) => {
                console.log(err)
            })
    }

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
                        <p className='cart'>My cart (1) </p>
                        <location className='location'>
                            <div className='bridgeLabz'>
                                <LocationOnTwoToneIcon /> BridgeLabz Solutions LLP, No...
                            </div>
                        </location>
                    </div>
                    <div className='imageAndDetails'>
                        <div>
                            <img className='theImage' src={thedesign}></img>
                        </div>
                        <div>
                            <div className='cartBookDetails'>
                                <span className='cartTitle'>Dont make me think </span> <br></br>
                                <span className='cartAuthor'>by Steve king </span> <br></br>
                                <span className='cartNewPrice'>  RS 1500</span><br></br>
                                <span className='cartOldPrice'>rs2000</span> <br></br>
                            </div>
                            <div className='buttonFour'>

                                <Button className='minus' onClick={bookDecrementItem} 
                                > <RemoveCircleOutlineTwoToneIcon /> </Button>
                                <Button> {quantity} </Button>
                                <Button className='plus' onClick={bookIecrementItem}
                                > <AddCircleOutlineTwoToneIcon /> </Button>
                                <Button className='remove'> Remove </Button>

                            </div>
                        </div>
                    </div>
                    <Button className='submit' variant="contained">Place Order</Button>
                </div>

                <div className='address'>
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
        </div>
    )
}

export default Cart
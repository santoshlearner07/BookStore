import React from 'react'
import thedesign from '../../Assests/thedesign.png'
import '../displayBook/Display.scss'
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined';
import { Button } from '@material-ui/core'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { addToCartApi, getCartItemApi,cartItemQuantity } from '../../services/axioService';


function DisplayBook(props) {

    const [addBook, setAddBook] = React.useState([]);
    const [quantity, setQuantity] = React.useState(0);
    const [filterArray,setFilterArray] = React.useState([]);
    const [cardIdDetails,setCartIdDetails] = React.useState([]);


    const bookId = (_id) => {
        console.log(_id)
        addToCartApi(props.item.item._id).then((res) => {
            console.log(res)
            console.log("Add to bag working")
        }).catch((err) => {
            console.log(err)
        })
    }

    const bookDecrement = () => {
        let data = {
            "quantityToBuy": quantity - 1,
          };
        
          cartItemQuantity(data)
            .then((res) => {
                console.log(res)
                showCartItem();
                console.log("Show Cart - Item")
            }).catch((err) => {
                console.log(err)
            })
    }

    const bookIncrement = () => {
        let data = {
            "quantityToBuy": quantity + 1,
            "_id": cardIdDetails
          };
        
          cartItemQuantity(data)
            .then((res) => {
                console.log(res)
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
                let filterData = res.data.result.filter((cart) => {
                    if(props.item.item._id === cart.product_id._id){
                        setQuantity(cart.quantityToBuy)
                        setCartIdDetails(cart.product_id._id)
                        return cart;
                    }
                }) 
                setFilterArray(filterData);
            })
            .catch((err) => {
                console.log(err)
            })
    }
    
    React.useEffect(() => {
        showCartItem();
    }, [quantity]);

    console.log(filterArray)

    return (
        <div className="displayBox">
            <div className='left-container'>

                <div className="imageBox">
                    <img id="hover" src={thedesign}></img>
                </div>
                <div className='buttons'>

                    {
                        filterArray.length === 0 ? (
                            <Button className='bagButton' style={{ backgroundColor: '#A03037', color: 'white' }} variant="contained"
                                onClick={() => bookId(props.item.item._id)}>
                                    ADD TO BAG
                            </Button>
                        ) : (
                            <div className='buttonUse'>

                                <Button className='minus' onClick={bookDecrement} id={props.item.item._id}
                                >-</Button>
                                <Button> {quantity} </Button>
                                <Button className='plus' onClick={bookIncrement} id={props.item.item._id}
                                >+</Button>

                            </div>
                        )
                    }

                    <Button className='wishlistB' style={{ backgroundColor: '#333333', color: 'white' }} variant="contained"
                    > <FavoriteBorderOutlinedIcon /> WISHLIST
                    </Button>

                </div>

            </div>
            <div className='right-container'>
                <section className="firstBasic">
                    <div className="title">
                        <span id='bookNamee'> {props.item.item.bookName} </span>
                        <span id='authorrName'>{props.item.item.author}</span>
                        <div className="rating">
                            <span id='stars'>4.5*</span>
                            <span id='twenty'>(20)</span>
                        </div>
                        <div className="price">
                            <span id='value'>Rs.</span>
                            <span id='newPrice'>{props.item.item.discountPrice}</span>
                            <span id='oldPrice'> ({props.item.item.price}) </span>
                        </div>
                    </div>
                </section>
                <hr />
                <section className='secondBasic'>
                    <p className="book-detail">Book Detail</p>
                    <p className="description">
                        {props.item.item.description}
                    </p>
                    <hr />
                </section>
                <section className='thirdpart'>
                    <p className='feedback'>Customer Feedback </p>
                    <div className="rating-div">
                        <span className='rating'>overall rating</span>
                        <div className='star'>
                            <StarBorderPurple500OutlinedIcon />
                            <StarBorderPurple500OutlinedIcon />
                            <StarBorderPurple500OutlinedIcon />
                            <StarBorderPurple500OutlinedIcon />
                            <StarBorderPurple500OutlinedIcon />
                        </div>
                        <input className='customerReview' type="text" placeholder='Write your review...'></input><br></br>
                    </div>
                    <Button className='submit' variant="contained">SUBMIT</Button>
                </section>
            </div>
        </div>
    )
}

export default DisplayBook
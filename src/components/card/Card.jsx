import React from 'react';
import dontmake from '../../Assests/dontmake.png'
import '../card/Card.scss'
import { getBookApi } from '../../services/axioService';

function Card() {

    const [books, setBooks] = React.useState([])


    const getBookDetails = () => {
        getBookApi().then((res) => {
            console.log(res)
            setBooks(res.data.result)
        }).catch((err) => {
            console.log(err)
        })
    }

    React.useEffect(() => {
        getBookDetails();
    }, [])


    return (
        <div className='card'>
            {
                books.map((item, index) => (
                    <div className='displayGrid'>
                        <div className="book-container">
                            <img className="image" src={dontmake}></img>
                        </div>
                        <div className="text-containt">
                            <div className="title">
                                <span id='title1'>Book name:{item.bookName}</span>
                                <span id='title2'>Author:{item.author}</span>
                                <div className="rating">
                                    <span id='number1'>4.5*</span>
                                    <span id='number2'>(20)</span>
                                </div>
                                <div className="price-container">
                                    <span id='new-price'>Price:- {item.price} Rs</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default Card;
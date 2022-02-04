import React from 'react';
import Delete from '../delete/Delete';
import thedesign from '../../Assests/thedesign.png'
import uxdesign from '../../Assests/uxdesign.png'

import '../card/Card.scss'
import { getBookApi } from '../../services/axioService';

function Card() {

    const [books, setBooks] = React.useState([]);
    const[select,setSelect] =React.useState(false);
    const [viewBook, setViewBook] = React.useState({});

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

    const [open, setOpen] = React.useState(false)

    const openImage = (item) => {
        setViewBook({...viewBook},item)
        setSelect(!select)
    }

    return (
        <div className='bookValue'>
            {
                select ? <Delete item={viewBook}/> :
                books.map((item, index) => (
                    <div className='displayGrid' onClick={()=>openImage(item)}open={open}>
                        <div className="onlyImage">
                            <img key={index} className="image" src={thedesign}></img>
                        </div>
                        <div className="title">
                            <span className='bookName'>Book:{item.bookName}</span><br></br>
                            <span className='authorName'>Author:{item.author}</span>
                            <div className="bookRating">
                                <span className='star'>4.5*  </span>
                                <span className='reviewUser'> (20)</span>
                            </div>
                            <div className="mainValue">
                                <span className='value'>Rs:- {item.price}</span>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Card;
import React from 'react';
import thedesign from '../../Assests/thedesign.png'
import DisplayBook from '../displayBook/DisplayBook';

import '../card/Card.scss'
import { getBookApi } from '../../services/axioService';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { connect } from 'react-redux';

function Card(props) {

    const [books, setBooks] = React.useState([]);
    const [select, setSelect] = React.useState(false);
    const [viewBook, setViewBook] = React.useState({});
    const [bookNumber, setBookNumber] = React.useState(1);


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


    const openImage = (item) => {
        setViewBook({ ...viewBook, item })
        setSelect(!select)
    }

    const nextPage = (e, value) => {
        setBookNumber(value)
    }
    console.log(props.dataSearchOne)
    return (
        <div>

            <div className='bookValue'>
                {
                    select ? <DisplayBook item={viewBook} /> :
                        bookNumber == 1 ?
                            books.slice(0, 8)
                                .filter(item => item.bookName.toLowerCase().includes(props.dataSearchOne.toLowerCase()))
                                .map((item, index) => (
                                    <div className='displayGrid'  >
                                        <div className="onlyImage" onClick={() => openImage(item)}>
                                            <img className="image" src={thedesign}></img>
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
                                )) :
                            bookNumber == 2 ?
                                books.slice(8, 16)
                                    .filter(item => item.bookName.toLowerCase().includes(props.dataSearchOne.toLowerCase()))
                                    .map((item, index) => (
                                        <div className='displayGrid'  >
                                            <div className="onlyImage" onClick={() => openImage(item)}>
                                                <img className="image" src={thedesign}></img>
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
                                    )) :
                                bookNumber == 3 ?
                                    books.slice(16, 24)
                                        .filter(item => item.bookName.toLowerCase().includes(props.dataSearchOne.toLowerCase()))
                                        .map((item, index) => (
                                            <div className='displayGrid'  >
                                                <div className="onlyImage" onClick={() => openImage(item)}>
                                                    <img className="image" src={thedesign}></img>
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
                                        )) : null
                }




            </div>
            <div className='mainnumberPagination'>
                <div className='numberPagination'>
                    <Stack spacing={2}>
                        <Pagination bookNumber={bookNumber} onChange={nextPage} count={5} />
                    </Stack>
                </div>
            </div>
        </div>

    )
}

const mapStateToProps = (state) => {
	return {
		books: state.bookReducer.books,
	};
};

export default connect(mapStateToProps)(Card);

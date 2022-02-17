import '../book/Book.scss'
import React from 'react';
import { getBookApi } from '../../services/axioService';
import Card from '../card/Card';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


function Book() {

    const [update, setUpdate] = React.useState([]);

    const clickMe = () => {
        getBookApi(update).then((res) => {
            console.log(res)
            setUpdate(res.data.result)
        }).catch((err) => {
            console.log(err)
        })
    }

    React.useEffect(() => {
        clickMe();
    }, [])

    return (
        <div className='bookImage'>
            <div className='secondBar'>
                <p className="books">Books </p>
                <p className="item"> (128 items)</p>
                <select name="sort by relevance" className="priceValue">
                    <option value="priceValue">Sort by relevance</option>
                    <option value="lowPrice">Price:Low to high</option>
                    <option value="highPrice">Price:High to low</option>
                    <option value="newPrice">Newest arrivals</option>
                </select>
            </div>
            <div className='imageMap'>

                <Card />

            </div>
        
        </div>
    )
}

export default Book;

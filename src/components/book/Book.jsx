import '../book/Book.scss'
import React from 'react';
import { getBookApi } from '../../services/axioService';
import Card from '../card/Card';

function Book() {

    const [update, setUpdate] = React.useState([]);

    const clickMe = () => {
        console.log("Api Calling")
        getBookApi(update).then((res) => {
            console.log("in then")
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
            
            <div className='imageMap'>

                <Card />

            </div>

        </div>
    )
}

export default Book;

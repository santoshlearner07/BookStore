import React from 'react';
import '../home/Home.scss';
import Header from '../../components/header/Header';
import Book from '../../components/book/Book';

function Home() {
    return (
        <div className='homePage'>
            <Header />
            <div className='bookBundle'>
                <div >
                    <Book />
                </div>
            </div>
        </div>
    )
}

export default Home;

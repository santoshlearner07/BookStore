import React from 'react';
import '../home/Home.scss';
import Header from '../../components/header/Header';
import Book from '../../components/book/Book';
import Footer from '../../components/footer/Footer';

function Home() {
    return (
        <div className='homePage'>
            <Header />
            <div className='bookBundle'>
                <div >
                    <Book />
                </div>
            </div>
            <div className='footer'>
                <Footer />
            </div>
        </div>
    )
}

export default Home;

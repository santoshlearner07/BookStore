import React from 'react';
import '../home/Home.scss';
import Header from '../../components/header/Header';
import Book from '../../components/book/Book';
import Footer from '../../components/footer/Footer';

import { connect } from 'react-redux';

function Home() {

    const [dataSearch,setDataSearch] = React.useState(' ');

const listenToHeader = (data) =>{
    setDataSearch(data)
}

    return (
        <div className='homePage'>
            <Header listenToHeader={listenToHeader}/>
            <div className='bookBundle'>
                <div >
                    <Book dataSearch={dataSearch}/>
                </div>
            </div>
            <div className='footer'>
                <Footer />
            </div>
        </div>
    )
}

// export default Home;
export default connect()(Home)
import React from 'react';
import '../home/Home.scss'
import book from '../../Assests/book.png'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PermIdentityTwoToneIcon from '@mui/icons-material/PermIdentityTwoTone';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function Home() {
    return (
        <div className='homePage'>
            <div className='homeHeader'>
                <img className='bookLogo' src={book} alt='this is book logo' />
                <p className='bookStore' >Bookstore</p>
                <div className='searchBar'>
                    {/* <SearchOutlinedIcon /> */}
                    <input type='search' className='search' placeholder='Search...'></input>
                </div>
                <div className='profilebox'>
                    <div className='profile'>
                        <PermIdentityTwoToneIcon />
                        Santosh
                    </div>
                </div>
                <div className='shoppingCart'>
                    <ShoppingCartOutlinedIcon />
                    Cart
                </div>
            </div>
            <div className='bookBundle'>
                <div >
                    Books
                </div>
            </div>
        </div>
    )
}

export default Home;

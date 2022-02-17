import React from 'react';
import '../header/Header.scss'
import book from '../../Assests/book.png'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PermIdentityTwoToneIcon from '@mui/icons-material/PermIdentityTwoTone';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useHistory } from "react-router-dom";

function Header() {

    let history = useHistory();

    const clickCart =() =>{
        history.push('/cart')
    }

    return (
        <div className='homePages'>
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
                <div className='shoppingCart' onClick={clickCart} >
                    <ShoppingCartOutlinedIcon />
                    Cart
                </div>
            </div>
        </div>
    )
}

export default Header;

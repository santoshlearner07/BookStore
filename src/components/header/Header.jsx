import React from 'react';
import '../header/Header.scss'
import book from '../../Assests/book.png'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PermIdentityTwoToneIcon from '@mui/icons-material/PermIdentityTwoTone';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';

function Header(props) {
    
    const [searchWord, setSearchWord] = React.useState('');

    let history = useHistory();
    
    const inputSearch =(e) =>{
        setSearchWord(e.target.value)
        props.listenToHeader(e.target.value);
    console.log(e.target.value)
    }

    const clickCart = () => {
        history.push('/cart')
    }


    return (
        <div className='homePages'>
            <div className='homeHeader'>
                <img className='bookLogo' src={book} alt='this is book logo' />
                <p className='bookStore' >Bookstore</p>
                <div className='searchBar'>
                    {/* <SearchOutlinedIcon /> */}
                    <input type='text' className='search' placeholder='Search...'
                     value={searchWord} onChange={inputSearch}
                    />
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

const mapStateToProps = (state) => {
	return {
		cartItems: state.cartItemReducer.cartItems,
	};
};

// export default Header;
export default connect(mapStateToProps)(Header);

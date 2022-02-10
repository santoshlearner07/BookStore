import React from 'react'
import '../wishList/WishList.scss'
import Header from '../header/Header'
import thedesign from '../../Assests/thedesign.png'
import { useHistory } from "react-router-dom";

import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import {
	getWishListApi, deleteBookApi
} from '../../services/axioService';


function WishList() {

	let history = new useHistory();

	const [getWishList, setGetWishList] = React.useState([]);
	const [deleteBooks, setDeleteBooks] = React.useState(false);

	const fetchWishItems = () => {
		getWishListApi()
			.then((res) => {
				// console.log(res)
				setGetWishList(res.data.result)
			})
			.catch((err) => {
				console.log(err)
			})
	}

	const deleteBook = (id) => {
		deleteBookApi(id)
			.then((res) => {
				console.log(res)
				setDeleteBooks(!deleteBooks)
				console.log("Delete Api working")
			})
			.catch((err) => {
				console.log(err)
			})
	}

	const home =()=>{
		history.push('/homepage')
	}


	React.useEffect(() => {
		fetchWishItems();
	}, [deleteBooks])

	return (
		<div>
			<Header />
			<div className='wishListMain'>
				<div className='wishListInner'>
					<div className='header' style={{ paddingRight: "490px" }}>
						<span onClick={home}
							style={{
								color: '#9D9D9D',
								marginRight: '3px',
								cursor: 'pointer',
							}}
						>
							Home /
						</span>
						<span>My WishList</span>
					</div>
					<div className='wishlisthead' style={{ marginTop: 15 }}>
						My WishList ( {getWishList.length} )
					</div>
					<div className='display'>
						{
							getWishList.map((item) => (
								<div key={item._id} className='firstBook'>
									<div className='imgAndInfo'>
										<div className='bookImgCont'>
											<div className='bookImg'>
												<img className='theImage' src={thedesign}></img>
											</div>
										</div>
										<div className='bookInfo'>
											<div className='bookName'>
												{item.product_id.bookName}
											</div>
											<div className='bookAuthor'>
												by {item.product_id.author}
											</div>
											<div className='bookPrice'>
												<div className='newPrice'>
													Rs. {item.product_id.discountPrice}
												</div>
												<div className='oldPrice'>
													Rs. {item.product_id.price}
												</div>
											</div>
										</div>
									</div>
									<div className='buttonBox'>
										<div
											className='deleteButton'
											onClick={() => deleteBook(item.product_id._id)}
										>
											<DeleteOutlineOutlinedIcon
												style={{ width: '100%', height: '100%' }}
											/>
										</div>
									</div>
								</div>
							))
						}
					</div>
				</div>
			</div>
			<br />

		</div>
	)
}

export default WishList
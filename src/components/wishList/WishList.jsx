import React from 'react'
import '../wishList/WishList.scss'
import Header from '../header/Header'
import thedesign from '../../Assests/thedesign.png'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';


function WishList() {

	const [getWishList, setGetWishList] = React.useState([]);

	const deleteBook = () => {

	}


	return (
		<div>
			<Header />
			<div className='wishListMain'>
				<div className='wishListInner'>
					<div className='header' style={{ paddingRight: "490px" }}>
						<span
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
											<img src={thedesign}></img>
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
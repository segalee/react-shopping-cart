import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class Products extends Component {
    render() {
        return (
            <div>
                <ul className='products flex'>
                    {this.props.products.map((product) => {
                        return <li className=' clean-link' key={product._id}>
                            <div className='product'>
                                {/* <Link to={`#${product._id}`}> */}
                                <div className='img-container'>
                                    <img src={require(`../assets/img/${product.img}.jpeg`)} alt=''></img>
                                </div>
                                <p>{product.title}</p>
                                <p className='product-desc'>{product.description}</p>
                                {/* </Link> */}
                            </div>
                            <div className='product-price'>

                                <div>${product.price.toFixed(2).toLocaleString()}</div>
                                <div className='btn-conatiner'>
                                    <button>Add To Cart</button>
                                </div>
                            </div>


                        </li>
                    })}
                </ul>

            </div>
        )
    }
}

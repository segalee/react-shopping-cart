import React, { Component } from 'react'

export class Filter extends Component {
    render() {
        const { count, sort, size, sortProducts, filterProducts } = this.props
        return (
            <div className='filter flex'>
                <div className='filter-result'>{count} Products</div>
                <div className='filter-sort'>Sort <span> </span>
                    <select value={sort} onChange={sortProducts}>
                        <option value="LATEST">Latest</option>
                        <option value="LOW">Low to High</option>
                        <option value="HIGH">High to Low</option>
                    </select>
                </div>
                <div className='filter-size'>Filter <span> </span>
                    <select value={size} onChange={filterProducts}>
                        <option value="">All</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                    </select>
                </div>
            </div>
        )
    }
}

import React from 'react';
import data from './data.json'
import { Products } from './cmps/Products.jsx'
import { Filter } from './cmps/Filter';

class App extends React.Component {
  state = {
    products: data.product,
    size: "",
    sort: ""
  }
  filterProducts = (ev) => {
    const size = ev.target.value
    if (size === "") this.setState({ size, products: data.product })
    else {
      this.setState({
        size,
        products: data.product.filter((p) => {
          return p.availableSizes.includes(size)
        })
      })
    }

  }
  sortProducts = (ev) => {
    console.log('ev.target.value:', ev.target.value);
    const sort = ev.target.value;
    const { products } = this.state
    // const price = data.product.price
    if (sort === 'LOW') {
      this.setState({ sort, products: products.sort((a, b) => a.price - b.price) })
    } else if (sort === 'HIGH') {
      this.setState({ sort, products: products.sort((a, b) => b.price - a.price) })
    } else {
      this.setState({ sort, products: products.sort((a, b) => b.img - a.img) })
    }

  }
  render() {
    const { products, size, sort } = this.state
    return (
      <div className="grid-container">
        <header className="App-header">
          <a href="/">React Shopping Cart</a>
        </header>
        <main>
          <section className='content'>
            <div className='main'>
              <Filter count={products.length}
                size={size}
                sort={sort}
                filterProducts={this.filterProducts}
                sortProducts={this.sortProducts}
              />
              <Products
                products={products}

              /></div>
            <div className='sidebar'>Cart Items</div>
          </section>
        </main>
        <footer>Footer</footer>
      </div>
    );
  }
}

export default App;

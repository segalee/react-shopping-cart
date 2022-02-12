import React from 'react';
import data from './data.json'
import { Products } from './cmps/Products.jsx'

class App extends React.Component {
  state = {
    products: data.product,
    size: "",
    sort: ""
  }
  render() {

    return (
      <div className="grid-container">
        <header className="App-header">
          <a href="/">React Shopping Cart</a>
        </header>
        <main>
          <section className='content'>
            <div className='main'><Products products={this.state.products} /></div>
            <div className='sidebar'>Cart Items</div>
          </section>
        </main>
        <footer>Footer</footer>
      </div>
    );
  }
}

export default App;

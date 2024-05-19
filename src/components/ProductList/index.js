import {Component} from 'react'

class ProductList extends Component {
  render() {
    const {location} = this.state
    const {state} = location
    const {productList} = state

    return (
      <div>
        {productList.map(eachProduct => (
          <div>
            <h1>{eachProduct.name}</h1>
            <h1>{eachProduct.description}</h1>
            <h1>{eachProduct.price}</h1>
            <h1>{eachProduct.category}</h1>
          </div>
        ))}
      </div>
    )
  }
}
export default ProductList

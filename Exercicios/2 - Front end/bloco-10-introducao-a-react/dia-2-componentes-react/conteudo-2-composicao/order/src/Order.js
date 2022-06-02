// arquivo Order.js
import React from 'react';

class Order extends React.Component {
  render() {
    const { user, product, price } = this.props.order; /* <--- esse order que passamos no retorno do componente App*/
                                    /* esse order ^ */

    return (
      <div className="order-classeDaDIV">
        <p> {user} bought {product} for {price.value} {price.currency} </p>
      </div>
    );
  }
}

export default Order;
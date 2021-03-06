import React from 'react';

import './checkout.styles.scss';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item.components';
import StripeCheckoutButton from '../../components/stripe-button/strip-button.component';

const CheckOutPage = ({ cartItems, total }) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.length
                ? cartItems.map(cartItem =>
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                )
                : <span className='empty-message'>Your cart is empty</span>
        }
        {
            total !== 0
                ?
                <React.Fragment>
                    <div className='total'>
                        <span>TOTAL: ${total}</span>
                    </div>
                    <div className='test-warning'>
                        *Please use the following test credit card for payments*
                            <br />
                            4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
                    </div>
                    <StripeCheckoutButton price={total} />
                </React.Fragment>
                : null
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckOutPage);
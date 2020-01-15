import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeChackoutButton from '../../components/stripe-button/stripe-button.component';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import { 
    CheckoutPageContainer, 
    CheckoutHeaderContainer, 
    HeaderBlockContainer, 
    CheckoutTotalContainer, 
    TestWarningContainer 
} from './checkout.styles';

const CheckoutPage = ({ cartItems, total}) => (
    <CheckoutPageContainer>
        <CheckoutHeaderContainer>
            <HeaderBlockContainer>
                <span>Product</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Description</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Quantity</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Price</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Remove</span>
            </HeaderBlockContainer>
        </CheckoutHeaderContainer>
        {cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)}

        <CheckoutTotalContainer> TOTAL: ${total}</CheckoutTotalContainer>
        <TestWarningContainer>
            *Please use the following test Credit card for payments*
            <br />
            4242 4242 4242 4242 - Exp: 01/23 - cvv: 123
        </TestWarningContainer>
        <StripeChackoutButton price={total} />
    </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(
    mapStateToProps
)(CheckoutPage);
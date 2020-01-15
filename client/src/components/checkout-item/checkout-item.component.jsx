import React from 'react';
import { connect } from 'react-redux';

import { 
    CheckoutItemContainer, 
    CheckoutImageContainer, 
    CheckoutImage, 
    NameContainer, 
    QuantityContainer, 
    ArrowContainer, 
    ValueContainer, 
    PriceContainer,  
    RemoveButtonContainer 
} from './checkout-item.styles';

import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <CheckoutItemContainer>
            <CheckoutImageContainer>
                <CheckoutImage src={imageUrl} alt='item' />
            </CheckoutImageContainer>
            <NameContainer>{name}</NameContainer>
            <QuantityContainer>
                <ArrowContainer onClick={() => removeItem(cartItem)}>&#10094;</ArrowContainer>
                <ValueContainer>{quantity}</ValueContainer>
                <ArrowContainer onClick={() => addItem(cartItem)}>&#10095;</ArrowContainer>
            </QuantityContainer>
            <PriceContainer className='price'>{price}</PriceContainer>
            <RemoveButtonContainer onClick={() => clearItem(cartItem)}>&#10005;</RemoveButtonContainer>
        </CheckoutItemContainer>
    );
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(
    null,
    mapDispatchToProps
)(CheckoutItem);
import React from 'react'
import { connect } from 'react-redux';

import { CollectionItemContainer, BackgroundImage, CollectionFooterContainer, NameContainer, PriceContainer, AddButton} from './collection-item.styles';

import { addItem } from '../../redux/cart/cart.actions.js';

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    return (
    <CollectionItemContainer>
        <BackgroundImage className='image' imageUrl={imageUrl}/>
        <CollectionFooterContainer>
            <NameContainer>{name}</NameContainer>
            <PriceContainer>{price}</PriceContainer>
        </CollectionFooterContainer>
        <AddButton onClick={() => addItem(item)} inverted>
            Add to Cart
        </AddButton>
    </CollectionItemContainer>
)}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(
    null,
    mapDispatchToProps
)(CollectionItem);
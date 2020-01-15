import React from 'react';
import { withRouter } from 'react-router-dom';

import { 
    MenuItemContainer, 
    MenuBackgroundImage, 
    MenuItemContent, 
    MenuItemTitle, 
    MenuItemSubtitle 
} from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => (
    <MenuItemContainer size={size} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <MenuBackgroundImage className='background-image' imageUrl={imageUrl} />
        <MenuItemContent>
            <MenuItemTitle>{ title.toUpperCase() }</MenuItemTitle>
            <MenuItemSubtitle>SHOP NOW</MenuItemSubtitle>
        </MenuItemContent>
    </MenuItemContainer>
);

export default withRouter(MenuItem);
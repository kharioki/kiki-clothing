import React from 'react';
import { withRouter } from 'react-router-dom';

import { CollectionPreviewContainer, CollectionPreviewTitle, PreviewContainer } from './collection-preview.styles';

import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({ title, items, history, match, routeName }) => (
    <CollectionPreviewContainer>
        <CollectionPreviewTitle onClick={() => history.push(`${match.path}/${routeName}`)}>
            {title.toUpperCase()}
        </CollectionPreviewTitle>
        <PreviewContainer>
            {
                items
                .filter((item,idx) => idx < 4)
                .map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))
            }
        </PreviewContainer>
    </CollectionPreviewContainer>
)

export default withRouter(CollectionPreview);
import React, { Component } from 'react';
import PreviewCollection from '../../components/Preview-Collection/Preview-Collection';
import SHOP_DATA from './Shop.data.js';

class ShopPage extends Component {
    constructor(props) {
        super();

        this.state = {
            collections: SHOP_DATA
        }
    }
    render() {
        const {collections} = this.state;
        return (
            <div className="shop-page">
                {
                    collections.map(({id, ...otherCollectionProps}) => (
                        <PreviewCollection key={id} {...otherCollectionProps} />
                    ))
                }
            </div>
        );
    }
}

export default ShopPage;
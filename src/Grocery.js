import React from 'react';
import List from './List';

function Grocery({item}) {
    const listItem = `You need ${item}.`
    return (
        <div>
            <List text={listItem} />
        </div>
    );
}

export default Grocery;
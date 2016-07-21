import React, { PropTypes } from 'react';
import Radium from 'radium';

import ToggleItem from './ToggleItem';

const ToggleListRaw = ({ items, onItemClick }) => {
   items = items.map(
      item => (
         <ToggleItem key={item.id}
            {...item}
            onClick={() => onItemClick(item.id)}>
            {item.text}
         </ToggleItem>
      ));
   
   return (
      <ul>
         {items}
      </ul>
   );
};

const ToggleList = Radium(ToggleListRaw);
export default ToggleList;
   

import React, { PropTypes } from 'react';
import Radium from 'radium';

const ToggleItemRaw = ({ completed, onClick, children }) => {
   return (
      <li style={styles[completed && 'completed']}
          onClick={onClick}>
         {children}
      </li>
   );
};

const styles = {
   completed: {
      textDecoration: 'line-through'
   }
};

const ToggleItem = Radium(ToggleItemRaw);
export default ToggleItem;
   

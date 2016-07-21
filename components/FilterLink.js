import React, { PropTypes } from 'react';
import Radium from 'radium';

const FilterLinkRaw = (props) => {
   const { filter, currentFilter, children } = props;

   const onClick = (event) => {
      event.preventDefault();
      if (typeof props.onClick === 'function') {
         props.onClick();
      }
   };

   if (filter === currentFilter) {
      return <span>{children}</span>;
   } else {
      return (
         <a href="#" onClick={onClick}>
            {children}
         </a>
      );
   }
};

FilterLinkRaw.propTypes = {
   filter:        PropTypes.string.isRequired,
   currentFilter: PropTypes.string,
   onClick:       PropTypes.func,
   children:      PropTypes.node
};

const FilterLink = Radium(FilterLinkRaw);
export default FilterLink;

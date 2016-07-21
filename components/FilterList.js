import React, { PropTypes } from 'react';
import Radium from 'radium';

import ToggleList from './ToggleList';
import FilterLink from './FilterLink';

const FilterListRaw = ({
   filters, currentFilter, filterTest, onFilterClick,
   items, onItemClick
}) => {
   items = items.filter(filterTest);

   const label = 'Show: ';
   const separator = ' | ';

   // turn the filters into links and add the separator between them
   const links = [].concat(
      ...filters.map(
         filter => [
            separator,
            <FilterLink
                key={filter.id}
                filter={filter.name}
                onClick={ () => onFilterClick(filter.name) }
                currentFilter={currentFilter}>
               {filter.text}
            </FilterLink>
         ]
      ))
      .slice(1);

   return (
      <div>
         <ToggleList items={items} onItemClick={onItemClick} />
         <p>
            {label}
            {links}
         </p>
      </div>
   );
};

FilterListRaw.propTypes = {
   filters:       PropTypes.array.isRequired,
   currentFilter: PropTypes.string.isRequired,
   filterTest:    PropTypes.func.isRequired,
   onFilterClick: PropTypes.func.isRequired,
   items:         PropTypes.array.isRequired,
   onItemClick:   PropTypes.func.isRequired
};

const FilterList = Radium(FilterListRaw);
export default FilterList;
   

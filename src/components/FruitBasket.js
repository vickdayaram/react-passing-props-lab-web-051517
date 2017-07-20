import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

// class FruitBasket extends Component {
//   // constructor() {
//   //   super();
//   //
//   //   this.state = {
//   //     filters: [],
//   //     selectedFilter: null
//   //   };
//   // }
//
//   // handleFilterChange = event => {
//   //   console.log('new filter: ', event.target.value);
//   //   this.setState({ selectedFilter: event.target.value });
//   // }
//
//   render() {
//     return (
//       <div className="fruit-basket">
//         <Filter handleChange={this.props.handleFilterChange} />
//         <FilteredFruitList
//           filter={this.props.selectedFilter} />
//       </div>
//     );
//   }
// }
//
// <Filter filterChange={this.handleFilterChange} filters={this.state.filters}/>
// <FruitBasket handleFilterChange={this.handleFilterChange}/>
// <FilteredFruitList filter={this.state.currentFilter} fruitList={this.state.fruitList}/>

const FruitBasket = ({handleFilterChange, selectedFilter, filtersList, items}) => {

  return (
    <div className="fruit-basket">
      <Filter handleChange={handleFilterChange} filters={filtersList}/>
      <FilteredFruitList
        filter={selectedFilter}
        items={items}
        />
    </div>
  )
}

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: null,
  updateFilterCallback: null
}

export default FruitBasket;

import React from 'react';

import FruitBasket from './FruitBasket';

import Filter from './Filter';

import FilteredFruitList from './FilteredFruitList'

// const App = () => <FruitBasket />;

// export default App;


//Refactor

class App extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      filters: [],
      currentFilter: null,
      fruit: []
    }
  }

  handleFilterChange = event => {
    console.log('new filter: ', event.target.value);
    this.setState({ currentFilter: event.target.value });
  }

  componentWillMount = () => {
    this.fetchFilters()
    this.fetchItems()
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  fetchItems = () => {
      fetch('/api/fruit')
        .then(response => response.json())
        .then(fruit => this.setState({ fruit }));
  }

  render(){
    return(
      <FruitBasket
      handleFilterChange={this.handleFilterChange}
      selectedFilter={this.state.currentFilter}
      filtersList={this.state.filters}
      items={this.state.fruit}
      />
    )
  }
}



export default App;

import React from 'react';

// class FilteredFruitList extends Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       items: []
//     };
//   }
//
//   componentWillMount() {
//     fetch('/api/fruit')
//       .then(response => response.json())
//       .then(items => this.setState({ items }));
//   }
//
//   render() {
//     const list = !this.props.filter ? this.state.items : this.state.items.filter(i => i.fruit_type === this.props.filter);
//
//     return (
//       <ul className="fruit-list">
//         {list.map((item, index) => <li key={index}>{item.char}</li>)}
//       </ul>
//     );
//   }
// }


const FilteredFruitList = ({filter, items}) => {
  const list = !filter ? items : items.filter(i => i.fruit_type === filter);

  return(
    <ul className="fruit-list">
      {list.map((item, index) => <li key={index}>{item.char}</li>)}
    </ul>
  )
}

export default FilteredFruitList;

import React from 'react';

const arr = [
  {
    name: 'Apple',
    color: 'red',
    price: '20rs',
    variety: [
      {
        city: 'ooty',
        tree: 'green',
        drink: [
          {
            name: 'appledrink',
            color: 'darkred',
            price: [
              {
                rs: 25
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: 'Mango',
    color: 'Yellow',
    price: '30rs',
    variety: [
      {
        city: 'Banglore',
        tree: 'redgreen',
        drink: [
          {
            name: 'MangoDrink',
            color: 'darkyellow',
            price: [
              {
                rs: 20
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: 'Grapes',
    color: 'Yellow',
    price: '15rs',
    variety: [
      {
        city: 'Hyderabad',
        tree: 'green',
        drink: [
          {
            name: 'Grapsdrink',
            color: 'darkgreen',
            price: [
              {
                rs: 15
              }
            ]
          }
        ]
      }
    ]
  }
];

class App extends React.Component {
  render() {
    return (
      <div>
        {arr.map((newArr, index) => {
          return (
            <p key={index}>
              {newArr.name}
              {newArr.color}
              
            </p>
          );
        })}
      </div>
    );
  }
}

export default App;

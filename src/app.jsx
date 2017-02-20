import React from 'react';
import Header from './header.jsx';

// export default class App2 extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>It Works!</h1>
//         <p>This React project just works including <span className="redBg">module</span> local styles.</p>
//         <p>Enjoy!</p>
//       </div>
//     )
//   }
// }


export default class ShoppingList extends React.Component {
  
  render() {
    return (
      <div className="shopping-list">
        <Header/>
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}
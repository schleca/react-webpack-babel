import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import ShoppingList from './app.jsx';



render( <AppContainer><ShoppingList name="Mark"/></AppContainer>, document.querySelector("#app"));







// if (module && module.hot) {
//   module.hot.accept('./app.jsx', () => {
//     render(
//       <AppContainer>
//         <ShoppingList/>
//       </AppContainer>,
//       document.querySelector("#app")
//     );
//   });
// }

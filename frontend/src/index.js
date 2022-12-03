import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import UserProvider from './context/UserProvider';
import CartProvider from './context/CartProvider'
import {PayPalScriptProvider} from '@paypal/react-paypal-js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <PayPalScriptProvider option={{"client-id":"ATPNQJxm5ips5CNBwP5z9r54_uNv10nCIkMdHAXNdK-8vk_-d6pxpsJKbHAlHsfmtU8nUWKGvcjqq2ln"}}>
      <BrowserRouter>
        <UserProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </UserProvider>
      </BrowserRouter>
  </PayPalScriptProvider>
 );


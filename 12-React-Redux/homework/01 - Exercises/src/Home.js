import React from 'react';
import Products from './components/Products/Products.jsx';
import Form from './components/Form/Form.jsx';
import './home.css';

export default function Home() {
   return (
      <div className='homeBg'>
         <Products />
         <Form />
      </div>
   );
}

import React from 'react';
import ContactUs from './components/ContactUs/ContactUs.jsx';
import CopyData from './components/CopyData/CopyData.jsx';
import InfoEnviada from './components/InfoEnviada/InfoEnviada.jsx';
import './home.css';

export default function Home() {
   return (
      <div className='homeBg'>
         <ContactUs />
         <div className='dataDg'>
            <CopyData />
            <InfoEnviada />
         </div>
      </div>
   );
}

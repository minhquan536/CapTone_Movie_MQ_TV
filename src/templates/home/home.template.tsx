import React, { Suspense } from 'react'
import Header from './header/Header';
import Footer from './footer/Footer';
import { Outlet } from 'react-router-dom';

function HomeTemplate() {
  return (
    <div>
      <Header/>

      <Suspense fallback={<p>"Loanding.........."</p>}>
        <Outlet/>
      </Suspense>

      <Footer/>
    </div>
  )
}

export default HomeTemplate;

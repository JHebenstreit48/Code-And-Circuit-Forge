import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/components/HeaderAndNav/Header';
import Footer from '@/components/Footer';

import '@/SCSS/Page.scss';

export default function App() {
  return (
    <div className="appContainer">
      <Header />

      <div className="contentWrapper">
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </div>

      <Footer />
    </div>
  );
}
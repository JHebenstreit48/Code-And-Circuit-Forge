import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/components/HeaderAndNav/Header';
import Footer from '@/components/Footer';

// Global/layout styles (background + layout grid + any base tokens)
import '@/scss/Page.scss';

export default function App() {
  return (
    <div className="appContainer">
      <Header />

      <div className="contentWrapper">
        <Suspense fallback={null}>
          {/* Main routed content */}
          <Outlet />
        </Suspense>
      </div>

      <Footer />
    </div>
  );
}
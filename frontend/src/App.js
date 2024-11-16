// App.js or wherever you set up your routes
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/Homepage'; // import your home page component
import PaymentPage from './components/PaymentPage'; // import your payment page component
import RedirectPage from './components/RedirectPage'; // import your redirect page component
import NotFound from './components/NotFound'; // import your redirect page component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pay" element={<PaymentPage />} />
        <Route path="/redirect-url/:merchantTransactionId" element={<RedirectPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

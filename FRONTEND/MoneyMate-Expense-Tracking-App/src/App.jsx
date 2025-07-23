import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import AppLayout from './components/layouts/AppLayout';
import ErrorPage from './pages/ErrorPage';
import ExpensePage from './pages/ExpensePage';

function App() {
  console.log(ExpensePage)
  return (

    <Router>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/expenses" element={<ExpensePage />} />
          {/* <Route path="/income" element={<IncomePage />} /> */}
          {/* <Route path="/budget" element={<BudgetPage />} /> */}
          {/* <Route path="/subscriptions" element={<SubscriptionPage />} /> */}
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </Router>
  );

}

export default App

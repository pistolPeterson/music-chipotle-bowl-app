import { Divider, SaltProviderNext } from '@salt-ds/core';

import './App.css';

import { MealTitle } from './features/meal-title/MealTitle.jsx';
import PreviousOrders from './features/previous-orders/PreviousOrders.jsx';
import MusicReferenceForm from './features/music-form/MusicReferenceForm.jsx';
import Header from './features/header/Header.jsx';

// TODO:
// - Dark mode with useContext, use the same colors in salt uiToolkit
// - Add footer
// - Add new confirmation page
// - API call to save orders
// - Save/load orders to/from localStorage
// - Prompt engineering
// - Write unit test
// - rest ofc multiselect

function App() {
  return (
    <div>
      <Header />
      <main className="main-container">
        <MealTitle />
        <Divider />
        <div className="order-content">
          <PreviousOrders />
          <MusicReferenceForm />
        </div>
      </main>
    </div>
  );
}

export default App;

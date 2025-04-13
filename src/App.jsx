import { Button, Divider } from '@salt-ds/core';
import './App.css';

import { MealTitle } from './features/meal-title/MealTitle.jsx';
import PreviousOrders from './features/previous-orders/PreviousOrders.jsx';
import MusicReferenceForm from './features/music-form/MusicReferenceForm.jsx';
function App() {
  return (
    <div className="main-container">
      <MealTitle />
      <Divider />
      <div className="order-content">
        <PreviousOrders />
        <MusicReferenceForm />
      </div>
    </div>
  );
}

export default App;

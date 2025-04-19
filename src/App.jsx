import { Button, Divider } from '@salt-ds/core';
import './App.css';

import { MealTitle } from './features/meal-title/MealTitle.jsx';
import PreviousOrders from './features/previous-orders/PreviousOrders.jsx';
import MusicReferenceForm from './features/music-form/MusicReferenceForm.jsx';
import Header from './features/header/Header.jsx';
function App() {
  return (
    <div>
      <Header />
      <a href="https://www.flaticon.com/free-icons/music" title="music icons">
        Music icons created by Freepik - Flaticon
      </a>
      <div className="main-container">
        <MealTitle />
        <Divider />
        <div className="order-content">
          <PreviousOrders />
          <MusicReferenceForm />
        </div>
      </div>
    </div>
  );
}

export default App;

import './App.css';
import { Button, Divider } from '@salt-ds/core';
import { MealTitle } from './features/meal-title/MealTitle.jsx';
import PreviousOrders from './features/previous-orders/PreviousOrders.jsx';
function App() {
  return (
    <>
      <div className="main-container">
        <MealTitle></MealTitle>
        <Divider></Divider>
        <PreviousOrders></PreviousOrders>
      </div>
    </>
  );
}

export default App;

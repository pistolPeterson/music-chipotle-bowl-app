import './App.css';
import { Button, Divider } from '@salt-ds/core';
import { MealTitle } from './features/meal-title/MealTitle.jsx';
function App() {
  return (
    <>
      <div className="main-container">
        <MealTitle></MealTitle>
        <Divider></Divider>
      </div>
    </>
  );
}

export default App;

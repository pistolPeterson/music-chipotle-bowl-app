import './App.css';
import { Button, Divider } from '@salt-ds/core';
import { MealTitle } from './features/meal-title/MealTitle.jsx';
function App() {
  return (
    <>
      <MealTitle exampleProp="hi?"></MealTitle>
      <Divider></Divider>
      <div className="card">
        <Button sentiment="accented" appearance="solid" loading="true">
          Button
        </Button>
        <p>Test Paragraph</p>
      </div>
    </>
  );
}

export default App;

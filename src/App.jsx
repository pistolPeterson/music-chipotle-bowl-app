import './App.css';
import { Button } from '@salt-ds/core';

function App() {
  return (
    <>
      <h1>Vite + React</h1>
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

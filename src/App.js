import './App.css';
import ToolTip from './components/tool-tip/ToolTip';

function App() {
  return (
    <div className='App'>
      <ToolTip element={<Box />} message='Hi my name is so and so' />
    </div>
  );
}

export default App;

function Box() {
  return (
    <div
      style={{ width: '500px', height: '400px', backgroundColor: 'lightblue' }}
    ></div>
  );
}

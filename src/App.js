import logo from './logo.svg';
import './App.css';
import Counter from './components/counter';
import CounterClass from './components/ClassCounter';
import EventHandling from './components/events';
import Event2 from './components/Event2';
import CondRend from './components/ConditionRender';
import Con2 from './components/con2';


function App() {
  return (
    <div>
      <Counter/>
      <CounterClass/>
      <EventHandling/>
      <br/>
      <Event2/>
      <h3>using if else operater</h3>
      <CondRend/>
      <h3>using ternary operater</h3>
      <Con2/>
    </div>
  );
}

export default App;

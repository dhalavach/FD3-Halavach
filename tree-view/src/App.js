import './App.css';
import Tree from './components/Tree';
import mockData from './mockData';

function App() {
  return (
    <div className='Tree-View-App'>
      <h1>Tree View</h1>
      <div >
        <section>
          <Tree data={[mockData]} />
        </section>

      </div>
    </div>
  );
}

export default App;

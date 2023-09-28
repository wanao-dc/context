import Sidebar from './components/Sidebar';
import Route from './components/Route';
import CounterPage from './pages/counterPage';

function App() {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <Sidebar />
      <div className="col-span-5">
        <Route path="/counter">
          <CounterPage initialCount={10} />
        </Route>
      </div>
    </div>
  );
}

export default App;

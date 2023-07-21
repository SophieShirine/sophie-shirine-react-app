import NavBar from "./components/header/navbar";
import AppRouter from "./AppRouter";
import './App.css';

function App() {
  return (
    <div className="App">
      <AppRouter />
      <NavBar />
    </div>
  );
}

export default App;

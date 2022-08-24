import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import PieChart from "./Components/PieChart/PieChart";
import BarChart from "./Components/BarChart/BarChart";

function App() {
  return (
    <div className="App">
      <NavBar />
      <BarChart />
      <Footer />
    </div>
  );
}

export default App;

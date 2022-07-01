import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import List from "./components/Prices";
import Feedback from "./components/Feedback";

function App() {
  return (
    <div>
      <NavigationBar />
      <Home />
      <List />
      <Feedback />
    </div>
  );
}

export default App;
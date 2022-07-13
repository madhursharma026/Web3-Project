import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Homepage from "./Components/Homepage/Homepage";

function App() {
  return (
    <>
      <Router>
        <Route exact path="/">
          <Header />
          <div className="px-5" style={{ paddingTop: "100px" }}>
            <Homepage />
          </div>
        </Route>
      </Router>
    </>
  );
}

export default App;

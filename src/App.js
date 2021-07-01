import './App.css';
import Header from './Components/Header/Header';
import MainSection from './Components/MainSection/MainSection';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './Components/About/About';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Loading from './Components/Loading/Loading';
import LiveData from './Components/LiveData/LiveData';

function App() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const res = fetch('https://api.covid19api.com/summary')
        .then((response) => response.json())
        .then((result) => setData(result))
        .catch((error) => console.log('error', error));
      setLoading(false);
    };

    getData();
  }, []);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header />
          <div className="content">
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/livedata">
                <LiveData />
              </Route>
              <Route path="/">
                {data !== undefined ? (
                  <MainSection covidData={data} />
                ) : (
                  <Loading />
                )}
              </Route>
            </Switch>
          </div>
        </header>
      </div>
    </Router>
  );
}

export default App;

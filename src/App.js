import "./App.css";
import Header from "./Components/Header/Header";
import MainSection from "./Components/MainSection/MainSection";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./Components/About/About";

function App() {
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
							<Route path="/">
								<MainSection />
							</Route>
						</Switch>
					</div>
				</header>
			</div>
		</Router>
	);
}

export default App;

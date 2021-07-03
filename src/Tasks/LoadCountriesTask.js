import { features } from "../Data/countries.json";

class LoadCountriesTask {
	load = (setState) => {
		setState(features);
	};
}

export default LoadCountriesTask;

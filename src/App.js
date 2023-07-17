import './App.css';
import AbstractApi from './components/AbstractApi';
import GeolocationApi from './components/GeolocationApi';
import IpApiCo from './components/IpApiCo';
import ReactGeolocated from './components/ReactGeolocated';

function App() {
	return (
		<div className="App">
			<h1>Geolocation in React</h1>
			<GeolocationApi />
			<br />
			<AbstractApi />
			<br />
			<IpApiCo />
			<br />
			<ReactGeolocated />
		</div>
	);
}

export default App;

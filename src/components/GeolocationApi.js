import { useState } from 'react';
const geolocationAPI = navigator.geolocation;

const GeolocationApi = () => {
	const [lat, setLat] = useState(null);
	const [long, setLong] = useState(null);
	const [error, setError] = useState('');
	const [showCoords, setShowCoords] = useState(false);

	const getUserLocation = () => {
		if (!geolocationAPI) {
			setError('Geolocation API is not available in your browser');
		} else {
			geolocationAPI.getCurrentPosition(
				(position) => {
					const { coords } = position;
					console.log(coords);
					setLat(coords.latitude);
					setLong(coords.longitude);
					setShowCoords(true);
				},
				(error) => {
					console.log(error);
					setError('Something went wrong getting your position');
				}
			);
		}
	};

	return (
		<div>
			<h2>With Geolocation API</h2>
			{showCoords && (
				<h3>
					Your coordinates are: Latitude:{lat}, Longitude:{long}
				</h3>
			)}
			<button onClick={getUserLocation}>
				Get Current Location from Geolocation API
			</button>
		</div>
	);
};

export default GeolocationApi;

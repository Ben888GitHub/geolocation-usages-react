import axios from 'axios';
import { useState } from 'react';

const apiURL = 'https://ipgeolocation.abstractapi.com/v1/';
const apiKey = process.env.REACT_APP_ABSTRACT_KEY;

const AbstractApi = () => {
	const [error, setError] = useState('');
	const [showCoords, setShowCoords] = useState(null);
	const [loading, setLoading] = useState(false);

	const getUserLocationApi = async () => {
		console.log(apiKey);
		try {
			setLoading(true);
			const { data } = await axios.get(`${apiURL}?api_key=${apiKey}`);

			setLoading(false);
			console.log(data);
			setShowCoords(data);
		} catch (err) {
			setError('Something went wrong getting your position');
		}
	};

	return (
		<div>
			<h2>With Abstract API</h2>
			{loading && <p>Loading...</p>}
			{showCoords && (
				<>
					<p>
						City: {showCoords.city}, {showCoords.region}
					</p>
					<p>Latitude: {showCoords.latitude}</p>
					<p>Longitude: {showCoords.longitude}</p>
					<p>
						Country: {showCoords.country}, {showCoords.flag.emoji}
					</p>
					<p>IP: {showCoords.ip_address}</p>
					<p>ISP: {showCoords.connection.autonomous_system_organization}</p>
				</>
			)}
			{error && <p>{error}</p>}
			<button onClick={getUserLocationApi}>
				Get Current Location from Abstract API
			</button>
		</div>
	);
};

export default AbstractApi;

import axios from 'axios';
import { useState } from 'react';

const apiURL = `https://ipapi.co/json/`;

const IpApiCo = () => {
	const [error, setError] = useState('');
	const [showCoords, setShowCoords] = useState(null);
	const [loading, setLoading] = useState(false);

	const getUserLocationApi = async () => {
		try {
			setLoading(true);
			const { data } = await axios.get(apiURL);

			setLoading(false);
			console.log(data);
			setShowCoords(data);
		} catch (err) {
			setError('Something went wrong getting your position');
		}
	};

	return (
		<div>
			<h2>
				With{' '}
				<a href="https://ipapi.co/" target="_blank" rel="noreferrer noopener">
					IP API Co
				</a>
			</h2>
			{loading && <p>Loading...</p>}
			{showCoords && (
				<>
					<p>
						City: {showCoords.city}, {showCoords.region}
					</p>
					<p>Latitude: {showCoords.latitude}</p>
					<p>Longitude: {showCoords.longitude}</p>
					<p>
						Country: {showCoords.country_name}, {showCoords.country_code}
					</p>
					<p>IP: {showCoords.ip}</p>
					<p>ISP: {showCoords.org}</p>
				</>
			)}
			{error && <p>{error}</p>}
			<button onClick={getUserLocationApi}>
				Get Current Location from IP API Co
			</button>
		</div>
	);
};

export default IpApiCo;

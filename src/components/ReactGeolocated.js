import { useGeolocated } from 'react-geolocated';

const ReactGeolocated = () => {
	const { coords, isGeolocationAvailable, isGeolocationEnabled } =
		useGeolocated({
			positionOptions: {
				enableHighAccuracy: true
			},
			userDecisionTimeout: 5000,
			isOptimisticGeolocationEnabled: true
		});

	if (!isGeolocationAvailable)
		return <h3>Your browser does not support Geolocation</h3>;

	if (!isGeolocationEnabled)
		return <h3>Please enable location on your browser</h3>;
	return (
		<div>
			<h2>With React Geolocated</h2>
			{coords ? (
				<>
					<p>Latitude: {coords.latitude}</p>
					<p>Longitude: {coords.longitude}</p>
				</>
			) : (
				<p>Getting location data...</p>
			)}
		</div>
	);
};

export default ReactGeolocated;

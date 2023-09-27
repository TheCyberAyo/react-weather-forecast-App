
export const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5f52b58234msha68e56e2a217ea3p1563f6jsnade498b09354',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5"
export const WEATHER_API_KEY = "ab293c136afbcedf1354d6ce15a35147"
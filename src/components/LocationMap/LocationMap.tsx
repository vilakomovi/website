import {APIProvider, Map, Marker} from "@vis.gl/react-google-maps";

const LocationMap = () => {
    const placeLocation = {
        lat: 43.736823,
        lng: 19.711369,
    }

    const styles = {
        borderRadius: '20px',
        height: '500px',
        width: '100%',
    }

    console.warn('1', import.meta.env.VITE_GOOGLE_MAPS_API_KEY)
    console.warn('2', import.meta.env)
    console.warn('3', import.meta)

    return (
        <div>
            <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
                <Map style={styles}
                     defaultZoom={18}
                     defaultCenter={placeLocation}
                     gestureHandling={'greedy'}
                     disableDefaultUI
                     scrollwheel={false}
                >
                    <Marker position={placeLocation}/>
                </Map>
            </APIProvider>
        </div>
    );
};

export default LocationMap;

import {APIProvider, Map, Marker} from "@vis.gl/react-google-maps";

const LocationMap = () => {
    const placeLocation = {
        // lat: 43.737514876317356,
        // lng: 19.712283566103256,
        lat: 43.736823,
        lng: 19.711369,
    }


    const styles = {
        borderRadius: '20px',
        height: '500px',
        width: '100%',
    }

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

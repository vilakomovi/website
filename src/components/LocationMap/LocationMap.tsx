/**
 * Location:
 * lat: 43.736823,
 * lng: 19.711369,
 * @constructor
 */
const LocationMap = () => {
    return (
        <div className="mapouter">
            <div className="gmap_canvas">
                <iframe width="100%" height="500" id="gmap_canvas"
                        src="https://maps.google.com/maps?q=43.736823,%2019.711369&t=&z=17&ie=UTF8&iwloc=&output=embed"
                        frameBorder="0"
                        scrolling="no"
                        marginHeight={0}
                        marginWidth={0}
                ></iframe>
                <a href="https://123movies-to.org"></a><br/>
                <a href="https://www.embedgooglemap.net"></a>
            </div>
        </div>
    );
};

export default LocationMap;

import React from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import './Map.css';

const containerStyle = {
  position: 'relative', // Make the container relative to position the button absolutely
  height: '400px'
};

const center = {
  lat: 43.053710,
  lng: -87.898120
};

function Map({ isMarkerShown, fullWidth }) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyAHYS1xy5PN74Qtp7BDWC_ci5WWulkXFhs" // Replace with your actual API key
  });

  const mapRef = React.useRef(null);
  const onLoad = React.useCallback(function callback(map) {
    mapRef.current = map;
  }, []);

  const onUnmount = React.useCallback(function callback() {
    mapRef.current = null;
  }, []);

  const className = fullWidth ? "full-width-map" : "";

  return (
    <div className={className} style={containerStyle}>
      {isLoaded ? (
        <>
          <GoogleMap
            mapContainerStyle={{ height: '100%' }}
            center={center}
            zoom={15}
            onLoad={onLoad}
            onUnmount={onUnmount}
          >
            {isMarkerShown && <Marker position={center} title="East Side Baptist Church" />}
          </GoogleMap>
          <a 
            href="https://maps.google.com/?q=2409+E+Park+Place,+Milwaukee,+WI+53211" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="directions-btn" 
            style={{ 
              position: 'absolute', // Position the button absolutely
              top: '10px', // Adjust the position as needed
              left: '10px', // Adjust the position as needed
              backgroundColor: '#0C2D57', 
              color: '#FFFFFF', 
              padding: '5px 10px', 
              textDecoration: 'none', 
              borderRadius: '5px',
              zIndex: 1000 // Ensure the button is above the map
            }}
          >
            Get Directions
          </a>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default Map;

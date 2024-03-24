import React from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import './Map.css';

const containerStyle = {
  height: '400px'
};

const center = {
  lat: 54.454871,
  lng: -5.8265
};

function Map({ isMarkerShown, fullWidth }) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "YOUR_API_KEY" // Replace with your actual API key
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
    <div className={className}>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          {isMarkerShown && (
            <Marker position={center} title="Saintfield Baptist Church" />
          )}
        </GoogleMap>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default Map;

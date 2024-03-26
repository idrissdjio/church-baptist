import React from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import './Map.css';

const containerStyle = {
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
            <Marker position={center} title="East Side Baptist Church" />
          )}
        </GoogleMap>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default Map;

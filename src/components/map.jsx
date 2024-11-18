import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { LatLngExpression } from 'leaflet';

const Map = () => {
    const position = [9.0765, 7.3986]; 


  return (
    <div className="map-container" style={{ height: '400px', width: '100%' }}>
      <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            We are here!
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;

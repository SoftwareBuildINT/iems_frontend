import React from "react";
import { GoogleMap, LoadScript, Marker, useLoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
  borderRadius: "8px",
};

const center = {
  lat: 20.5937,
  lng: 78.9629,
};

const mapStyles = [
  {
    featureType: "all",
    elementType: "labels.text.fill",
    stylers: [{ color: "#ffffff" }],
  },
  {
    featureType: "all",
    elementType: "labels.text.stroke",
    stylers: [
      { color: "#000000" },
      { lightness: 1 },
    ],
  },
  {
    featureType: "administrative",
    elementType: "geometry.fill",
    stylers: [{ color: "#000000" }],
  },
  {
    featureType: "administrative",
    elementType: "geometry.stroke",
    stylers: [
      { color: "#44444F" },
      { lightness: 14 },
      { weight: 1.4 },
    ],
  },
  {
    featureType: "landscape",
    elementType: "all",
    stylers: [{ color: "#44444F" }],
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [{ color: "#406d80" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#1f2835" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.fill",
    stylers: [{ color: "#44444F" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [{ color: "#255763" }],
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [{ color: "#406d80" }],
  },
  {
    featureType: "water",
    elementType: "all",
    stylers: [{ color: "#0F172B" }],
  },
];

const markers = [
  { position: { lat: 19.0760, lng: 72.8777 }, title: 'Inactive', color: 'red' }, // Mumbai
  { position: { lat: 13.0827, lng: 80.2707 }, title: 'Hold', color: 'yellow' }, // Chennai
  { position: { lat: 28.7041, lng: 77.1025 }, title: 'Active', color: 'green' }, // Delhi
];

const GoogleMapComponent = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAhTi2QnPDnfAzb4lLXtndGBnA0ancqU0g"
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={5}
      options={{ styles: mapStyles }}
    >
      {markers.map((marker, index) => (
        <Marker
          key={index}
          position={marker.position}
          title={marker.title}
          icon={{
            path: window.google.maps.SymbolPath.CIRCLE,
            scale: 8,
            fillColor: marker.color,
            fillOpacity: 1,
            strokeWeight: 0,
          }}
        />
      ))}
    </GoogleMap>
  );
};

export default GoogleMapComponent;

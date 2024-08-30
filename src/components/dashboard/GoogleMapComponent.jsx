import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  Marker,
  useLoadScript,
} from "@react-google-maps/api";

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
    stylers: [{ color: "#000000" }, { lightness: 1 }],
  },
  {
    featureType: "administrative",
    elementType: "geometry.fill",
    stylers: [{ color: "#000000" }],
  },
  {
    featureType: "administrative",
    elementType: "geometry.stroke",
    stylers: [{ color: "#44444F" }, { lightness: 14 }, { weight: 1.4 }],
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

const GoogleMapComponent = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAhTi2QnPDnfAzb4lLXtndGBnA0ancqU0g",
  });

  const [mapReady, setMapReady] = useState(false);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    if (isLoaded && window.google) {
      setMapReady(true);
    }
  }, [isLoaded]);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await fetch("http://localhost:3005/sites");
        const data = await response.json();
        setLocations(data);
      } catch (error) {
        console.error("Error fetching locations:", error);
      }
    };

    fetchLocations();
  }, []);

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={4}
      options={{ styles: mapStyles }}
    >
      {mapReady &&
        locations.map((location, index) => {
          const imgUrl =
            location.status === "Online"
              ? "../src/assets/img/location/greenlocation.png"
              : "../src/assets/img/location/redlocation.png";
          return (
            <>
              <Marker
                key={index}
                position={{
                  lat: parseFloat(location.latitude),
                  lng: parseFloat(location.longitude),
                }}
                title={`${location.name} - ${location.status}`}
                icon={{
                  url: imgUrl,
                  scaledSize: new window.google.maps.Size(20, 25),
                }}
              />
            </>
          );
        })}
    </GoogleMap>
  );
};

export default GoogleMapComponent;

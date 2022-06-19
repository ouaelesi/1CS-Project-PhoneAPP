import { View, StyleSheet, Text } from "react-native";
import { useState, useEffect } from "react";
import MapView, { Circle, Marker, Callout } from "react-native-maps";
import ZoneCard from "../HomePage/ZoneCard";

import MapViewDirections from "react-native-maps-directions";

const Map = ({ navigation }) => {
  const coordinates = [
    { latitude: 37.3318456, longitude: -122.0296002 },
    { latitude: 37.771707, longitude: -122.4053769 },
  ];
  // Map Style
  const mapStyle = [
    {
      featureType: "all",
      elementType: "all",
      stylers: [
        {
          saturation: -100,
        },
        {
          gamma: 0.5,
        },
      ],
    },
    {
      featureType: "administrative",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#777777",
        },
      ],
    },
    {
      featureType: "administrative.locality",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#6a6a6a",
        },
      ],
    },
    {
      featureType: "landscape",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#d6d0c1",
        },
      ],
    },
    {
      featureType: "landscape.man_made",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#ddd2b5",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#d6d0c1",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#656565",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#737373",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#d6d0c1",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#777777",
        },
      ],
    },
    {
      featureType: "road.highway.controlled_access",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#ffffff",
        },
      ],
    },
    {
      featureType: "transit",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#d3cdbd",
        },
      ],
    },
    {
      featureType: "transit",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#7d7d7d",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#b2a995",
        },
      ],
    },
  ];

  const [lng, setLng] = useState(3.5);
  const [lat, setLat] = useState(35);
  const [zoom, setZoom] = useState(5);

  const [cartes, setCartes] = useState([]);
  const [markers, setMarkers] = useState([]);
  const [circles, setCircles] = useState([]);
  var loaded = false;

  useEffect(() => {
    if (!loaded) {
      fetch("http://walidthekraken.pythonanywhere.com/cartes/print", {
        methods: "GET",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setCartes(data);
        })
        .catch((error) => console.log(error));
    }
    loaded = true;
  }, []);

  useEffect(() => {
    setMarkers(
      cartes.map((carte) => (
        <Marker
          key={carte.CarteId}
          coordinate={{ latitude: carte.CarteLat, longitude: carte.CarteLong }}
          pinColor={"#E17E01"}
          fillColor={"#E17E01"}
          onPress={() => console.log(carte.CarteLat)}
        >
          <Callout tooltip>
            <ZoneCard navigation={navigation} />
          </Callout>
        </Marker>
      ))
    );

    setCircles(
      cartes.map((carte) => (
        <Circle
          key={carte.CarteId}
          center={{ latitude: carte.CarteLat, longitude: carte.CarteLong }}
          radius={carte.CartePerim}
          fillColor={"rgba(0,0,0,0.5)"}
        ></Circle>
      ))
    );
  }, [cartes]);

  return (
    <MapView
      style={styles.map}
      region={{
        latitude: lat,
        longitude: lng,
        latitudeDelta: 9.915,
        longitudeDelta: 15.9121,
        zoom: zoom,
      }}
      customMapStyle={mapStyle}
    >
      {markers}
      {circles}

      <MapViewDirections
        origin={coordinates[0]}
        destination={coordinates[1]}
        strockWidth={13}
        const
        apikey=""
        strockColor="red"
      />
    </MapView>
  );
};
const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
    zIndex: -20,
  },
});
export default Map;

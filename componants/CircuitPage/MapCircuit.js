import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { Circle, Marker } from "react-native-maps";
import CircuitInfos from "./CircuitInfos";

const MapCircuit = () => {
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

  const [cartes, setCartes] = useState([]);
  const [markers, setMarkers] = useState([]);
  const [circles, setCircles] = useState([]);

  let dataLoaded = false;

  useEffect(() => {
    if (!dataLoaded) {
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
    dataLoaded = true;
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
        ></Marker>
      ))
    );

    setCircles(
      cartes.map((carte) => (
        <Circle
          key={carte.CarteId}
          center={{ latitude: carte.CarteLat, longitude: carte.CarteLong }}
          radius={carte.CartePerim}
          fillColor={"black"}
        ></Circle>
      ))
    );
  }, [cartes]);

  return (
    <View style={Styles.mapContainer}>
      <MapView
        style={Styles.map}
        region={{
          latitude: 35,
          longitude: 3.5,
          latitudeDelta: 0.015,
          longitudeDelta: 8.9121,
          zoom: 5,
        }}
        customMapStyle={mapStyle}
      >
        {markers}
        {circles}
      </MapView>
      <View style={{}}>
        <CircuitInfos
          color={"#8F8B81"}
          bgColor={"rgba(143,139,129,.3)"}
          text={"Point"}
          value={120}
          unit={"KM"}
        />
        <CircuitInfos
          color={"#E17E01"}
          bgColor={"rgba(225,126,1,.3)"}
          text={"Point"}
          value={120}
          unit={"KM"}
        />
        <CircuitInfos
          color={"#3C464D"}
          bgColor={"rgba(40,51,59 , .3)"}
          text={"Point"}
          value={120}
          unit={"KM"}
        />
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  mapContainer: {
    width: "100%",
    height: 300,
    alignSelf: "center",
    alignItems: "center",
    marginTop: "2%",
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  map: {
    height: "100%",
    width: "70%",
  },
});

export default MapCircuit;

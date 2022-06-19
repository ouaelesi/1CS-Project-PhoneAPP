import { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";

import MapView, { Circle, Marker } from "react-native-maps";

const Map = () => {
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
  const [points, setCurrentPoints] = useState([]);
  const [currentCard, setCurrentCard] = useState([]);

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
          data.map((d) => {
            if (d.CarteId == 32) {
              setCurrentCard(d);
            }
          });
        })
        .catch((error) => console.log(error));
    }
    fetch("http://walidthekraken.pythonanywhere.com/points/print", {
      methods: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.map((p) => {
          if (p.CarteId == 32) points.push(p);
        });
      })
      .catch((error) => console.log(error));
    console.log(points);
    setCurrentPoints(points);
    dataLoaded = true;
  }, []);

  useEffect(() => {
    setMarkers(
      points.map((point) => (
        <Marker
          key={point.PointId}
          coordinate={{ latitude: point.PointLat, longitude: point.PointLong }}
          pinColor={"#E17E01"}
          fillColor={"#E17E01"}
          onPress={() => console.log(point.PointLat)}
        ></Marker>
      ))
    );

    setCircles(
      cartes.map((carte) => {
        if (carte.CarteId == 32) {
          return (
            <Circle
              key={carte.CarteId}
              center={{ latitude: carte.CarteLat, longitude: carte.CarteLong }}
              radius={carte.CartePerim}
              fillColor={"rgba(0,0,0,0.12)"}
            ></Circle>
          );
        }
      })
    );
  }, [points]);

  return (
    <View style={styles.mapContainer}>
      <MapView
        style={styles.map}
        region={{
          latitude: currentCard ? currentCard.CarteLat : 35,
          longitude: currentCard ? currentCard.CarteLong : 3.5,
          latitudeDelta: 0.015,
          longitudeDelta: 0.1721,
          zoom: 5,
        }}
        customMapStyle={mapStyle}
      >
        {markers}
        {circles}
      </MapView>
    </View>
  );
};
const styles = StyleSheet.create({
  mapContainer: {
    width: "95%",
    height: "25%",
    alignSelf: "center",
    alignItems: "center",
    marginTop: "2%",
    borderRadius: 20,
    overflow: "hidden",
  },
  map: {
    height: "100%",
    width: "100%",
  },
});
export default Map;

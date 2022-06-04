import { View , StyleSheet} from "react-native";
import {useState , useEffect} from "react";
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

  const [lng, setLng] = useState(3.5);
  const [lat, setLat] = useState(35);
  const [zoom, setZoom] = useState(5);

  const [cartes, setCartes] = useState([]);
  const [markers, setMarkers] = useState([]);
  const [circles, setCircles] = useState([]);

  var loaded = false;

 
  useEffect(()=>{
    if (!loaded){
      fetch('http://walidthekraken.pythonanywhere.com/cartes/print',{
        'methods':'GET',
        headers : {
           'content-type':'application/json'
        }
      })
      .then(response => response.json())
      .then((data) => {setCartes(data)})
      .catch(error => console.log(error))
    }
    loaded = true;
  },[])

  useEffect(()=>{
    setMarkers(cartes.map((carte)=><Marker key={carte.CarteId} coordinate={{latitude: carte.CarteLat,
      longitude: carte.CarteLong}} pinColor={'black'}>
    </Marker>))
    
    setCircles(cartes.map((carte)=><Circle key={carte.CarteId} center={{latitude: carte.CarteLat,
      longitude: carte.CarteLong}} radius={carte.CartePerim} fillColor={'#22B2A995'}>

    </Circle>))
  },[cartes])

  return (
      <MapView
        style={styles.map}
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
          zoom : zoom
        }}
        customMapStyle={mapStyle}
      >

        {markers}
        {circles}

      </MapView>
  );
};
const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
    zIndex : -20 
  },
});
export default Map;

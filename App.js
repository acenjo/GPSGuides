import * as React from 'react';
//import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput} from 'react-native';
//import {NavigationContainer} from '@react-navigation/native';
//import {createStackNavigator} from '@react-navigation/stack';
import { useEffect, useState } from 'react';
import ReactMapGL, { Marker, FlyToInterpolator } from 'react-map-gl';
import { ImLocation } from 'react-icons/im';
import Fly from './components/Fly';

//import HomeScreen from "./screens/Home.js";
//import GPSScreen from './screens/GPS';
//import TimeScreen from './screens/Time';

//const Stack = createStackNavigator();

function App() {
  const [lat, setLat] = useState(22.5726);
  const [lon, setLon] = useState(88.3639);

  const [viewport, setViewport] = useState({
    latitude: lat,
    longitude: lon,
    zoom: 12,
    bearing: 0,
    pitch: 0,
    width: '100%',
    height: '100vh',
  });
  useEffect(() => {
    setViewport({
      latitude: lat,
      longitude: lon,
      zoom: 12,
      transitionInterpolator: new FlyToInterpolator({ speed: 1.0 }),
      transitionDuration: 'auto',
      width: '100%',
      height: '100vh',
    });
  }, [lat, lon]);
  return (
    //<View>
    <ReactMapGL
      mapboxApiAccessToken={
        'pk.eyJ1IjoiYWNlLW4iLCJhIjoiY2t1ajFsZzNvMnRyajMycTZsazNudHJuZiJ9.iz2DWwvRVnPYf1n9wf4F0w'
      }
      {...viewport}
      onViewportChange={(viewport) => setViewport(viewport)}>
      <Marker latitude={lat} longitude={lon}>
        <ImLocation size="30px" />
      </Marker>
      <Fly setLat={setLat} setLon={setLon} />
    </ReactMapGL>
    // <NavigationContainer>
    // <Stack.Navigator initialRouteName = "Home" screenOptions = {{
    // headerShown: false
    // }}>
    //<Stack.Screen name = "Home" component = {HomeScreen}/>
    // <Stack.Screen name = "GPS" component = {GPSScreen}/>
    //<Stack.Screen name = "Time" component = {TimeScreen}/>
    // </Stack.Navigator>
    //  </NavigationContainer>
    //  </View>
  );
}

export default App;

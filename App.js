import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import Navigator from "./navigators/Navigator";


const App = () => {
  return (
    <>
      <Navigator/>
      <StatusBar style={styles.status} barStyle={"dark-content"} hidden={false} backgroundColor={"#00BCD4"}/>
    </>
  );
};

const styles = StyleSheet.create({

  status: {},
  settings: {
    width: "100%",
    height: "100%",
  }
});

export default App;


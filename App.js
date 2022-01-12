import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {SafeAreaView} from "react-native";
import List from "./components/list";

const url = 'https://raw.githubusercontent.com/mattpe/wbma/master/docs/assets/test.json';

const App = () => {

  let mediaArray = [];
  const loadMedia = async () => {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
  };
  loadMedia();

  return (
    <>
      <SafeAreaView style={styles.container}>
        <List/>
      </SafeAreaView>
      <StatusBar style="auto"/>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
});

export default App;


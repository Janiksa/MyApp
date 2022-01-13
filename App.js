import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {SafeAreaView} from "react-native";
import List from "./components/list";
import {View} from "react-native";
import {Image} from "react-native";
import {ImageBackground} from "react-native";
import {Text} from "react-native";
import {Menu} from "react-native-feather"


const App = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <ImageBackground
            source={require("./photos/cat.jpg")}
            style={styles.bgImage}
            imageStyle={{borderBottomRightRadius: 70}}
          />
        </View>
        <View style={styles.homeless}>
          <Text style={styles.homelessText}> Homeless Kittens</Text>
        </View>
        <View style={styles.settingView}>
          <Menu stroke={"white"} fill={"#fff"} width={32} height={32}/>
        </View>
        <List/>
        <StatusBar style={styles.status} barStyle={"dark-content"} hidden={false} backgroundColor={"#00BCD4"} />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#343434',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  status:{

  },
  settings: {
    width: "100%",
    height: "100%",
  },
  settingView: {
    display: "flex",
    position: "absolute",
    top: 60,
    right: 20,
    width: 40,
    height: 40,
  },
  homelessText: {
    display: "flex",
    color: "white",
    fontWeight: "bold",

  },
  homeless: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 250,
    left: 0,
    backgroundColor: "blue",
    width: 180,
    height: 40,
  },
  bgImage: {
    width: "100%",
    height: "100%",
    borderBottomRightRadius: 70,
  },
  header: {
    width: "100%",
    height: 270,
    borderBottomRightRadius: 70,


  }
});

export default App;


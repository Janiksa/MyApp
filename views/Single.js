import React from 'react';
import {StyleSheet, SafeAreaView, Text} from 'react-native';
import PropTypes from "prop-types"
import {Image} from "react-native";
import View from "react-native";
import {uploads} from "../utils/variables";


const Single = ({route}) => {
  const file = route.params.file;

  return (
    <SafeAreaView style={styles.container}>
      <Text>{file.title}</Text>
      <Image
        style={{height: "90%", width: "90%"}}
        source={{uri: uploads + file.filename}}
        resizeMode="contain"/>

      <Text>{file.description}</Text>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
});

Single.propTypes = {
  route: PropTypes.object,
}


export default Single;

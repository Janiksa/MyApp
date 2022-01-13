import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import PropTypes from 'prop-types';
import {uploads} from "../utils/variables";






const ListItem = ({ singleMedia }) => {

  return (
    <TouchableOpacity style={[styles.row]}>
      <Image
        style={{width: 150, height: 100, margin: 10, borderRadius: 5, borderBottomLeftRadius: 50}}
        source={{uri: uploads + singleMedia.thumbnails?.w160}}
      />
      <View>
        <Text style={ [styles.font] }>{singleMedia.title}</Text>
        <Text style={{width: 150, padding: 10, color: "grey"}}>{singleMedia.description}</Text>
      </View>
    </TouchableOpacity>
  );
}

ListItem.propTypes = {
  singleMedia: PropTypes.object,
};

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: "row",
    margin: 5,
    backgroundColor: "#36454F",
  },
  font:{
    fontFamily: "notoserif",
    color: "white",
    fontWeight: "bold",
    margin: 10
  }
});
export default ListItem;

import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import PropTypes from 'prop-types';


const ListItem = ({singleMedia}) => {

  return (
    <TouchableOpacity style={[styles.row]}>
      <Image
        style={{width: 120, height: 250, margin: 10,}}
        source={{uri: singleMedia.thumbnails.w160}}
      />
      <View>
        <Text style={{fontWeight: "bold", padding: 5, margin: 10}}>{singleMedia.title}</Text>
        <Text style={{width: 210}}>{singleMedia.description}</Text>
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
    margin: 2,
    backgroundColor: "lightgrey",
  },
});
export default ListItem;

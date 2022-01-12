import React from 'react';
import {FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useState, useEffect} from "react";

import ListItem from "./listItem";

const url = 'https://raw.githubusercontent.com/mattpe/wbma/master/docs/assets/test.json';


const List = () => {
  const [mediaArray, setMediaArray] = useState([]);
  const loadMedia = async () => {

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const json = await response.json();
      setMediaArray(json);
      console.log(json);

    } catch (e) {
      console.error("Api fetch failed", error);
    }

  };
  //Called only once when array brackets are empty
  useEffect(() => {
    loadMedia();
  }, []);


  return (
    <>
      <FlatList
        data={mediaArray}
        keyExtractor = { (item) => item.title }
        renderItem={({item}) => <ListItem singleMedia={item}/>}
      />
    </>
  );
};


export default List;

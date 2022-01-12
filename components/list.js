import React from 'react';
import {FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useState, useEffect} from "react";

import ListItem from "./listItem";
import {api} from "../utils/variables";
import {useMedia} from "../hooks/ApiHooks"


const List = () => {

  const {mediaArray} = useMedia();

  return (
    <>
      <FlatList
        data={mediaArray}
        keyExtractor={(item) => item.file_id.toString()}
        renderItem={({item}) => <ListItem singleMedia={item}/>}
      />
    </>
  );
};


export default List;

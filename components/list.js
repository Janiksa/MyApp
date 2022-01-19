import React from 'react';
import {FlatList} from "react-native";

import ListItem from "./listItem";

import {useMedia} from "../hooks/ApiHooks"
import Home from "../views/Home";
import PropTypes from "prop-types"

const List = ({navigation}) => {

  const {mediaArray} = useMedia();

  return (
    <>
      <FlatList
        data={mediaArray}
        keyExtractor={(item) => item.file_id.toString()}
        renderItem={({item}) => <ListItem navigation={navigation} singleMedia={item}/>}
      />
    </>
  );
};

Home.propTypes = {
  navigation: PropTypes.object,
}

export default List;

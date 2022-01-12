"use strict"
import React from 'react';
import {api} from "../utils/variables";
import {useState, useEffect} from "react";


const useMedia = () => {

  const [mediaArray, setMediaArray] = useState([]);
  const loadMedia = async () => {

    try {
      const response = await fetch(api + "media/");
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const json = await response.json();
      const media = await Promise.all(
        json.map(async (item) => {
          const response = await fetch(api + "media/" + item.file_id)
          const mediaData = await response.json();
          return mediaData;
        }));
      setMediaArray(media);
      console.log(json);


    } catch (e) {
      console.error("Api fetch failed", error);
    }

  };
  //Called only once when array brackets are empty
  useEffect(() => {
    loadMedia();
  }, []);

  return {mediaArray}
}

export {useMedia};

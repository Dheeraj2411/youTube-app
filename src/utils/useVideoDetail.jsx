import { useEffect, useState } from "react";
import { API_KEY, CHANNEL_API } from "./constant";

const useVideoDetail = (video) => {
  const [resInfo, setResData] = useState(null);
  const channelId = video.map((id) => {
    return id?.snippet?.channelId;
  });
  // console.log(channelId);
  useEffect(() => {
    channelThumbnail();
  }, []);
  console.log(video);
  const channelThumbnail = async () => {
    try {
      // live Data
      const response = await fetch(CHANNEL_API + channelId + "&key=" + API_KEY);
      const videoData = await response.json();
      const channelThumb = videoData;
      console.log(channelThumb);
      // const itemCategory =
      //   "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
      // const NestedItemCategory =
      //   "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory";
      // //  mock DATA
      // const menu = menuItemsList.map((item) => {
      //   if (
      //     item.card.card["@type"] === itemCategory ||
      //     item.card.card["@type"] === NestedItemCategory
      //   ) {
      //     return item.card.card;
      //   }
      // });
      // const modifiedData = {
      //   info: res_Data.data.cards[0].card.card.info,
      //   menu: menu.filter((value) => value !== undefined),
      // };
      // setResData(modifiedData);
    } catch (error) {
      console.log(error);
    }
  };
  return resInfo;
};
export default useVideoDetail;

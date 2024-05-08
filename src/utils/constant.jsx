export const API_KEY = "AIzaSyDSz4W9kz6X9tTCUpiWGTdLJdfx_xm92tk";
// export const API_KEY = "AIzaSyD2URC5KUapNY2UKizMFHhqP-hkP5SHi8sk";
export const YOUTUBE_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  API_KEY;

export const CHANNEL_API =
  "https://youtube.googleapis.com/youtube/v3/channels?maxResults=50&part=snippet&id=";
export const SEARCH_VIDEO_API =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=100&type=video&key=" +
  API_KEY +
  "&q=";
export const SEARCH_SUGGESTION_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

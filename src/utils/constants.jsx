export const GOOGLE_API_KEY = "AIzaSyAjrxXH8y4LY_p0OCgMaqqFwG5NH5sb6EA";

export const YOUTUBE_VIDEO_API =
   "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=" + GOOGLE_API_KEY;

export const BASE_URL = 'https://youtube.googleapis.com/youtube/v3';

export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const VIDEO_API =
     "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" +
     GOOGLE_API_KEY +
     "&id=";
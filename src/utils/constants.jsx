// export const GOOGLE_API_KEY = "AIzaSyCnQlXcelA4LB-xIneewyNWz7mcJKz8veU";
export const GOOGLE_API_KEY = "AIzaSyBWjheKLrX16wF98wnWee-H9X7q2fiQAvM";


export const YOUTUBE_VIDEO_API =
   "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + GOOGLE_API_KEY;


export const COMMENTS_LIST_API = "https://www.googleapis.com/youtube/v3/commentThreads?key="+GOOGLE_API_KEY+"&textFormat=plainText&part=snippet&maxResults=50&orderby=likeCount&videoId=";

export const SUGGESTED_VIDEO_LIST_API_URL = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=59&type=video&regionCode=IN&key="+GOOGLE_API_KEY+"&relatedToVideoId=";

export const YOUTUBE_SEARCH_API = "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const VIDEO_API =
     "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key="+GOOGLE_API_KEY +"&id=";


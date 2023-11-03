import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import Youtubelogo from "../assets/Header/YoutubeLogo.svg"
import mic from "../assets/Header/mic.svg"
import profile from "../assets/Header/profile.svg"
import dots from "../assets/Header/3dots.svg"

const Head = () => {
     const [searchQuery, setSearchQuery] = useState("");
     const [suggestions, setSuggestions] = useState([]);
     const [showSuggestions, setShowSuggestions] = useState(false);

     const searchCache = useSelector((store) => store.search);
     const dispatch = useDispatch();

     useEffect(() => {
          const timer = setTimeout(() => {
               if (searchCache[searchQuery]) {
                    setSuggestions(searchCache[searchQuery]);
               } else {
                    getSearchSuggestions()
               }
          }, 200);

          //destroy component
          return () => {
               clearTimeout(timer);
          };
     }, [searchQuery]); //render after every search change


     //clear yt search api
     const getSearchSuggestions = async () => {
          const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
          const json = await data.json();
          console.log(json[1]);
          setSuggestions(json[1]);
          dispatch(
               cacheResults({
                    [searchQuery]: json[1],
               })
          );
     };

     //toggle hamburger
     const toggleMenuHandler = () => {
          dispatch(toggleMenu());
     };
     //656px w pe search bar turns to a button
     return (
          <div className="bg-white sticky top-0 flex px-4 pb-1 items-center flex-row justify-between">
               <div className="flex items-center mt-1">
                    <img
                         onClick={() => toggleMenuHandler()}
                         className="h-[31px] cursor-pointer mx-2"
                         src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII="
                         alt="menu"
                    />
                    <a href='/'>
                         <img
                              alt='ytlogo'
                              className="ml-4 w-[100px]"
                              src={Youtubelogo}
                         />
                    </a>
               </div >
               
               <div className="flex items-center mt-1">
                    <form className='font-medium p-1'
                         onSubmit={(e) => {
                              e.preventDefault()
                              setSearchQuery("")
                         }}>
                         <div className="flex items-center ml-10 rounded-3xl border-2 max-w-[600px]">
                              <input
                                   type="text"
                                   placeholder="Search"
                                   className="rounded-l-3xl p-2 pl-5 focus:outline-none w-full"
                                   value={searchQuery}
                                   onChange={(e) => setSearchQuery(e.target.value)}
                                   onFocus={() => setShowSuggestions(true)}
                                   onBlur={() => setShowSuggestions(false)}
                              />
                              <button className="w-20 h-10 border-l bg-gray-100 rounded-r-3xl">
                                   <img
                                        className="h-5 pl-5"
                                        alt="search"
                                        src="https://img.icons8.com/?size=512&id=132&format=png" />
                              </button>
                         </div>
                         {showSuggestions &&
                              <div className="absolute bg-white rounded-xl ml-10 p-2 pl-5 w-[600px] shadow-2xl">
                                   <ul>
                                        {suggestions.map((sug, index) => (
                                             <div className="py-1 flex items-center">
                                                  <img
                                                       className="h-[18px]"
                                                       alt="search"
                                                       src="https://img.icons8.com/?size=512&id=132&format=png" />
                                                  <li key={index} className='py-1 px-4 hover:bg-gray-200 font-medium'>{sug}</li>
                                             </div>
                                        ))}
                                   </ul>
                              </div>
                         }
                    </form>

                    <div><img className="w-6 ml-3" src={mic} alt="" /></div>
               </div>
               <div className="flex items-center flex-row mt-1">
                    <div className="mr-4"> <img src={dots} alt="dots" /></div>
                    <div className="flex border px-3 py-2 rounded-3xl">
                         <img src={profile} alt="pp" />
                         <button className='px-1 text-blue-600 text-[500]'>Sign in</button>
                    </div>
               </div>
          </div>
     );
};

export default Head;

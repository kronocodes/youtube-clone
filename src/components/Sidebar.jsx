import React from 'react'
import { useSelector } from 'react-redux';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";

import Home from '../assets/Sidemenu/Home.svg';
import Shorts from '../assets/Sidemenu/shorts.svg';
import Library from '../assets/Sidemenu/library.svg';
import History from '../assets/Sidemenu/history.svg';
import Subs from '../assets/Sidemenu/Subs.svg';
import Browse from '../assets/Sidemenu/Browse.svg';
import FB from '../assets/Sidemenu/FB.svg';
import Gaming from '../assets/Sidemenu/Gaming.svg';
import Help from '../assets/Sidemenu/Help.svg';
import Learning from '../assets/Sidemenu/Learning.svg';
import Live from '../assets/Sidemenu/Live.svg';
import Movies from '../assets/Sidemenu/Movies.svg';
import Music from '../assets/Sidemenu/Music.svg';
import News from '../assets/Sidemenu/News.svg';
import Report from '../assets/Sidemenu/Report.svg';
import Send from '../assets/Sidemenu/Send.svg';
import Settings from '../assets/Sidemenu/Settings.svg';
import Shopping from '../assets/Sidemenu/Shopping.svg';
import Sports from '../assets/Sidemenu/Sports.svg';
import Trending from '../assets/Sidemenu/Trending.svg';
import Ytkids from '../assets/Sidemenu/Ytkids.svg';
import Ytmusic from '../assets/Sidemenu/Ytmusic.svg';
import Ytpremium from '../assets/Sidemenu/Ytpremium.svg';
import profile from "../assets/Header/profile.svg"




const Sidebar = () => {
     const isMenuOpen = useSelector(store => store.app.isMenuOpen);
     const breakpoint = 1312;
     const dispatch = useDispatch();

     useEffect(() => {
          const checkisMobile = () => {
               if (isMenuOpen && window.innerWidth < breakpoint) {
                    dispatch(toggleMenu());
               }
          };
          checkisMobile();
          // eslint-disable-next-line
     }, []);
     const isMobile = () => {
          if (window.innerWidth <= 768) {
               return true;
          } else {
               return false;
          }
     };
     useEffect(() => {
          const handleWindowResize = () => {
               if (isMenuOpen && window.innerWidth < breakpoint) {
                    dispatch(toggleMenu());
               }
          };
          window.addEventListener("resize", handleWindowResize);

          return () => {
               window.removeEventListener("resize", handleWindowResize);
          };
     }, [isMenuOpen, dispatch]);


     return isMenuOpen ? (
          !isMobile() ? (
               <div className='flex flex-col px-3 pt-2 border-r h-full w-[236px] text-sm top-10 bg-white'>
                    <div className='flex flex-col border-b  pb-3'>
                         <button className='flex items-center rounded-xl px-3 h-10 w-56 hover:bg-zinc-100'>
                              <img
                                   alt='home' className='w-[25px] mr-6' src={Home} />
                              <span >Home</span>
                         </button>
                         <button className='flex items-center rounded-xl px-3 h-10 w-56 hover:bg-zinc-100'>
                              <img alt='home' className='w-[25px] mr-6' src={Shorts} />
                              <span>Shorts</span>
                         </button>
                         <button className='flex items-center rounded-xl px-3 h-10 w-56 hover:bg-zinc-100'>
                              <img alt='home' className='w-[25px] mr-6' src={Subs} />
                              <span>Subscriptions</span>
                         </button>
                    </div>
                    <div className='flex flex-col border-b py-3'>
                         <button className='flex items-center rounded-xl px-3 h-10 w-56 hover:bg-zinc-100'>
                              <img alt='home' className='w-[25px] mr-6' src={Library} />
                              <span>Library</span>
                         </button>
                         <button className='flex items-center rounded-xl px-3 h-10 w-56 hover:bg-zinc-100'>
                              <img alt='home' className='w-[25px] mr-6' src={History} />
                              <span>History</span>
                         </button>
                    </div>
                    <div className='pl-5 pb-5 border-b'>
                         <div className='text-sm py-3'> Sign in to like videos, comment, and subscribe.</div>
                         <div className="flex border px-3 py-[5px] w-28 rounded-3xl ">
                              <img src={profile} alt="pp" />
                              <button className='text-blue-600 text-[500]'>Sign in</button>
                         </div>
                    </div>
                    <div className='flex flex-col border-b py-3'>
                         <h1 className='py-1 pl-3'>Explore</h1>
                         <button className='flex items-center rounded-xl px-3 h-10 w-56 hover:bg-zinc-100'>
                              <img alt='home' className='w-[25px] mr-6' src={Trending} />
                              <span>Trending</span>
                         </button>
                         <button className='flex items-center rounded-xl px-3 h-10 w-56 hover:bg-zinc-100'>
                              <img alt='home' className='w-[25px] mr-6' src={Shopping} />
                              <span>Shopping</span>
                         </button>
                         <button className='flex items-center rounded-xl px-3 h-10 w-56 hover:bg-zinc-100'>
                              <img alt='home' className='w-[25px] mr-6' src={Music} />
                              <span>Music</span>
                         </button>
                         <button className='flex items-center rounded-xl px-3 h-10 w-56 hover:bg-zinc-100'>
                              <img alt='home' className='w-[25px] mr-6' src={Movies} />
                              <span>Movies</span>
                         </button>
                         <button className='flex items-center rounded-xl px-3 h-10 w-56 hover:bg-zinc-100'>
                              <img alt='home' className='w-[25px] mr-6' src={Live} />
                              <span>Live</span>
                         </button>
                         <button className='flex items-center rounded-xl px-3 h-10 w-56 hover:bg-zinc-100'>
                              <img alt='home' className='w-[25px] mr-6' src={Gaming} />
                              <span>Gaming</span>
                         </button>
                         <button className='flex items-center rounded-xl px-3 h-10 w-56 hover:bg-zinc-100'>
                              <img alt='home' className='w-[25px] mr-6' src={News} />
                              <span>News</span>
                         </button>
                         <button className='flex items-center rounded-xl px-3 h-10 w-56 hover:bg-zinc-100'>
                              <img alt='home' className='w-[25px] mr-6' src={Sports} />
                              <span>Sports</span>
                         </button>
                         <button className='flex items-center rounded-xl px-3 h-10 w-56 hover:bg-zinc-100'>
                              <img alt='home' className='w-[25px] mr-6' src={Learning} />
                              <span>Learning</span>
                         </button>
                         <button className='flex items-center rounded-xl px-3 h-10 w-56 hover:bg-zinc-100'>
                              <img alt='home' className='w-[25px] mr-6' src={FB} />
                              <span>Fashion & Beauty</span>
                         </button>
                    </div>

                    <div className='border-b py-3'>
                         <button className='flex items-center rounded-xl px-3 h-10 w-56 hover:bg-zinc-100'>
                              <img alt='home' className='w-6 h-6 mr-6' src={Browse} />
                              <span>Browse</span>
                         </button>
                    </div>
                    <div className='flex flex-col border-b py-3'>
                         <h1 className='pl-3 py-1 text-[15px]'>More from YouTube</h1>
                         <button className='flex items-center rounded-xl px-3 h-10 w-56 hover:bg-zinc-100'>
                              <img alt='home' className='w-[25px] mr-6' src={Ytpremium} />
                              <span>YouTube Premium</span>
                         </button>
                         <button className='flex items-center rounded-xl px-3 h-10 w-56 hover:bg-zinc-100'>
                              <img alt='home' className='w-[25px] mr-6' src={Ytmusic} />
                              <span>YouTube Music</span>
                         </button>
                         <button className='flex items-center rounded-xl px-3 h-10 w-56 hover:bg-zinc-100'>
                              <img alt='home' className='w-[25px] mr-6' src={Ytkids} />
                              <span>YouTube Kids</span>
                         </button>
                    </div>
                    <div className='flex flex-col border-b  py-3'>
                         <button className='flex items-center rounded-xl px-3 h-10 w-56 hover:bg-zinc-100'>
                              <img
                                   alt='home' className='w-[25px] mr-6' src={Settings} />
                              <span>Settings</span>
                         </button>
                         <button className='flex items-center rounded-xl px-3 h-10 w-56 hover:bg-zinc-100'>
                              <img alt='home' className='w-[25px] mr-6' src={Report} />
                              <span>Report history</span>
                         </button>
                         <button className='flex items-center rounded-xl px-3 h-10 w-56 hover:bg-zinc-100'>
                              <img alt='home' className='w-[25px] mr-6' src={Help} />
                              <span>Help</span>
                         </button>
                         <button className='flex items-center rounded-xl px-3 h-10 w-56 hover:bg-zinc-100'>
                              <img alt='home' className='w-[25px] mr-6' src={Send} />
                              <span>Send feedback</span>
                         </button>
                    </div>
                    <div className='flex flex-wrap py-3 pl-3 text-[13px]'>
                         <p>Terms</p>
                         <p>Privacy</p>
                         <p>Policy & Safety</p>
                         <p>How YouTube works  Test new features</p>
                         <p>2023 AN LLC</p>
                    </div>
               </div>
          ) : (

                    <div className='flex flex-col px-3 pt-2 border-r text-sm'>
                         <div className='flex flex-col border-b  pb-3'>
                              <button className='flex items-center rounded-xl px-3 h-10 w-56 hover:bg-zinc-100'>
                                   <img
                                        alt='home' className='w-[25px] mr-6' src={Home} />
                                   <span>Home</span>
                              </button>
                              <button className='flex items-center rounded-xl px-3 h-10 w-56 hover:bg-zinc-100'>
                                   <img alt='home' className='w-[25px] mr-6' src={Shorts} />
                                   <span>Shorts</span>
                              </button>
                              <button className='flex items-center rounded-xl px-3 h-10 w-56 hover:bg-zinc-100'>
                                   <img alt='home' className='w-[25px] mr-6' src={Subs} />
                                   <span>Subscriptions</span>
                              </button>
                         </div>
                         <div className='flex flex-col border-b py-3'>
                              <button className='flex items-center rounded-xl px-3 h-10 w-56 hover:bg-zinc-100'>
                                   <img alt='home' className='w-[25px] mr-6' src={Library} />
                                   <span>Library</span>
                              </button>
                              <button className='flex items-center rounded-xl px-3 h-10 w-56 hover:bg-zinc-100'>
                                   <img alt='home' className='w-[25px] mr-6' src={History} />
                                   <span>History</span>
                              </button>
                         </div>
                         <div className='pl-5 pb-5 border-b'>
                              <div className='text-sm py-3'> Sign in to like videos, comment, and subscribe.</div>
                              <div className="flex border px-3 py-[5px] w-28 rounded-3xl ">
                                   <img src={profile} alt="pp" />
                                   <button className='text-blue-600 text-[500]'>Sign in</button>
                              </div>
                         </div>
                         <div className='flex flex-col border-b py-3'>
                              <h1 className='py-1 pl-3'>Explore</h1>
                              <button className='flex items-center rounded-xl px-3 h-10 w-56 hover:bg-zinc-100'>
                                   <img alt='home' className='w-[25px] mr-6' src={Trending} />
                                   <span>Trending</span>
                              </button>
                              <button className='flex items-center rounded-xl px-3 h-10 w-56 hover:bg-zinc-100'>
                                   <img alt='home' className='w-[25px] mr-6' src={Shopping} />
                                   <span>Shopping</span>
                              </button>
                              <button className='flex items-center rounded-xl px-3 h-10 w-56 hover:bg-zinc-100'>
                                   <img alt='home' className='w-[25px] mr-6' src={Music} />
                                   <span>Music</span>
                              </button>
                              <button className='flex items-center rounded-xl px-3 h-10 w-56 hover:bg-zinc-100'>
                                   <img alt='home' className='w-[25px] mr-6' src={Movies} />
                                   <span>Movies</span>
                              </button>
                              <button className='flex items-center rounded-xl px-3 h-10 w-56 hover:bg-zinc-100'>
                                   <img alt='home' className='w-[25px] mr-6' src={Live} />
                                   <span>Live</span>
                              </button>
                              <button className='flex items-center rounded-xl px-3 h-10 w-56 hover:bg-zinc-100'>
                                   <img alt='home' className='w-[25px] mr-6' src={Gaming} />
                                   <span>Gaming</span>
                              </button>
                              <button className='flex items-center rounded-xl px-3 h-10 w-56 hover:bg-zinc-100'>
                                   <img alt='home' className='w-[25px] mr-6' src={News} />
                                   <span>News</span>
                              </button>
                              <button className='flex items-center rounded-xl px-3 h-10 w-56 hover:bg-zinc-100'>
                                   <img alt='home' className='w-[25px] mr-6' src={Sports} />
                                   <span>Sports</span>
                              </button>
                              <button className='flex items-center rounded-xl px-3 h-10 w-56 hover:bg-zinc-100'>
                                   <img alt='home' className='w-[25px] mr-6' src={Learning} />
                                   <span>Learning</span>
                              </button>
                              <button className='flex items-center rounded-xl px-3 h-10 w-56 hover:bg-zinc-100'>
                                   <img alt='home' className='w-[25px] mr-6' src={FB} />
                                   <span>Fashion & Beauty</span>
                              </button>
                         </div>

                         <div className='border-b py-3'>
                              <button className='flex items-center rounded-xl px-3 h-10 w-56 hover:bg-zinc-100'>
                                   <img alt='home' className='w-6 h-6 mr-6' src={Browse} />
                                   <span>Browse</span>
                              </button>
                         </div>
                         <div className='flex flex-col border-b py-3'>
                              <h1 className='pl-3 py-1 text-[15px]'>More from YouTube</h1>
                              <button className='flex items-center rounded-xl px-3 h-10 w-56 hover:bg-zinc-100'>
                                   <img alt='home' className='w-[25px] mr-6' src={Ytpremium} />
                                   <span>YouTube Premium</span>
                              </button>
                              <button className='flex items-center rounded-xl px-3 h-10 w-56 hover:bg-zinc-100'>
                                   <img alt='home' className='w-[25px] mr-6' src={Ytmusic} />
                                   <span>YouTube Music</span>
                              </button>
                              <button className='flex items-center rounded-xl px-3 h-10 w-56 hover:bg-zinc-100'>
                                   <img alt='home' className='w-[25px] mr-6' src={Ytkids} />
                                   <span>YouTube Kids</span>
                              </button>
                         </div>
                         <div className='flex flex-col border-b  py-3'>
                              <button className='flex items-center rounded-xl px-3 h-10 w-56 hover:bg-zinc-100'>
                                   <img
                                        alt='home' className='w-[25px] mr-6' src={Settings} />
                                   <span>Settings</span>
                              </button>
                              <button className='flex items-center rounded-xl px-3 h-10 w-56 hover:bg-zinc-100'>
                                   <img alt='home' className='w-[25px] mr-6' src={Report} />
                                   <span>Report history</span>
                              </button>
                              <button className='flex items-center rounded-xl px-3 h-10 w-56 hover:bg-zinc-100'>
                                   <img alt='home' className='w-[25px] mr-6' src={Help} />
                                   <span>Help</span>
                              </button>
                              <button className='flex items-center rounded-xl px-3 h-10 w-56 hover:bg-zinc-100'>
                                   <img alt='home' className='w-[25px] mr-6' src={Send} />
                                   <span>Send feedback</span>
                              </button>
                         </div>
                         <div className='flex flex-wrap py-3 pl-3 text-[13px]'>
                              <p>Terms</p>
                              <p>Privacy</p>
                              <p>Policy & Safety</p>
                              <p>How YouTube works  Test new features</p>
                              <p>2023 AN LLC</p>
                         </div>
                    </div>
          )
     ) : (
          !isMobile() && (
               <></>
               // <div className="top-14 mx-1 text-[11px] items-center w-[74px] ">
               //      <div className='mt-1 ml-1 flex flex-col'>
               //           <Link to="/" className=" w-full">
               //                <div className="py-4 flex flex-col items-center justify-center hover:bg-zinc-200  rounded-xl cursor-pointer">
               //                     <img
               //                          className='h-[26px] my-1'
               //                          alt="home-logo"
               //                          src={Home} />
               //                     <span className=''>Home</span>
               //                </div>
               //           </Link>
               //           <Link to="/" className=" w-full">
               //                <div className="py-4 flex flex-col items-center  justify-center hover:bg-zinc-200 rounded-xl cursor-pointer">
               //                     <img
               //                          className='h-[26px] my-1'
               //                          src={Shorts}
               //                          alt="shorts-logo"
               //                     />
               //                     <span>Shorts</span>
               //                </div>
               //           </Link>
               //           <Link to="/" className=" w-full">
               //                <div className="py-4 flex flex-col items-center justify-center hover:bg-zinc-200 rounded-xl cursor-pointer">
               //                     <img
               //                          className='h-[26px] my-1'
               //                          alt="shorts-logo"
               //                          src={Subs}
               //                     />
               //                     <p className='m'>Subscriptions</p>
               //                </div>
               //           </Link>
               //           <Link to="/" className=" w-full">
               //                <div className="py-4 flex flex-col items-center justify-center hover:bg-zinc-200 rounded-xl cursor-pointer">
               //                     <img
               //                          className='h-[26px] my-1'
               //                          alt="shorts-logo"
               //                          src={Library} />
               //                     <span>Library</span>
               //                </div>
               //           </Link>
               //           <Link to="/" className=" w-full">
               //                <div className="py-4 flex flex-col items-center justify-center hover:bg-zinc-200 rounded-xl cursor-pointer">
               //                     <img
               //                          className='h-[26px] mb-1'
               //                          alt="shorts-logo"
               //                          src={History} />
               //                     <span>History</span>
               //                </div>
               //           </Link>
               //      </div>
               // </div>
          )
     );
};

export default Sidebar;
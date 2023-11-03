
import { useDispatch, useSelector } from "react-redux";
import { toggleSideBar } from "../utils/appSlice";

const SideBarExpanded = () => {
  const dispatch = useDispatch();
  const isSideBarOpen = useSelector((store) => store.app.isSideBarOpen);

  const toggleSideBarHandler = () => {
    dispatch(toggleSideBar());
  };

  return (
    <div className={!isSideBarOpen && "hidden"}>
      <div
        className="sticky w-full h-full bg-black/40 top-0 left-0 z-10"
        onClick={toggleSideBarHandler}
      ></div>
      <div className="sidebar2 border dark:border-none flex  flex-col w-[15rem]  h-full overflow-y-scroll overflow-x-hidden absolute top-0 left-0 bg-white z-20 dark:bg-zinc-900 dark:text-white">
        <div className="toggleAndlogo flex pl-4 pt-4 items-center ">
          <button
            className="p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-700 "
            onClick={toggleSideBarHandler}
          >
            <img
              alt=""
              src="https://cdn.pixabay.com/photo/2017/11/10/05/05/youtube-2935416_1280.png"
              size="1.5rem"
              title="hambergur menu"
              className="cursor-pointer"
            />
          </button>
          <div className="logo cursor-pointer flex items-center ">
            <a href="/">
              <img
                src="https://cdn.pixabay.com/photo/2017/11/10/05/05/youtube-2935416_1280.png"
                alt="logo"
                title="logo"
                className="w-28 pl-2 "
              />
            </a>
          </div>
        </div>
        <div className='flex flex-col'>
          <div className='flex flex-col border-b p-3'>
            <button className='flex items-center rounded-lg w-[180px] h-10 px-3  hover:bg-slate-100'>
              <img alt='home' className='w-6 h-6 mr-6' src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCIgZm9jdXNhYmxlPSJmYWxzZSIgY2xhc3M9InN0eWxlLXNjb3BlIHl0LWljb24iIHN0eWxlPSJwb2ludGVyLWV2ZW50czogbm9uZTsgZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7Ij48ZyBjbGFzcz0ic3R5bGUtc2NvcGUgeXQtaWNvbiI+PHBhdGggZD0iTTQsMTBWMjFoNlYxNWg0djZoNlYxMEwxMiwzWiIgY2xhc3M9InN0eWxlLXNjb3BlIHl0LWljb24iLz48L2c+PC9zdmc+' />
              <span className='h-5 text-sm'>Home</span>
            </button>
            <button className='flex items-center w-[180px] h-10 px-3 hover:bg-slate-100 text-sm'>
              <img alt='home' className='w-6 h-6 mr-6' src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCIgZm9jdXNhYmxlPSJmYWxzZSIgY2xhc3M9InN0eWxlLXNjb3BlIHl0LWljb24iIHN0eWxlPSJwb2ludGVyLWV2ZW50czogbm9uZTsgZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7Ij48ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgY2xhc3M9InN0eWxlLXNjb3BlIHl0LWljb24iPjxwYXRoIGQ9Ik0xMCAxNC42NXYtNS4zTDE1IDEybC01IDIuNjV6bTcuNzctNC4zM2MtLjc3LS4zMi0xLjItLjUtMS4yLS41TDE4IDkuMDZjMS44NC0uOTYgMi41My0zLjIzIDEuNTYtNS4wNnMtMy4yNC0yLjUzLTUuMDctMS41Nkw2IDYuOTRjLTEuMjkuNjgtMi4wNyAyLjA0LTIgMy40OS4wNyAxLjQyLjkzIDIuNjcgMi4yMiAzLjI1LjAzLjAxIDEuMi41IDEuMi41TDYgMTQuOTNjLTEuODMuOTctMi41MyAzLjI0LTEuNTYgNS4wNy45NyAxLjgzIDMuMjQgMi41MyA1LjA3IDEuNTZsOC41LTQuNWMxLjI5LS42OCAyLjA2LTIuMDQgMS45OS0zLjQ5LS4wNy0xLjQyLS45NC0yLjY4LTIuMjMtMy4yNXptLS4yMyA1Ljg2bC04LjUgNC41Yy0xLjM0LjcxLTMuMDEuMi0zLjcyLTEuMTQtLjcxLTEuMzQtLjItMy4wMSAxLjE0LTMuNzJsMi4wNC0xLjA4di0xLjIxbC0uNjktLjI4LTEuMTEtLjQ2Yy0uOTktLjQxLTEuNjUtMS4zNS0xLjctMi40MS0uMDUtMS4wNi41Mi0yLjA2IDEuNDYtMi41Nmw4LjUtNC41YzEuMzQtLjcxIDMuMDEtLjIgMy43MiAxLjE0LjcxIDEuMzQuMiAzLjAxLTEuMTQgMy43MkwxNS41IDkuMjZ2MS4yMWwxLjguNzRjLjk5LjQxIDEuNjUgMS4zNSAxLjcgMi40MS4wNSAxLjA2LS41MiAyLjA2LTEuNDYgMi41NnoiIGNsYXNzPSJzdHlsZS1zY29wZSB5dC1pY29uIi8+PC9nPjwvc3ZnPg==' />
              <span className='h-5 text-sm'>Shorts</span>
            </button>
            <button className='flex items-center w-[180px] h-10 px-3 hover:bg-slate-100 text-sm'>
              <img alt='home' className='w-6 h-6 mr-6' src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCIgZm9jdXNhYmxlPSJmYWxzZSIgY2xhc3M9InN0eWxlLXNjb3BlIHl0LWljb24iIHN0eWxlPSJwb2ludGVyLWV2ZW50czogbm9uZTsgZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7Ij48ZyBjbGFzcz0ic3R5bGUtc2NvcGUgeXQtaWNvbiI+PHBhdGggZD0iTTEwLDE4di02bDUsM0wxMCwxOHogTTE3LDNIN3YxaDEwVjN6IE0yMCw2SDR2MWgxNlY2eiBNMjIsOUgydjEyaDIwVjl6IE0zLDEwaDE4djEwSDNWMTB6IiBjbGFzcz0ic3R5bGUtc2NvcGUgeXQtaWNvbiIvPjwvZz48L3N2Zz4=' />
              <span className='h-5 text-sm'>Subscriptions</span>
            </button>
          </div>
          <div className='flex flex-col border-b p-3'>
            <button className='flex items-center rounded-lg w-[180px] h-10 px-3 hover:bg-slate-100'>
              <img alt='home' className='w-6 h-6 mr-6' src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCIgZm9jdXNhYmxlPSJmYWxzZSIgY2xhc3M9InN0eWxlLXNjb3BlIHl0LWljb24iIHN0eWxlPSJwb2ludGVyLWV2ZW50czogbm9uZTsgZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7Ij48ZyBjbGFzcz0ic3R5bGUtc2NvcGUgeXQtaWNvbiI+PHBhdGggZD0iTTQsMTBWMjFoNlYxNWg0djZoNlYxMEwxMiwzWiIgY2xhc3M9InN0eWxlLXNjb3BlIHl0LWljb24iLz48L2c+PC9zdmc+' />
              <span className='h-5 text-sm'>Library</span>
            </button>
            <button className='flex items-center w-[180px] h-10 px-3 hover:bg-slate-100 text-sm'>
              <img alt='home' className='w-6 h-6 mr-6' src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCIgZm9jdXNhYmxlPSJmYWxzZSIgY2xhc3M9InN0eWxlLXNjb3BlIHl0LWljb24iIHN0eWxlPSJwb2ludGVyLWV2ZW50czogbm9uZTsgZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7Ij48ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgY2xhc3M9InN0eWxlLXNjb3BlIHl0LWljb24iPjxwYXRoIGQ9Ik0xMCAxNC42NXYtNS4zTDE1IDEybC01IDIuNjV6bTcuNzctNC4zM2MtLjc3LS4zMi0xLjItLjUtMS4yLS41TDE4IDkuMDZjMS44NC0uOTYgMi41My0zLjIzIDEuNTYtNS4wNnMtMy4yNC0yLjUzLTUuMDctMS41Nkw2IDYuOTRjLTEuMjkuNjgtMi4wNyAyLjA0LTIgMy40OS4wNyAxLjQyLjkzIDIuNjcgMi4yMiAzLjI1LjAzLjAxIDEuMi41IDEuMi41TDYgMTQuOTNjLTEuODMuOTctMi41MyAzLjI0LTEuNTYgNS4wNy45NyAxLjgzIDMuMjQgMi41MyA1LjA3IDEuNTZsOC41LTQuNWMxLjI5LS42OCAyLjA2LTIuMDQgMS45OS0zLjQ5LS4wNy0xLjQyLS45NC0yLjY4LTIuMjMtMy4yNXptLS4yMyA1Ljg2bC04LjUgNC41Yy0xLjM0LjcxLTMuMDEuMi0zLjcyLTEuMTQtLjcxLTEuMzQtLjItMy4wMSAxLjE0LTMuNzJsMi4wNC0xLjA4di0xLjIxbC0uNjktLjI4LTEuMTEtLjQ2Yy0uOTktLjQxLTEuNjUtMS4zNS0xLjctMi40MS0uMDUtMS4wNi41Mi0yLjA2IDEuNDYtMi41Nmw4LjUtNC41YzEuMzQtLjcxIDMuMDEtLjIgMy43MiAxLjE0LjcxIDEuMzQuMiAzLjAxLTEuMTQgMy43MkwxNS41IDkuMjZ2MS4yMWwxLjguNzRjLjk5LjQxIDEuNjUgMS4zNSAxLjcgMi40MS4wNSAxLjA2LS41MiAyLjA2LTEuNDYgMi41NnoiIGNsYXNzPSJzdHlsZS1zY29wZSB5dC1pY29uIi8+PC9nPjwvc3ZnPg==' />
              <span className='h-5 text-sm'>History</span>
            </button>
          </div>
          <div className='flex flex-col'>
            <h1>Explore</h1>
            <button className='flex items-center rounded-lg w-[180px] h-10 px-3  hover:bg-slate-100'>
              <img alt='home' className='w-6 h-6 mr-6' src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCIgZm9jdXNhYmxlPSJmYWxzZSIgY2xhc3M9InN0eWxlLXNjb3BlIHl0LWljb24iIHN0eWxlPSJwb2ludGVyLWV2ZW50czogbm9uZTsgZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7Ij48ZyBjbGFzcz0ic3R5bGUtc2NvcGUgeXQtaWNvbiI+PHBhdGggZD0iTTQsMTBWMjFoNlYxNWg0djZoNlYxMEwxMiwzWiIgY2xhc3M9InN0eWxlLXNjb3BlIHl0LWljb24iLz48L2c+PC9zdmc+' />
              <span className='h-5 text-sm'>Trending</span>
            </button>
            <button className='flex items-center w-[180px] h-10 px-3 hover:bg-slate-100 text-sm'>
              <img alt='home' className='w-6 h-6 mr-6' src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCIgZm9jdXNhYmxlPSJmYWxzZSIgY2xhc3M9InN0eWxlLXNjb3BlIHl0LWljb24iIHN0eWxlPSJwb2ludGVyLWV2ZW50czogbm9uZTsgZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7Ij48ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgY2xhc3M9InN0eWxlLXNjb3BlIHl0LWljb24iPjxwYXRoIGQ9Ik0xMCAxNC42NXYtNS4zTDE1IDEybC01IDIuNjV6bTcuNzctNC4zM2MtLjc3LS4zMi0xLjItLjUtMS4yLS41TDE4IDkuMDZjMS44NC0uOTYgMi41My0zLjIzIDEuNTYtNS4wNnMtMy4yNC0yLjUzLTUuMDctMS41Nkw2IDYuOTRjLTEuMjkuNjgtMi4wNyAyLjA0LTIgMy40OS4wNyAxLjQyLjkzIDIuNjcgMi4yMiAzLjI1LjAzLjAxIDEuMi41IDEuMi41TDYgMTQuOTNjLTEuODMuOTctMi41MyAzLjI0LTEuNTYgNS4wNy45NyAxLjgzIDMuMjQgMi41MyA1LjA3IDEuNTZsOC41LTQuNWMxLjI5LS42OCAyLjA2LTIuMDQgMS45OS0zLjQ5LS4wNy0xLjQyLS45NC0yLjY4LTIuMjMtMy4yNXptLS4yMyA1Ljg2bC04LjUgNC41Yy0xLjM0LjcxLTMuMDEuMi0zLjcyLTEuMTQtLjcxLTEuMzQtLjItMy4wMSAxLjE0LTMuNzJsMi4wNC0xLjA4di0xLjIxbC0uNjktLjI4LTEuMTEtLjQ2Yy0uOTktLjQxLTEuNjUtMS4zNS0xLjctMi40MS0uMDUtMS4wNi41Mi0yLjA2IDEuNDYtMi41Nmw4LjUtNC41YzEuMzQtLjcxIDMuMDEtLjIgMy43MiAxLjE0LjcxIDEuMzQuMiAzLjAxLTEuMTQgMy43MkwxNS41IDkuMjZ2MS4yMWwxLjguNzRjLjk5LjQxIDEuNjUgMS4zNSAxLjcgMi40MS4wNSAxLjA2LS41MiAyLjA2LTEuNDYgMi41NnoiIGNsYXNzPSJzdHlsZS1zY29wZSB5dC1pY29uIi8+PC9nPjwvc3ZnPg==' />
              <span className='h-5 text-sm'>Shopping</span>
            </button>
            <button className='flex items-center w-[180px] h-10 px-3 hover:bg-slate-100 text-sm'>
              <img alt='home' className='w-6 h-6 mr-6' src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCIgZm9jdXNhYmxlPSJmYWxzZSIgY2xhc3M9InN0eWxlLXNjb3BlIHl0LWljb24iIHN0eWxlPSJwb2ludGVyLWV2ZW50czogbm9uZTsgZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7Ij48ZyBjbGFzcz0ic3R5bGUtc2NvcGUgeXQtaWNvbiI+PHBhdGggZD0iTTEwLDE4di02bDUsM0wxMCwxOHogTTE3LDNIN3YxaDEwVjN6IE0yMCw2SDR2MWgxNlY2eiBNMjIsOUgydjEyaDIwVjl6IE0zLDEwaDE4djEwSDNWMTB6IiBjbGFzcz0ic3R5bGUtc2NvcGUgeXQtaWNvbiIvPjwvZz48L3N2Zz4=' />
              <span className='h-5 text-sm'>Music</span>
            </button>
            <button className='flex items-center rounded-lg w-[180px] h-10 px-3  hover:bg-slate-100'>
              <img alt='home' className='w-6 h-6 mr-6' src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCIgZm9jdXNhYmxlPSJmYWxzZSIgY2xhc3M9InN0eWxlLXNjb3BlIHl0LWljb24iIHN0eWxlPSJwb2ludGVyLWV2ZW50czogbm9uZTsgZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7Ij48ZyBjbGFzcz0ic3R5bGUtc2NvcGUgeXQtaWNvbiI+PHBhdGggZD0iTTQsMTBWMjFoNlYxNWg0djZoNlYxMEwxMiwzWiIgY2xhc3M9InN0eWxlLXNjb3BlIHl0LWljb24iLz48L2c+PC9zdmc+' />
              <span className='h-5 text-sm'>Movies</span>
            </button>
            <button className='flex items-center w-[180px] h-10 px-3 hover:bg-slate-100 text-sm'>
              <img alt='home' className='w-6 h-6 mr-6' src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCIgZm9jdXNhYmxlPSJmYWxzZSIgY2xhc3M9InN0eWxlLXNjb3BlIHl0LWljb24iIHN0eWxlPSJwb2ludGVyLWV2ZW50czogbm9uZTsgZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7Ij48ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgY2xhc3M9InN0eWxlLXNjb3BlIHl0LWljb24iPjxwYXRoIGQ9Ik0xMCAxNC42NXYtNS4zTDE1IDEybC01IDIuNjV6bTcuNzctNC4zM2MtLjc3LS4zMi0xLjItLjUtMS4yLS41TDE4IDkuMDZjMS44NC0uOTYgMi41My0zLjIzIDEuNTYtNS4wNnMtMy4yNC0yLjUzLTUuMDctMS41Nkw2IDYuOTRjLTEuMjkuNjgtMi4wNyAyLjA0LTIgMy40OS4wNyAxLjQyLjkzIDIuNjcgMi4yMiAzLjI1LjAzLjAxIDEuMi41IDEuMi41TDYgMTQuOTNjLTEuODMuOTctMi41MyAzLjI0LTEuNTYgNS4wNy45NyAxLjgzIDMuMjQgMi41MyA1LjA3IDEuNTZsOC41LTQuNWMxLjI5LS42OCAyLjA2LTIuMDQgMS45OS0zLjQ5LS4wNy0xLjQyLS45NC0yLjY4LTIuMjMtMy4yNXptLS4yMyA1Ljg2bC04LjUgNC41Yy0xLjM0LjcxLTMuMDEuMi0zLjcyLTEuMTQtLjcxLTEuMzQtLjItMy4wMSAxLjE0LTMuNzJsMi4wNC0xLjA4di0xLjIxbC0uNjktLjI4LTEuMTEtLjQ2Yy0uOTktLjQxLTEuNjUtMS4zNS0xLjctMi40MS0uMDUtMS4wNi41Mi0yLjA2IDEuNDYtMi41Nmw4LjUtNC41YzEuMzQtLjcxIDMuMDEtLjIgMy43MiAxLjE0LjcxIDEuMzQuMiAzLjAxLTEuMTQgMy43MkwxNS41IDkuMjZ2MS4yMWwxLjguNzRjLjk5LjQxIDEuNjUgMS4zNSAxLjcgMi40MS4wNSAxLjA2LS41MiAyLjA2LTEuNDYgMi41NnoiIGNsYXNzPSJzdHlsZS1zY29wZSB5dC1pY29uIi8+PC9nPjwvc3ZnPg==' />
              <span className='h-5 text-sm'>Live</span>
            </button>
            <button className='flex items-center w-[180px] h-10 px-3 hover:bg-slate-100 text-sm'>
              <img alt='home' className='w-6 h-6 mr-6' src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCIgZm9jdXNhYmxlPSJmYWxzZSIgY2xhc3M9InN0eWxlLXNjb3BlIHl0LWljb24iIHN0eWxlPSJwb2ludGVyLWV2ZW50czogbm9uZTsgZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7Ij48ZyBjbGFzcz0ic3R5bGUtc2NvcGUgeXQtaWNvbiI+PHBhdGggZD0iTTEwLDE4di02bDUsM0wxMCwxOHogTTE3LDNIN3YxaDEwVjN6IE0yMCw2SDR2MWgxNlY2eiBNMjIsOUgydjEyaDIwVjl6IE0zLDEwaDE4djEwSDNWMTB6IiBjbGFzcz0ic3R5bGUtc2NvcGUgeXQtaWNvbiIvPjwvZz48L3N2Zz4=' />
              <span className='h-5 text-sm'>Gaming</span>
            </button>
            <button className='flex items-center rounded-lg w-[180px] h-10 px-3  hover:bg-slate-100'>
              <img alt='home' className='w-6 h-6 mr-6' src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCIgZm9jdXNhYmxlPSJmYWxzZSIgY2xhc3M9InN0eWxlLXNjb3BlIHl0LWljb24iIHN0eWxlPSJwb2ludGVyLWV2ZW50czogbm9uZTsgZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7Ij48ZyBjbGFzcz0ic3R5bGUtc2NvcGUgeXQtaWNvbiI+PHBhdGggZD0iTTQsMTBWMjFoNlYxNWg0djZoNlYxMEwxMiwzWiIgY2xhc3M9InN0eWxlLXNjb3BlIHl0LWljb24iLz48L2c+PC9zdmc+' />
              <span className='h-5 text-sm'>News</span>
            </button>
            <button className='flex items-center w-[180px] h-10 px-3 hover:bg-slate-100 text-sm'>
              <img alt='home' className='w-6 h-6 mr-6' src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCIgZm9jdXNhYmxlPSJmYWxzZSIgY2xhc3M9InN0eWxlLXNjb3BlIHl0LWljb24iIHN0eWxlPSJwb2ludGVyLWV2ZW50czogbm9uZTsgZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7Ij48ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgY2xhc3M9InN0eWxlLXNjb3BlIHl0LWljb24iPjxwYXRoIGQ9Ik0xMCAxNC42NXYtNS4zTDE1IDEybC01IDIuNjV6bTcuNzctNC4zM2MtLjc3LS4zMi0xLjItLjUtMS4yLS41TDE4IDkuMDZjMS44NC0uOTYgMi41My0zLjIzIDEuNTYtNS4wNnMtMy4yNC0yLjUzLTUuMDctMS41Nkw2IDYuOTRjLTEuMjkuNjgtMi4wNyAyLjA0LTIgMy40OS4wNyAxLjQyLjkzIDIuNjcgMi4yMiAzLjI1LjAzLjAxIDEuMi41IDEuMi41TDYgMTQuOTNjLTEuODMuOTctMi41MyAzLjI0LTEuNTYgNS4wNy45NyAxLjgzIDMuMjQgMi41MyA1LjA3IDEuNTZsOC41LTQuNWMxLjI5LS42OCAyLjA2LTIuMDQgMS45OS0zLjQ5LS4wNy0xLjQyLS45NC0yLjY4LTIuMjMtMy4yNXptLS4yMyA1Ljg2bC04LjUgNC41Yy0xLjM0LjcxLTMuMDEuMi0zLjcyLTEuMTQtLjcxLTEuMzQtLjItMy4wMSAxLjE0LTMuNzJsMi4wNC0xLjA4di0xLjIxbC0uNjktLjI4LTEuMTEtLjQ2Yy0uOTktLjQxLTEuNjUtMS4zNS0xLjctMi40MS0uMDUtMS4wNi41Mi0yLjA2IDEuNDYtMi41Nmw4LjUtNC41YzEuMzQtLjcxIDMuMDEtLjIgMy43MiAxLjE0LjcxIDEuMzQuMiAzLjAxLTEuMTQgMy43MkwxNS41IDkuMjZ2MS4yMWwxLjguNzRjLjk5LjQxIDEuNjUgMS4zNSAxLjcgMi40MS4wNSAxLjA2LS41MiAyLjA2LTEuNDYgMi41NnoiIGNsYXNzPSJzdHlsZS1zY29wZSB5dC1pY29uIi8+PC9nPjwvc3ZnPg==' />
              <span className='h-5 text-sm'>Sports</span>
            </button>
            <button className='flex items-center w-[180px] h-10 px-3 hover:bg-slate-100 text-sm'>
              <img alt='home' className='w-6 h-6 mr-6' src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCIgZm9jdXNhYmxlPSJmYWxzZSIgY2xhc3M9InN0eWxlLXNjb3BlIHl0LWljb24iIHN0eWxlPSJwb2ludGVyLWV2ZW50czogbm9uZTsgZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7Ij48ZyBjbGFzcz0ic3R5bGUtc2NvcGUgeXQtaWNvbiI+PHBhdGggZD0iTTEwLDE4di02bDUsM0wxMCwxOHogTTE3LDNIN3YxaDEwVjN6IE0yMCw2SDR2MWgxNlY2eiBNMjIsOUgydjEyaDIwVjl6IE0zLDEwaDE4djEwSDNWMTB6IiBjbGFzcz0ic3R5bGUtc2NvcGUgeXQtaWNvbiIvPjwvZz48L3N2Zz4=' />
              <span className='h-5 text-sm'>Learning</span>
            </button>
            <button className='flex items-center rounded-lg w-[180px] h-10 px-3  hover:bg-slate-100'>
              <img alt='home' className='w-6 h-6 mr-6' src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCIgZm9jdXNhYmxlPSJmYWxzZSIgY2xhc3M9InN0eWxlLXNjb3BlIHl0LWljb24iIHN0eWxlPSJwb2ludGVyLWV2ZW50czogbm9uZTsgZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7Ij48ZyBjbGFzcz0ic3R5bGUtc2NvcGUgeXQtaWNvbiI+PHBhdGggZD0iTTQsMTBWMjFoNlYxNWg0djZoNlYxMEwxMiwzWiIgY2xhc3M9InN0eWxlLXNjb3BlIHl0LWljb24iLz48L2c+PC9zdmc+' />
              <span className='h-5 text-sm'>Fashion & Beauty</span>
            </button>
          </div>

          <div className=''>
            <button>Browse channels</button>
          </div>
          <div className='flex flex-col'>
            <h2>Terms  Privacy  Policy & Safety</h2>
            <h2>How YouTube works  Test new features</h2>
            <h2>2023 AN LLC</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SideBarExpanded;
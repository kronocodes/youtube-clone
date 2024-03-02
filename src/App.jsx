import Head from './components/Head';
import Body from './components/Body';
import { Provider } from "react-redux";
import store from './utils/store';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import Results from './components/Result';


const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body />,
  children: [
    {
      path: "/",
      element: <MainContainer />,
    },
    {
      path: "watch",
      element: <WatchPage/>,
    },
    {
      path: "results",
      element: <Results/>,
    },
  ],
},
]);

function App() {
  return (
    <Provider store={store}>
        <Head />
        <RouterProvider router={appRouter}>
        </RouterProvider>
    </Provider>
  );
}

export default App;

import { Provider } from "react-redux";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Head from "./components/Head";
import Content from "./components/Content";
import WatchPage from "./components/WatchPage";
import FixedSibar from "./components/FixedSibar";
import MainContainer from "./components/MainContainer";
import store from "./utils/store.jsx";
import Footer from "./components/Footer.jsx";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Head />
        <Content />
      </>
    ),
    children: [
      {
        path: "/",
        element: (
          <>
            <FixedSibar />
            <MainContainer />
          </>
        ),
      },
      {
        path: "watch",
        element: (
          <>
            <WatchPage />
            <Footer />
          </>
        ),
      },
    ],
  },
]);
function App() {
  return (
    <Provider store={store}>
      <div className=" flex flex-col">
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;

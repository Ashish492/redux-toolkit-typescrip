import { createBrowserRouter } from "react-router-dom";

import Counter from "../pages/Counter";
import Root from "./Root";
import Post from "../pages/Post";
import AddPost from "../component/AddPost";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "counter",
        element: <Counter />,
      },
      {
        path: "post",
        element: <Post />,
      },
      {
        path: "addPost",
        element: <AddPost />,
      },
    ],
  },
]);
export default routes;

import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Posts, { loader, loader as postLoader } from "./routes/Posts";
import "./index.css";
import NewPost, { action as newPostAction } from "./routes/NewPost";
import RootLayout from "./routes/RootLayout";
import PostDetails, { loader as loadPostDetail } from "./routes/PostDetails";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{
				path: "/",
				element: <Posts />,
				loader: postLoader,
				children: [
					{
						path: "/create-newPost",
						element: <NewPost />,
						action: newPostAction,
					},
					{
						path: "/:postId",
						element: <PostDetails />,
						loader: loadPostDetail,
					},
				],
			},
		],
	},
]);
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);

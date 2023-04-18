import { useEffect, useState } from "react";
import MainHeader from "./MainHeader";
import Modal from "./Modal";
import NewPost from "../routes/NewPost";
import Post from "./Post";
import styles from "./PostList.module.css";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
	const posts = useLoaderData();
	// useEffect(() => {
	// 	const fetchPost = async () => {
	// 		setIsLoading(true);

	// 		if (!response.ok) {
	// 			setError(true);
	// 		} else {
	// 			const responseData = await response.json();
	// 			setPost(responseData.posts);
	// 			setIsLoading(false);
	// 		}
	// 	};
	// 	fetchPost();
	// }, []);

	return (
		<>
			{posts.length > 0 && (
				<ul className={styles.posts}>
					{posts.map((post) => (
						<Post
							key={post.id}
							id={post.id}
							author={post.author}
							body={post.body}
						/>
					))}
				</ul>
			)}
			{posts.length === 0 && (
				<div style={{ textAlign: "center", color: "wheat" }}>
					<h2> There are no post Available </h2>
					<p> Start Adding Something</p>
				</div>
			)}
		</>
	);
};
export default PostList;

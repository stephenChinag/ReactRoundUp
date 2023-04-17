import { useEffect, useState } from "react";
import MainHeader from "./MainHeader";
import Modal from "./Modal";
import NewPost from "./NewPost";
import Post from "./Post";
import styles from "./PostList.module.css";

const PostList = (props) => {
	const [post, setPost] = useState([]);
	const [error, setError] = useState();
	useEffect(() => {
		const fetchPost = async () => {
			const response = await fetch("http://localhost:8080/posts");
			if (!response.ok) {
				setError(true);
			} else {
				const responseData = await response.json();
				setPost(responseData.posts);
			}
		};
		fetchPost();
	}, []);

	const addPostHandler = (postData) => {
		fetch("http://localhost:8080/posts", {
			method: "POST",
			body: JSON.stringify(postData),
			headers: {
				"Content-Type": "application/json",
			},
		});
		setPost((prev) => [postData, ...prev]);
	};

	return (
		<>
			{props.showModal && (
				<Modal onClose={props.hideModal}>
					<NewPost cancelPost={props.cancelPost} onAddPost={addPostHandler} />
				</Modal>
			)}
			{post.length > 0 && (
				<ul className={styles.posts}>
					{post.map((post) => (
						<Post key={post.body} author={post.author} body={post.body} />
					))}
				</ul>
			)}
			{post.length === 0 && (
				<div style={{ textAlign: "center", color: "wheat" }}>
					<h2> There are no post Available </h2>
					<p> Start Adding Something</p>
				</div>
			)}
			{error && (
				<p
					style={{
						textAlign: "center",
						fontSize: "40px",
					}}
				>
					{" "}
					Something Went wrong
				</p>
			)}
		</>
	);
};
export default PostList;

import { useState } from "react";
import styles from "./NewPost.module.css";

function NewPost(props) {
	const [body, setBody] = useState("");
	const [author, setAuthor] = useState("");
	const onChangeHandler = (e) => {
		setBody(e.target.value);
	};
	const onAuthorHandler = (e) => {
		setAuthor(e.target.value);
	};
	const onSubmitPost = (e) => {
		e.preventDefault();
		const postData = {
			body,
			author,
		};
		props.onAddPost(postData);
		props.cancelPost();
	};
	return (
		<form className={styles.form} onSubmit={onSubmitPost}>
			<p>
				<label htmlFor="body">Text</label>
				<textarea
					id="body"
					value={body}
					required
					rows={3}
					onChange={onChangeHandler}
				/>
			</p>
			<p className={styles.text}>{props.text}</p>
			<p>
				<label htmlFor="name">Your name</label>
				<input
					type="text"
					id="name"
					value={author}
					required
					onChange={onAuthorHandler}
				/>
			</p>
			<p className={styles.actions}>
				<button> Submit Post</button>
				<button type="button" onClick={props.cancelPost}>
					Cancel
				</button>
			</p>
		</form>
	);
}

export default NewPost;

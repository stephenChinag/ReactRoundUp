import { useState } from "react";
import styles from "./NewPost.module.css";

function NewPost(props) {
	return (
		<form className={styles.form}>
			<p>
				<label htmlFor="body">Text</label>
				<textarea
					id="body"
					required
					rows={3}
					onChange={props.onChangeHandler}
				/>
			</p>
			<p className={styles.text}>{props.text}</p>
			<p>
				<label htmlFor="name">Your name</label>
				<input
					type="text"
					id="name"
					required
					onChange={props.onAuthorHandler}
				/>
			</p>
		</form>
	);
}

export default NewPost;

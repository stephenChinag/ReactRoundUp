import styles from "./NewPost.module.css";
import Modal from "../components/Modal";
import { Form, Link, redirect } from "react-router-dom";

function NewPost() {
	return (
		<Modal>
			<Form method="post" className={styles.form}>
				<p>
					<label htmlFor="body">Text</label>
					<textarea id="body" name="body" required rows={3} />
				</p>

				<p>
					<label htmlFor="name">Your name</label>
					<input type="text" id="name" name="author" required />
				</p>
				<p className={styles.actions}>
					<button> Submit Post</button>
					<Link type="button" to="..">
						Cancel
					</Link>
				</p>
			</Form>
		</Modal>
	);
}

export default NewPost;

export async function action({ request }) {
	const formData = await request.formData();
	const postData = Object.fromEntries(formData);
	await fetch("http://localhost:8080/posts", {
		method: "POST",
		body: JSON.stringify(postData),
		headers: {
			"Content-Type": "application/json",
		},
	});
	return redirect("/");
}

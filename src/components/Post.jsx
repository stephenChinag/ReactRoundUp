import styles from "./Post.module.css";
import PostList from "./PostList";

const names = ["Stephen", "chinagorom"];

const Post = (props) => {
	const { author, body } = props;
	return (
		<div className={styles.post} onClick={props.show}>
			<p className={styles.author}> {author}</p>
			<p className={styles.text}>{body}</p>
		</div>
	);
};
export default Post;

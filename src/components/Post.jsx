import styles from "./Post.module.css";
import PostList from "./PostList";

const names = ["Stephen", "chinagorom"];

const Post = (props) => {
	const { author, text } = props;
	return (
		<div className={styles.post} onClick={props.show}>
			<p className={styles.author}> {author}</p>
			<p className={styles.text}>{text}</p>
		</div>
	);
};
export default Post;

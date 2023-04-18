import { Link } from "react-router-dom";
import styles from "./Post.module.css";
import PostList from "./PostList";

const Post = ({ id, author, body }) => {
	return (
		<li className={styles.post}>
			<Link to={id}>
				<p className={styles.author}> {author}</p>
				<p className={styles.text}>{body}</p>
			</Link>
		</li>
	);
};
export default Post;

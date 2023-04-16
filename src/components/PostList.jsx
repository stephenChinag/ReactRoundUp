import MainHeader from "./MainHeader";
import Modal from "./Modal";
import NewPost from "./NewPost";
import Post from "./Post";
import styles from "./PostList.module.css";
import { useState } from "react";
const PostList = () => {
	const [modalIsVisible, setModlIsVisisble] = useState(false);
	const [text, setText] = useState("Enter an Input");
	const [author, setAuthor] = useState("");
	const changeTextHandler = (e) => {
		setText(e.target.value);
	};
	const onAuthorHandler = (e) => {
		setAuthor(e.target.value);
	};

	const hideModal = () => {
		setModlIsVisisble(false);
	};
	const showModal = () => {
		setModlIsVisisble(true);
	};
	return (
		<>
			{modalIsVisible && (
				<Modal onClose={hideModal}>
					<NewPost
						onChangeHandler={changeTextHandler}
						onAuthorHandler={onAuthorHandler}
					/>
				</Modal>
			)}

			<ul className={styles.posts}>
				<Post author={author} text={text} show={showModal} />

				<Post author="Stephen " text=" I lOVE React" />
			</ul>
		</>
	);
};
export default PostList;

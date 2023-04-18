import { MdPostAdd, MdMessage } from "react-icons/md";

import classes from "./MainHeader.module.css";
import { NavLink } from "react-router-dom";

function MainHeader({ onCreatePost }) {
	return (
		<header className={classes.header}>
			<h1 className={classes.logo}>
				<MdMessage />
				React Poster
			</h1>
			<p>
				<NavLink
					to="create-newPost"
					className={classes.button}
					onClick={onCreatePost}
				>
					<MdPostAdd size={18} />
					New Post
				</NavLink>
			</p>
		</header>
	);
}

export default MainHeader;

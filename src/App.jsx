import { useState } from "react";

import MainHeader from "./components/MainHeader";
import Post from "./components/Post";
import PostList from "./components/PostList";
function App() {
	const [modalIsVisible, setModlIsVisisble] = useState(false);
	const hideModalHandler = () => {
		setModlIsVisisble(false);
	};
	const showModalHandler = () => {
		setModlIsVisisble(true);
	};
	return (
		<>
			<MainHeader onCreatePost={showModalHandler} />
			<main>
				<PostList
					showModal={modalIsVisible}
					hideModal={hideModalHandler}
					cancelPost={hideModalHandler}
				/>
			</main>
		</>
	);
}

export default App;

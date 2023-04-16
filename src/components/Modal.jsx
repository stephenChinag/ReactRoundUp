import styles from "./Modal.module.css";

const Modal = (props) => {
	return (
		<div className={styles.backdrop} onClick={props.onClose}>
			<dialog open className={styles.modal}>
				{" "}
				{props.children}
			</dialog>
		</div>
	);
};

export default Modal;

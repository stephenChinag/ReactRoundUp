import styles from "./Modal.module.css";

const Modal = (props) => {
	return (
		<>
			<div className={styles.backdrop} onClick={props.onClose}></div>
			<dialog open className={styles.modal}>
				{props.children}
			</dialog>
		</>
	);
};

export default Modal;

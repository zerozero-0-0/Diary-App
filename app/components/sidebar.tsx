import { useState } from "react";
import { css } from "styled-system/css";

export const Sidebar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div>
			{isOpen ? (
				<></>
			) : (
				<button
					type="button"
					className={css({
						position: "fixed",
						height: "48px",
						marginRight: 4,
						zIndex: 1,
						right: 0,
					})}
				>
					<span className="material-icons">menu</span>
				</button>
			)}
		</div>
	);
};

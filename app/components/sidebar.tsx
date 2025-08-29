import { useState } from "react";
import { css } from "styled-system/css";

// 将来的にリンクを追加
const links = ["月カレンダー", "週カレンダー", "統計", "ポケスリ", "SWGOH"];

export const Sidebar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [angle, setAngle] = useState(0);

	const handleClick = () => {
		setIsOpen((v) => !v);
		setAngle((a) => a - 180);
	};

	return (
		<div>
			<button
				type="button"
				className={css({
					position: "fixed",
					height: "48px",
                    width: "48px",
					zIndex: 1,
					right: 0,
					transition: "transform 0.3s ease",
                    display: "grid",
					cursor: "pointer",
                    placeItems: "center",
                    transformOrigin: "center",
				})}
				style={{ transform: `rotate(${angle}deg)` }}
				onClick={() => handleClick()}
			>
				<span className="material-icons">menu</span>
			</button>

			{isOpen && (
				<div
					className={css({
						position: "fixed",
                        top: "48px",
                        right: 0,
                        height: "calc(100vh - 48px)",
                        width: "250px",
                        bg: "gray.300",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: 4,
                        boxShadow: "lg",
                        opacity: 0.85,
					})}
				>
                    <div
                        className={css({
                            height: "99%",
                            width: "95%",
                            textAlign: "center",
                            padding: 4,
                            gap: 2,
                            bg: "white",
                            m: "auto",
                            borderRadius: "xl",
                        })}
                    >
                        <span
                            className={css({
                                fontSize: "xl",
                            })}
                        >▼ ページ</span>
                        <ul
                            className={css({
                                height: "full",
                                width: "full",
                                display: "flex",
                                flexDirection: "column",
                                mt: 12,
                                gap: 3,
                                fontSize: "lg",
                                transform: "transition 0.2 ease"
                            })}
                        >
                            {links.map((link) => (
                                <li
                                    key={link}
                                    className={css({
                                        borderRadius: "md",
                                        fontSize: "lg",
                                        fontWeight: "bold",
                                        _hover: {
                                            color: "blue",
                                            cursor: "pointer",
                                        },
                                    })}
                                >
                                    {link}
                                </li>
                            ))}

                        </ul>
                    </div>
				</div>
			)}
		</div>
	);
};

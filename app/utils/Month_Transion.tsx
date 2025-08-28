import { css } from "styled-system/css"

export const Month_Transion = () => {
    return (
        <div
            className={css({
                height: "48px",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderColor: "gray.400",
                fontWeight: "bold",
                fontSize: "lg",
                padding: 4,
                position: "sticky",
                bg: "gray.200",
                gap: 200,
            })}
        >
            <span>前の月</span>
            <span>8</span>
            <span>次の月</span>
        </div>
    )
}

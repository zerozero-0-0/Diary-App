import type { ReactNode } from "react";
import { css } from "styled-system/css";

export const Button = ({ children } : { children : ReactNode}) => {
  return (
    <button
        className={css({
            bg: "blue.500",
            color: "white",
            px: 8,
            py: 2,
            borderRadius: "md",
            _hover: {
                bg: "blue.600",
            },
            margin: 2
        })}
    >
        {children}
    </button>
  );
}

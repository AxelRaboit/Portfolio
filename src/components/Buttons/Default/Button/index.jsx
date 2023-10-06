import React from "react";
import { Button } from "./DefaultButtonElements";

export const DefaultButton = ({ color = 'primary', text, type, onClick, disabled = false }) => {
    return (
        <Button
            color={color}
            type={type}
            onClick={onClick}
            className="default-button"
            disabled={disabled}
        >
            {text}
        </Button>
    );
};

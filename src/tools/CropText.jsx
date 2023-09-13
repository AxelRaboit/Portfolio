import React from 'react';

export const CropText = ({ text, limit }) => {
    const croppedText = text.length > limit ? text.slice(0, limit) + "..." : text;
    return (
        <p>{croppedText}</p>
    );
}

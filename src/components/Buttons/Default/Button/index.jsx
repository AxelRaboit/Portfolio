import React from 'react';
import { Button } from './DefaultButtonElements';

export const DefaultButton = ({ text, type, onClick, disabled = false }) => {
  return (
    <Button type={type} onClick={onClick} className="default-button" disabled={disabled}>
        {text}
    </Button>
  )
}
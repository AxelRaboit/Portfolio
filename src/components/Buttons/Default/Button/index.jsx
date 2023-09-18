import React from 'react';
import { Button } from './DefaultButtonElements';

export const DefaultButton = ({ text, type, onClick }) => {
  return (
    <Button type={type} onClick={onClick} className="default-button">
        {text}
    </Button>
  )
}

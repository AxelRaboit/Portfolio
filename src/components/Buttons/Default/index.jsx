import React from 'react';
import { Container } from './DefaultButtonElements';

export const DefaultButton = ({ text, link }) => {
  return (
    <Container>
        <a href={link} target="_blank" rel="noopener noreferrer">{text}</a>
    </Container>
  )
}

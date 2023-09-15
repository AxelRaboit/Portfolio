import React from 'react';
import { Container } from './DefaultButtonElements';

export const DefaultButton = ({ text, link, isTarget }) => {
  return (
    <Container>
        <a href={link} target={isTarget ? '_blank' : ''} rel="noopener noreferrer">{text}</a>
    </Container>
  )
}

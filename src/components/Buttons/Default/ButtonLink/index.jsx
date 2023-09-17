import React from 'react';
import { Container } from './DefaultButtonLinkElements';

export const DefaultButtonLink = ({ text, link, isTarget }) => {
  return (
    <Container>
        <a href={link} target={isTarget ? '_blank' : ''} rel="noopener noreferrer">{text}</a>
    </Container>
  )
}

import React from 'react';
import { Container } from './VariantButtonLinkElements';

export const VariantButtonLink = ({ text, link, isTarget, rel = '' }) => {
  return (
    <Container className="variant-button-link">
        <a href={link} target={isTarget ? '_blank' : ''} rel={rel}>{text}</a>
    </Container>
  )
}

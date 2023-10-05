import React from 'react';
import { Container } from './VariantButtonLinkElements';
import Link from 'next/link';

export const VariantButtonLink = ({ text, link, isTarget, rel = '' }) => {
  return (
    <Container className="variant-button-link">
        <Link href={link} target={isTarget ? '_blank' : ''} rel={rel}>{text}</Link>
    </Container>
  )
}

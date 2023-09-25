import React from 'react'
import { Container } from './LoadingElements';

export const Loading = () => {
  return (
    <Container>
        <div className="loading-spinner">
            <div className="spinner"></div>
        </div>
    </Container>
  )
}

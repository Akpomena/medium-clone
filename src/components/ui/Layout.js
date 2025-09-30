import styled from "styled-components";

export const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  padding: 1rem;
  width: 100%;

  @media (min-width: 768px) {
    grid-template-columns: 2fr 1fr;
    padding: 2rem 4rem;
  }
`;

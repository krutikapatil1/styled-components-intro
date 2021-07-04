import styled from "styled-components";

export const DefaultButton = styled.button`
  display: block;
  margin: 1rem auto;
  background-color: blueviolet;
  color: #fff;
  border: none;
  padding: 0.5rem;
  border-radius: 0.25rem;
  width: 200px;
  text-transform: capitalize;
  cursor: pointer;
`;

export const HipsterButton = styled(DefaultButton)`
  width: 400px;
  background: transparent;
  color: blueviolet;
  border: 1px solid blueviolet;
`;

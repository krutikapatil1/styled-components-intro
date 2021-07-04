import styled from "styled-components";

const BasicTitle = styled.h1`
  text-transform: capitalize;
  text-align: center;
`;

const DefaultButton = styled.button`
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

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <BasicTitle>Styled components</BasicTitle>
      <DefaultButton>click me</DefaultButton>
    </div>
  );
}

export default App;

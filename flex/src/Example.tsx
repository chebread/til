import styled from "styled-components";

function Example() {
  return (
    <Container>
      <Items>adipisicing adipisicing adipisicing adipisicing</Items>
      <Items>adipisicing</Items>
      <Items>adipisicing</Items>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  background-color: seagreen;
  width: 100vw;
`;
const Items = styled.div`
  background-color: seagreen;
  border: 3px solid #fff;
  box-sizing: border-box;
  height: 300px;
  width: 400px;
  &:nth-child(1) {
    flex-shrink: 1;
  }
  &:nth-child(2) {
    flex-shrink: 5;
  }
  &:nth-child(3) {
    flex-shrink: 1;
  }
`;

export default Example;

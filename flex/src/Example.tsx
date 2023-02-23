import styled from "styled-components";

function Example() {
  return (
    <Container>
      <Items>Lorem ipsum dolor sit amet consectetur.</Items>
      <Items>
        adipisicing elit. Id ad iure esse non nemo corporis commodi provident,
      </Items>
      <Items>
        excepturi quaerat nesciunt placeat. Deleniti, reprehenderit.
      </Items>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  flex-wrap: wrap;
  height: 100vh;
`;
const Items = styled.div`
  background-color: seagreen;
  border: 3px solid #fff;
  box-sizing: border-box;
  width: 300px;
  height: 100px;
`;

export default Example;

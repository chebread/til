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
  flex-direction: column; // 600보다 작으면
  @media (min-width: 600px) {
    // min-width: 600 => 600보다 크면
    flex-direction: row;
  }
`;
const Items = styled.div`
  background-color: seagreen;
  border: 3px solid #fff;
  box-sizing: border-box;
`;

export default Example;

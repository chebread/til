import styled from 'styled-components';

const Example = () => {
  return (
    <Container>
      <Item>A</Item>
      <Item>A</Item>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, auto));
  // 400px < x < 600px에서 Container가 x의 크기를 가지면 자동적으로 아이템 늘어나게 된다. (그리드의 기본 설정)
  // 그치만 600 초과시에는 400px에서 600미만까지 그냥 커지기만 하지 또 600보다 커지지는 않는다. (아이템이 없으면)
  // 그래서 이럴 경우는 auto-fit을 쓴다!
`;
const Item = styled.div`
  background-color: seagreen;
  border: 5px solid black;
  box-sizing: border-box;
`;

export default Example;

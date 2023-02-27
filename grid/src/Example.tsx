import styled from 'styled-components';

const Example = () => {
  return (
    <Container>
      <Item>A</Item>
      <Item>B</Item>
      <Item>C</Item>
      <Item>D</Item>
      <Item>E</Item>
      <Item>F</Item>
      <Item>G</Item>
      <Item>H</Item>
      <Item>I</Item>
      <Item>J</Item>
    </Container>
  );
};

const Container = styled.div`
  display: grid;

  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto);
  gap: 1em;
`;
const Item = styled.div`
  background-color: seagreen;
  border: 5px solid black;
  box-sizing: border-box;

  &:nth-child(1) {
    grid-column: 1 / 3;
    grid-row: 1 / 4;
  }
  &:nth-child(4) {
    grid-column: 2 / 3; // 이렇게 되면 겹치게 될 수도 있다. 겹칠때에는 항상 모든 지정 번호를 다 써주어야 한다.
    // 또한 겹치면 z-index로 올릴 수도 있다!
    grid-row: 1 / 2;
    z-index: 1;
  }
  &:nth-child(2) {
    grid-column: 2 / 3; // 이렇게 시작 부터 한칸만 간다면 끝깞은 생략가능한데, 겹치기를 사용한다면 모두 적어주는게 좋다
    grid-row: 2 / 3; // 1 부터 2칸 갑니다 라고 표현하려면 1 / span 2 라고 해도 된다
  }
  &:last-child {
    grid-column: 2 / 4;
    // row는 기본값
  }
`;

export default Example;

import { css } from "styled-components";

const Flex = css`
  display: flex; // Flex는 Item이 가진 요소만 늘어난다

  // Flex main axis는 Item이 나열된 방향이며, cross axis는 main axis의 직교 방향의 축이라고 생각하면 된다.
  // main axis가 가로이면 width가 필요하며, cross axis는 height가 필요하다 (row)
  // main axis가 세로이면 height가 필요하며, cross axis는 width가 필요하다 (column)
  flex-direction: column; // main axis가 세로이다
  flex-direction: row; // main axis가 가로이다

  flex-wrap: nowrap; // Item들이 가진 총합의 width 보다 Container의 width길이가 작아질 경우, Item을 그냥 No wrap할 건지 아닌지 결정함

  flex-flow: flex-direction flex-wrap; // f-d, f-w 줄인 속성
`;

const 정렬 = css`
  // justify: main axis 방향으로 정렬 // 가로 혹은 세로 정렬
  // align: cross axis 방향으로 정렬 // 세로 혹은 가로 정렬
`;

const MainAxis방향_정렬 = css`
  // justify-content: flex container에 적용하는 속성
  justify-content: flex-start; // 왼쪽의 start (기준: row)
  justify-content: flex-end; // 오른쪽의 end
  justify-content: center; // 중앙
  justify-content: space-between; // 나란히 끝쪽에 붙어 균일히 정렬
  justify-content: space-around; // 각각의 양쪽에 공간을 균일히 주어 정렬
  justify-content: space-evenly; // 전체적으로 양쪽에 균일한 여백
`;

const CrossAxis방향_각각의아이템정렬 = css`
  // algin-items: 각각의 아이템들을 cross axis 정렬하는 속성
  // align-items: flex container에 적용하는 속성
  align-items: stretch; // Container의 height까지 모든 Item의 높이가 올라감
  align-items: flex-start; // Container 높이의 가장 높은 곳 (기준: row)
  align-items: flex-end; // 높이의 가장 낮은 곳
  align-items: center; // 높이의 중간
  align-items: baseline; // text baseline
`;

const CrossAxis방향_모든아이템정렬 = css`
  // align-content: 모든 아이템들을 cross axis 정렬하는 속성
  // align-content: align-items와 동일하지만 이것은 Container의 관점으로 flex-wrap: wrap이 설정되어 있을때 떨어진다면 어떤식으로 아이템들을 높이에 따라 정렬할 것인가에 대한 것임
  // align-items는 items각각들을 높이에 따라 어케 정렬할 것인가라면, 이것은 Item들을 하나로 보아 이것들을 어디에 정렬해야 할까임
  // a-c: center라면 wrap되어도 height에 따라서 height의 중앙에 위치하게 됨
  align-content: stretch; // 모든 아이템들을 늘어나게 설정함, Wrap되어도 늘어나게 됨
  align-content: flex-start; // 모든 아이템들을 height의 최대 높이에 정렬시킴, Wrap되도 그 아래에 최대높이의 존재하게 됨
  align-content: flex-end; // 모든 아이템들을 height의 최소 하단 높이에 정렬시킴
  align-content: center; // 모든 아이템들을 cross axis의 가운데에 위치시킴
  align-content: space-between; // 각각의 양쪽에서 균일히 공간을 주어 cross axis위에 위치시킴
  align-content: space-around; // 각각의 아이템의 양쪽에서 균일히 공간을 주어 cross axis위에 위치시킴
`;

const Width = css`
  min-width: 100px; // 최소가 100px 이상: x >= 100 // 100보다 크면
  // # min-width를 사용하는 경우
  // 스마트폰 등 가장 작은 사이즈에서의 레이아웃을 기본으로 하고, 점차 확장되어가는 형태로 CSS를 작성합니다.

  max-width: 100px; // 최대가 100 이하: x <= 100 // 100보다 작으면
  // # max-width를 사용하는 경우
  // 데스크탑용의 가장 큰 화면 사이즈의 레이아웃을 기본으로 하고, 점차 축소하는 형태로 CSS를 작성합니다.
`;

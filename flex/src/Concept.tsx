import { css } from "styled-components";

const Flex = css`
  display: flex; // Flex는 Item이 가진 요소만 늘어난다

  // Flex main axis는 Item이 나열된 방향이며, across axis는 main axis의 직교 방향의 축이라고 생각하면 된다.
  flex-direction: column; // main axis가 세로이다
  flex-direction: row; // main axis가 가로이다

  flex-wrap: nowrap; // Item들이 가진 총합의 width 보다 Container의 width길이가 작아질 경우, Item을 그냥 No wrap할 건지 아닌지 결정함

  flex-flow: flex-direction flex-wrap; // f-d, f-w 줄인 속성
`;

const Width = css`
  min-width: 100px; // 최소가 100px 이상: x >= 100 // 100보다 크면
  // # min-width를 사용하는 경우
  // 스마트폰 등 가장 작은 사이즈에서의 레이아웃을 기본으로 하고, 점차 확장되어가는 형태로 CSS를 작성합니다.

  max-width: 100px; // 최대가 100 이하: x <= 100 // 100보다 작으면
  // # max-width를 사용하는 경우
  // 데스크탑용의 가장 큰 화면 사이즈의 레이아웃을 기본으로 하고, 점차 축소하는 형태로 CSS를 작성합니다.
`;

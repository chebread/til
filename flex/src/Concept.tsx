import { css } from "styled-components";

// Flex vs Grid
// Flex는 1차원적인 것과, Wrap되는 컨텐츠들을 컨트롤하며, Grid는 2차원 적인 것과 전반적인 레이아웃을 구성할때 사용합니다.
// 즉, Grid는 전반적인 틀, Flex는 그 틀의 컨텐츠들

const FlexDirection = css`
  display: flex; // Flex는 Item이 가진 요소만 늘어난다

  // Flex main axis는 Item이 나열된 방향이며, cross axis는 main axis의 직교 방향의 축이라고 생각하면 된다.
  // main axis가 가로이면 width가 필요하며, cross axis는 height가 필요하다 (row)
  // main axis가 세로이면 height가 필요하며, cross axis는 width가 필요하다 (column)
  flex-direction: column; // main axis가 세로이다
  flex-direction: row; // main axis가 가로이다
`;

const FlexWrap = css`
  flex-wrap: nowrap; // Item들이 가진 총합의 width 보다 Container의 width길이가 작아질 경우, Item을 그냥 No wrap할 건지 아닌지 결정함
`;

const FlexFlow = css`
  flex-flow: flex-direction flex-wrap; // f-d, f-w 줄인 속성
`;

// 중요
// flex item에 적용하는 속성
const FlexBasis = css`
  // flex-basis: Flex 아이템이 가지는 기본 크기 (점유하는 기본 크기) 설정 f-d가 row 이면 넓이, column이면 높이 설정하는 것이다.
  flex-basis: auto; // 자신이 가진 크기만큼 설정되는 옵션 // 기본적으로는 width의 값을 f-b가 가지게 된다
  flex-basis: 100px; // Item들이 가지는 크기가 100px 이하이면 100px까지 width 가 늘어나며 (row일 경우) 100px 이상이면 자기자신의 크기로서 설정된다.
  width: 100px; // f-b: 100px과 차이점은 그저 모든 Item들이 100px이 고정으로 된다. 100px 이하던 이상이던 100px만 width로 설정한다.

  flex-basis: content; //
  // ref: flex-basis: auto일 경우는 설정한 width의 값이 들어가게 된다. (기본적으로 flex내에서 width를 적용할때)
  // 그치만 flex:1 같이 flex-basis: 0 이면 width가 아무리 바뀌어도 basis: 0이니 그저 자기자신만 크기로 가지게 된다
`;

// 중요 [https://blogpack.tistory.com/863] 참고
// flex item에 적용하는 속성
const FlexGrow = css`
  // flex-grow: (row 기준) 각각의 아이템들의 기본 컨텐츠의 넓이만 있는 상태에서 Container width에 충족되지 않는 다면 여백이 있을 것이다.
  // 그 Item 안에서 그 Container의 넓이에 충족되지 않은 여백을 어떠한 flex-grow: n에서 n의 비율로 남아있는 여백을 Item의 여백으로서 사용하는 것이다.
  // flex-basis에서 Container의 남아있는 여백을 비율로서 나누어 가진다고 생각하면 된다.
  // Item이 하나만 flex-grow가 설정되어 있다면 1 밖에 비율이 없으니 그 Item이 혼자 남은 여백을 1로서 다 가질 것이며, (모두 가진다)
  // Item이 하나만 flex-grow가 설정되어 있고, 0 밖에 비율이 없다면 그 Item은 남은 여백을 0으로서 가질 것이다. (안 가진다 => 안 늘어난다)
  // Item이 둘이 flex-grow가 1:1로 설정되어 있다면 남은 여백의 크기를 각각의 Item의 여백으로 균일히 제공할 것이며,
  // Item이 셋이 flex-grow가 1:1:1로 설정되어 있다면 남은 여백의 크기를 각각의 Item의 여백으로 제공할 것이다.
  // 그치만 Item이 셋이 flex-grow가 1:5:1로 설정되어 있다면 남은 여백의 크기를 각각 1:5:1로서 분배하여 Item의 여백으로서 제공할 것이다.
`;

// 중요
// flex item에 적용하는 속성
const FlexShrink = css`
  // flex-shrink: 각 Item들의 고정 (기본) 넓이의 합보다 Container width가 줄어들때, 각 아이템들의 초과된 넓이의 길이를 flex-shrink: 1:1 이라면
  // 초과된 넓이의 길이를 1:1로서 나누어 나눈 값을 아이템이 가지고 있는 기본 넓이에서 빼주는 것이다.
  // 1:2:1로 설정되어 있다면 1:2:1로 초과된 넓이를 나누어서 그만큼들을 각각의 아이템에서 빼주는 것이다.
  // 이것은 여백이 아니며, 그저 아이템 전체에 대한 넓이로 적용된다.
  // 그러하여 비율이 커질수록 더욱더 작아지게 된다.
  // flex-shrink: 0이면 flex-grow와 마찬가지로 현재 있는 넓이에서 아무것도 안 빼게 된다는 의미이다. (안 뺀다 => 안 줄어든다)
`;

// 중요
const Flex = css`
  flex: flex-grow flex-shrink flex-basis; // f-g f-s f-b 축약 속성
  flex: 1; // flex: 1 1 0%: flex-basis가 auto가 아닌 것에 주의 한다
  flex: 1 auto; // flex: 1 1 auto
  flex: 1 500px; // flex: 1 1 500px
  flex: 1 2; // flex: 1 2 0%
`;

const 정렬 = css`
  // justify: main axis 방향으로 정렬 // 가로 혹은 세로 정렬
  // align: cross axis 방향으로 정렬 // 세로 혹은 가로 정렬
`;

// flex container에 적용하는 속성
const MainAxis방향_정렬 = css`
  // justify-content: 모든 아이템들을 main axis에 따라 정렬하는 속성
  justify-content: flex-start; // 왼쪽의 start (기준: row)
  justify-content: flex-end; // 오른쪽의 end
  justify-content: center; // 중앙
  justify-content: space-between; // 나란히 끝쪽에 붙어 균일히 정렬
  justify-content: space-around; // 각각의 양쪽에 공간을 균일히 주어 정렬
  justify-content: space-evenly; // 전체적으로 양쪽에 균일한 여백
`;

// flex container에 적용하는 속성
const CrossAxis방향_각각의아이템정렬 = css`
  // algin-items: 각각의 아이템들을 cross axis 정렬하는 속성
  align-items: stretch; // Container의 height까지 모든 Item의 높이가 올라감
  align-items: flex-start; // Container 높이의 가장 높은 곳 (기준: row)
  align-items: flex-end; // 높이의 가장 낮은 곳
  align-items: center; // 높이의 중간
  align-items: baseline; // text baseline
`;

// flex container에 적용하는 속성
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

const Height = css`
  min-height: 100px; // 최소가 100px 이상
  max-height: 100px; // 최대가 100px 이하
`;

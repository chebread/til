import styled from 'styled-components';

const CardListUI = () => {
  return (
    <Div>
      <CardList>
        <CardItem>
          <CardImage>
            <img src="https://www.jeong-min.com/static/d7ef5f98d66961b6564652f8522c7414/7bf07/9-23.png" />
          </CardImage>
          <CardDesc>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Asperiores, mollitia!
          </CardDesc>
        </CardItem>
        <CardItem>
          <CardImage>
            <img src="https://www.jeong-min.com/static/d7ef5f98d66961b6564652f8522c7414/7bf07/9-23.png" />
          </CardImage>
          <CardDesc>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Asperiores,or sit amet consectetur adipisicing elit. Asperiores,or
            sit amet consectetur adipisicing elit. Asperiores,or sit amet
            consectetur adipisicing elit. Asperiores,or sit amet consectetur
            adipisicing elit. Asperiores, mollitia!
          </CardDesc>
        </CardItem>
        <CardItem>
          <CardImage>
            <img src="https://www.jeong-min.com/static/d7ef5f98d66961b6564652f8522c7414/7bf07/9-23.png" />
          </CardImage>
          <CardDesc>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Asperiores, mollitia!
          </CardDesc>
        </CardItem>
        <CardItem>
          <CardImage>
            <img src="https://www.jeong-min.com/static/d7ef5f98d66961b6564652f8522c7414/7bf07/9-23.png" />
          </CardImage>
          <CardDesc>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Asperiores,or sit amet consectetur adipisicing elit. Asperiores,or
            sit amet consectetur adipisicing elit. Asperiores, mollitia!
          </CardDesc>
        </CardItem>
        <CardItem>
          <CardImage>
            <img src="https://www.jeong-min.com/static/d7ef5f98d66961b6564652f8522c7414/7bf07/9-23.png" />
          </CardImage>
          <CardDesc>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Asperiores, mollitia!
          </CardDesc>
        </CardItem>
        <CardItem>
          <CardImage>
            <img src="https://www.jeong-min.com/static/d7ef5f98d66961b6564652f8522c7414/7bf07/9-23.png" />
          </CardImage>
          <CardDesc>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Asperiores, mollitia!
          </CardDesc>
        </CardItem>
      </CardList>
    </Div>
  );
};

const Div = styled.div`
  overflow-x: hidden; // 오른쪽에 1rem 공백 제거
`;
const CardList = styled.div`
  @media (min-width: 600px) {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -1rem;
  }
`;
const CardItem = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 2rem;
  box-sizing: border-box; // 이거 없으면 padding 소용 무
  @media (min-width: 600px) {
    padding: 0 1rem;
    width: 50%; // 이것은 그냥 50%이지 flex-shrink: 1이므로 줄어들 수도 있다  }
  }
  @media (min-width: 1200px) {
    width: 33.33333%;
  }
`;
const CardImage = styled.figure`
  background-image: url('https://www.jeong-min.com/static/d7ef5f98d66961b6564652f8522c7414/7bf07/9-23.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: lightgray;
  height: 0;
  padding-bottom: 60%; // 이게 어캐 가능해?
  margin: 0;
  img {
    display: none;
  }
`;
const CardDesc = styled.div`
  padding: 1em;
  background-color: rgb(230, 230, 230);
  flex: 1 1 auto;
`;

export default CardListUI;

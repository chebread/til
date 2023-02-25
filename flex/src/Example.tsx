import { useState } from 'react';
import styled from 'styled-components';
import BulletListUI from './components/BulletListUI';
import CardListUI from './components/CardListUI';
import MenuUI from './components/MenuUI';
import MessageListUI from './components/MessageListUI';
import ModalUI from './components/ModalUI';
import SearchUI from './components/SearchUI';
import UserListUI from './components/UserListUI';

function Example() {
  const [toggle, setToggle] = useState(false);

  const onClick = () => {
    setToggle(!toggle);
  };
  return (
    <Page>
      <Header>
        <WebsiteTitle>1분코딩</WebsiteTitle>
        <SearchUI />
        <ModalSwitch onClick={onClick}>🇧🇧</ModalSwitch>
        {toggle ? <ModalUI /> : ''}
      </Header>

      <MenuUI />

      <Primary>
        <CardListUI />
      </Primary>

      <Secondary>
        <SecondaryA>
          <BulletListUI />
          <UserListUI />
        </SecondaryA>
      </Secondary>
      <Secondary>
        <SecondaryB>
          <MessageListUI />
        </SecondaryB>
      </Secondary>

      <Footer>Lorem, ipsum d</Footer>
    </Page>
  );
}

const Page = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  height: 80px;
  padding: 0 1rem;
  @media (min-width: 1024px) {
    width: 100%;
  }
`;
const WebsiteTitle = styled.h1``;
const ModalSwitch = styled.div`
  z-index: 1;
  font-size: 2rem;
`;

const Primary = styled.section`
  padding: 1rem;
  box-sizing: border-box;
  @media (min-width: 1024px) {
    width: 60%;
  }
`;

const Secondary = styled.section`
  padding: 1rem;
  box-sizing: border-box; // width: 20%으로 맞추게 한다 (padding도 그렇고 모든 것을 계산하여 width: 20%만 맞춘다!)
  @media (min-width: 1024px) {
    width: 20%;
    order: 4;
  }
`;

const SecondaryA = styled.div`
  background-color: white;
  @media (min-width: 1024px) {
    order: 1;
  }
`;

const SecondaryB = styled.section`
  background-color: #666;
  color: white;
  @media (min-width: 1024px) {
    order: 10;
  }
`;

const Footer = styled.footer`
  padding: 1rem;
  text-align: center;
  @media (min-width: 1024px) {
    order: 10;
  }
`;
export default Example;

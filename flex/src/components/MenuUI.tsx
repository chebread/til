import styled from 'styled-components';

const MenuUI = () => {
  return (
    <Menu>
      <MenuItem>
        <MenuLink>Home</MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink>About</MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink>Product</MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink>Contact</MenuLink>
      </MenuItem>
    </Menu>
  );
};

const Menu = styled.div`
  display: flex;
  @media (min-width: 1024px) {
    width: 100%;
  }
`;
const MenuItem = styled.div`
  flex-grow: 1;
  background-color: gold;
  transition: 0.2s;
  &:hover {
    background-color: crimson;
    flex-grow: 1.2;
  }
`;
const MenuLink = styled.a`
  all: unset;
  display: block;
  font-size: 1.2rem;
  text-align: center;
  padding: 1em;
  &:hover {
    color: white;
  }
`;

export default MenuUI;

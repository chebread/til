import styled from 'styled-components';

const BulletListUI = () => {
  return (
    <InfoList>
      <InfoListItem>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In laudantium
        officiis soluta deserunt nobis consequatur natus perspiciatis cum
        repudiandae at.
      </InfoListItem>
      <InfoListItem>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In laudantium
        officiis sol
      </InfoListItem>
      <InfoListItem>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In laudantium
        officiis soluta deserunt nobis consequatur natus perspiciatis cum
        repudiandae at.
      </InfoListItem>
    </InfoList>
  );
};

const InfoList = styled.div``;
const InfoListItem = styled.div`
  margin: 0.5em 0;
  display: flex;
  &::before {
    content: '♫';
    margin-right: 0.5em;
  }
`;

export default BulletListUI;

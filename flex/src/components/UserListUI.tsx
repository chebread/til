import styled from 'styled-components';

const UserListUI = () => {
  return (
    <MessageList>
      <MessageItem>
        <UserPhoto></UserPhoto>
        <UserName>Lorem ipsum dolor sit</UserName>
      </MessageItem>
      <MessageItem>
        <UserPhoto></UserPhoto>
        <UserName>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
          amet? Lorem ipsum do
        </UserName>
      </MessageItem>
      <MessageItem>
        <UserPhoto></UserPhoto>
        <UserName>Lorem ipsum dolor sipsum dolor</UserName>
      </MessageItem>
    </MessageList>
  );
};

const MessageList = styled.div``;
const MessageItem = styled.div`
  display: flex;
  margin-bottom: 1.5em;
  align-items: center;
`;
const UserPhoto = styled.figure`
  margin: 0;
  background-image: url('https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F5785%2F2022%2F10%2F08%2F0000029134_004_20221008143403822.jpg&type=sc960_832');
  height: 50px;
  width: 50px;
  border: 2px solid #333;
  border-radius: 50%;
  background-color: gold;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  margin-right: 0.5em;
  flex-shrink: 0;
`;
const UserName = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export default UserListUI;

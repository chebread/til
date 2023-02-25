import styled from 'styled-components';

const MessageListUI = () => {
  return (
    <MessageList>
      <MessageItem>
        <UserPhoto></UserPhoto>
        <MessageContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
          amet?
        </MessageContent>
      </MessageItem>
      <MessageItem>
        <UserPhoto></UserPhoto>
        <MessageContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
          amet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Consequuntur, amet?
        </MessageContent>
      </MessageItem>
      <MessageItem>
        <UserPhoto></UserPhoto>
        <MessageContent>
          Lorem ipsum dolor sipsum dolor sipsum dolor sipsum dolor sit amet
          consectetur adipisicing elit. Consequuntur, amet?
        </MessageContent>
      </MessageItem>
    </MessageList>
  );
};

const MessageList = styled.div`
  margin-bottom: 2rem;
`;
const MessageItem = styled.div`
  display: flex;
  margin-bottom: 1.5em;
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
const MessageContent = styled.p``;
export default MessageListUI;

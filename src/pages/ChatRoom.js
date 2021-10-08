import React, { useState } from 'react';
import styled from 'styled-components';
import Profile from '../components/Profile';
import ChatInput from '../components/ChatInput';
import Message from '../components/Message';
import savedChat from '../data/savedChat';
function ChatRoom() {
  const [chatList, setChatList] = useState(savedChat);
  const [currentUser, setCurrentUser] = useState(0);
  return (
    <Wrapper>
      <Profile currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Message chatList={chatList} />
      <ChatInput currentUser={currentUser} setChatList={setChatList} />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 10px;
`;
export default ChatRoom;

import React, { useState } from 'react';
import styled from 'styled-components';
function ChatInput({ currentUser, setChatList }) {
  const [message, setMessage] = useState('');
  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };
  const handleSendMessageBtnClick = () => {
    if (message)
      setChatList((previousChat) => [
        ...previousChat,
        {
          text: message,
          userId: currentUser,
        },
      ]);
    else {
      alert('내용을 입력하세요');
    }
    setMessage('');
  };
  return (
    <InputBox>
      <Input
        placeholder="메시지 전송하기"
        onChange={handleInputChange}
        value={message}
      />
      <Button onClick={handleSendMessageBtnClick}>전송</Button>
    </InputBox>
  );
}
const InputBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;
const Input = styled.input`
  height: 50px;
  width: 70%;
  border: 1px solid lightgray;
  border-radius: 20px;
  margin-right: 10px;
  padding-left: 10px;
  text-align: left;
  font-family: 'Goyang';
`;
const Button = styled.button`
  height: 30px;
  background-color: #ffe990;
  text-align: center;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  font-family: 'Goyang';
`;
export default ChatInput;

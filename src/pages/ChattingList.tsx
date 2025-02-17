import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import users from '../data/user.json';
import Profile from '../components/Profile';
import savedChat from '../data/savedChat.json';
import TopBar from '../components/Menu/TopBar';
import SearchBox from '../components/SearchBox';
import { BodyContainer } from '../components/Styles';
function ChattingList() {
  const [searchClick, setSearchClick] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');
  const onSearchButtonClicked = () => {
    setSearchClick(!searchClick);
  };
  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const searchResult = savedChat.filter((chat) => {
    return chat.name.includes(search);
  });
  return (
    <BodyContainer>
      <TopBar current="chat" onSearchButtonClicked={onSearchButtonClicked} />
      {searchClick ? (
        <SearchBox
          searchClick={searchClick}
          setSearchClick={setSearchClick}
          handleInputChange={handleSearchInputChange}
        />
      ) : (
        ''
      )}
      {searchResult.map((chats, i) => {
        const lenChat = chats.chat.length;
        return (
          <StyledLink to={`/chatroom/${chats.userId}`} key={chats.userId}>
            <Profile
              user={users[chats.userId]}
              text={chats.chat[lenChat - 1].text}
            />
          </StyledLink>
        );
      })}
    </BodyContainer>
  );
}
const StyledLink = styled(Link)`
  text-decoration: none;
  &:visited,
  &:link {
    color: inherit;
  }
`;
export default ChattingList;

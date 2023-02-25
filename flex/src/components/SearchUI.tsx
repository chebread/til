import styled from 'styled-components';

const SearchUI = () => {
  return (
    <SearchForm>
      <SearchInput type="search"></SearchInput>
      <SubmitButton type="submit">찾기</SubmitButton>
    </SearchForm>
  );
};

const SearchForm = styled.div`
  display: flex;
  margin-left: auto;
  height: 40px;
  width: 300px;
  max-width: 60%; // 무슨 의미
`;
const SearchInput = styled.input`
  flex-grow: 1;
  margin-right: 10px;
  border: 0;
  border-radius: 0.3em;
  font-size: 1rem;
  background-color: rgb(240, 240, 240);
`;
const SubmitButton = styled.button`
  width: 4em;
  border: 0;
  border-radius: 0.3em;
  font-size: 1rem;
  background-color: gold;
`;

export default SearchUI;

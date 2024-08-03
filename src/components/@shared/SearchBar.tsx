import styled from "styled-components";
import searchIcon from "../../assets/images/ic_search.png";

const StyledSearchBarArea = styled.form`
  display: flex;
  width: 100%;
  height: 42px;
  background-color: ${({ theme }) => theme.colors.gray100};
  border-radius: 12px;
  align-items: center;
  padding: 9px 16px;
  gap: 10px;

  grid-area: search;

  &:focus-within {
    border: 1px solid ${({ theme }) => theme.colors.brandBlue};
  }
`;

const StyledSearchSubmitBtn = styled.button`
  background-color: inherit;
  width: 24px;
  height: 24px;

  & img {
    width: 24px;
    height: 24px;
  }
`;

const StyledSearchInput = styled.input`
  display: block;
  width: 100%;
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray400};
  background-color: inherit;
  border: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray400};
  }

  &:valid {
    color: ${({ theme }) => theme.colors.gray800};
  }
`;

function SearchBar() {
  return (
    <StyledSearchBarArea>
      <StyledSearchSubmitBtn type="submit">
        <img src={searchIcon} alt="검색 아이콘" />
      </StyledSearchSubmitBtn>
      <StyledSearchInput placeholder="검색할 상품을 입력해주세요" />
    </StyledSearchBarArea>
  );
}

export default SearchBar;

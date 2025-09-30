import styled from "styled-components";
import { Search } from "lucide-react";

const SearchWrapper = styled.div`
  position: relative;
  flex: 1;

  @media (max-width: 768px) {
    display: none;
  }
`;

const SearchField = styled.input`
  width: 100%;
  border: none;
  border-radius: 20px;
  padding: 0.8rem 0.8rem 0.8rem 2rem; /* extra left padding for icon */
  font-size: 0.9rem;
  background: #f9f9f9;

  &:focus {
    outline: none;
    border: none;
  }
`;

const SearchIcon = styled(Search)`
  position: absolute;
  top: 50%;
  left: 8px;
  transform: translateY(-50%);
  color: #888;
  width: 16px;
  height: 16px;
`;

export default function SearchInput() {
  return (
    <SearchWrapper>
      <SearchIcon />
      <SearchField type="text" placeholder="Search" />
    </SearchWrapper>
  );
}

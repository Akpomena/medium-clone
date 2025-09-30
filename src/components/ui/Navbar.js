import styled from "styled-components";
import { Menu, SquarePen, Bell, Search } from "lucide-react";
import SearchInput from "./SearchInput";

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  background: #fff;
  border-bottom: 1px solid #ddd;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`;

const WriteWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const WriteButton = styled.button`
  padding: 0;
  border: none;
  border-radius: 6px;
  background: white;
  cursor: pointer;
  color: grey;

  &:hover {
    background: #f9f9f9;
  }
`;

const BellIcon = styled(Bell)`
  color: grey;

  @media (max-width: 768px) {
    display: none;
  }
`;

const SearchIcon = styled(Search)`
  display: none;
  color: grey;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 100%;
  background-color: #000;
`;

export default function Navbar() {
  return (
    <Header>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <Menu color="grey" />
        <Title>Medium</Title>
        <SearchInput />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
        <WriteWrapper>
          <SquarePen color="grey" />
          <WriteButton>Write</WriteButton>
        </WriteWrapper>
        <BellIcon />
        <SearchIcon />
        <Avatar />
      </div>
    </Header>
  );
}

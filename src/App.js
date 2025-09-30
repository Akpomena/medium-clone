import { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "./components/ui/Navbar";
import ArticleCard from "./components/ui/ArticleCard";
import Sidebar from "./components/ui/Sidebar";
import { Container } from "./components/ui/Layout";


const Tabs = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  border-bottom: 0.5px solid #ddd;
`;

const Tab = styled.h4`
  margin: 0;
  padding: 1.5rem 0;
  cursor: pointer;
  color: ${(props) => (props.active ? "black" : "grey")};
  border-bottom: ${(props) => (props.active ? "1px solid black" : "none")};
`;

const ArticlesGrid = styled.section`
  display: grid;
  gap: 1rem;
`;

const SidebarWrapper = styled.aside`
  display: grid;
  gap: 1rem;
  border-left: 1px solid #ddd;
`;

export default function App() {

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("/data/articles.json")
      .then((res) => res.json())
      .then((data) => setArticles(data))
      .catch((err) => console.error("Error loading articles:", err));
  }, []);


  return (
    <div>
      <Navbar />
      <Container>
        <div>
          <Tabs>
            <Tab active>For you</Tab>
            <Tab>Featured</Tab>
          </Tabs>
          <ArticlesGrid>
            {articles.map((a) => (
              <ArticleCard key={a.id} article={a} />
            ))}
          </ArticlesGrid>
        </div>

        <SidebarWrapper>
          <Sidebar />
        </SidebarWrapper>
      </Container>
    </div>
  );
}
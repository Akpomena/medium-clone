import styled from "styled-components";
import { useState, useEffect } from "react";
import PickCard from "./PickCard";
import { Bookmark } from "lucide-react";

const Box = styled.div`
  background: white;
  padding: 1rem;
`;

const Heading = styled.h3`
  font-weight: 600;
  margin-bottom: 0.6rem;
`;

const List = styled.ul`
  font-size: 0.9rem;
  color: #444;
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin-bottom: 0.5rem;
  }
`;

const SidebarSection = styled.div`
  background: #fff;
  padding: 1rem;
`;

const SectionTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const FollowList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.75rem;
`;

const FollowItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  font-size: 0.9rem;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const FollowName = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 700;
  font-size: 0.9rem;
`;

const FollowButton = styled.button`
  border: 1px solid #ccc;
  border-radius: 20px;
  background: transparent;
  padding: 0.25rem 0.75rem;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  color: #ccc;

  &:hover {
    background: #000;
    color: #fff;
  }
`;

const ReadingListText = styled.p`
  font-size: 0.85rem;
  color: #555;
  line-height: 1.4;
`;

const ReadingListLink = styled.a`
  font-size: 0.85rem;
  color: #555;
  text-decoration: none;
  cursor: pointer;
  margin: 0 0.5rem;
`;

const ProfileImage = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 100%;
  object-fit: cover;
`;

export default function Sidebar() {
  const [picks, setPicks] = useState([]);

  useEffect(() => {
    fetch("/data/picks.json")
      .then((res) => res.json())
      .then((data) => setPicks(data))
      .catch((err) => console.error("Error loading picks:", err));
  }, []);

  return (
    <>
      <Box>
        <Heading>Staff Picks</Heading>
        <List>
          {picks.map((a) => (
            <PickCard key={a.id} pick={a} />
          ))}
        </List>
      </Box>

      <Box>
        <Heading>Recommended Topics</Heading>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {["Data Science", "React", "Coding", "Mental Health", "UX", "Python", "Productivity"].map((t) => (
            <span
              key={t}
              style={{
                border: "1px solid #ccc",
                borderRadius: "12px",
                padding: "0.8rem 1rem",
                fontSize: "0.8rem",
              }}
            >
              {t}
            </span>
          ))}
        </div>
          <p style={{color: "#ccc"}}>See more topics</p>
      </Box>

      <SidebarSection>
        <SectionTitle>Who to follow</SectionTitle>
        <FollowList>
          <FollowItem>
            <ProfileImage src="/images/languagelab.jpeg" />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.2rem",
              }}
            >
              <FollowName>Dr. Derek Austin 🥳</FollowName>
              <p
                style={{
                  margin: "0",
                  color: "#ccc",
                  width: "80%",
                  lineHeight: "1.5",
                }}
              >
                AI Context Engineer . I teach LLMs to think . Full...
              </p>
            </div>

            <FollowButton>Follow</FollowButton>
          </FollowItem>
          <FollowItem>
            <ProfileImage src="/images/languagelab.jpeg" />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.2rem",
              }}
            >
              <FollowName>ITNEXT</FollowName>
              <p
                style={{
                  margin: "0",
                  color: "#ccc",
                  width: "80%",
                  lineHeight: "1.5",
                }}
              >
                ITNEXT is a platform for IT developers and software...
              </p>
            </div>

            <FollowButton>Follow</FollowButton>
          </FollowItem>
          <FollowItem>
            <ProfileImage src="/images/languagelab.jpeg" />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.2rem",
              }}
            >
              <FollowName>Oliver Foster</FollowName>
              <p
                style={{
                  margin: "0",
                  color: "#ccc",
                  width: "80%",
                  lineHeight: "1.5",
                }}
              >
                Primarily proficient in the java programming...
              </p>
            </div>

            <FollowButton>Follow</FollowButton>
          </FollowItem>
        </FollowList>

        <p style={{color: "#ccc"}}>See more suggestions</p>
      </SidebarSection>

      {/* Reading list */}
      <SidebarSection>
        <SectionTitle>Reading list</SectionTitle>
        <ReadingListText>
          Click the <Bookmark size="16" /> on any story to easily add it to your
          reading list or a custom list that you can share.
        </ReadingListText>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          <ReadingListLink href="#">Help</ReadingListLink>
          <ReadingListLink href="#">Status</ReadingListLink>
          <ReadingListLink href="#">About</ReadingListLink>
          <ReadingListLink href="#">Career</ReadingListLink>
          <ReadingListLink href="#">Press</ReadingListLink>
          <ReadingListLink href="#">Blog</ReadingListLink>
          <ReadingListLink href="#">Privacy</ReadingListLink>
          <ReadingListLink href="#">Rules</ReadingListLink>
          <ReadingListLink href="#">Terms</ReadingListLink>
          <ReadingListLink href="#">Text to speech</ReadingListLink>
        </div>
      </SidebarSection>
    </>
  );
}

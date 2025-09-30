import styled from "styled-components";
import {
  Heart,
  MessageCircle,
  Bookmark,
  MoreHorizontal,
  CircleMinus,
} from "lucide-react";

const Card = styled.div`
  display: flex;
  gap: 1rem;
  background: white;
  padding: 1rem;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const Content = styled.div`
  flex: 1;
  
`;

const Topic = styled.span`
  display: inline-block;
  padding: 0.2rem 0;
  font-size: 0.9rem;
  color: grey;
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

const MainText = styled.span`
  color: black;
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 1.8rem;
  margin-top: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Desc = styled.p`
  font-size: 0.9rem;
  color: #555;
  margin-top: 0.3rem;
`;

const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 1rem;
  font-size: 0.8rem;
  color: #777;
  align-items: center;
  width: "100%";

  svg {
    cursor: pointer;
  }

  span {
    display: flex;
    align-items: flex-end;
    gap: 0.25rem;
  }

  div {
    display: flex;
    gap: 1rem;
  }
`;

const Image = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 6px;

  @media (max-width: 768px) {
    max-width: 60px;
    max-height: 60px;
  }
`;

const ProfileImage = styled.img`
  object-fit: cover;
`;

const BookmarkIcon = styled(Bookmark)`

  @media (max-width: 768px) {
    display: none;
  }
`;

export default function ArticleCard({ article }) {
  return (
    <Card>
      <Content>
        <Topic>
          <ProfileImage
            src={article.profileimage}
            alt={article.author}
            width={24}
            height={24}
          />
          In <MainText> {article.topic} </MainText> by{" "}
          <MainText> {article.author} </MainText>
        </Topic>
        <Title>{article.title}</Title>
        <Desc>{article.description}</Desc>
        <Stats>
          <div>
            <span>👍 {article.likes}</span>
            <span>👁 {article.views}</span>
            <span>
              <MessageCircle size={16} /> {article.comments}
            </span>
          </div>
          <div>
            <CircleMinus size={24} />
            <BookmarkIcon size={24} />
            <MoreHorizontal size={24} />
          </div>
        </Stats>
      </Content>
      <Image src={article.image} alt={article.title} />
    </Card>
  );
}

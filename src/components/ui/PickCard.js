import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  background: white;
  padding: 1rem;
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


const Title = styled.h3`
  font-weight: bold;
  font-size: 1rem;
  margin-top: 0.5rem;
`;

const ProfileImage = styled.img`
  object-fit: cover;
`;

function PickCard({ pick }) {
  return (
    <Card>
      <Topic>
        <ProfileImage
          src={pick.image}
          alt={pick.author}
          width={24}
          height={24}
        />
        {pick.author} 
      </Topic>
      <Title>{pick.title}</Title>
      <span>{pick.date}</span>
    </Card>
  );
}

export default PickCard;

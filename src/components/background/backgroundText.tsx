import styled from "styled-components"

const BackgroundText = () =>{
  return (
    <Wrapper>
      <Title>Ansh Tyagi</Title>
      <Description>
        Full Stack Web Developer
      </Description>
    </Wrapper>
  );
}

export default BackgroundText

const Wrapper = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 1; /* Adjust the z-index to ensure text is above the canvas */
  color: white;
  font-size: 24px;
`;

const Title = styled.h1`
  color: rgba(255, 255, 255, 1);
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
`;

const Description = styled.p`
  max-width: 240px;
  color: rgba(255, 255, 255, 0.7);
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 130%;
  margin: 0 auto;
`;

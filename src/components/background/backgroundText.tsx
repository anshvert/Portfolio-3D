import { Vector3 } from "@react-three/fiber";
import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import * as THREE from "three"
import useStore from '@/slices/store';

interface BackgroundTextProps {}

const BackgroundText: React.FC<BackgroundTextProps> = ({}) => {

  const { setSideBarSection, setShowStuff, setPerspectiveCamera } = useStore()

  const sectionCanvasPositions: Record<string,Vector3> = {
    "skills" : new THREE.Vector3(-36.9,-9,-183)
  }

  const handleSideBarClick: Function = (section: string): void => {
    setShowStuff(true)
    setSideBarSection(section)
    setPerspectiveCamera(sectionCanvasPositions[section])
  };

  return (
    <Wrapper>
      <div>
        <Title>Ansh Tyagi</Title>
        <Description>Web Developer</Description>
      </div>
      <SiteNavigation>
        <NavigationItem href="#about">About Me</NavigationItem>
        <NavigationItem onClick={() => handleSideBarClick("skills")}>Skills / Projects</NavigationItem>
      </SiteNavigation>
    </Wrapper>
  );
};

export default BackgroundText;

const Wrapper = styled.div`
  position: absolute;
  top: 20px;
  left: 30px;
  z-index: 1; /* Adjust the z-index to ensure text is above the canvas */
  color: white;
  font-size: 24px;
  display: flex;
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

const SiteNavigation = styled.nav`
  max-width: 300px;
  color: rgba(255, 255, 255, 0.7);
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  margin: 40px auto;
  display: flex;
`;

const NavigationItem = styled.a`
  display: block;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 25px;
  margin: 10px 0;
  cursor: pointer;
  &:hover {}
`;

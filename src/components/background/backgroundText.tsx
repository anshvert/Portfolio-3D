import { Vector3 } from "@react-three/fiber";
import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import * as THREE from "three"
import useStore from '@/slices/store';

interface BackgroundTextProps {}

const BackgroundText: React.FC<BackgroundTextProps> = ({}) => {

  const { setSideBarSection, setShowStuff, setPerspectiveCamera } = useStore()

  const sectionCanvasPositions: Record<string,Vector3> = {
    "skills" : new THREE.Vector3(-41.33,-5,-155.90),
    "about": new THREE.Vector3(10.26,-1,-42.1)
  }

  const handleSideBarClick: Function = (section: string): void => {
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
        <NavigationItem onClick={() => handleSideBarClick("about")}>About Me</NavigationItem>
        <NavigationItem onClick={() => handleSideBarClick("skills")}>Skills</NavigationItem>
        <NavigationItem onClick={() => handleSideBarClick("projects")}>Projects</NavigationItem>
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
  color: rgba(255, 255, 255, 0.7);
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  margin: 0px 10px 0px 1300px;
  display: flex;
  justify-content: evenly; /* Horizontally center the content */
`;

const NavigationItem = styled.a`
  display: flex;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 25px;
  margin: 0 30px 0 0;
  cursor: pointer;
  &:hover {}
`;

import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br/>
    <br/>
    <br/>
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a Technologies in the web Development world.
      From Backend to the Design.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem"/>
        <ListContainer>
          <ListTitle>Front-End Development</ListTitle>
          <ListParagraph>Experience with React.js</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem"/>
        <ListContainer>
          <ListTitle>Back-End Development</ListTitle>
          <ListParagraph>Experienced with Building Database, Firebase and Building APIs</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size="3rem"/>
        <ListContainer>
          <ListTitle>UI/UX Designing</ListTitle>
          <ListParagraph>Experience with UX Building, Analysing and UI Designing </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;

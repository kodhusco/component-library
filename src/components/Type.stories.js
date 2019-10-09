import React from "react";
import { Type, Subtitle } from "./Type";
import styled from "styled-components";

export default {
  title: "Components | Type",
  parameters: {
    componentSubtitle: "Displays a HeroCard"
  }
};

const TypeWrapper = styled.div`
  margin-top: 10px;
`;

export const Headings = () => (
  <div>
    <TypeWrapper>
      <Type as="h1">Heading 1</Type>
    </TypeWrapper>
    <TypeWrapper>
      <Type as="h2">Heading 2</Type>
    </TypeWrapper>
    <TypeWrapper>
      <Type as="h3">Heading 3</Type>
    </TypeWrapper>
    <TypeWrapper>
      <Type as="h4">Heading 4</Type>
    </TypeWrapper>
    <TypeWrapper>
      <Type as="h5">Heading 5</Type>
    </TypeWrapper>
    <TypeWrapper>
      <Type as="h6">Heading 6</Type>
    </TypeWrapper>
  </div>
);

Headings.story = {
  name: "Headings",
  parameters: {
    options: {
      showPanel: false
    }
  }
};

export const LightHeadings = () => (
  <div>
    <TypeWrapper>
      <Type as="h1" variant="light">
        Heading 1
      </Type>
    </TypeWrapper>
    <TypeWrapper>
      <Type as="h2" variant="light">
        Heading 2
      </Type>
    </TypeWrapper>
    <TypeWrapper>
      <Type as="h3" variant="light">
        Heading 3
      </Type>
    </TypeWrapper>
    <TypeWrapper>
      <Type as="h4" variant="light">
        Heading 4
      </Type>
    </TypeWrapper>
    <TypeWrapper>
      <Type as="h5" variant="light">
        Heading 5
      </Type>
    </TypeWrapper>
    <TypeWrapper>
      <Type as="h6" variant="light">
        Heading 6
      </Type>
    </TypeWrapper>
  </div>
);

LightHeadings.story = {
  name: "Light headings",
  parameters: {
    options: {
      showPanel: false
    }
  }
};

const StyledSubtitle = styled(Subtitle)`
  color: red;
`;

export const sub = () => (
  <StyledSubtitle>Here goes the subtitle</StyledSubtitle>
);

sub.story = {
  name: "Sub title",
  parameters: {
    options: {
      showPanel: false
    }
  }
};

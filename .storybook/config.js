import React from "react";
import { configure, addDecorator } from "@storybook/react";
import { GlobalStyle } from "../src/shared/global";

addDecorator(story => (
  <>
    <GlobalStyle />
    {story()}
  </>
));

configure(
  [
    require.context("../src/components", false, /Intro\.stories\.mdx/),
    require.context("../src/components", true, /\.stories\.(js|mdx)$/)
  ],
  module
);

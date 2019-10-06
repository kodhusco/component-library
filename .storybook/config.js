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
    require.context("../src", false, /Intro\.stories\.mdx/),
    require.context("../src", true, /\.stories\.(js|mdx)$/)
  ],
  module
);

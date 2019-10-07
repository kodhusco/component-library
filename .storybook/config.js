import React from "react";
import { configure, addDecorator } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { GlobalStyle } from "../src/shared/global";

addDecorator(withA11y);
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

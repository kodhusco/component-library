import React from "react";
import { configure, addDecorator, addParameters } from "@storybook/react";
import { create } from "@storybook/theming";
import { withA11y } from "@storybook/addon-a11y";
import { GlobalStyle } from "../src/shared/global";

addParameters({
  options: {
    theme: create({
      base: "light",
      brandTitle: "Design system",
      brandUrl: "",
      brandImage: null
    }),
    isFullscreen: false,
    showPanel: true,
    panelPosition: "bottom"
  }
});

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
    require.context("../src/components", false, /Quickstart\.stories\.mdx/),
    require.context("../src/components", true, /\.stories\.(js|mdx)$/)
  ],
  module
);

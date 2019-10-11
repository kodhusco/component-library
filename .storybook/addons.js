import "@storybook/addon-actions/register";
import "@storybook/addon-links/register";
import "@storybook/addon-storysource/register";
import "@storybook/addon-a11y/register";

import addons from "@storybook/addons";
import { STORY_RENDERED } from "@storybook/core-events";
import packageJson from "../package.json";

addons.register("TitleAddon", api => {
  api.on(STORY_RENDERED, story => {
    const storyData = api.getCurrentStoryData();
    document.title = `${storyData.name} - ${packageJson.name}`;
  });
});

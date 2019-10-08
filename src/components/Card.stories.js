import React from "react";
import { Card } from "./Card";

export default {
  title: "Components | Card",
  parameters: {
    component: Card,
    componentSubtitle: "Displays a Card"
  }
};

export const defaultCard = () => (
  <Card
    title="Gothenburg"
    subTitle="Great city with warm population"
    type="hero"
    image="https://blogs.studyinsweden.se/wp-content/uploads/2019/06/per_pixel_petersson-gothenburg-5230-1440x700.jpg"
  />
);

defaultCard.story = {
  name: "Default Card"
};

export const CardWithHoverEffect = () => (
  <Card
    title="Gothenburg"
    subTitle="Great city with warm population"
    image="https://blogs.studyinsweden.se/wp-content/uploads/2019/06/per_pixel_petersson-gothenburg-5230-1440x700.jpg"
    hoverEffect="gray_scale"
  />
);

CardWithHoverEffect.story = {
  name: "Card with Hover effect"
};

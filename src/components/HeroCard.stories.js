import React from "react";
import { HeroCard } from "./HeroCard";

export default {
  title: "Components | HeroCard",
  parameters: {
    component: HeroCard,
    componentSubtitle: "Displays a HeroCard"
  }
};

export const defaultCard = () => (
  <div style={{ display: "flex", width: "100%" }}>
    <HeroCard
      title="Gothenburg is a great city and something of a kind"
      image="https://blogs.studyinsweden.se/wp-content/uploads/2019/06/per_pixel_petersson-gothenburg-5230-1440x700.jpg"
      style={{ flexBasis: "25%" }}
    >
      something nice
    </HeroCard>
  </div>
);

defaultCard.story = {
  name: "Default Card"
};

export const CardAsList = () => (
  <HeroCard
    title="Gothenburg"
    type="list"
    image="https://blogs.studyinsweden.se/wp-content/uploads/2019/06/per_pixel_petersson-gothenburg-5230-1440x700.jpg"
  >
    something nice
  </HeroCard>
);

CardAsList.story = {
  name: "Card as List"
};

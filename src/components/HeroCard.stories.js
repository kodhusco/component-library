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
  <div style={{ display: "flex", width: "100%", flexWrap: "wrap" }}>
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
  <div style={{ display: "flex", width: "100%", flexWrap: "wrap" }}>
    <HeroCard
      title="Gothenburg is a great city and something of a kind"
      image="https://blogs.studyinsweden.se/wp-content/uploads/2019/06/per_pixel_petersson-gothenburg-5230-1440x700.jpg"
      type="list"
    >
      something nice
    </HeroCard>
  </div>
);

CardAsList.story = {
  name: "Card as List"
};

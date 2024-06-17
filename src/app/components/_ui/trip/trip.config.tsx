export type TripCardProps = {
  title: string;
  previewUrl: string;
  labels: string[];
  pick: string;
  rating?: string;
  totalDayTime?: string;
};

export type TripCardsProps = {
  cards: TripCardProps[][];
  highlightsActive: boolean;
}

export type SimpleTripCardsProps = {
  cards: TripCardProps[];
};

export type PointProps = {
  title: string;
  id: string;
  labels: string[];
  paragraph: string;
  cards: TripCardProps[][];
  stay: TripCardProps[];
};

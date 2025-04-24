export type TCard = {
  _id: string;
  title: string;
  hasDesc: string;
  totalComments: number;
};

export type TList = {
  _id: string;
  title: string;
  cards: TCard[];
};

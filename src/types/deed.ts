export type GoodDeed = {
  _id: string;
  title: string;
  isDone: boolean;
  userId: string;
};

export type GoodDeedUpdateData = Omit<GoodDeed, 'userId'>;

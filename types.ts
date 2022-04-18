export type Choice = {
  choice: string;
  votes: number;
  url: string;
};

export type Question = {
  question: string;
  published_at: Date;
  choices: Choice[];
  url: string;
};

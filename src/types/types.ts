type StepT = {
  number: number;
  title: string;
  text: string;
  img: string;
};

type MealT = {
  title: string;
  img: string;
  calories: number;
  nutriScore: number;
  rating: number;
  numReviews: number;
  tags: { name: string; color: string }[];
};

type TestimonialT = {
  img: string;
  text: string;
  authorName: string;
};

export type { StepT, MealT, TestimonialT };

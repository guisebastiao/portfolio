export const WORKS = [
  {
    title: "works.frengee-beginner.title",
    business: "works.frengee-beginner.business",
    description: "works.frengee-beginner.description",
    moment: "works.frengee-beginner.moment",
  },
] as const;

export type Work = (typeof WORKS)[number];

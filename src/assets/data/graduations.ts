export const GRADUATIONS = [
  {
    course: "graduations.computer-science.course",
    institution: "graduations.computer-science.institution",
    status: "graduations.computer-science.status",
    location: "graduations.computer-science.location",
  },
] as const;

export type Graduation = (typeof GRADUATIONS)[number];

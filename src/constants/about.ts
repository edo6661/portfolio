export type AboutItems = "professional-info" | "personal-info" | "hobbies";
export type ProfessionalInfoItemsValues =
  | "experience"
  | "hard-skills"
  | "soft-skills";
export type PersonalInfoItemsValues = "bio" | "interests" | "education";
export type HobbiesItemsValues = "films" | "music" | "games";

export type AllItems =
  | AboutItems
  | ProfessionalInfoItemsValues
  | PersonalInfoItemsValues
  | HobbiesItemsValues;

export const professionalInfoItemsValues: ProfessionalInfoItemsValues[] = [
  "experience",
  "hard-skills",
  "soft-skills",
];
export const personalInfoItemsValues: PersonalInfoItemsValues[] = [
  "bio",
  "interests",
  "education",
];
export const hobbiesItemsValues: HobbiesItemsValues[] = [
  "films",
  "music",
  "games",
];
export const aboutItems: AboutItems[] = [
  "professional-info",
  "personal-info",
  "hobbies",
];
export const imagesItem: Record<AboutItems, string> = {
  "professional-info": "icons/info-professional.svg",
  "personal-info": "icons/info-personal.svg",
  hobbies: "icons/info-hobbies.svg",
};

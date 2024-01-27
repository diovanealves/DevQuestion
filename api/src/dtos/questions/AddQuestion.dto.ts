export interface AddQuestionDTO {
  title: string;
  description: string;
  category: "Front-End" | "Back-End" | "Mobile";
}

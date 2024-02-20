export interface Question {
  id: string;
  title: string;
  description: string;
  categoriesname: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateQuestion {
  title: string;
  description: string;
  category: string;
}

export interface QuestionAndAnswers {
  id: string;
  title: string;
  description: string;
  categoriesname: string;
  createdAt: Date;
  updatedAt: Date;
  answers: answers[];
}

interface answers {
  id: string;
  text: string;
  likes: number;
  questionId: string;
  createdAt: Date;
  updatedAt: Date;
}

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

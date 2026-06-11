export interface Meal {
  id: string;
  title: string;
  thumbnail: string;
  instructions: string;
  difficulty?: string;
  category?: string;
  preparationTime?: number;
}
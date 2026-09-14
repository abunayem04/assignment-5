export type TechCategory =
  | 'Frontend'
  | 'Backend'
  | 'Database'
  | 'Language'
  | 'Styling'
  | 'DevOps'
  | 'Tools';

export type TechDifficulty = 'Beginner-Friendly' | 'Intermediate' | 'Advanced';

export interface Technology {
  id: string;
  name: string;
  category: TechCategory;
  description: string;
  icon: string;
  rating: number;
  difficulty: TechDifficulty;
  badge: string;
}

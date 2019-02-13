export interface Story {
  by: string;
  decendants: number;
  id: number;
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
}

export interface StoriesState {
  error?: string;
  top_stories: Story[];
  new_stories: Story[];
}

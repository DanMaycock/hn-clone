export interface Story {
  by: string;
  decendants: number;
  id: number;
  kids: number[];
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
}

export interface Comment {
  by: string;
  id: number;
  kids: number[];
  parent: number;
  text: string;
  time: number;
  type: string;
}

export interface StoriesState {
  error?: string;
  top_stories: Story[];
  new_stories: Story[];
  current_story?: Story;
  current_story_comments: Comment[];
}

import { StoriesState, Comment, Story } from '@/store/stories/types';

export function createDummyState(): StoriesState {
  return {
    topStories: [],
    newStories: [],
    error: undefined,
    currentStory: undefined,
    currentStoryComments: [],
    storiesPerPage: 5,
    page: 0,
  };
}

export function createDummyStory(id: number): Story {
  return {
    by: 'Dummy Author',
    decendants: 0,
    id,
    kids: [],
    score: 0,
    time: 0,
    title: 'A Great Title',
    type: 'story',
    url: 'somewhere',
  };
}

export function createDummyComment(id: number): Comment {
  return {
    by: 'Dummy Author',
    id,
    kids: [],
    parent: 0,
    text: 'Dummy comment',
    time: 0,
    type: 'comment',
  };
}

import { MutationTree } from 'vuex';
import { StoriesState } from './types';

export const mutations: MutationTree<StoriesState> = {
  appendTopStory: (state, story) => {
    state.top_stories.push(story);
  },
  appendNewStory: (state, story) => {
    state.new_stories.push(story);
  },
  setCurrentStory: (state, story) => {
    state.current_story = story;
  },
  clearComments: state => {
    state.current_story_comments = [];
  },
  appendNewComment: (state, comment) => {
    state.current_story_comments.push(comment);
  },
  setError: (state, error) => {
    state.error = error;
  },
};

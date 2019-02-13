import { MutationTree } from 'vuex';
import { StoriesState } from './types';

export const mutations: MutationTree<StoriesState> = {
  appendTopStory: (state, story) => {
    state.top_stories.push(story);
  },
  appendNewStory: (state, story) => {
    state.new_stories.push(story);
  },
  setError: (state, error) => {
    state.error = error;
  },
};

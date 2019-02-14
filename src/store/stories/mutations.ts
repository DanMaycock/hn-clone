import { MutationTree } from 'vuex';
import { StoriesState } from './types';

export const mutations: MutationTree<StoriesState> = {
  appendTopStory: (state, story) => {
    state.topStories.push(story);
  },
  appendNewStory: (state, story) => {
    state.newStories.push(story);
  },
  setCurrentStory: (state, story) => {
    state.currentStory = story;
  },
  clearCurrentStory: state => {
    state.currentStory = undefined;
  },
  clearComments: state => {
    state.currentStoryComments = [];
  },
  appendNewComment: (state, comment) => {
    state.currentStoryComments.push(comment);
  },
  setError: (state, error) => {
    state.error = error;
  },
};

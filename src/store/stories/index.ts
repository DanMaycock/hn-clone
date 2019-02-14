import { Module } from 'vuex';
import { actions } from './actions';
import { getters } from './getters';
import { mutations } from './mutations';
import { StoriesState } from './types';
import { RootState } from '../types';

export const state: StoriesState = {
  error: undefined,
  topStories: [],
  newStories: [],
  currentStory: undefined,
  currentStoryComments: [],
  storiesPerPage: 10,
  page: 1,
};

const namespaced: boolean = true;

export const stories: Module<StoriesState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};

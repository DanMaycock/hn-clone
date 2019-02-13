import { Module } from 'vuex';
import { actions } from './actions';
import { mutations } from './mutations';
import { StoriesState } from './types';
import { RootState } from '../types';

export const state: StoriesState = {
  error: undefined,
  top_stories: [],
  new_stories: [],
  current_story: undefined,
  current_story_comments: [],
};

const namespaced: boolean = true;

export const stories: Module<StoriesState, RootState> = {
  namespaced,
  state,
  actions,
  mutations,
};

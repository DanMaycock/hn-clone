import { Module } from 'vuex';
import { actions } from './actions';
import { mutations } from './mutations';
import { StoriesState } from './types';
import { RootState } from '../types';

export const state: StoriesState = {
  error: undefined,
  top_stories: [],
  new_stories: [],
};

const namespaced: boolean = true;

export const story: Module<StoriesState, RootState> = {
  namespaced,
  state,
  actions,
  mutations,
};

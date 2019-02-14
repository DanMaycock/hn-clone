import { ActionTree } from 'vuex';
import axios from 'axios';
import { StoriesState, Story, Comment } from './types';
import { RootState } from '../types';

async function fetchItem(id: number): Promise<Story | Comment> {
  try {
    const response = await axios.get(
      `https://hacker-news.firebaseio.com/v0/item/${id}.json`,
    );
    return response.data;
  } catch (err) {
    console.log(err);
    return err;
  }
}

async function fetchTopStoryIds(): Promise<number[]> {
  try {
    const response = await axios.get(
      'https://hacker-news.firebaseio.com/v0/topstories.json',
    );
    return response.data;
  } catch (err) {
    return err;
  }
}

async function fetchNewStoryIds(): Promise<number[]> {
  try {
    const response = await axios.get(
      'https://hacker-news.firebaseio.com/v0/newstories.json',
    );
    return response.data;
  } catch (err) {
    return err;
  }
}

export const actions: ActionTree<StoriesState, RootState> = {
  async fetchTopStories({ commit }) {
    try {
      const storyIds = await fetchTopStoryIds();
      storyIds.forEach(async (id: number) => {
        const story = await fetchItem(id);
        commit('appendTopStory', story);
      });
    } catch (err) {
      commit('setError', err);
    }
  },
  async fetchNewStories({ commit }) {
    try {
      const storyIds = await fetchNewStoryIds();
      storyIds.forEach(async (id: number) => {
        const story = await fetchItem(id);
        commit('appendNewStory', story);
      });
    } catch (err) {
      commit('setError', err);
    }
  },
  async fetchCurrentStoryWithComments({ commit }, id) {
    try {
      commit('clearCurrentStory');
      commit('clearComments');
      const item = await fetchItem(id);
      commit('setCurrentStory', item);
      item.kids.forEach(async (commentId: number) => {
        const comment = await fetchItem(commentId);
        commit('appendNewComment', comment);
      });
    } catch (err) {
      commit('setError', err);
    }
  },
};

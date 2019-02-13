import { ActionTree } from 'vuex';
import axios from 'axios';
import { StoriesState } from './types';
import { RootState } from '../types';

export const actions: ActionTree<StoriesState, RootState> = {
  fetch_top_stories({ commit }): any {
    axios
      .get('https://hacker-news.firebaseio.com/v0/topstories.json')
      .then(resp => {
        const results = resp.data.slice(0, 10);
        results.forEach((id: number) => {
          axios
            .get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
            .then(result => {
              commit('appendTopStory', result.data);
            })
            .catch(err => {
              commit('setError', err);
            });
        });
      })
      .catch(err => {
        commit('setError', err);
      });
  },
  fetch_new_stories({ commit }): any {
    axios
      .get('https://hacker-news.firebaseio.com/v0/newstories.json')
      .then(resp => {
        const results = resp.data.slice(0, 10);
        results.forEach((id: number) => {
          axios
            .get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
            .then(result => {
              commit('appendNewStory', result.data);
            })
            .catch(err => {
              commit('setError', err);
            });
        });
      })
      .catch(err => {
        commit('setError', err);
      });
  },
  async fetch_current_story_with_comments({ commit }, id) {
    commit('clearComments');
    axios
      .get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
      .then(res => {
        commit('setCurrentStory', res.data);
        res.data.kids.forEach((commentId: number) => {
          axios
            .get(`https://hacker-news.firebaseio.com/v0/item/${commentId}.json`)
            .then(result => {
              commit('appendNewComment', result.data);
            })
            .catch(err => {
              commit('setError', 'Error fetching comments');
            });
        });
      })
      .catch(err => {
        commit('setError', err);
      });
  },
};
import { GetterTree } from 'vuex';
import { StoriesState, Story } from '@/store/stories/types';
import { RootState } from '@/store/types';

export const getters: GetterTree<StoriesState, RootState> = {
  numberTopStories(state): number {
    const { topStories } = state;
    return topStories.length;
  },

  topStories(state): Story[] {
    const { topStories, storiesPerPage, page } = state;
    const from = (page - 1) * storiesPerPage;
    const to = page * storiesPerPage;
    return topStories.slice(from, to);
  },

  numberNewStories(state): number {
    const { newStories } = state;
    return newStories.length;
  },

  newStories(state): Story[] {
    const { newStories, storiesPerPage, page } = state;
    const from = (page - 1) * storiesPerPage;
    const to = page * storiesPerPage;
    return newStories.slice(from, to);
  },
};

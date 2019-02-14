import { mutations } from '@/store/stories/mutations';
import { StoriesState } from '@/store/stories/types';
import {
  createDummyComment,
  createDummyState,
  createDummyStory,
} from '../../../helpers/dummy_types';

describe('Stories modules mutations tests', () => {
  let state: StoriesState;

  beforeEach(() => {
    state = createDummyState();
  });

  it('appendTopStory adds to the top_story list', () => {
    const story = createDummyStory(1);
    mutations.appendTopStory(state, story);
    expect(state.topStories).toEqual([story]);
  });

  it('appendNewStory adds to the new_story list', () => {
    const story = createDummyStory(3);
    mutations.appendNewStory(state, story);
    expect(state.newStories).toEqual([story]);
  });

  it('setCurrentStory sets the current story', () => {
    const story = createDummyStory(4);
    mutations.setCurrentStory(state, story);
    expect(state.currentStory).toEqual(story);
  });

  it('clearCurrentStory rremoves the current story', () => {
    state.currentStory = createDummyStory(1);
    mutations.clearCurrentStory(state, {});
    expect(state.currentStory).toBe(undefined);
  });

  it('clearComments clears comments for current story', () => {
    state.currentStoryComments = [
      createDummyComment(1),
      createDummyComment(2),
      createDummyComment(3),
    ];
    mutations.clearComments(state, {});
    expect(state.currentStoryComments).toEqual([]);
  });

  it('appendNewComment adds to the current_story_comments_list', () => {
    const comment = createDummyComment(1);
    mutations.appendNewComment(state, comment);
    expect(state.currentStoryComments).toEqual([comment]);
  });

  it('setError sets the current error message', () => {
    const error = 'Dummy error message';
    mutations.setError(state, error);
    expect(state.error).toEqual(error);
  });
});

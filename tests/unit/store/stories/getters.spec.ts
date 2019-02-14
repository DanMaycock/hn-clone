import { getters } from '@/store/stories/getters';
import { StoriesState } from '@/store/stories/types';
import {
  createDummyState,
  createDummyStory,
} from '../../../helpers/dummy_types';

describe('Stories module getters tests', () => {
  let state: StoriesState;

  beforeEach(() => {
    state = createDummyState();
    state.topStories = [
      createDummyStory(0),
      createDummyStory(1),
      createDummyStory(2),
      createDummyStory(3),
      createDummyStory(4),
      createDummyStory(5),
      createDummyStory(6),
      createDummyStory(7),
    ];
  });

  it('topStories returns the correct range of stories', () => {
    state.storiesPerPage = 5;
    state.page = 1;

    const page_1 = getters.topStories(state, getters, { version: '0.0.0' }, {});
    expect(page_1).toEqual([
      createDummyStory(0),
      createDummyStory(1),
      createDummyStory(2),
      createDummyStory(3),
      createDummyStory(4),
    ]);

    state.page = 2;
    const page_2 = getters.topStories(state, getters, { version: '0.0.0' }, {});
    expect(page_2).toEqual([
      createDummyStory(5),
      createDummyStory(6),
      createDummyStory(7),
    ]);
  });
});

import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import New from '@/views/New.vue';
import { createDummyStory } from '../../helpers/dummy_types';
import { storeFactory } from '../../helpers/store_factory';
import { VueConstructor } from 'vue';

describe('New.vue', () => {
  let localVue: VueConstructor;

  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(Vuex);
  });

  it('calls fetchTopStories on mounted', () => {
    const getters = {
      newStories: () => [],
    };

    const actions = {
      fetchNewStories: jest.fn(),
    };
    const store = storeFactory(getters, actions);

    shallowMount(New, { store, localVue });
    expect(actions.fetchNewStories).toBeCalledTimes(1);
  });

  it('renders a StoryItem for each item', () => {
    const getters = {
      newStories: () => [
        createDummyStory(0),
        createDummyStory(1),
        createDummyStory(2),
        createDummyStory(3),
        createDummyStory(4),
      ],
    };
    const store = storeFactory(getters, {});

    const wrapper = shallowMount(New, { store, localVue });

    expect(wrapper.findAll('storyitem-stub').length).toBe(5);
  });
});

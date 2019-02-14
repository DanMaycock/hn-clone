import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Home from '@/views/Home.vue';
import { createDummyStory } from '../../helpers/dummy_types';
import { storeFactory } from '../../helpers/store_factory';
import { VueConstructor } from 'vue';

describe('Home.vue', () => {
  let localVue: VueConstructor;

  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(Vuex);
  });

  it('calls fetchTopStories on mounted', () => {
    const getters = {
      topStories: () => [],
    };

    const actions = {
      fetchTopStories: jest.fn(),
    };
    const store = storeFactory(getters, actions);

    shallowMount(Home, { store, localVue });
    expect(actions.fetchTopStories).toBeCalledTimes(1);
  });

  it('renders a StoryItem for each item', () => {
    const getters = {
      topStories: () => [
        createDummyStory(0),
        createDummyStory(1),
        createDummyStory(2),
        createDummyStory(3),
        createDummyStory(4),
      ],
    };
    const store = storeFactory(getters, {});

    const wrapper = shallowMount(Home, { store, localVue });

    expect(wrapper.findAll('storyitem-stub').length).toBe(5);
  });
});

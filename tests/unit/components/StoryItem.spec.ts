import { shallowMount } from '@vue/test-utils';
import StoryItem from '@/components/StoryItem.vue';
import { createDummyStory } from '../../helpers/dummy_types';
import Vue from 'vue';
import Router from 'vue-router';
import { Story } from '@/store/stories/types';

Vue.use(Router);

const factory = (story: Story) => {
  return shallowMount(StoryItem, {
    propsData: {
      story,
    },
  });
};

describe('StoryItem.vue', () => {
  let story: Story;

  beforeEach(() => {
    story = createDummyStory(0);
  });

  it('displays story score', () => {
    const score = 5;
    story.score = score;
    const wrapper = factory(story);

    expect(wrapper.find('.score').text()).toBe(score.toString());
  });

  it('displays story title', () => {
    const title = 'TestTitle';
    story.title = title;
    const wrapper = factory(story);
    expect(wrapper.find('.title').text()).toBe(title);
  });

  it('displays story url', () => {
    const url = 'http://dummy/url';
    story.url = url;
    const wrapper = factory(story);
    expect(wrapper.find('.url').text()).toBe(url);
  });

  it('displays author', () => {
    const author = 'John Doe';
    story.by = author;
    const wrapper = factory(story);
    expect(wrapper.find('.meta').text()).toBe('by ' + author);
  });
});

import { shallowMount } from '@vue/test-utils';
import CommentItem from '@/components/CommentItem.vue';
import { createDummyComment } from '../../helpers/dummy_types';
import Vue from 'vue';
import Router from 'vue-router';
import { Comment } from '@/store/stories/types';

Vue.use(Router);

const factory = (comment: Comment) => {
  return shallowMount(CommentItem, {
    propsData: {
      comment,
    },
  });
};

describe('CommentItem.vue', () => {
  let comment: Comment;

  beforeEach(() => {
    comment = createDummyComment(0);
  });

  it('displays comment text', () => {
    const text = 'This is a dummy comment text';
    comment.text = text;
    const wrapper = factory(comment);

    expect(wrapper.find('.comment-text').text()).toBe(text);
  });

  it('displays author', () => {
    const author = 'John Doe';
    comment.by = author;
    const wrapper = factory(comment);
    expect(wrapper.find('.comment-author').text()).toBe(author);
  });

  it('displays comment title', () => {
    const time = 1550158495;
    comment.time = time;
    const wrapper = factory(comment);
    expect(wrapper.find('.comment-date').text()).toBe(
      new Date(time * 1000).toString(),
    );
  });
});

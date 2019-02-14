<template>
  <div v-if="story" class="container">
    <h2 class="title">{{ story.title }}</h2>
    <p class="score">Score: {{story.score }}</p>
    <p class="url">
      <a href="url">{{ story.url }}</a>
    </p>
    <CommentItem v-for="comment in comments" :key="comment.id" :comment="comment"/>
  </div>
</template>
  
<script lang="ts">
import axios from 'axios';
import { Component, Vue } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';
import { StoriesState, Story, Comment } from '@/store/stories/types';
import CommentItem from '@/components/CommentItem.vue';
const namespace = 'stories';

@Component({
  components: { CommentItem },
})
export default class Single extends Vue {
  @State('currentStory', { namespace }) private story!: Story;
  @State('currentStoryComments', { namespace }) private comments!: Comment[];
  @Action('fetchCurrentStoryWithComments', { namespace })
  private getStory: any;

  private created() {
    if (!this.story || this.story.id !== +this.$route.params.id) {
      this.getStory(this.$route.params.id);
    }
  }
}
</script>
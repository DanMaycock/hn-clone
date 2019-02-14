<template>
  <div class="home">
    <StoryItem v-for="story in stories" :key="story.id" :story="story"></StoryItem>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import { Component, Vue } from 'vue-property-decorator';
import StoryItem from '@/components/StoryItem.vue';
import { Getter, Action, State } from 'vuex-class';
import { StoriesState, Story } from '@/store/stories/types';
const namespace: string = 'stories';

@Component({
  components: { StoryItem },
})
export default class Home extends Vue {
  @Getter('topStories', { namespace }) private stories!: Story[];
  @Action('fetchTopStories', { namespace }) private fetchStories: any;

  private mounted() {
    if (this.stories.length === 0) {
      this.fetchStories();
    }
  }
}
</script>

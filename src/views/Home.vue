<template>
  <div class="home">
    <Item v-for="story in stories" :key="story.id" :story="story"></Item>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import { Component, Vue } from 'vue-property-decorator';
import Item from '@/components/Item.vue';
import { State, Action } from 'vuex-class';
import { StoriesState, Story } from '@/store/stories/types';
const namespace: string = 'stories';

@Component({
  components: { Item },
})
export default class Home extends Vue {
  @State('top_stories', { namespace }) private stories!: StoriesState[];
  @Action('fetch_top_stories', { namespace }) private fetchStories: any;

  private mounted() {
    if (this.stories.length === 0) {
      this.fetchStories();
    }
  }
}
</script>

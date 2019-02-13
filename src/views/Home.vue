<template>
  <div class="home">
    <Item v-for="story in stories" :key="story.id" :story="story"></Item>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { Component, Vue } from "vue-property-decorator";
import Item from "@/components/Item.vue";
import { State, Action } from "vuex-class";
import { StoriesState, Story } from "@/store/story/types";
const namespace: string = "story";

@Component({
  components: { Item }
})
export default class Home extends Vue {
  @State("top_stories", { namespace }) stories!: StoriesState[];
  @Action("fetch_top_stories", { namespace }) fetchStories: any;

  created() {
    this.fetchStories();
  }
}
</script>

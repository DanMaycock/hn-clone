<template>
  <div class="story">
    <span class="score">{{story.score}}</span>
    <router-link :to="{path: `/story/${story.id}`}">
      <span class="title">{{ story.title }}</span>
      <span class="url">{{story.url}}</span>
    </router-link>
    <br>
    <span class="meta">by {{ story.by }}</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Story } from '@/store/stories/types';

@Component
export default class StoryItem extends Vue {
  @Prop(Object) public story!: Story;
}
</script>

<style scoped>
.story {
  background-color: #fff;
  padding: 20px 30px 20px 80px;
  border-bottom: 1px solid #eee;
  position: relative;
  line-height: 20px;
}
.score {
  color: #f60;
  font-size: 1.1em;
  font-weight: 700;
  position: absolute;
  top: 50%;
  left: 0;
  width: 80px;
  text-align: center;
  margin-top: -10px;
}
.story a {
  color: #34495e;
  font-weight: 600;
  text-decoration: none;
}
.story a span {
  font-size: 0.85em;
  margin-left: 10px;
  color: #828282;
}
.story .meta {
  font-size: 0.85em;
  color: #828282;
}
</style>

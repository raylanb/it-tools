<template>
  <div>
    <c-input-text type="text" v-model:value="githubUrl"  placeholder="Enter GitHub URL"/>
    <c-button @click="generateUrls">Generate URLs</c-button>
    <div v-if="jsdelivrCdnUrl && jsdelivrFastlyUrl">
      <h3>jsDelivr cdn URL: </h3>
      <TextareaCopyable :value="jsdelivrCdnUrl" />
      <h3>jsDelivr fastly URL: </h3>
      <TextareaCopyable :value="jsdelivrFastlyUrl" />
    </div>
  </div>
</template>

<script>
import { githubToJsDelivr } from './github-to-jsdelivr.service';
import TextareaCopyable from '@/components/TextareaCopyable.vue';
import { ref } from 'vue';

export default {
  data() {
    return {
      githubUrl: '',
      jsdelivrCdnUrl: '',
      jsdelivrFastlyUrl: ''
    };
  },
  methods: {
    generateUrls() {
      const [jsdelivrCdnUrl, jsdelivrFastlyUrl] = githubToJsDelivr(this.githubUrl);
      this.jsdelivrCdnUrl = jsdelivrCdnUrl;
      this.jsdelivrFastlyUrl = jsdelivrFastlyUrl;
    },
    
  }
};
</script>

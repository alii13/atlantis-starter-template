<script setup lang="ts">
import { ref } from "vue";
import { Button as AtlantisButton } from "@atlanhq/atlan-design-system";

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <AtlantisButton
      @click="count++"
      type="primary"
      :label="`count is ${count}`"
      size="default"
    >
    </AtlantisButton>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>

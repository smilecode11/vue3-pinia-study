<script setup lang="ts">
import { mainStore } from "../store/index";
import { storeToRefs } from "pinia";
const store = mainStore();
const { count, msg } = storeToRefs(store);
const addCount = () => {
  // 简单数据通过 store.xxx 直接修改
  count.value++;
};
const changeMoreData = () => {
  //  多条数据修改, $patch 方式会优化加快速度, 性能有所提升
  store.$patch((state) => {
    state.count++;
    state.msg = state.count % 2 === 0 ? "hello pinia" : "hello world";
  });
};
defineProps<{ msg: string }>();
</script>

<template>
  <h1>{{ msg }}</h1>
  <h2>{{ count }}</h2>
  <button @click="addCount">+1</button>
  <button @click="changeMoreData">多条数据修改, 使用$patch</button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>

<template>
  <div class="friend-item">
    <p>{{ friend.name }} - <strong>{{ friend.level }} lvl</strong></p>
  </div>
</template>

<script setup lang="ts">
interface Friend {
  name: string;
  level: number;
}

defineProps<{ friend: Friend }>();
</script>

<style scoped>
.friend-item {
  padding: 10px;
  background: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 5px;
}
</style>

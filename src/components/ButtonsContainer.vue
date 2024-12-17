<template>
  <div class="buttons-container">
    <MoreBonuses />
    <InviteButton />
  </div>
</template>

<script setup lang="ts">
import MoreBonuses from './MoreBonuses.vue';
import InviteButton from './InviteButton.vue';
</script>

<style scoped>
.buttons-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 20px auto;
  padding: 10px;
  border-radius: 10px;
  max-width: 800px;
}
</style>

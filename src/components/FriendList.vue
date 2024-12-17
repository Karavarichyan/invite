<template>
  <div class="wrapper">
    <div v-for="(friend, index) in friends" :key="index" class="item">
      <div class="friend-info">
        <div class="friend-avatar">
          <img src="@/assets/images/Avatar.svg" alt="Avatar" />
        </div>
        <span class="friend-name">{{ friend.name }}</span>
      </div>
      <span class="friend-level">{{ friend.level }} lvl</span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  friends: { name: string; level: number }[];
}>();
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  width: 338px;
  padding: 4px 6px;
  background: radial-gradient(#3081b4, #19488c);
  box-shadow: inset 0px 4px 4px #00030680;
  border-radius: 12px;
  margin: 0 auto;
}

.item {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 12px;
  width: 93%;
  height: 42px;
  background: radial-gradient(#3081b4, #19488c);
  border-radius: 8px;
  color: #ffffff;
}

.item::after {
  position: absolute;
  content: "";
  z-index: 1;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 1px;
  background: linear-gradient(to right, #a7defd80, #a7defd, #a7defd80);
}

.friend-info {
  display: flex;
  align-items: center;
  gap: 5px;
}

.friend-avatar img {
  width: 36px;
  height: 36px;
}

.friend-name {
  font-family: 'Lato', sans-serif;
  font-weight: bold;
  font-size: 14px;
  color: #ffffff;
  text-shadow:
    -1px -1px 0px #000,
     1px -1px 0px #000,
    -1px  1px 0px #000,
     1px  1px 0px #000;
}

.friend-level {
  font-family: 'Lato', sans-serif;
  font-size: 20px;
  font-weight: bold;
  color: #FFFFFF;
  padding-right: 30px;
  text-shadow:
    -1px -1px 0px #000,
     1px -1px 0px #000,
    -1px  1px 0px #000,
     1px  1px 0px #000;
}
</style>

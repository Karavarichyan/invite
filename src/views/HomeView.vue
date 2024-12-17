<template>
  <div class="home-view">
    <Header />
    <ButtonsContainer />
    <div class="buttons-container">
      <MoreBonuses />
      <InviteButton />
    </div>

    <h2 class="friends-title">List of your friends</h2>

    <ClaimButton />

    <FriendList :friends="friends" />
  </div>
</template>

<script setup lang="ts">
import ButtonsContainer from '../components/ButtonsContainer.vue'
import ClaimButton from '../components/ClaimButton.vue'
import FriendList from '../components/FriendList.vue'
import Header from '../components/Header.vue'

interface Friend {
  name: string
  level: number
}

const friends: Friend[] = [
  { name: 'Anastasia V', level: 1 },
  { name: 'Anastasia V', level: 1 },
  { name: 'Dmitro', level: 1 },
  { name: 'Diana', level: 15 },
  { name: 'Nikita', level: 99 },
  { name: 'Nikita', level: 99 },
]
</script>

<style scoped>
.home-view {
  background: radial-gradient(#41aee7, #054ba6);

  color: #ffffff;
  text-align: center;
  font-family: Arial, sans-serif;
  padding: 20px;
}

.title {
  font-size: 28px;
  font-weight: bold;
  text-shadow: 1px 1px 0px #000;
}

.subtitle {
  font-size: 16px;
  margin-bottom: 20px;
}

.buttons-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
}

.friends-title {
  font-family: 'Lato', sans-serif;
  text-shadow: 1px 0px #000;
  margin: 5px 0;
  font-size: 20px;
}
</style>

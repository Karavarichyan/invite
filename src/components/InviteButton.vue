<template>
  <div class="invite-button">
    <div class="image-container">
      <img src="@/assets/images/Framer.png" alt="Invite Friends" />

      <div class="button-overlay buttons-wrapper">
        <CustomButton option="blue"> Invite </CustomButton>
        <CustomButton option="blue">
          <Link :size="16" />
        </CustomButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import CustomButton from '@/components/CustomButton.vue'
import { Link } from 'lucide-vue-next'
</script>

<style scoped>
.invite-button {
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-container {
  position: relative;
  width: 100%;
  max-width: 360px;
}

img {
  width: 100%;
  height: auto;
  display: block;
}

.buttons-wrapper {
  display: flex;
  gap: 10px;
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
}

.button-overlay {
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  padding-bottom: 3px;
}
</style>

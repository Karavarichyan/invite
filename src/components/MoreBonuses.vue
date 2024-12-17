<template>
  <div class="more-bonuses">
    <div class="image-container">
      <img src="@/assets/images/FrameL.png" alt="More Bonuses" />

      <div class="button-overlay">
        <CustomButton variant="yellow"> More bonuses </CustomButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import CustomButton from '@/components/CustomButton.vue'
</script>

<style scoped>
.more-bonuses {
  display: flex;
  flex-direction: column;
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

.button-overlay {
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  padding-bottom: 5px;
}
</style>

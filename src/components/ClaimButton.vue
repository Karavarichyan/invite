<template>
  <div class="center-container">
    <div class="button-overlay">
      <CustomButton option="yellow">
        <div class="button-content">
          Claim
          <img src="@/assets/images/dolar.svg" alt="Copy Icon" class="svg-icon" />
          <span class="amount">12.5</span>
        </div>
      </CustomButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import CustomButton from '@/components/CustomButton.vue'
</script>

<style scoped>
.center-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 10px;
}

.button-overlay {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}

.button-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  font-size: 16px;
  color: white;
  font-family: 'Movavi Grotesque', sans-serif;
}

.svg-icon {
  width: 16px;
  height: 16px;
}

.amount {
  font-weight: bold;
}

@media (max-width: 768px) {
  .button-content {
    font-size: 10px;
  }
  .svg-icon {
    width: 14px;
    height: 14px;
  }
}

@media (max-width: 480px) {
  .button-content {
    font-size: 12px;
  }
  .svg-icon {
    width: 12px;
    height: 12px;
  }
}
</style>

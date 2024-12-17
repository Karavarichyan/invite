<template>
  <div class="button-wrapper" :class="option">
    <button class="fonts">
      <slot></slot>
    </button>
    <div class="oval"></div>
    <div class="top-shadow"></div>
    <div class="bottom-shadow"></div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

defineProps<{ option: 'yellow' | 'blue' }>()
</script>

<style scoped>
.button-wrapper {
  position: relative;
  width: max-content;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.2s ease-in-out;
}

.button-wrapper button {
  position: relative;
  z-index: 1;
  padding: 9.5px 18px;
  border-radius: 100px;
  border: none;
  color: white;
  font-weight: bold;
  font-family: 'Movavi Grotesque', sans-serif;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
}

.button-wrapper.yellow button {
  background: linear-gradient(to bottom, #f7cb40, #ddad1c);
}

.button-wrapper.yellow .oval {
  background-color: #ffeeba;
}

.button-wrapper.yellow .top-shadow {
  background-color: #ffeeba;
}

.button-wrapper.yellow .bottom-shadow {
  background-color: #7a5d00;
}

.button-wrapper.blue button {
  background: linear-gradient(to bottom, #44a2e5, #2e7ec2);
}

.button-wrapper.blue .oval {
  background-color: #bee3ff;
}

.button-wrapper.blue .top-shadow {
  background-color: #bee3ff;
}

.button-wrapper.blue .bottom-shadow {
  background-color: #155388;
}

.oval {
  position: absolute;
  z-index: 2;
  right: 2px;
  top: 2px;
  rotate: 45deg;
  border-radius: 100%;
  width: 8px;
  height: 5px;
}

.top-shadow,
.bottom-shadow {
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 100px;
  filter: drop-shadow(0px 1px 1px #00000040);
}

.top-shadow {
  top: -2px;
}

.bottom-shadow {
  bottom: -2px;
}

.button-wrapper button:hover {
  transform: scale(1.05);
}
</style>

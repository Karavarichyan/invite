<template>
  <div class="invite-button">
    <div class="image-container">
      <img src="@/assets/images/Framer.png" alt="Invite Friends" />

      <div class="buttons-wrapper">
        <div class="button-wrapper one">
          <button class="fonts">Invite</button>
          <div class="oval"></div>
          <div class="top-shadow"></div>
          <div class="bottom-shadow"></div>
        </div>

        <div class="button-wrapper two">
          <button>
            <Link :size="16" />
          </button>
          <div class="oval"></div>
          <div class="top-shadow"></div>
          <div class="bottom-shadow"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Link } from 'lucide-vue-next'
</script>

<style scoped>
.fonts {
  font-family: 'Movavi Grotesque', sans-serif;
}
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
}

.button-wrapper {
  position: relative;
  width: max-content;
}

.button-wrapper button {
  position: relative;
  z-index: 1;
  padding: 9.5px 18px;
  height: 33px;
  min-width: 50px;
  border-radius: 100px;
  border: none;
  color: white;
  background: linear-gradient(to bottom, #44a2e5, #2e7ec2);
  font-weight: bold;
  cursor: pointer;
  text-align: center;
  transition: transform 0.2s ease-in-out;
}

.button-wrapper button:hover {
  transform: scale(1.05);
}

.button-wrapper .oval {
  position: absolute;
  z-index: 2;
  right: 2px;
  top: 2px;
  rotate: 45deg;
  background-color: #bee3ff;
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
  background-color: #bee3ff;
}

.bottom-shadow {
  bottom: -2px;
  background-color: #155388;
}

@media (max-width: 768px) {
  .image-container {
    max-width: 280px;
  }

  .buttons-wrapper {
    bottom: 13%;
    gap: 5px;
  }

  .button-wrapper button {
    height: 35px;
    min-width: 10px;
    padding: 8px 16px;
  }
}
</style>

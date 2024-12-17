<template>
  <div class="more-bonuses">
    <div class="image-container">
      <img src="@/assets/images/FrameL.png" alt="More Bonuses" />

      <div class="button-wrapper one">
        <button class="fonts">More bonuses</button>
        <div class="oval"></div>
        <div class="top-shadow"></div>
        <div class="bottom-shadow"></div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
</script>
<style scoped>
.fonts{
  font-family: 'Movavi Grotesque', sans-serif;

}
.button-wrapper {
  position: absolute;
  bottom: 12%;
  left: 50%;
  transform: translateX(-50%);
  width: max-content;
  z-index: 10;
}

.button-wrapper button {
  position: relative;
  z-index: 1;
  padding: 9.5px 18px;
  border-radius: 100px;
  border: none;
  color: white;
  background: linear-gradient(to bottom, #F7CB40, #DDAD1C);
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
}

.button-wrapper button:hover {
  transform: scale(1.05);
}

.button-wrapper.one .oval {
  background-color: #FFEEBA;
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

.one .top-shadow {
  background-color: #FFEEBA;
}
.one .bottom-shadow {
  background-color: #7A5D00;
}

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

@media (max-width: 768px) {
  .image-container {
    max-width: 280px;
  }

  .button-wrapper {
    bottom: 13%;
  }
}
</style>

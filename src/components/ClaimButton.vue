<template>
  <div class="center-container">
    <div class="button-wrapper one">
      <button>
        Claim
        <img
          src="@/assets/images/dolar.svg"
          alt="Copy Icon"
          class="svg-icon"
        />
        12.5
      </button>
      <div class="oval"></div>
      <div class="top-shadow"></div>
      <div class="bottom-shadow"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.center-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}

.button-wrapper {
  position: relative;
  width: max-content;
}

.button-wrapper button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  position: relative;
  z-index: 1;
  padding: 9.5px 18px;
  border-radius: 100px;
  border: none;
  color: white;
  background: linear-gradient(to bottom, #f7cb40, #ddad1c);
  cursor: pointer;
  font-size: 16px;
}

.svg-icon {
  width: 16px;
  height: 16px;
}

.button-wrapper.one .oval {
  background-color: #ffeeBA;
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
  background-color: #ffeeBA;
}

.one .bottom-shadow {
  background-color: #7a5d00;
}

@media (max-width: 768px) {
  .button-wrapper button {
    font-size: 14px;
    padding: 8px 14px;
  }

  .svg-icon {
    width: 14px;
    height: 14px;
  }
}

@media (max-width: 480px) {
  .button-wrapper button {
    font-size: 12px;
    padding: 6px 10px;
  }

  .svg-icon {
    width: 12px;
    height: 12px;
  }
}
</style>

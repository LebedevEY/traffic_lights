<template>
  <router-view />
</template>

<style>
body {
  background-color: #2c3e50;
}

.traffic_light {
  width: 240px;
  height: 480px;
  background-color: #4f4f4f;
  margin: 25px auto;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.light_red {
  background-color: red;
}

.light_green {
  background-color: green;
}

.light_yellow {
  background-color: yellow;
}
</style>

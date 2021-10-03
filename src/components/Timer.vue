<template>
  <h1>Таймер: {{ currentTime }}</h1>
</template>

<script>
export default {
  name: "Timer",
  props: {
    time: Number,
  },
  data() {
    return {
      currentTime: this.time,
      timer: null,
    };
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        if (this.currentTime > 0) {
          this.currentTime--;
        }
      }, 1000);
    },
  },
  mounted() {
    console.log(this.time);
    this.startTimer();
  },
};
</script>

<style></style>

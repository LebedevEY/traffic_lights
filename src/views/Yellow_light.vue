<template>
  <div class="wrapper">
    <div class="traffic_light">
      <Timer :time="3" />
      <Light class="light_red" />
      <Light class="light_yellow" :class="{ active: isActive }" />
      <Light class="light_green" />
    </div>
  </div>
</template>

<style>
.active {
  opacity: 1;
}
</style>

<script>
import Light from "@/components/Light";
import Timer from "@/components/Timer";

export default {
  components: { Timer, Light },

  data() {
    return {
      prevPath: this.$router.options.history.state.back,
      isActive: true,
    };
  },

  mounted() {
    setTimeout(() => {
      if (this.prevPath === "/red") {
        this.$router.push("/green");
      } else {
        this.$router.push("/red");
      }
    }, 3000);

    setInterval(() => {
      this.isActive = !this.isActive;
    }, 500);
  },
};
</script>

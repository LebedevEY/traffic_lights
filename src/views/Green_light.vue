<template>
  <div class="wrapper">
    <div class="traffic_light">
      <Timer :time="15" />
      <Light class="light_red" />
      <Light class="light_yellow" />
      <Light class="light_green" :class="{ active: isActive }" />
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
      isActive: true,
    };
  },

  mounted() {
    setTimeout(() => {
      this.$router.push("/yellow");
    }, 15000);

    setTimeout(() => {
      setInterval(() => {
        this.isActive = !this.isActive;
      }, 500);
    }, 12000);
  },
};
</script>

<template>
  <div class="wrapper">
    <div class="traffic_light">
      <Light class="light_red" />
      <Light class="light_yellow" />
      <Light class="light_green" />
    </div>
  </div>
</template>

<script>
import Light from "@/components/Light";

export default {
  components: { Light },

  mounted() {
    setTimeout(() => {
      this.$router.push("/red");
    }, 1);
  },
};
</script>

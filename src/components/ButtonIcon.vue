<template>
  <Button
    textWrap="true"
    height="48"
    :backgroundColor="backgroundColor"
    borderRadius="8"
    marginTop="24"
    padding="0"
    @tap="handleTap"
  >
    <Span class="fab" :text="('fa-' + iconName) | fonticon" fontSize="18" />
    <Span text="  " />
    <Span :text="text" :color="textColor" fontSize="18" />
  </Button>
</template>

<script>
export default {
  name: "ButtonIcon",
  props: {
    text: {
      type: String,
      default: "",
    },
    iconName: {
      type: String,
      default: "",
    },
    color: {
      type: String,
    },
  },
  computed: {
    backgroundColor() {
      return this.color === "orange"
        ? "#f27507"
        : this.color === "blue"
        ? "#3578e5"
        : this.color === "grey"
        ? "#f5f5f5"
        : this.color === "skin"
        ? "#feefe6"
        : "#fff";
    },
    textColor() {
      return this.color === "orange"
        ? "#fff"
        : this.color === "blue"
        ? "#fff"
        : this.color === "grey"
        ? "#333"
        : this.color === "skin"
        ? "#f27507"
        : "#f27507";
    },
  },
  methods: {
    handleTap(event) {
      this.$emit("tap", event);
    },
  },
};
</script>
<style scoped>
.text-style {
  font-size: 18px;
}
.icon-style {
  font-size: 18px;
}
</style>

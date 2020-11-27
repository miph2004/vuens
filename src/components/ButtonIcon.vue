<template>
  <Button
    textWrap="true"
    width="322"
    height="48"
    backgroundColor="#41b883"
    borderRadius="8"
    marginTop="20"
    @tap="handleTap"
  >
    <Span class="fab icon-style" :text="('fa-' + iconName) | fonticon" />
    <Span text="  " />
    <Span :text="text" class="text-style" />
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
  color: black;
  font-size: 18px;
}
.icon-style {
  color: black;
  font-size: 18px;
}
</style>

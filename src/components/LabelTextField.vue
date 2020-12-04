<template>
  <StackLayout marginTop="24">
    <Label>
      <FormattedString>
        <Span :text="label" :class="isFocus ? 'label orange-text' : 'label'" />
      </FormattedString>
    </Label>
    <TextField
      ref="input"
      class="input"
      :class="isFocus ? 'border' : ''"
      :hint="placeholder"
      :secure="secure"
      :keyboardType="type === 'email' ? 'email' : ''"
      :autocorrect="type === 'email' ? 'false' : ''"
      :autocapitalizationType="type === 'email' ? 'none' : ''"
      :text="value"
      @textChange="
        (text) => {
          $emit('input', text.value);
        }
      "
      @focus="onFocus"
      @blur="onBlur"
    />
  </StackLayout>
</template>

<script>
export default {
  name: "LabelTextField",
  data() {
    return {
      isFocus: false,
    };
  },
  props: {
    type: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "Label",
    },
    placeholder: {
      type: String,
      default: "Enter text here...",
    },
    secure: {
      type: Boolean,
      default: false,
    },
    focus: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
    },
  },
  methods: {
    onFocus() {
      this.isFocus = true;
    },
    onBlur() {
      this.isFocus = false;
    },
  },
};
</script>

<style>
.input {
  margin-top: 2px;
  background-color: #f5f5f5;
  padding: 12px 16px;
  font-size: 16px;
}
.label {
  font-size: 12px;
  font-weight: bold;
  color: #6f6f6f;
}
.orange-text {
  color: #f27507;
}
.border {
  border-color: #f27507;
  border-width: 1px;
  border-style: solid;
  border-radius: 8px;
}
</style>

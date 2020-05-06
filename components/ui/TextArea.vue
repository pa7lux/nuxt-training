<template>
  <label class="textarea">
    {{ labelText }}
    <textarea
      :placeholder="placeholder"
      :name="name"
      :required="required"
      @input="$emit('input', $event.target.value)"
    ></textarea>
  </label>
</template>

<script>
export default {
  props: ['labelText', 'placeholder', 'name', 'required'],
};
</script>

<style scoped>
.textarea textarea {
  display: block;
  width: 100%;
  min-height: 150px;
  margin-top: 10px;
  border: 1px solid black;
  padding: 5px;
  font-size: 14px;
  box-sizing: border-box;
  font-family: inherit;
}
</style>

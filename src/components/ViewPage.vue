<template>
  <div class="" style="min-height: 100vh; display: grid; place-content: center">
    <div class="card mx-auto">
      <div class="inner-content">
        <p>
          All the text and elements in this popup should be editable and
          dragable
        </p>
        <DropDownOpt
          label="Select color"
          :values="['info', 'danger', 'dark', 'warning']"
          :textOptionsType="false"
          :selectedOpt="selectedOpt"
          @selectOption="selectedOpt = $event"
        />
      </div>
    </div>
  </div>
</template>

<script>
import DropDownOpt from "./DropDownOpt.vue";
export default {
  name: "ViewPage",
  data() {
    return {
      textLabel: "text",
      selectedOpt: '14px'
    };
  },
  components: {
    DropDownOpt,
  },
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  height: 500px;
  width: 500px;
  text-align: center;
  background: #e85e5b;

  .inner-content {
    margin: 10px;
    flex: 1;
    overflow: hidden;
    border: 3px solid white;
    // max-height: 480px;
    // max-width: 480px;
    // border-radius: 99999px;
    display: grid;
    place-content: center;

    p {
      font-size: 24px;
      font-weight: 700;
      color: white;
    }
  }
}
</style>

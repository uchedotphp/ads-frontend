<template>
  <div
      :style="`color: ${color}; font-size: ${fontSize};`"
      class="template-content-editable"
      contenteditable="true"
      @input="updateText">
    {{ content }}
  </div>
</template>

<script>
import {mapMutations} from "vuex";

export default {
  name: "TemplateText",
  emits: ["update:textValue"],
  props: {
    content: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: "#999",
    },
    size: {
      type: String,
      default: "md",
    }
  },
  data() {
    return {
      text: "text",
    };
  },
  computed: {
    fontSize() {
      if (this.size == 'sm') {
        return '14px';
      } else if (this.size == 'lg') {
        return '20px';
      }
      return '16px';
    },
  },
  methods: {
    ...mapMutations(["updateActiveElementProperty"]),

    updateText(e) {
      this.updateActiveElementProperty({key: "text", value: e.target.innerText});
    },

    resetLabel() {
      if (!this.text.length) {
        this.text = "Type in some text";
        this.updateText();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.template-content-editable {
  &:focus {
    outline: none;
    border: none;
  }
}

.text-label {
  border: none;
  background-color: transparent;
  text-align: center;
  font-size: 20px;
  outline: none;

  &.primary {
    color: #0d6efd;
  }

  &.secondary {
    color: #adb5bd;
  }

  &.success {
    color: #198754;
  }

  &.danger {
    color: #dc3545;
  }

  &.warning {
    color: #ffc107;
  }

  &.info {
    color: #0dcaf0;
  }

  &.light {
    color: #ffffff;
  }

  &.dark {
    color: #000000;
  }
}
</style>

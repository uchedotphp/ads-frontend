<template>
  <router-view />
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  name:'App',
  mounted () {
    // set default template on mounted/reload
    this.setStates({
      newPopup: {
        backgroundColor: "#e85e5b",
        children: [
          {
            id: 1,
            type: 'text',
            size: 'lg',
            text: 'All text and elements in this popup should be editable and draggable',
            color: '#ffffff',

          },
          {
            id: 2,
            type: 'input',
            placeholder: 'Email',
            color: '#ffffff'
          },
          {
            id: 3,
            type: 'button',
            backgroundColor: "#000000",
            label: 'SIGNUP NOW',
            size: 'md',
            truncate: false,
            color: '#ffffff',

          },
          {
            id: 4,
            type: 'text',
            size: 'sm',
            text: 'No credit card required. No Surprise',
            color: '#ffffff'
          },
        ],
      }
    })
  },
  methods: {
    ...mapMutations(['setStates'])
  },
}
</script>

<style lang="scss">
</style>

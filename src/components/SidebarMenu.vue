<template>
  <nav class="sidebar">
    <div class="box">
      <div class="py-2 d-flex flex-column align-items-center">
        <div class="flex-grow-1 px-2 mt-2">
          <button
            @click="selectMenu(index)"
            v-for="(menu, index) in menuItems"
            :key="index"
            :class="[
              { active: activeMenu === index },
              'btn d-flex flex-column align-items-center fw-semibold',
            ]"
          >
            <template v-if="index === 1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                  d="m6.5 4.25.75-.75a2.121 2.121 0 0 1 3 3L6.5 10.25 2.75 6.5a2.121 2.121 0 0 1 3-3l.75.75zm7 6 4-7.5 4 7.5h-8zm-10.75 3.5h7.5v7.5h-7.5v-7.5zm14.75-.25a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"
                ></path>
              </svg>
              <span class="mt-2">Icons</span>
            </template>
            <template v-else>
              <i :class="`bi ${menu.icon}`"></i>
              <span class="mt-2">{{ menu.type }}</span>
            </template>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "SidebarMenu",
  data() {
    return {
      activeMenu: null,
      menuItems: [
        {
          type: "Templates",
          icon: "bi-layout-text-window",
        },
        {
          type: "Icons",
          icon: "bi-layout-text-window",
        },
        {
          type: "Text",
          icon: "bi-textarea-t",
        },
        {
          type: "Button",
          icon: "bi-menu-button-wide-fill",
        },
        {
          type: "Input",
          icon: "bi-textarea-resize",
        },
      ],
    };
  },
  methods: {
    selectMenu(index) {
      this.activeMenu = index;
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
.sidebar {
  background-color: rgb(67 56 202);
  width: 112px;

  .box {
    height: 100%;
    overflow-y: auto;
    margin-top: 80px;

    .btn {
      color: rgb(224 231 255);
      width: 100%;
      border-radius: 6px;
      padding: 12px;
      font-size: 12px;

      .bi,
      svg {
        color: rgb(165 180 252);
        font-size: 20px;
        height: 20px;
      }
      &:hover {
        background-color: rgb(55 48 163);
        color: #ffffff;

        .bi,
        svg {
          color: #ffffff;
        }
      }

      &.active {
        background-color: rgb(55 48 163);
        color: #ffffff;
        .bi,
        svg {
          color: #ffffff;
        }
      }
    }
  }
}
</style>

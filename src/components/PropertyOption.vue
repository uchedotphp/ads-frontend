<template>
  <div class="props d-flex" style="overflow-x: auto">
    <div class="btn-group" role="group">
      <button type="button" class="btn bg-light text-dark btn-outline-dark">
        <i class="bi bi-dash"></i>
      </button>
      <button type="button" class="btn bg-light text-dark btn-outline-dark">60</button>
      <button type="button" class="btn bg-light text-dark btn-outline-dark">
        <i class="bi bi-plus"></i>
      </button>
    </div>

    <div class="d-flex flex-column justify-content-center align-items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          d="M11 2 5.5 16h2.25l1.12-3h6.25l1.12 3h2.25L13 2h-2zm-1.38 9L12 4.67 14.38 11H9.62z"
          fill="currentColor"
        ></path>
      </svg>
      <img
        height="4"
        width="30"
        style="border-radius: 99999px"
        src="../assets/images/color-picker.webp"
        alt=""
        srcset=""
      />
    </div>

    <button class="btn px-0 py-0">
      <span>
        <div class="bgColor"></div>
      </span>
    </button>

    <button class="btn ms-auto px-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M8 5a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3h4.25a.75.75 0 1 1 0 1.5H19V18a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V6.5H3.75a.75.75 0 0 1 0-1.5H8zM6.5 6.5V18c0 .83.67 1.5 1.5 1.5h8c.83 0 1.5-.67 1.5-1.5V6.5h-11zm3-1.5h5c0-.83-.67-1.5-1.5-1.5h-2c-.83 0-1.5.67-1.5 1.5zm-.25 4h1.5v8h-1.5V9zm4 0h1.5v8h-1.5V9z"
        ></path>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: "PropertyOption",
};
</script>

<style lang="scss" scoped>
.props {
  background-color: #ffffff;
  padding: 8px 10px;
  width: 100%;
  border-bottom: 1px solid #ebecf0;

  .bi {
    font-weight: 900;
  }

  > * {
    margin-right: 30px;
    &:last-child {
      margin-right: 0;
    }
  }
}

.bgColor {
  width: 24px;
  height: 24px;
  border-radius: 2px;
  border: 1px solide #000000;
  background-color: #e85e5b;
}
</style>

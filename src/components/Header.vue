<template>
  <div class="header fixed-top">
    <b-navbar variant="faded" type="light" class="fluid p-0">
      <!-- Menu Btn -->
      <b-button
        squared
        class="backdrop__btn"
        variant="outline-light"
        v-b-toggle.sidebar-backdrop
      >
        <svg
          class="backdrop__btn-svg"
          viewBox="0 0 31 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0)">
            <path
              d="M28.6192 1.16211H9.16506C7.88109 1.16211 6.83057 2.20727 6.83057 3.48469C6.83057 4.76211 7.88109 5.80727 9.16506 5.80727H28.6192C29.9031 5.80727 30.9536 4.76211 30.9536 3.48469C30.9536 2.20727 29.9031 1.16211 28.6192 1.16211Z"
              fill="white"
            />
            <path
              d="M25.6045 9.67773H6.15041C4.86644 9.67773 3.81592 10.7229 3.81592 12.0003C3.81592 13.2777 4.86644 14.3229 6.15041 14.3229H25.6045C26.8885 14.3229 27.939 13.2777 27.939 12.0003C27.939 10.7229 26.8885 9.67773 25.6045 9.67773Z"
              fill="white"
            />
            <path
              d="M22.5889 18.1951H3.13478C1.85081 18.1951 0.800293 19.2402 0.800293 20.5176C0.800293 21.7951 1.85081 22.8402 3.13478 22.8402H22.5889C23.8728 22.8402 24.9234 21.7951 24.9234 20.5176C24.9234 19.2402 23.8728 18.1951 22.5889 18.1951Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect
                width="30.1538"
                height="24"
                fill="white"
                transform="translate(0.799805)"
              />
            </clipPath>
          </defs>
        </svg>
      </b-button>
      <b-container class="header-container">
        <!-- Header Menu -->
        <b-row
          align-v="center"
          align-h="end"
          class="w-100 flex-lg-row flex-row-reverse"
        >
          <b-col
            col
            class="
              d-flex
              align-items-center
              justify-content-lg-start justify-content-end
              flex-wrap
            "
          >
            <b-link to="/" class="img-hover">
              <img
                src="@/assets/img/Logo/logo2.png"
                class="d-inline-block align-top header-logo"
                alt="Kitten"
              />
            </b-link>
          </b-col>
          <b-col col class="d-none d-lg-flex flex-column">
            <b-link href="#" class="header-email text-gold">
              skidea@yandex.ru
            </b-link>
            <b-link href="#" class="header-address text-gold"
              >Кировоградская, д.2</b-link
            >
          </b-col>
          <b-col
            col
            class="
              d-none d-sm-flex
              align-items-center
              justify-content-end justify-content-md-start
              flex-wrap
            "
          >
            <b-link class="header-whatsapp img-hover me-3">
              <img src="@/assets/img/svg/whatsapp.svg" alt="whatsapp" />
            </b-link>
            <b-link class="header-phone text-gold"> +7(499) 755 96 64 </b-link>
          </b-col>
          <b-col col class="d-none d-lg-flex justify-content-end">
            <b-button
              v-b-modal.modalBackCall
              class="header-modal_btn btn-hover"
            >
              Обратный звонок
            </b-button>
          </b-col>
        </b-row>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped lang="scss">
@import "../assets/scss/_variable.scss";
.header {
  border-bottom: 2px solid $whiteBorder;
  background: $whiteBorder;
  &-container {
    @media (min-width: 300px) {
      height: 6.4rem;
    }
    @media (min-width: 760px) {
      height: 8rem;
    }
  }
  &-logo {
    @media (min-width: 300px) {
      width: 14.1rem;
      height: 4.4rem;
    }
    @media (min-width: 760px) {
      width: auto;
      height: auto;
    }
  }
  &-email {
    font-weight: bold;
    font-size: 1.8rem;
    line-height: 2.3rem;
    color: $color2;
    text-decoration: none;
  }
  &-phone {
    font-weight: bold;
    font-size: 20px;
    line-height: 26px;
    text-align: right;
    text-decoration: none;
    color: $color2;
  }
  &-address {
    font-size: 1.6rem;
    line-height: 2.1rem;
    color: $color2;
    text-decoration: none;
  }
  &-modal_btn {
    border-radius: 2px;
    line-height: 23px;
    font-size: 18px;
    font-weight: bold;
    color: $color3;
    background: $colorGold;
    max-width: 22rem;
    width: 100%;
    height: 4.8rem;
  }
}
.backdrop__btn {
  background: $colorGold;
  border: none;
  border-color: none;
  transition: $transition;
  &:hover {
    background: $colorGoldLite;
    & > svg path {
      fill: $colorGold;
    }
  }
  @media (min-width: 300px) {
    width: 6.4rem;
    height: 6.4rem;
  }
  @media (min-width: 760px) {
    width: 8rem;
    height: 8rem;
  }
  &-svg {
    width: 3rem;
    path {
      transition: $transition;
    }
    @media (min-width: 300px) {
      width: 1.8rem;
    }
    @media (min-width: 760px) {
      width: 2rem;
    }
    @media (min-width: 9.9rem) {
      width: 3rem;
    }
  }
}
</style>

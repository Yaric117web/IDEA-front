<template>
  <b-sidebar
    id="sidebar-backdrop"
    backdrop-variant="dark"
    backdrop
    @change="bodyHiden"
    body-class="bg-white "
    header-class="bg-white"
  >
    <Accordion :array="SIDEBAR_MENU_ACCORDION" />
    <b-list-group class="border-0">
      <b-list-group-item
        v-for="(link, idx) in SIDEBAR_MENU_LINKS"
        :key="idx"
        class="border-0 btn-hover b-sidebar-list_menu"
        href="#"
      >
        {{ link.linkTitle }}
      </b-list-group-item>
    </b-list-group>
  </b-sidebar>
</template>
<script>
import { mapGetters } from "vuex";
import Accordion from "./Accordion.vue";
export default {
  components: { Accordion },
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    bodyHiden() {
      document.body.classList.toggle("modal-open");
    },
  },
  computed: {
    ...mapGetters(["SIDEBAR_MENU_ACCORDION", "SIDEBAR_MENU_LINKS"]),
  },
};
</script>
<style lang="scss">
@import "../assets/scss/_variable.scss";
.b-sidebar {
  @media (max-width: 350px) {
    width: 320px;
  }
  &-header {
    button {
      position: absolute;
      background: none;
      border: none;

      @media (min-width: 300px) {
        right: 0rem;
        top: 1rem;
        z-index: 2;
      }
      @media (min-width: 350px) {
        right: -5rem;
        z-index: auto;
      }

      &:hover {
        & > svg path {
          fill: $colorGoldLite;
        }
      }
      & > svg {
        width: 5rem;
        height: 5rem;
        path {
          fill: $colorGold;
          transition: $transition;
        }
      }
    }
  }

  &-list_menu {
    font-weight: 550;
    font-size: 2.4rem;
    line-height: 4rem;
    color: $color1;
  }
}
</style>
<template>
  <b-modal
    hide-footer
    lazy
    id="modalBackCall"
    header-class="modalBackCall-header"
    modal-class="modalBackCall"
  >
    <h2 class="modalBackCall-title">Обратный звонок</h2>
    <span class="modalBackCall-subtitle"
      >Отправь заявку, и мы перезвоним вам через 15 мин!</span
    >
    <b-container>
      <FormModal />
    </b-container>
  </b-modal>
</template>

<script>
import FormModal from "../components/FormModal.vue";
export default {
  name: "ModalBackCall",
  components: { FormModal },
};
</script>

<style lang="scss">
@import "../assets/scss/_variable.scss";
.modalBackCall {
  text-align: center;
  &-header {
    height: 3rem;
    border: none;
    padding: 0;
    button {
      background: none;
      border: none;
      font-size: 3rem;
      transition: $transition;
      height: fit-content;
      width: fit-content;
      &:hover {
        color: $colorGold;
      }
    }
  }
  &-title {
    @media (min-width: 300px) {
      font-size: 2rem;
    }
    @media (min-width: 550px) {
      font-size: 3.4rem;
    }
  }
  &-subtitle {
    font-size: 1.8rem;
  }
}
</style>
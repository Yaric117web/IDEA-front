<template>
  <div class="accordion" role="tablist">
    <b-card
      v-for="(item, idx) in array"
      :key="idx"
      no-body
      class="mb-1 border-0"
    >
      <b-button
        variant="transparent"
        squared
        class="w-100 border-0 accordion-btn btn-hover"
        v-b-toggle="`${idx}`"
      >
        {{ item.acardionTitle }}
      </b-button>
      <b-collapse :id="idx.toString()" accordion="my-accordion">
        <b-card-body>
          <b-list-group flush>
            <b-list-group-item
              class="border-0 btn-hover accordion-link"
              v-for="(item, idx) in item.acardionSubmenu"
              :key="idx"
              href="#"
            >
              {{ item.subList }}
            </b-list-group-item>
          </b-list-group>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    array: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/_variable.scss";
.accordion {
  &-btn {
    text-align: left;
    @media (min-width: 300px) {
      font-weight: 550;
      font-size: 2.4rem;
      line-height: 4rem;
      color: $color1;
    }
  }
  &-link {
    text-align: left;
    @media (min-width: 300px) {
      font-weight: 400;
      font-size: 1.8rem;
      line-height: 3.2rem;
      color: $color1;
    }
  }
}
</style>
<template>
  <b-form @submit.stop.prevent="onSubmit" class="form">
    <b-form-input
      id="example-input-1"
      v-model="$v.form.name.$model"
      :state="validateName('name')"
      placeholder="Имя"
    ></b-form-input>

    <b-form-input
      class="modalBackCall-form_phone"
      v-model="form.phone"
      :state="validatePhone('phone')"
      id="form-phone"
      placeholder="Телефон"
      @focus="inputPhone"
      v-mask="'9(999) 999-9999'"
    ></b-form-input>

    <b-button type="submit" class="form-submit btn-hover"
      >Заказать звонок</b-button
    >
  </b-form>
</template>

<style>
body {
  padding: 1rem;
}
</style>

<script>
import AwesomeMask from "awesome-mask";
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";

export default {
  name: "NameCallForm",
  mixins: [validationMixin],
  directives: {
    mask: AwesomeMask,
  },
  data() {
    return {
      form: {
        name: null,
        phone: null,
      },
    };
  },
  validations: {
    form: {
      phone: {
        required,
        minLength: minLength(15),
      },
      name: {
        required,
        minLength: minLength(3),
      },
    },
  },
  methods: {
    inputPhone() {
      this.form.phone = "8";
    },
    validateName(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    validatePhone(phone) {
      const { $dirty, $error } = this.$v.form[phone];
      return $dirty ? !$error : null;
    },
    resetForm() {
      this.form = {
        name: null,
        phone: null,
      };

      this.$nextTick(() => {
        this.$v.$reset();
      });
    },
    onSubmit() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }
      console.log(this.form);
      this.showMsgOk();
      this.resetForm();
    },
    showMsgOk() {
      const h = this.$createElement;
      const messageVNode = h("div", {
        domProps: {
          innerHTML: `
          <h2>Мы отправили ваши данные.</h2>
          <p>Наш менеджер свяжется с вами через 15 мин, чтобы обсудить все подробности</p>
        `,
        },
      });
      this.$bvModal.msgBoxOk([messageVNode], {
        footerClass: "border-0",
      });
    },
  },
};
</script>
<style lang="scss">
@import "../assets/scss/_variable.scss";

.form {
  margin-top: 3.2rem;
  input,
  button {
    height: 5.6rem;
    margin-bottom: 1.2rem;
  }
  input {
    color: $color3;
    font-size: 1.8rem;
    &::placeholder {
      font-size: 1.8rem;
      color: $color4;
    }
  }
  &-submit {
    background: $colorGold;
    color: $color3;
    font-weight: bold;
    font-size: 1.8rem;
    width: 100%;
    &:focus {
      background: $colorGold;
    }
  }
}
</style>
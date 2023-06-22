<template>
  <v-row justify="center">
    <v-dialog
      v-model="loginDialog"
      max-width="500px"
      scrollable
      class="elevation-0 dialog-modal"
    >
      <v-card class="elevation-0 modal modal__login">
        <v-card-title class="justify-center modal__title">
          <span>ВХОД</span>
        </v-card-title>
        <v-card-text class="modal__text">
          <div v-html="error" class="text-center red--text" />
          <v-container>
            <v-form ref="form">
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    label="Ваша электронная почта"
                    type="email"
                    outlined
                    color="#fff"
                    hide-details
                    v-model="email"
                    name="email"
                    :rules="required"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Пароль"
                    type="password"
                    outlined
                    color="#fff"
                    hide-details
                    name="password"
                    v-model="password"
                    :rules="required"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-form>
          </v-container>
        </v-card-text>
        <v-card-actions class="justify-center modal__actions">
          <v-container>
            <v-row class="justify-center align-center">
              <v-col class="col-12">
                <v-btn
                  color="#CE93D8"
                  rounded
                  depressed
                  class="modal__login white--text"
                  light
                  block
                  @click="login"
                >
                  Войти
                </v-btn>
              </v-col>
              <v-col
                class="col-12 d-flex flex-column justify-space-around align-center flex-sm-row"
              >
                <p>Нет аккаунта?</p>
                <a
                  color="white"
                  class="modal__new white--text"
                  text
                  @click="
                    loginDialog = false;
                    registerDialog = true;
                  "
                >
                  Создать аккаунт
                </a>
              </v-col>
            </v-row>
          </v-container>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: null,
      required: [(v) => !!v || "Введите ФИО"],
    };
  },
  methods: {
    async login() {
      if (!this.$refs.form.validate()) return;
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password,
        });
        this.$store.dispatch("auth/setToken", response.data.token);
        this.$store.dispatch("auth/setUser", response.data.user);
        this.loginDialog = false;
      } catch (error) {
        this.error = error.response.data.error;
      }
    },
  },
  computed: {
    loginDialog: {
      get() {
        return this.$store.state.loginDialog;
      },
      set(val) {
        this.$store.commit("toggleLoginDialog", val);
      },
    },
    registerDialog: {
      get() {
        return this.$store.state.registerDialog;
      },
      set(val) {
        this.$store.commit("toggleRegisterDialog", val);
      },
    },
  },
};
</script>

<style></style>

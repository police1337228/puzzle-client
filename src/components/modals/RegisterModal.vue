<template>
  <v-row justify="center">
    <v-dialog
      v-model="registerDialog"
      max-width="500px"
      class="elevation-0 dialog-modal"
    >
      <v-card class="elevation-0 modal modal__login modal__reg">
        <v-card-title class="justify-center modal__title">
          <span>Регистрация</span>
        </v-card-title>
        <v-card-text class="modal__text">
          <div v-html="error" class="text-center red--text mb-2" />
          <v-container>
            <v-form ref="form">
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    label="Ваше ФИО*"
                    type="text"
                    required
                    outlined
                    color="#fff"
                    v-model="fullName"
                    hide-details
                    :rules="rules.name"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Ваша дата рождения*"
                    type="date"
                    required
                    outlined
                    color="#fff"
                    hide-details
                    v-model="birthDate"
                    :rules="rules.bdate"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Ваша электронная почта*"
                    type="email"
                    required
                    outlined
                    color="#fff"
                    v-model="email"
                    :rules="rules.email"
                    hide-details
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Пароль*"
                    type="password"
                    required
                    outlined
                    color="#fff"
                    v-model="password"
                    :rules="rules.password"
                    hide-details
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Повторите пароль*"
                    type="password"
                    required
                    outlined
                    color="#fff"
                    v-model="secondPassword"
                    :rules="rules.secondPassword"
                    hide-details
                  ></v-text-field>
                </v-col>
                <v-col cols="12" class="pt-0 pb-0">
                  <v-checkbox
                    hide-details
                    class="modal__check"
                    color="#ca88f3"
                    off-icon="mdi-checkbox-blank-circle-outline"
                    on-icon="mdi-check-circle-outline"
                    v-model="agree"
                    :rules="rules.agree"
                  >
                    <template v-slot:label>
                      <div class="modal__check-label">
                        Я прочитал(-а) и согласен(-а) с
                        <a target="_blank" href="#!" @click.stop
                          >условиями пользовательского соглашения
                        </a>
                      </div>
                    </template>
                  </v-checkbox>
                </v-col>
                <v-col cols="12" class="pt-0 pb-0">
                  <v-checkbox
                    hide-details
                    class="modal__check"
                    color="#ca88f3"
                    off-icon="mdi-checkbox-blank-circle-outline"
                    on-icon="mdi-check-circle-outline"
                    v-model="mailAgree"
                  >
                    >
                    <template v-slot:label>
                      <div class="modal__check-label">
                        Я согласен(-а) на рассылку
                      </div>
                    </template></v-checkbox
                  >
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
                  @click="register"
                >
                  Зарегистрироваться
                </v-btn>
              </v-col>
              <v-col
                class="col-12 d-flex flex-column justify-space-around align-center flex-sm-row"
              >
                <p>Уже есть аккаунт?</p>
                <a
                  color="white"
                  class="modal__new white--text"
                  text
                  @click="
                    registerDialog = false;
                    loginDialog = true;
                  "
                >
                  Войти в аккаунт
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
      model: true,
      fullName: "",
      birthDate: "",
      email: "",
      password: "",
      secondPassword: "",
      agree: false,
      mailAgree: false,
      error: null,
      rules: {
        name: [(v) => !!v || "Введите ФИО"],
        email: [(v) => !!v || "Введите электронную почту"],
        bdate: [(v) => !!v || "Введите дату рождения"],
        password: [(v) => !!v || "Введите пароль"],
        secondPassword: [(v) => !!v || "Введите подтверждение пароля"],
        agree: [
          (v) => !!v || "Ознакомтесь с условиями пользовательского соглашения",
        ],
      },
    };
  },
  methods: {
    async register() {
      if (!this.$refs.form.validate()) return;
      if (this.password !== this.secondPassword) {
        this.error = "Пароли должны совпадать!";
        return;
      }
      try {
        console.log(this.secondPassword);
        const response = await AuthenticationService.register({
          fullName: this.fullName,
          email: this.email,
          password: this.password,
          birthDate: this.birthDate,
          mailAgree: this.mailAgree ? "1" : "0",
        });
        this.$store.dispatch("auth/setToken", response.data.token);
        this.$store.dispatch("auth/setUser", response.data.user);
        this.registerDialog = false;
      } catch (error) {
        this.error = error.response.data.error;
      }
    },
  },
  computed: {
    registerDialog: {
      get() {
        return this.$store.state.registerDialog;
      },
      set(val) {
        this.$store.commit("toggleRegisterDialog", val);
      },
    },
    loginDialog: {
      get() {
        return this.$store.state.loginDialog;
      },
      set(val) {
        this.$store.commit("toggleLoginDialog", val);
      },
    },
  },
};
</script>

<style></style>

<template>
  <v-container>
    <div class="profile-header">
      <v-row>
        <v-col>
          <h2>Профиль</h2>
        </v-col>
      </v-row>
    </div>
    <div class="profile-title">
      <v-row>
        <v-col class="d-flex align-center pt-0">
          <v-icon
            light
            outlined
            class="white--text"
            v-if="!avatarType && avatarType != '0'"
            >mdi-account</v-icon
          >
          <img
            :src="
              require('../assets/avatars/logo' +
                Number(Number(avatarType) + 1) +
                '.svg')
            "
            width="65px"
            height="65px"
            v-else
          />
          <p>{{ name }}</p>
        </v-col>
      </v-row>
    </div>
    <div class="profile-info">
      <v-row class="justify-space-between">
        <v-col class="col-xl-5 col-md-5 col-sm-12 col-12 profile-info__account">
          <p>Личные данные</p>
          <v-form class="profile-info__form" ref="form">
            <v-row>
              <v-col cols="12" class="pb-0"><p>Основные</p></v-col>
              <div v-html="error" class="text-center red--text"></div>
              <v-col cols="12">
                <v-text-field
                  class="textfield"
                  :disabled="isTouched"
                  v-model="name"
                  :rules="rules.name"
                  label="Имя пользователя"
                  required
                  outlined
                  shaped
                  color="#E0C4FA"
                  hide-details
                  type="text"
                  name="name"
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  class="textfield"
                  :disabled="isTouched"
                  v-model="city"
                  label="Город"
                  required
                  type="text"
                  outlined
                  color="#E0C4FA"
                  hide-details
                  name="city"
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  class="textfield"
                  :disabled="isTouched"
                  v-model="email"
                  :rules="rules.email"
                  label="Эл.почта пользователя"
                  required
                  type="email"
                  outlined
                  color="#E0C4FA"
                  hide-details
                  name="email"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  class="textfield"
                  :disabled="isTouched"
                  v-model="phone"
                  label="Телефон"
                  required
                  type="text"
                  outlined
                  color="#E0C4FA"
                  hide-details
                  name="phone"
                ></v-text-field>
              </v-col>
              <v-col cols="12" class="pb-0"> <p>Дата рождения</p></v-col>
              <v-col cols="12">
                <v-text-field
                  class="textfield"
                  :disabled="isTouched"
                  v-model="bdate"
                  :rules="rules.bdate"
                  label="Дата рождения пользователя"
                  required
                  type="date"
                  outlined
                  color="#E0C4FA"
                  hide-details
                  name="date"
                ></v-text-field>
              </v-col>

              <v-col class="col-md-4 col-6">
                <v-btn
                  block
                  color="#CE93D8"
                  rounded
                  text
                  outlined
                  class="header-login"
                  light
                  @click="isTouched = !!!isTouched"
                >
                  Изменить</v-btn
                >
              </v-col>
              <v-col class="col-md-4 col-6">
                <v-btn
                  block
                  color="#CE93D8"
                  rounded
                  depressed
                  class="header-login white--text"
                  light
                  @click="saveInfo"
                  :disabled="!!isTouched"
                >
                  Сохранить</v-btn
                >
              </v-col>
            </v-row>
          </v-form>
        </v-col>
        <v-col class="col-xl-5 col-md-5 col-sm-12 col-12 profile-info__avatar">
          <p>Выбери свой аватар</p>
          <div class="profile-info__avatar-list">
            <v-row class="justify-center align-center text-center">
              <v-col cols="4" v-for="avatar in avatars" :key="avatar.id">
                <img
                  :src="avatar.src"
                  alt=""
                  :class="{ active: activeAvatar == avatar.id }"
                  @click="selectAvatar(avatar.id)"
                  width="65px"
                  height="65px"
                />
              </v-col>

              <v-col class="col-md-4 col-12">
                <v-btn
                  block
                  color="#CE93D8"
                  rounded
                  depressed
                  class="header-login white--text profile-info__avatar-btn"
                  light
                  type="submit"
                  @click="saveAvatar()"
                >
                  Выбрать</v-btn
                ></v-col
              >
            </v-row>
          </div>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
import "../scss/profile.scss";

export default {
  metaInfo: {
    title: "Профиль",
  },
  data() {
    return {
      name: this.$store.state.auth.user.fullName,
      email: this.$store.state.auth.user.email,
      city: this.$store.state.auth.user.city || "",
      phone: this.$store.state.auth.user.phone || "",
      bdate: this.$store.state.auth.user.birthDate,
      avatarType: this.$store.state.auth.user.avatarType || null,
      id: this.$store.state.auth.user.id,
      activeAvatar: this.$store.state.auth.user.avatarType || null,
      avatar: null,
      isTouched: true,
      error: null,
      rules: {
        name: [(v) => !!v || "Введите ФИО"],
        email: [(v) => !!v || "Введите электронную почту"],
        bdate: [(v) => !!v || "Введите дату рождения"],
      },
      avatars: [
        {
          id: 0,
          src: require("../assets/avatars/logo1.svg"),
          active: false,
        },
        {
          id: 1,
          src: require("../assets/avatars/logo2.svg"),
          active: false,
        },
        {
          id: 2,
          src: require("../assets/avatars/logo3.svg"),
          active: false,
        },
        {
          id: 3,
          src: require("../assets/avatars/logo4.svg"),
          active: false,
        },
        {
          id: 4,
          src: require("../assets/avatars/logo5.svg"),
          active: false,
        },
        {
          id: 5,
          src: require("../assets/avatars/logo6.svg"),
          active: false,
        },
        {
          id: 6,
          src: require("../assets/avatars/logo7.svg"),
          active: false,
        },
        {
          id: 7,
          src: require("../assets/avatars/logo8.svg"),
          active: false,
        },
        {
          id: 8,
          src: require("../assets/avatars/logo9.svg"),
          active: false,
        },
      ],
    };
  },
  methods: {
    async saveInfo() {
      if (!this.$refs.form.validate()) return;
      try {
        const response = await AuthenticationService.save({
          id: this.id,
          fullName: this.name,
          email: this.email,
          birthDate: this.bdate,
          city: this.city || null,
          phone: this.phone || null,
          avatarType: this.avatarType || null,
        });
        this.$store.dispatch("auth/setToken", response.data.token);
        this.$store.dispatch("auth/setUser", response.data.user);
        this.$router.go();
        window.scrollTo(0, 0);
      } catch (error) {
        this.error = error.response.data.error;
      }
    },

    selectAvatar(id) {
      this.activeAvatar = id;
    },

    saveAvatar() {
      this.avatarType = String(this.activeAvatar);
      this.saveInfo();
    },
  },
};
</script>

<style></style>

<template>
  <v-app-bar app class="header elevation-0" absolute>
    <v-card
      class="d-flex container elevation-0 align-center"
      color="transparent"
    >
      <!-- <v-toolbar-title
        class="logo"
        tag="v-btn"
        plain
        to="/"
        :class="{ 'v-btn--active': true }"
        ></v-toolbar-title
      > -->
      <v-toolbar-title class="logo">
        <img
          src="@/assets/logo/ПАЗЛ_НАЗВАНИЕ.svg"
          alt=""
          width="85px"
          height="90px"
        />
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div>
        <v-btn
          color="#CE93D8"
          rounded
          depressed
          class="header-login white--text"
          light
          @click="$store.commit('toggleLoginDialog', true)"
          v-if="!isLoggedIn"
        >
          <v-icon light outlined class="pr-2 white--text"> mdi-account </v-icon
          >ВОЙТИ</v-btn
        >
        <v-btn plain text v-else @click="logout">Выйти</v-btn>
        <v-app-bar-nav-icon
          @click="$store.commit('toggleDrawer', true)"
        ></v-app-bar-nav-icon>
      </div>
    </v-card>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppBar",
  methods: {
    logout() {
      this.$store.dispatch("auth/setToken", null);
      this.$store.dispatch("auth/setUser", null);
      if (this.$route.path !== "/") {
        this.$router.push("/");
      } else {
        this.$router.go();
      }
    },
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.auth.isUserLoggedIn;
    },
  },
};
</script>

<style></style>

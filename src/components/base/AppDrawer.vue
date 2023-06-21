<template>
  <v-navigation-drawer v-model="drawer" absolute temporary right class="nav">
    <div class="nav__header d-flex justify-space-between align-center">
      <a @click="drawer = false"
        ><v-icon large color="black">mdi-close</v-icon></a
      >
      <div class="logo">
        <img
          src="@/assets/logo/ЛОГО_КОНТУР.svg"
          alt=""
          width="120px"
          height="70px"
        />
      </div>
    </div>

    <v-list nav dense class="nav__list">
      <v-list-item-group
        v-model="group"
        active-class="deep-purple--text text--accent-4"
      >
        <v-list-item
          v-for="item in navItems"
          :key="item.id"
          class="nav__item"
          link
          :to="item.link"
          active-class="nav__item--active"
        >
          <v-list-item-title class="nav__title">{{
            item.title
          }}</v-list-item-title>
        </v-list-item>
      </v-list-item-group>

      <div class="nav__contacts">
        <p>Контакты</p>
        <ul class="nav__links">
          <li>
            <a href="#!"><img src="../../assets/35.svg" /></a>
          </li>
          <li>
            <a href="#!"><img src="../../assets/37.svg" /></a>
          </li>
          <li>
            <a href="#!"><img src="../../assets/36.svg" /></a>
          </li>
        </ul>
      </div>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      group: null,
      navItems: [
        { id: 0, title: "Профиль", link: "/profile" },
        { id: 1, title: "Главная", link: "/" },
        { id: 2, title: "Лекции", link: "/lectures" },
        { id: 3, title: "Алфавит", link: "/alphabet" },
        { id: 4, title: "Словарь", link: "/dictionary" },
        { id: 5, title: "Цифры", link: "/numbers" },
        { id: 6, title: "Игра", link: "/game" },
      ],
    };
  },
  computed: {
    drawer: {
      get() {
        return this.$store.state.drawer;
      },
      set(val) {
        this.$store.commit("toggleDrawer", val);
      },
    },
  },
};
</script>

<style></style>

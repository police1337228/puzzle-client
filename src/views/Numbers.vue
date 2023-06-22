<template>
  <v-container class="container--numbers">
    <div class="alphabet-header">
      <v-row>
        <v-col>
          <h2>Цифры</h2>
        </v-col>
      </v-row>
    </div>
    <div class="alphabet" v-show="!loading">
      <v-dialog
        v-model="dialog"
        max-width="500px"
        class="elevation-0 dialog-modal dialog-modal--video"
      >
        <v-card class="elevation-0 modal modal__video modal__video--photo">
          <v-card-title class="justify-end modal__title text-right">
            <v-icon @click.prevent="dialog = false">mdi-close-thick</v-icon>
          </v-card-title>

          <v-card-text>
            <div class="container modal__container">
              <img :src="activeDialog.imageSrc" />
            </div>
            <v-icon
              v-if="activeDialog.id - 1 >= 0"
              @click="handleDialog(activeDialog.id - 1)"
              x-large
              color="#707070"
              retain-focus-on-click
              >mdi-chevron-left</v-icon
            >

            <v-icon
              v-if="activeDialog.id + 1 < alphabetItems.length"
              @click="handleDialog(activeDialog.id + 1)"
              x-large
              color="#707070"
              retain-focus-on-click
              >mdi-chevron-right</v-icon
            >
            <p class="text-center">Цифра {{ activeDialog.title }}</p>
          </v-card-text>
        </v-card>
      </v-dialog>

      <v-row class="alphabet__list justify-center">
        <v-col
          class="col-xl-3 col-md-4 col-sm-6 col-6"
          v-for="item in alphabetItems"
          :key="item.id"
          v-show="item.id + 1 <= itemsToShow"
        >
          <div class="alphabet-item" @click="handleDialog(item.id)">
            <div class="alphabet-item__body">
              <img :src="item.imageSrc" alt="" />
            </div>
            <div class="alphabet-item__title">
              <p>Цифра {{ item.title }}</p>
            </div>
          </div>
        </v-col>
        <v-btn
          @click="itemsToShow *= 2"
          v-if="itemsToShow < alphabetItems.length"
          text
          >Смотреть ещё</v-btn
        >
      </v-row>
    </div>
  </v-container>
</template>

<script>
import "@/scss/alphabet.scss";
export default {
  name: "Alphabet",

  data() {
    return {
      loading: true,
      dialog: false,
      itemsToShow: 8,
      alphabetItems: [
        {
          id: 0,
          title: "1(Один)",
          imageSrc: "/videos/numbers/1.png",
        },
        {
          id: 1,
          title: "2(Два)",
          imageSrc: "/videos/numbers/2.png",
        },
        {
          id: 2,
          title: "3(Три)",
          imageSrc: "/videos/numbers/3.png",
        },
        {
          id: 3,
          title: "4(Четыре)",
          imageSrc: "/videos/numbers/4.png",
        },
        {
          id: 4,
          title: "5(Пять)",
          imageSrc: "/videos/numbers/5.png",
        },
        {
          id: 5,
          title: "6(Шесть)",
          imageSrc: "/videos/numbers/6.png",
        },
        {
          id: 6,
          title: "7(Семь)",
          imageSrc: "/videos/numbers/7.png",
        },
        {
          id: 7,
          title: "8(Восемь)",
          imageSrc: "/videos/numbers/8.png",
        },
        {
          id: 8,
          title: "9(Девять)",
          imageSrc: "/videos/numbers/9.png",
        },
        {
          id: 9,
          title: "10(Десять)",
          imageSrc: "/videos/numbers/10.png",
        },
      ],

      activeDialog: {
        id: -1,
        next: -1,
        prev: -1,
        title: "",
        imageSrc: "",
      },
    };
  },
  mounted() {
    this.loading = false;
  },
  methods: {
    handleDialog(id) {
      if (this.dialog) {
        this.dialog = false;
      }
      const selectedItem = this.alphabetItems.find((item) => id === item.id);
      this.activeDialog.id = selectedItem.id;
      this.activeDialog.title = selectedItem.title;
      this.activeDialog.next = selectedItem.id + 1;
      this.activeDialog.prev = selectedItem.id - 1;
      this.activeDialog.imageSrc = selectedItem.imageSrc;
      this.dialog = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.container--numbers {
  padding-bottom: 100px;
}
</style>

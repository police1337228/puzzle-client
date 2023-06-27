<template>
  <v-container class="container--alphabet">
    <div class="alphabet-header">
      <v-row>
        <v-col>
          <h2>Алфавит</h2>
        </v-col>
      </v-row>
    </div>
    <div class="alphabet">
      <v-dialog
        v-model="dialog"
        max-width="500px"
        class="elevation-0 dialog-modal dialog-modal--video"
      >
        <v-card class="elevation-0 modal modal__video">
          <v-card-title class="justify-end modal__title text-right">
            <v-icon @click.prevent="dialog = false">mdi-close-thick</v-icon>
          </v-card-title>

          <v-card-text>
            <div class="container modal__container">
              <Video :videoSrc="activeDialog.videoSrc" :modal="dialog" />
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
            <p class="text-center">{{ activeDialog.title }}</p>
          </v-card-text>
        </v-card>
      </v-dialog>

      <v-row class="alphabet__list justify-center">
        <v-col
          class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6"
          v-for="item in alphabetItems"
          :key="item.id"
          v-show="item.id + 1 <= itemsToShow"
        >
          <div class="alphabet-item" @click="handleDialog(item.id)">
            <div class="alphabet-item__body">
              <img :src="item.videoPreview" />
            </div>
            <div class="alphabet-item__title">
              <p>{{ item.title }}</p>
            </div>
          </div>
        </v-col>
        <v-col class="col-12 d-flex justify-center align-center pt-0">
          <v-btn
            @click="itemsToShow += 8"
            v-if="itemsToShow < alphabetItems.length"
            text
            >Смотреть ещё</v-btn
          >
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import "@/scss/alphabet.scss";
import Video from "../components/video/Video.vue";
export default {
  name: "Alphabet",
  metaInfo: {
    title: "Алфавит",
  },
  data() {
    return {
      dialog: false,
      itemsToShow: 8,
      alphabetItems: [
        {
          id: 0,
          title: "Буква А",
          videoSrc: "./videos/alphabet/А.mp4",
          videoPreview: "./videos/alphabet/А.jpg",
        },
        {
          id: 1,
          title: "Буква Б",
          videoSrc: "./videos/alphabet/Б.mp4",
          videoPreview: "./videos/alphabet/Б.jpg",
        },
        {
          id: 2,
          title: "Буква В",
          videoSrc: "./videos/alphabet/В.mp4",
          videoPreview: "./videos/alphabet/В.jpg",
        },
        {
          id: 3,
          title: "Буква Г",
          videoSrc: "./videos/alphabet/Г.mp4",
          videoPreview: "./videos/alphabet/Г.jpg",
        },
        {
          id: 4,
          title: "Буква Д",
          videoSrc: "./videos/alphabet/Д.mp4",
          videoPreview: "./videos/alphabet/Д.jpg",
        },
        {
          id: 5,
          title: "Буква Е",
          videoSrc: "./videos/alphabet/Е.mp4",
          videoPreview: "./videos/alphabet/Е.jpg",
        },
        {
          id: 6,
          title: "Буква Ё",
          videoSrc: "./videos/alphabet/Ё.mp4",
          videoPreview: "./videos/alphabet/Ё.jpg",
        },
        {
          id: 7,
          title: "Буква Ж",
          videoSrc: "./videos/alphabet/Ж.mp4",
          videoPreview: "./videos/alphabet/Ж.jpg",
        },
        {
          id: 8,
          title: "Буква З",
          videoSrc: "./videos/alphabet/З.mp4",
          videoPreview: "./videos/alphabet/З.jpg",
        },
        {
          id: 9,
          title: "Буква И",
          videoSrc: "./videos/alphabet/И.mp4",
          videoPreview: "./videos/alphabet/И.jpg",
        },
        {
          id: 10,
          title: "Буква Й",
          videoSrc: "./videos/alphabet/Й.mp4",
          videoPreview: "./videos/alphabet/Й.jpg",
        },
        {
          id: 11,
          title: "Буква К",
          videoSrc: "./videos/alphabet/К.mp4",
          videoPreview: "./videos/alphabet/К.jpg",
        },
        {
          id: 12,
          title: "Буква Л",
          videoSrc: "./videos/alphabet/Л.mp4",
          videoPreview: "./videos/alphabet/Л.jpg",
        },
        {
          id: 13,
          title: "Буква М",
          videoSrc: "./videos/alphabet/М.mp4",
          videoPreview: "./videos/alphabet/М.jpg",
        },
        {
          id: 14,
          title: "Буква Н",
          videoSrc: "./videos/alphabet/Н.mp4",
          videoPreview: "./videos/alphabet/Н.jpg",
        },
        {
          id: 15,
          title: "Буква О",
          videoSrc: "./videos/alphabet/О.mp4",
          videoPreview: "./videos/alphabet/О.jpg",
        },
        {
          id: 16,
          title: "Буква П",
          videoSrc: "./videos/alphabet/П.mp4",
          videoPreview: "./videos/alphabet/П.jpg",
        },
        {
          id: 17,
          title: "Буква Р",
          videoSrc: "./videos/alphabet/Р.mp4",
          videoPreview: "./videos/alphabet/Р.jpg",
        },
        {
          id: 18,
          title: "Буква С",
          videoSrc: "./videos/alphabet/С.mp4",
          videoPreview: "./videos/alphabet/С.jpg",
        },
        {
          id: 19,
          title: "Буква Т",
          videoSrc: "./videos/alphabet/Т.mp4",
          videoPreview: "./videos/alphabet/Т.jpg",
        },
        {
          id: 20,
          title: "Буква У",
          videoSrc: "./videos/alphabet/У.mp4",
          videoPreview: "./videos/alphabet/У.jpg",
        },
        {
          id: 21,
          title: "Буква Ф",
          videoSrc: "./videos/alphabet/Ф.mp4",
          videoPreview: "./videos/alphabet/Ф.jpg",
        },
        {
          id: 22,
          title: "Буква Х",
          videoSrc: "./videos/alphabet/Х.mp4",
          videoPreview: "./videos/alphabet/Х.jpg",
        },
        {
          id: 23,
          title: "Буква Ц",
          videoSrc: "./videos/alphabet/Ц.mp4",
          videoPreview: "./videos/alphabet/Ц.jpg",
        },
        {
          id: 24,
          title: "Буква Ч",
          videoSrc: "./videos/alphabet/Ч.mp4",
          videoPreview: "./videos/alphabet/Ч.jpg",
        },
        {
          id: 25,
          title: "Буква Ш",
          videoSrc: "./videos/alphabet/Ш.mp4",
          videoPreview: "./videos/alphabet/Ш.jpg",
        },
        {
          id: 26,
          title: "Буква Щ",
          videoSrc: "./videos/alphabet/Щ.mp4",
          videoPreview: "./videos/alphabet/Щ.jpg",
        },
        {
          id: 27,
          title: "Буква Ъ",
          videoSrc: "./videos/alphabet/Ъ.mp4",
          videoPreview: "./videos/alphabet/Ъ.jpg",
        },
        {
          id: 28,
          title: "Буква Ы",
          videoSrc: "./videos/alphabet/Ы.mp4",
          videoPreview: "./videos/alphabet/Ы.jpg",
        },
        {
          id: 29,
          title: "Буква Ь",
          videoSrc: "./videos/alphabet/Ь.mp4",
          videoPreview: "./videos/alphabet/Ь.jpg",
        },
        {
          id: 30,
          title: "Буква Э",
          videoSrc: "./videos/alphabet/Э.mp4",
          videoPreview: "./videos/alphabet/Э.jpg",
        },
        {
          id: 31,
          title: "Буква Ю",
          videoSrc: "./videos/alphabet/Ю.mp4",
          videoPreview: "./videos/alphabet/Ю.jpg",
        },
        {
          id: 32,
          title: "Буква Я",
          videoSrc: "./videos/alphabet/Я.mp4",
          videoPreview: "./videos/alphabet/Я.jpg",
        },
      ],

      activeDialog: {
        id: -1,
        next: -1,
        prev: -1,
        title: "",
        videoSrc: "",
      },
    };
  },
  components: {
    Video,
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
      this.activeDialog.videoSrc = selectedItem.videoSrc;
      this.dialog = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.container--alphabet {
  padding-bottom: 100px;
}
</style>

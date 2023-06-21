<template>
  <v-container class="container--dictionary">
    <div class="dictionary-header">
      <v-row>
        <v-col>
          <h2>Лекции</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
            accusantium.
          </p>
        </v-col>
      </v-row>
    </div>
    <div class="dictionary">
      <v-row class="dictionary__list">
        <v-col class="col-xl-12 col-md-12 col-xs-12">
          <v-expansion-panels flat accordion>
            <v-expansion-panel
              v-for="item in dictionaryItems"
              :key="item.id"
              class="dictionary__item elevation-0"
            >
              <v-expansion-panel-header
                class="dictionary__title"
                expand-icon="mdi-menu-down"
              >
                <v-btn
                  text
                  :to="'/lectures/' + item.id"
                  class="dictionary__button"
                  >Лекция {{ item.id + 1 }} «{{ item.title }}»</v-btn
                >
              </v-expansion-panel-header>
              <v-expansion-panel-content
                class="dictionary__content elevation-0"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
                explicabo.
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import "@/scss/dictionary.scss";
export default {
  name: "Lectures",

  data() {
    return {
      dictionaryItems: [
        {
          id: 0,
          title: "Дактилирование",
          videoSrc: "./videos/lectures/Лекция 1. Дактилирование.mp4",
        },
        {
          id: 1,
          title: "Дактильная азбука",
          videoSrc: "./videos/lectures/Лекция 2. Дактильная азбука.mp4",
        },
        {
          id: 2,
          title: "Цифры",
          videoSrc: "./videos/lectures/Лекция 3. Цифры.mp4",
        },
        {
          id: 3,
          title: "Жестовый язык",
          videoSrc: "./videos/lectures/Лекция 4. Жестовый язык.mp4",
        },
        {
          id: 4,
          title: "РЖЯ и калькирующая жестовая речь",
          videoSrc:
            "./videos/lectures/Лекция 5. РЖЯ и калькирующая жестовая речь.mp4",
        },
        {
          id: 5,
          title: "Конфигурации",
          videoSrc: "./videos/lectures/Лекция 6. Конфигурации.mp4",
        },
        {
          id: 6,
          title: "Структура жеста",
          videoSrc: "./videos/lectures/Лекция 7. Структура жеста.mp4",
        },
        {
          id: 7,
          title: "Предназначение",
          videoSrc: "./videos/lectures/Лекция 8. Предназначение.mp4",
        },
        {
          id: 8,
          title: "Время",
          videoSrc: "./videos/lectures/Лекция 9. Время.mp4",
        },
        {
          id: 9,
          title: "Множественное число",
          videoSrc: "./videos/lectures/Лекция 10. Множественное число.mp4",
        },
        {
          id: 10,
          title: "Завершенность действия",
          videoSrc: "./videos/lectures/Лекция 11. Завершенность действия.mp4",
        },
        {
          id: 11,
          title: "Трансформация перевода",
          videoSrc: "./videos/lectures/Лекция 12. Трансформация перевода.mp4",
        },
        {
          id: 12,
          title: "Пространственное отношение",
          videoSrc:
            "./videos/lectures/Лекция 13. Пространственное отношение.mp4",
        },
        {
          id: 13,
          title: "Знакомство",
          videoSrc: "./videos/lectures/Лекция 14. Знакомство.mp4",
        },
        {
          id: 14,
          title: "Дом",
          videoSrc: "./videos/lectures/Лекция 15. Дом.mp4",
        },
        {
          id: 15,
          title: "Природа, растения",
          videoSrc: "./videos/lectures/Лекция 16. Природа,растения.mp4",
        },
        {
          id: 16,
          title: "Семья",
          videoSrc: "./videos/lectures/Лекция 17. Семья.mp4",
        },
        {
          id: 17,
          title: "Глаголы",
          videoSrc: "./videos/lectures/Лекция 18. Глаголы.mp4",
        },
      ],
    };
  },
};
</script>

<style lang="scss"></style>

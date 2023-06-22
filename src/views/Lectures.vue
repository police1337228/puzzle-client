<template>
  <v-container class="container--dictionary">
    <div class="dictionary-header">
      <v-row>
        <v-col>
          <h2>Лекции</h2>
          <p>
            В данном разделы представлен основной образовательный материал по
            изучению русского жестового языка
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
                  @click.stop
                  :to="'/lectures/' + item.id"
                  class="dictionary__button"
                  >Лекция {{ item.id + 1 }} «{{ item.title }}»</v-btn
                >
              </v-expansion-panel-header>
              <v-expansion-panel-content
                class="dictionary__content elevation-0"
              >
                {{ item.description }}
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
          description:
            "В данной лекцией ты познакомишься с вспомогательной системой русского жестового языка - дактильной речью, узнаешь области и способы применения.",
          videoSrc: "./videos/lectures/Лекция 1. Дактилирование.mp4",
        },
        {
          id: 1,
          title: "Дактильная азбука",
          description:
            "Выучи дактильную азбуку, или иными словами – пальцевую азбуку, важную составляющую невербальной коммуникации.",
          videoSrc: "./videos/lectures/Лекция 2. Дактильная азбука.mp4",
        },
        {
          id: 2,
          title: "Цифры",
          description:
            "Познакомься с правилами обозначения цифр, или другими словами –пальцевым счетом.",
          videoSrc: "./videos/lectures/Лекция 3. Цифры.mp4",
        },
        {
          id: 3,
          title: "Жестовый язык",
          description:
            "Что из себя представляет жестовый языка? Различен ли он для каждой страны? Посмотри видео и получи ответы на все вопросы.",
          videoSrc: "./videos/lectures/Лекция 4. Жестовый язык.mp4",
        },
        {
          id: 4,
          title: "РЖЯ и калькирующая жестовая речь",
          description:
            "Калькирующая жестовая речь и русский жестовый язык, узнай особенности и различия данных систем невербальной коммуникации.",
          videoSrc:
            "./videos/lectures/Лекция 5. РЖЯ и калькирующая жестовая речь.mp4",
        },
        {
          id: 5,
          title: "Конфигурации",
          description:
            "Из чего состоят слова и предложения жестовой речи? Смотри видео и узнавай о компонентах русского жестового языка.",
          videoSrc: "./videos/lectures/Лекция 6. Конфигурации.mp4",
        },
        {
          id: 6,
          title: "Структура жеста",
          description: "Познакомься с главными компонентами жестов.",
          videoSrc: "./videos/lectures/Лекция 7. Структура жеста.mp4",
        },
        {
          id: 7,
          title: "Предназначение",
          description:
            "Узнай способы описания принадлежности, и закрепи полученный материал на примерах.",
          videoSrc: "./videos/lectures/Лекция 8. Предназначение.mp4",
        },
        {
          id: 8,
          title: "Время",
          description:
            "Узнай, как выразить значение времени на русском жестовом языке.",
          videoSrc: "./videos/lectures/Лекция 9. Время.mp4",
        },
        {
          id: 9,
          title: "Множественное число",
          description:
            "В данной лекции ты познакомишься со способами выражения множественного числа в русской жестовой речи.",
          videoSrc: "./videos/lectures/Лекция 10. Множественное число.mp4",
        },
        {
          id: 10,
          title: "Завершенность действия",
          description:
            "После просмотра данной лекции, ты будешь знать, как выразить завершенность и продолжительность действия.",
          videoSrc: "./videos/lectures/Лекция 11. Завершенность действия.mp4",
        },
        {
          id: 11,
          title: "Трансформация перевода",
          description:
            "Как преобразовать мысль в русский жестовый язык? В данной лекции представлены четыре способа как это сделать. ",
          videoSrc: "./videos/lectures/Лекция 12. Трансформация перевода.mp4",
        },
        {
          id: 12,
          title: "Пространственное отношение",
          description:
            "Узнай, как выразить пространственное отношение объектов в русском жестовом языке.",
          videoSrc:
            "./videos/lectures/Лекция 13. Пространственное отношение.mp4",
        },
        {
          id: 13,
          title: "Знакомство",
          description:
            "Познакомься с основной лексикой раздела «Знакомства». Отдельные видеоролики слов из данного раздела представлены в соответствующей теме словаря.",
          videoSrc: "./videos/lectures/Лекция 14. Знакомство.mp4",
        },
        {
          id: 14,
          title: "Дом",
          description:
            "Познакомься с основной лексикой раздела «Дом». Отдельные видеоролики слов из данного раздела представлены в соответствующей теме словаря.",
          videoSrc: "./videos/lectures/Лекция 15. Дом.mp4",
        },
        {
          id: 15,
          title: "Природа, растения",
          description:
            "Познакомься с основной лексикой раздела «Природа, растения». Отдельные видеоролики слов из данного раздела представлены в соответствующей теме словаря.",
          videoSrc: "./videos/lectures/Лекция 16. Природа,растения.mp4",
        },
        {
          id: 16,
          title: "Семья",
          description:
            "Познакомься с основной лексикой раздела «Семья». Отдельные видеоролики слов из данного раздела представлены в соответствующей теме словаря.",
          videoSrc: "./videos/lectures/Лекция 17. Семья.mp4",
        },
        {
          id: 17,
          title: "Глаголы",
          description:
            "Познакомься с наиболее часто используемыми глаголами. Отдельные видеоролики слов из данного раздела представлены в соответствующей теме словаря.",
          videoSrc: "./videos/lectures/Лекция 18. Глаголы.mp4",
        },
      ],
    };
  },
};
</script>

<style lang="scss"></style>

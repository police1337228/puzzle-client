<template>
  <v-container v-if="!dictionaryItems[Number(this.$route.params.id)]">
    <h2 class="text-uppercase text-center">Такой лекции у нас нет :(</h2>
  </v-container>
  <v-container v-else>
    <v-row>
      <v-col>
        <h2 class="text-uppercase">
          Лекция {{ Number(this.$route.params.id) + 1 }} «{{
            dictionaryItems[Number(this.$route.params.id)].title
          }}»
        </h2>
      </v-col>
    </v-row>
    <div class="lecture">
      <v-row>
        <v-col class="col-xl-8 col-md-6 col-sm-12 col-12">
          <div class="lecture__video-container">
            <div class="lecture__video">
              <Video
                :videoSrc="
                  dictionaryItems[Number(this.$route.params.id)].videoSrc
                "
              />
            </div>
            <div class="lecture__video-buttons d-flex">
              <v-btn
                :to="'/lectures/' + String(Number($route.params.id) - 1)"
                :disabled="$route.params.id == 0"
                text
                color="#f9bdff"
                class="pl-0 pr-1"
                ><v-icon color="#f9bdff">mdi-arrow-left-thin</v-icon
                ><a>Предыдущая лекция</a></v-btn
              >
              <v-btn
                href="#"
                :to="'/lectures/' + String(Number($route.params.id) + 1)"
                :disabled="$route.params.id >= dictionaryItems.length - 1"
                text
                color="#f9bdff"
                class="pr-0 pl-1"
                ><a>Следующая лекция</a
                ><v-icon color="#f9bdff">mdi-arrow-right-thin</v-icon></v-btn
              >
            </div>
          </div>
          <div class="lecture__description">
            <h3>Описание лекции</h3>
            <p>
              {{ dictionaryItems[Number(this.$route.params.id)].description }}
            </p>
          </div>
        </v-col>
        <v-col class="col-xl-4 col-md-6 col-sm-12 col-12">
          <div
            class="lecture__buttons d-flex flex-column justify-center align-center"
          >
            <v-col class="pt-0 col-md-10 col-12">
              <v-btn
                color="#CE93D8"
                rounded
                depressed
                class="header-login mr-5 white--text"
                light
                block
                to="/dictionary"
                >ПЕРЕЙТИ В СЛОВАРЬ</v-btn
              >
            </v-col>
            <v-col class="col-md-10 col-12">
              <v-btn
                block
                color="#CE93D8"
                rounded
                depressed
                class="header-login mr-5 white--text"
                light
                to="/game"
                >ПЕРЕЙТИ К ИГРЕ</v-btn
              ></v-col
            >
            <v-col class="col-md-10 col-12">
              <v-btn
                block
                color="#7D009C"
                rounded
                plain
                outlined
                class="header-login mr-5"
                to="/lectures"
                >ВЕРНУТЬСЯ К ЛЕКЦИЯМ</v-btn
              >
            </v-col>
          </div>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import "@/scss/lecture.scss";
import Video from "../components/video/Video.vue";
export default {
  components: { Video },
  metaInfo: {
    title: "Лекция",
  },
  data() {
    return {
      dictionaryItems: [
        {
          id: 0,
          title: "Дактилирование",
          description:
            "В данной лекцией ты познакомишься с вспомогательной системой русского жестового языка - дактильной речью, узнаешь области и способы применения.",
          videoSrc: `${process.env.BASE_URL}videos/lectures/Лекция 1. Дактилирование.mp4`,
        },
        {
          id: 1,
          title: "Дактильная азбука",
          description:
            "Выучи дактильную азбуку, или иными словами – пальцевую азбуку, важную составляющую невербальной коммуникации.",
          videoSrc: `${process.env.BASE_URL}videos/lectures/Лекция 2. Дактильная азбука.mp4`,
        },
        {
          id: 2,
          title: "Цифры",
          description:
            "Познакомься с правилами обозначения цифр, или другими словами –пальцевым счетом.",
          videoSrc: `${process.env.BASE_URL}videos/lectures/Лекция 3. Цифры.mp4`,
        },
        {
          id: 3,
          title: "Жестовый язык",
          description:
            "Что из себя представляет жестовый языка? Различен ли он для каждой страны? Посмотри видео и получи ответы на все вопросы.",
          videoSrc: `${process.env.BASE_URL}videos/lectures/Лекция 4. Жестовый язык.mp4`,
        },
        {
          id: 4,
          title: "РЖЯ и калькирующая жестовая речь",
          description:
            "Калькирующая жестовая речь и русский жестовый язык, узнай особенности и различия данных систем невербальной коммуникации.",
          videoSrc: `${process.env.BASE_URL}videos/lectures/Лекция 5. РЖЯ и калькирующая жестовая речь.mp4`,
        },
        {
          id: 5,
          title: "Конфигурации",
          description:
            "Из чего состоят слова и предложения жестовой речи? Смотри видео и узнавай о компонентах русского жестового языка.",
          videoSrc: `${process.env.BASE_URL}videos/lectures/Лекция 6. Конфигурации.mp4`,
        },
        {
          id: 6,
          title: "Структура жеста",
          description: "Познакомься с главными компонентами жестов.",
          videoSrc: `${process.env.BASE_URL}videos/lectures/Лекция 7. Структура жеста.mp4`,
        },
        {
          id: 7,
          title: "Предназначение",
          description:
            "Узнай способы описания принадлежности, и закрепи полученный материал на примерах.",
          videoSrc: `${process.env.BASE_URL}videos/lectures/Лекция 8. Предназначение.mp4`,
        },
        {
          id: 8,
          title: "Время",
          description:
            "Узнай, как выразить значение времени на русском жестовом языке.",
          videoSrc: `${process.env.BASE_URL}videos/lectures/Лекция 9. Время.mp4`,
        },
        {
          id: 9,
          title: "Множественное число",
          description:
            "В данной лекции ты познакомишься со способами выражения множественного числа в русской жестовой речи.",
          videoSrc: `${process.env.BASE_URL}videos/lectures/Лекция 10. Множественное число.mp4`,
        },
        {
          id: 10,
          title: "Завершенность действия",
          description:
            "После просмотра данной лекции, ты будешь знать, как выразить завершенность и продолжительность действия.",
          videoSrc: `${process.env.BASE_URL}videos/lectures/Лекция 11. Завершенность действия.mp4`,
        },
        {
          id: 11,
          title: "Трансформация перевода",
          description:
            "Как преобразовать мысль в русский жестовый язык? В данной лекции представлены четыре способа как это сделать. ",
          videoSrc: `${process.env.BASE_URL}videos/lectures/Лекция 12. Трансформация перевода.mp4`,
        },
        {
          id: 12,
          title: "Пространственное отношение",
          description:
            "Узнай, как выразить пространственное отношение объектов в русском жестовом языке.",
          videoSrc: `${process.env.BASE_URL}videos/lectures/Лекция 13. Пространственное отношение.mp4`,
        },
        {
          id: 13,
          title: "Знакомство",
          description:
            "Познакомься с основной лексикой раздела «Знакомства». Отдельные видеоролики слов из данного раздела представлены в соответствующей теме словаря.",
          videoSrc: `${process.env.BASE_URL}videos/lectures/Лекция 14. Знакомство.mp4`,
        },
        {
          id: 14,
          title: "Дом",
          description:
            "Познакомься с основной лексикой раздела «Дом». Отдельные видеоролики слов из данного раздела представлены в соответствующей теме словаря.",
          videoSrc: `${process.env.BASE_URL}videos/lectures/Лекция 15. Дом.mp4`,
        },
        {
          id: 15,
          title: "Природа, растения",
          description:
            "Познакомься с основной лексикой раздела «Природа, растения». Отдельные видеоролики слов из данного раздела представлены в соответствующей теме словаря.",
          videoSrc: `${process.env.BASE_URL}videos/lectures/Лекция 16. Природа,растения.mp4`,
        },
        {
          id: 16,
          title: "Семья",
          description:
            "Познакомься с основной лексикой раздела «Семья». Отдельные видеоролики слов из данного раздела представлены в соответствующей теме словаря.",
          videoSrc: `${process.env.BASE_URL}videos/lectures/Лекция 17. Семья.mp4`,
        },
        {
          id: 17,
          title: "Глаголы",
          description:
            "Познакомься с наиболее часто используемыми глаголами. Отдельные видеоролики слов из данного раздела представлены в соответствующей теме словаря.",
          videoSrc: `${process.env.BASE_URL}videos/lectures/Лекция 18. Глаголы.mp4`,
        },
      ],
    };
  },
};
</script>

<style></style>

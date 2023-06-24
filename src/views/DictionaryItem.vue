<template>
  <v-container v-if="!alphabetItems[Number($route.params.id)]">
    <h2 class="text-uppercase text-center">Такого словаря у нас нет :(</h2>
  </v-container>
  <v-container v-else class="container--alphabet">
    <div class="alphabet-header">
      <v-row>
        <v-col>
          <h2>
            Словарь {{ Number($route.params.id) + 1 }} «{{
              alphabetItems[Number($route.params.id)].title
            }}»
          </h2>
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
              v-if="
                activeDialog.id + 1 <
                alphabetItems[Number($route.params.id)].videos.length
              "
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
          class="col-xl-3 col-md-4 col-sm-6 col-6"
          v-for="item in alphabetItems[Number($route.params.id)].videos"
          :key="item.id"
          v-show="item.id + 1 <= itemsToShow"
        >
          <div class="alphabet-item" @click="handleDialog(item.id)">
            <div class="alphabet-item__body">
              <img :src="item.videoPreview" alt="" />
            </div>
            <div class="alphabet-item__title">
              <p>{{ item.title }}</p>
            </div>
          </div>
        </v-col>
        <v-btn
          @click="itemsToShow += 8"
          v-if="
            itemsToShow < alphabetItems[Number($route.params.id)].videos.length
          "
          text
          >Смотреть ещё</v-btn
        >
      </v-row>
    </div>
  </v-container>
</template>

Любовник Маленький Мальчик Мать Младший Молодой Муж, жена Мужчина Невеста
Некрасивый Отец Племянник Подросток Поколение Развод Ребёнок Родители Родиться
Родственники Свадьба Семья Сестра Смерть Старший Старый Сын Тётя Толстый Тонкий
Уважать Умереть Холостяк Человек Бабушка Бедный Близнецы Богатый Брат Взрослый
Девочка Дедушка Дети Дочь Дядя Жених Жить Красивый

<script>
import "@/scss/alphabet.scss";
import Video from "../components/video/Video.vue";
export default {
  name: "Alphabet",
  metaInfo: {
    title: "Словарь",
  },
  data() {
    return {
      dialog: false,
      itemsToShow: 8,
      alphabetItems: [
        {
          id: 0,
          title: "Знакомство",
          videos: [
            {
              id: 0,
              title: "Ваш",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/1/Ваш.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/1/Ваш.jpg`,
            },
            {
              id: 1,
              title: "Вы",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/1/Вы.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/1/Вы.jpg`,
            },
            {
              id: 2,
              title: "Где",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/1/Где.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/1/Где.jpg`,
            },
            {
              id: 3,
              title: "До свидания",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/1/До свидания.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/1/До свидания.jpg`,
            },
            {
              id: 4,
              title: "Друг",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/1/Друг.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/1/Друг.jpg`,
            },
            {
              id: 5,
              title: "Его",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/1/Его.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/1/Его.jpg`,
            },
            {
              id: 6,
              title: "Её",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/1/Её.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/1/Её.jpg`,
            },
            {
              id: 7,
              title: "Жестовое имя",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/1/Жестовое имя.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/1/Жестовое имя.jpg`,
            },
            {
              id: 8,
              title: "Зачем",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/1/Зачем.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/1/Зачем.jpg`,
            },
            {
              id: 9,
              title: "Здравствуйте",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/1/Здравствуйте.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/1/Здравствуйте.jpg`,
            },
            {
              id: 10,
              title: "Знакомиться",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/1/Знакомиться.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/1/Знакомиться.jpg`,
            },
            {
              id: 11,
              title: "Извиниться",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/1/Извиниться.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/1/Извиниться.jpg`,
            },
            {
              id: 12,
              title: "Имя",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/1/Имя.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/1/Имя.jpg`,
            },
            {
              id: 13,
              title: "Какой",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/1/Какой.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/1/Какой.jpg`,
            },
            {
              id: 14,
              title: "Когда",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/1/Когда.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/1/Когда.jpg`,
            },
            {
              id: 15,
              title: "Кто",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/1/Кто.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/1/Кто.jpg`,
            },
            {
              id: 16,
              title: "Куда",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/1/куда.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/1/куда.jpg`,
            },
            {
              id: 17,
              title: "Мне",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/1/Мне.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/1/Мне.jpg`,
            },
            {
              id: 18,
              title: "Мой",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/1/Мой.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/1/Мой.jpg`,
            },
            {
              id: 19,
              title: "Мы",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/1/Мы.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/1/Мы.jpg`,
            },
            {
              id: 20,
              title: "Ничего",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/1/Ничего.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/1/Ничего.jpg`,
            },
            {
              id: 21,
              title: "Он",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/1/Он.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/1/Он.jpg`,
            },
            {
              id: 22,
              title: "Она",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/1/Она.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/1/Она.jpg`,
            },
            {
              id: 23,
              title: "Они",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/1/Они.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/1/Они.jpg`,
            },
            {
              id: 24,
              title: "Отчетство",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/1/Отчетство.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/1/Отчетство.jpg`,
            },
            {
              id: 25,
              title: "Пожалуйста",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/1/Пожалуйста.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/1/Пожалуйста.jpg`,
            },
            {
              id: 26,
              title: "Привет",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/1/Привет.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/1/Привет.jpg`,
            },
            {
              id: 27,
              title: "Приглашать",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/1/Приглашать.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/1/Приглашать.jpg`,
            },
            {
              id: 28,
              title: "Свой",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/1/Свой.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/1/Свой.jpg`,
            },
            {
              id: 29,
              title: "Сколько",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/1/Сколько.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/1/Сколько.jpg`,
            },
            {
              id: 30,
              title: "Спасибо",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/1/Спасибо.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/1/Спасибо.jpg`,
            },
            {
              id: 31,
              title: "Ты сам",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/1/Ты сам.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/1/Ты сам.jpg`,
            },
            {
              id: 32,
              title: "Ты",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/1/Ты.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/1/Ты.jpg`,
            },
            {
              id: 33,
              title: "У Вас",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/1/У Вас.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/1/У Вас.jpg`,
            },
            {
              id: 34,
              title: "У меня",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/1/У меня.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/1/У меня.jpg`,
            },
            {
              id: 35,
              title: "Фамилия",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/1/Фамилия.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/1/Фамилия.jpg`,
            },
            {
              id: 36,
              title: "Часто",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/1/Часто.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/1/Часто.jpg`,
            },
            {
              id: 37,
              title: "Чей",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/1/Чей.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/1/Чей.jpg`,
            },
            {
              id: 38,
              title: "Я сам",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/1/Я сам.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/1/Я сам.jpg`,
            },
            {
              id: 39,
              title: "Я",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/1/Я.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/1/Я.jpg`,
            },
          ],
        },
        {
          id: 1,
          title: "Дом",
          videos: [
            {
              id: 0,
              title: "Балкон",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/2/Балкон.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/2/Балкон.jpg`,
            },
            {
              id: 1,
              title: "Ванная",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/2/Ванная.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/2/Ванная.jpg`,
            },
            {
              id: 2,
              title: "Ворота",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/2/Ворота.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/2/Ворота.jpg`,
            },
            {
              id: 3,
              title: "Дверь",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/2/Дверь.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/2/Дверь.jpg`,
            },
            {
              id: 4,
              title: "Дом",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/2/Дом.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/2/Дом.jpg`,
            },
            {
              id: 5,
              title: "Душ",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/2/Душ.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/2/Душ.jpg`,
            },
            {
              id: 6,
              title: "Забор",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/2/Забор.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/2/Забор.jpg`,
            },
            {
              id: 7,
              title: "Замок",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/2/Замок.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/2/Замок.jpg`,
            },
            {
              id: 8,
              title: "Кафель",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/2/Кафель.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/2/Кафель.jpg`,
            },
            {
              id: 9,
              title: "Квартира",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/2/Квартира.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/2/Квартира.jpg`,
            },
            {
              id: 10,
              title: "Ключ",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/2/Ключ.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/2/Ключ.jpg`,
            },
            {
              id: 11,
              title: "Коммуналка",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/2/Коммуналка.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/2/Коммуналка.jpg`,
            },
            {
              id: 12,
              title: "Коридор",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/2/Коридор.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/2/Коридор.jpg`,
            },
            {
              id: 13,
              title: "Лестница",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/2/Лестница.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/2/Лестница.jpg`,
            },
            {
              id: 14,
              title: "Мало",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/2/Мало.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/2/Мало.jpg`,
            },
            {
              id: 15,
              title: "Много",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/2/Много.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/2/Много.jpg`,
            },
            {
              id: 16,
              title: "Окно",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/2/Окно.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/2/Окно.jpg`,
            },
            {
              id: 17,
              title: "Окно",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/2/Окно.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/2/Окно.jpg`,
            },
            {
              id: 18,
              title: "Потолок",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/2/Потолок.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/2/Потолок.jpg`,
            },
            {
              id: 19,
              title: "Сосед",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/2/Сосед.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/2/Сосед.jpg`,
            },
            {
              id: 20,
              title: "Стены",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/2/Стены.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/2/Стены.jpg`,
            },
            {
              id: 21,
              title: "Телефон",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/2/Телефон.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/2/Телефон.jpg`,
            },
            {
              id: 22,
              title: "Туалет",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/2/Туалет.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/2/Туалет.jpg`,
            },
            {
              id: 23,
              title: "Факс",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/2/Факс.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/2/Факс.jpg`,
            },
            {
              id: 24,
              title: "Форточка",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/2/Форточка.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/2/Форточка.jpg`,
            },
            {
              id: 25,
              title: "Чердак",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/2/Чердак.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/2/Чердак.jpg`,
            },
            {
              id: 26,
              title: "Этаж",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/2/Этаж.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/2/Этаж.jpg`,
            },
          ],
        },
        {
          id: 2,
          title: "Природа, растения",
          videos: [
            {
              id: 0,
              title: "Апельсин",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/3/Апельсин.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/3/Апельсин.jpg`,
            },
            {
              id: 1,
              title: "Арбуз",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/3/Арбуз.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/3/Арбуз.jpg`,
            },
            {
              id: 2,
              title: "Банан",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/3/Банан.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/3/Банан.jpg`,
            },
            {
              id: 3,
              title: "Берёза",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/3/Берёза.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/3/Берёза.jpg`,
            },
            {
              id: 4,
              title: "Ветки",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/3/Ветки.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/3/Ветки.jpg`,
            },
            {
              id: 5,
              title: "Виноград",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/3/Виноград.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/3/Виноград.jpg`,
            },
            {
              id: 6,
              title: "Вишня",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/3/Вишня.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/3/Вишня.jpg`,
            },
            {
              id: 7,
              title: "Горох",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/3/Горох.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/3/Горох.jpg`,
            },
            {
              id: 8,
              title: "Грибы",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/3/Грибы.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/3/Грибы.jpg`,
            },
            {
              id: 9,
              title: "Грязный",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/3/Грязный.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/3/Грязный.jpg`,
            },
            {
              id: 10,
              title: "Дерево",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/3/Дерево.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/3/Дерево.jpg`,
            },
            {
              id: 11,
              title: "Дыня",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/3/Дыня.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/3/Дыня.jpg`,
            },
            {
              id: 12,
              title: "Ель",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/3/Ель.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/3/Ель.jpg`,
            },
            {
              id: 13,
              title: "Кабачок",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/3/Кабачок.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/3/Кабачок.jpg`,
            },
            {
              id: 14,
              title: "Капуста",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/3/Капуста.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/3/Капуста.jpg`,
            },
            {
              id: 15,
              title: "Картофель",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/3/Картофель.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/3/Картофель.jpg`,
            },
            {
              id: 16,
              title: "Крупный",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/3/Крупный.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/3/Крупный.jpg`,
            },
            {
              id: 17,
              title: "Кукуруза",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/3/Кукуруза.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/3/Кукуруза.jpg`,
            },
            {
              id: 18,
              title: "Куст",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/3/Куст.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/3/Куст.jpg`,
            },
            {
              id: 19,
              title: "Лес",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/3/Лес.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/3/Лес.jpg`,
            },
            {
              id: 20,
              title: "Лимон",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/3/Лимон.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/3/Лимон.jpg`,
            },
            {
              id: 21,
              title: "Листья",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/3/Листья.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/3/Листья.jpg`,
            },
            {
              id: 22,
              title: "Мелкий",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/3/Мелкий.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/3/Мелкий.jpg`,
            },
            {
              id: 23,
              title: "Морковь",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/3/Морковь.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/3/Морковь.jpg`,
            },
            {
              id: 24,
              title: "Овощи",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/3/Овощи.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/3/Овощи.jpg`,
            },
            {
              id: 25,
              title: "Огурец",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/3/Огурец.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/3/Огурец.jpg`,
            },
            {
              id: 26,
              title: "Орехи",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/3/Орехи.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/3/Орехи.jpg`,
            },
            {
              id: 27,
              title: "Поздний",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/3/Поздний.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/3/Поздний.jpg`,
            },
            {
              id: 28,
              title: "Полезный",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/3/Полезный.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/3/Полезный.jpg`,
            },
            {
              id: 29,
              title: "Помидор",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/3/Помидор.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/3/Помидор.jpg`,
            },
            {
              id: 30,
              title: "Ранний",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/3/Ранний.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/3/Ранний.jpg`,
            },
            {
              id: 31,
              title: "Свекла",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/3/Свекла.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/3/Свекла.jpg`,
            },
            {
              id: 32,
              title: "Семечки",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/3/Семечки.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/3/Семечки.jpg`,
            },
            {
              id: 33,
              title: "Сладкий",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/3/Сладкий.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/3/Сладкий.jpg`,
            },
            {
              id: 34,
              title: "Слива",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/3/Слива.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/3/Слива.jpg`,
            },
            {
              id: 35,
              title: "Стебель",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/3/Стебель.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/3/Стебель.jpg`,
            },
            {
              id: 36,
              title: "Трава",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/3/Трава.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/3/Трава.jpg`,
            },
            {
              id: 37,
              title: "Цветок",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/3/Цветок.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/3/Цветок.jpg`,
            },
            {
              id: 38,
              title: "Чеснок",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/3/Чеснок.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/3/Чеснок.jpg`,
            },
            {
              id: 39,
              title: "Чистый",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/3/Чистый.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/3/Чистый.jpg`,
            },
            {
              id: 40,
              title: "Яблоко",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/3/Яблоко.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/3/Яблоко.jpg`,
            },
            {
              id: 41,
              title: "Ягоды",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/3/Ягоды.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/3/Ягоды.jpg`,
            },
          ],
        },
        {
          id: 3,
          title: "Семья",
          videos: [
            {
              id: 0,
              title: "Бабушка",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Бабушка.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Бабушка.jpg`,
            },
            {
              id: 1,
              title: "Бедный",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Бедный.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Бедный.jpg`,
            },
            {
              id: 2,
              title: "Близнецы",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Близнецы.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Близнецы.jpg`,
            },
            {
              id: 3,
              title: "Богатый",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Богатый.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Богатый.jpg`,
            },
            {
              id: 4,
              title: "Брат",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Брат.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Брат.jpg`,
            },
            {
              id: 5,
              title: "Взрослый",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Взрослый.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Взрослый.jpg`,
            },
            {
              id: 6,
              title: "Девочка",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Девочка.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Девочка.jpg`,
            },
            {
              id: 7,
              title: "Дедушка",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Дедушка.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Дедушка.jpg`,
            },
            {
              id: 8,
              title: "Дети",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Дети.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Дети.jpg`,
            },
            {
              id: 9,
              title: "Дочь",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Дочь.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Дочь.jpg`,
            },
            {
              id: 10,
              title: "Дядя",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Дядя.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Дядя.jpg`,
            },
            {
              id: 11,
              title: "Жених",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Жених.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Жених.jpg`,
            },
            {
              id: 12,
              title: "Жить",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Жить.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Жить.jpg`,
            },
            {
              id: 13,
              title: "Красивый",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Красивый.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Красивый.jpg`,
            },
            {
              id: 14,
              title: "Любовник",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Любовник.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Любовник.jpg`,
            },
            {
              id: 15,
              title: "Маленький",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Маленький.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Маленький.jpg`,
            },
            {
              id: 16,
              title: "Мальчик",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Мальчик.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Мальчик.jpg`,
            },
            {
              id: 17,
              title: "Мать",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Мать.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Мать.jpg`,
            },
            {
              id: 18,
              title: "Младший",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Младший.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Младший.jpg`,
            },
            {
              id: 19,
              title: "Молодой",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Молодой.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Молодой.jpg`,
            },
            {
              id: 20,
              title: "Муж, жена",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Муж, жена.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Муж, жена.jpg`,
            },
            {
              id: 21,
              title: "Мужчина",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Мужчина.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Мужчина.jpg`,
            },
            {
              id: 22,
              title: "Невеста",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Невеста.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Невеста.jpg`,
            },
            {
              id: 23,
              title: "Некрасивый",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Некрасивый.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Некрасивый.jpg`,
            },
            {
              id: 24,
              title: "Отец",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Отец.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Отец.jpg`,
            },
            {
              id: 25,
              title: "Племянник",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Племянник.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Племянник.jpg`,
            },
            {
              id: 26,
              title: "Подросток",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Подросток.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Подросток.jpg`,
            },
            {
              id: 27,
              title: "Поколение",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Поколение.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Поколение.jpg`,
            },
            {
              id: 28,
              title: "Развод",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Развод.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Развод.jpg`,
            },
            {
              id: 29,
              title: "Ребёнок",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Ребёнок.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Ребёнок.jpg`,
            },
            {
              id: 30,
              title: "Родители",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Родители.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Родители.jpg`,
            },
            {
              id: 31,
              title: "Родиться",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Родиться.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Родиться.jpg`,
            },
            {
              id: 32,
              title: "Родственники",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Родственники.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Родственники.jpg`,
            },
            {
              id: 33,
              title: "Свадьба",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Свадьба.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Свадьба.jpg`,
            },
            {
              id: 34,
              title: "Семья",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Семья.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Семья.jpg`,
            },
            {
              id: 35,
              title: "Сестра",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Сестра.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Сестра.jpg`,
            },
            {
              id: 36,
              title: "Смерть",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Смерть.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Смерть.jpg`,
            },
            {
              id: 37,
              title: "Старший",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Старший.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Старший.jpg`,
            },
            {
              id: 38,
              title: "Старый",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Старый.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Старый.jpg`,
            },
            {
              id: 39,
              title: "Сын",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Сын.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Сын.jpg`,
            },
            {
              id: 40,
              title: "Тётя",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Тётя.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Тётя.jpg`,
            },
            {
              id: 41,
              title: "Толстый",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Толстый.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Толстый.jpg`,
            },
            {
              id: 42,
              title: "Тонкий",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Тонкий.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Тонкий.jpg`,
            },
            {
              id: 43,
              title: "Уважать",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Уважать.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Уважать.jpg`,
            },
            {
              id: 44,
              title: "Умереть",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Умереть.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Умереть.jpg`,
            },
            {
              id: 45,
              title: "Холостяк",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Холостяк.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Холостяк.jpg`,
            },
            {
              id: 46,
              title: "Человек",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Человек.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Человек.jpg`,
            },
          ],
        },
        {
          id: 4,
          title: "Глаголы",
          videos: [
            {
              id: 0,
              title: "Бегать",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/5/Бегать.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/5/Бегать.jpg`,
            },
            {
              id: 1,
              title: "Гулять",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/5/Гулять.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/5/Гулять.jpg`,
            },
            {
              id: 2,
              title: "Думать",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/5/Думать.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/5/Думать.jpg`,
            },
            {
              id: 3,
              title: "Есть",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/5/Есть.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/5/Есть.jpg`,
            },
            {
              id: 4,
              title: "Играть",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/5/Играть.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/5/Играть.jpg`,
            },
            {
              id: 5,
              title: "Лежать",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/5/Лежать.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/5/Лежать.jpg`,
            },
            {
              id: 6,
              title: "Любить",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/5/Любить.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/5/Любить.jpg`,
            },
            {
              id: 7,
              title: "Обнимать",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/5/Обнимать.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/5/Обнимать.jpg`,
            },
            {
              id: 8,
              title: "Пить",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/5/Пить.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/5/Пить.jpg`,
            },
            {
              id: 9,
              title: "Работать в офисе",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/5/Работать в офисе.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/5/Работать в офисе.jpg`,
            },
            {
              id: 10,
              title: "Работать физически",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/5/Работать физически.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/5/Работать физически.jpg`,
            },
            {
              id: 11,
              title: "Решать",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/5/Решать.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/5/Решать.jpg`,
            },
            {
              id: 12,
              title: "Скучать",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/5/Скучать.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/5/Скучать.jpg`,
            },
            {
              id: 13,
              title: "Спать",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/5/Спать.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/5/Спать.jpg`,
            },
            {
              id: 14,
              title: "Спешить",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/5/Спешить.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/5/Спешить.jpg`,
            },
            {
              id: 15,
              title: "Уезжать",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/5/Уезжать.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/5/Уезжать.jpg`,
            },
          ],
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
      const selectedItem = this.alphabetItems[
        Number(this.$route.params.id)
      ].videos.find((item) => id === item.id);
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

<style lang="scss">
.container--alphabet {
  padding-bottom: 100px !important;
}
</style>

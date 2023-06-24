<template>
  <v-container class="container--game">
    <div class="game-container">
      <div class="game-header" v-if="!isStarted">
        <v-row>
          <v-col>
            <h2>Игра «1»</h2>
          </v-col>
        </v-row>
      </div>
      <div class="game-desc">
        <v-row class="justify-center" v-if="!isStarted">
          <v-col class="d-flex flex-column align-center">
            <div class="game-desc__logo">
              <img src="../assets/331.png" />
            </div>
            <div class="game-desc__text">
              <p>Закрепи пройденный материал в игровом формате</p>
            </div>
            <div class="game-desc__start">
              <v-btn
                color="#CE93D8"
                rounded
                depressed
                class="game-desc__btn white--text"
                light
                type="submit"
                @click="isStarted = true"
              >
                НАЧАТЬ</v-btn
              >
            </div>
          </v-col>
        </v-row>
        <div class="game-window" v-else>
          <div class="game-themes" v-if="!isThemeChoosed">
            <v-row class="justify-center">
              <v-col class="d-flex flex-column align-left">
                <p class="game-themes__choose">Выбери тему:</p>
              </v-col>
            </v-row>
            <v-row class="justify-space-between game-info">
              <v-col class="col-md-7 col-12">
                <v-expansion-panels flat accordion>
                  <v-expansion-panel
                    v-for="theme in themes"
                    :key="theme.id"
                    class="dictionary__item elevation-0"
                  >
                    <v-expansion-panel-header
                      class="dictionary__title"
                      expand-icon="mdi-menu-down"
                    >
                      <v-btn
                        text
                        @click.stop="chooseTheme(theme.id)"
                        class="dictionary__button"
                        >Тема {{ theme.id + 1 }} «{{ theme.title }}»</v-btn
                      >
                    </v-expansion-panel-header>
                    <v-expansion-panel-content
                      class="dictionary__content elevation-0"
                    >
                      {{ theme.description }}
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
              </v-col>
              <v-col class="col-md-4 col-12">
                <div class="game-window__rules">
                  <p class="game-window__rules--heading">Описание:</p>
                  <ul>
                    <li>
                      <p>
                        Перед тобой видеозапись жеста. Твоя задача понять, что
                        он означает и выбрать верный вариант из предложенных.
                      </p>
                    </li>
                  </ul>
                  <p class="game-window__rules--heading">Правила игры:</p>
                  <ul>
                    <li>
                      <p>Нужно понять, что означает показанный жест.</p>
                    </li>
                    <li>
                      <p>
                        Прочитать предложенные варианты и выбрать, по твоему
                        мнению, верный.
                      </p>
                    </li>
                    <li>
                      <p>
                        Верный ответ подсвечивается зелёным, неверный - красным.
                      </p>
                    </li>
                    <li><p>В конце увидишь свои результаты, удачи!</p></li>
                  </ul>
                </div>
              </v-col>
            </v-row>
            <v-row class="justify-end">
              <v-btn
                text
                color="#f9bdff"
                class="pr-0 pl-1 game-themes__togame"
                @click="chooseTheme(0)"
                ><a>К игре</a
                ><v-icon color="#f9bdff">mdi-arrow-right-thin</v-icon></v-btn
              >
            </v-row>
          </div>
          <div class="game-questions" v-else>
            <v-row>
              <v-btn
                text
                color="#f9bdff"
                class="pr-0 pl-1 game-themes__togame mb-2"
                @click="restartGame"
                ><v-icon color="#f9bdff">mdi-arrow-left-thin</v-icon
                ><a>Выйти из игры</a></v-btn
              ></v-row
            >
            <v-row class="justify-center">
              <p class="game-questions__heading">
                Вопрос №{{ this.questionId + 1 }}
              </p>
            </v-row>
            <v-row class="d-flex justify-center align-center mb-5">
              <div class="game-video">
                <Video
                  :videoSrc="answersArray[this.questionId].videoSrc"
                  :muted="true"
                />
              </div>
            </v-row>
            <v-row class="justify-space-around">
              <v-col
                class="col-md-5 col-12 d-flex align-center"
                v-for="answer in answersArray[questionId].questions"
                :key="answer.id"
                ><v-btn
                  block
                  text
                  class="game-questions__button"
                  @click="
                    !answersArray[questionId].isQuestionDone
                      ? chooseAnswer(answer.id)
                      : null
                  "
                  :color="
                    answer.isClicked
                      ? answer.isCorrect
                        ? 'success'
                        : 'error'
                      : ''
                  "
                  >{{ answer.title }}</v-btn
                ></v-col
              >
            </v-row>
            <v-row class="game-themes__buttons">
              <v-col class="col-md-4 col-6 d-flex align-center justify-center">
                <v-btn
                  text
                  color="#f9bdff"
                  class="pr-0 pl-1 game-themes__togame"
                  :disabled="questionId == 0"
                  @click="prevQuestion"
                  ><v-icon color="#f9bdff">mdi-arrow-left-thin</v-icon
                  ><a>Предыдущий вопрос</a></v-btn
                >
              </v-col>
              <v-col class="col-md-4 col-12 d-flex align-center justify-center">
                <v-progress-linear v-model="progressBar" color="#f9bdff">
                </v-progress-linear>
              </v-col>
              <v-col
                class="col-md-4 col-6 d-flex align-center justify-center"
                v-if="questionId < answersArray.length - 1"
              >
                <v-btn
                  text
                  color="#f9bdff"
                  class="pr-0 pl-1 game-themes__togame text-right"
                  @click="nextQuestion"
                  ><a>Следующий вопрос</a
                  ><v-icon color="#f9bdff">mdi-arrow-right-thin</v-icon></v-btn
                >
              </v-col>
              <v-col
                class="col-md-4 col-6 d-flex align-center justify-center"
                v-if="questionId == answersArray.length - 1"
              >
                <v-btn
                  text
                  color="#f9bdff"
                  class="pr-0 pl-1 game-themes__togame text-right"
                  @click="endGame"
                  ><a>Завершить игру</a></v-btn
                >
              </v-col>
            </v-row>
          </div>
          <div class="game-end" v-if="isEnded">
            <v-row justify="center">
              <v-dialog
                v-model="isEnded"
                max-width="500px"
                class="elevation-0 dialog-modal"
                persistent
              >
                <v-card
                  class="elevation-0 modal modal__login modal__form modal__game"
                >
                  <v-card-title class="justify-center modal__title">
                    <span> ВАШ РЕЗУЛЬТАТ</span><br />
                  </v-card-title>
                  <v-card-text
                    class="modal__text d-flex flex-column justify-center align-center"
                    ><p>
                      Вы набрали
                      {{ correctAnswers }} баллов из
                      {{ answersArray.length }} баллов!
                    </p>
                    <span
                      >Неправильные ответы: {{ wrongAnswers.join(", ") }}</span
                    ><br />
                    <v-btn @click="restartGame" text>Вернуться к темам </v-btn>
                  </v-card-text>
                </v-card>
              </v-dialog>
            </v-row>
            <v-row class="justify-center">
              <v-col class="d-flex flex-column align-center"> </v-col>
            </v-row>
          </div>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
import "@/scss/game.scss";
import Video from "../components/video/Video.vue";
export default {
  components: { Video },
  metaInfo: {
    title: "Игра",
  },
  data() {
    return {
      isStarted: false,
      isThemeChoosed: false,
      isEnded: false,
      choosedThemeId: -1,
      questionId: -1,
      correctAnswers: 0,
      wrongAnswers: [],
      answersArray: [],
      themes: [
        {
          id: 0,
          title: "Знакомство",
          description:
            "В данной теме ты узнаешь местоимения для общения, сможешь узнать основные вопросы, задаваемые при знакомстве, и ответы на них.",
          words: [
            "Я",
            "Ты",
            "Он",
            "Она",
            "Мы",
            "Вы",
            "Они",
            "Мой",
            "Мне",
            "У меня",
            "У Вac",
            "Ваш",
            "Её",
            "Eгo",
            "Ты сам",
            "Я сам",
            "Свой",
            "Где",
            "Зачем",
            "Какой",
            "Когда",
            "Кто",
            "Куда",
            "Здравствуйте",
            "До свидания",
            "Привет",
            "Сколько",
            "Приглашать",
            "Чей",
            "Извиниться",
            "Пожалуйста",
            "Спасибо",
            "Знакомиться",
            "Часто",
            "Друг",
            "Ничего",
            "Фамилия",
            "Имя",
            "Отчество",
            "Жестовое имя",
          ],
          questions: [
            {
              id: 0,
              answer: "Ваш",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/1/Ваш.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/1/Ваш.jpg`,
            },
            {
              id: 1,
              answer: "Вы",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/1/Вы.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/1/Вы.jpg`,
            },
            {
              id: 2,
              answer: "Где",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/1/Где.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/1/Где.jpg`,
            },
            {
              id: 3,
              answer: "До свидания",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/1/До свидания.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/1/До свидания.jpg`,
            },
            {
              id: 4,
              answer: "Друг",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/1/Друг.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/1/Друг.jpg`,
            },
            {
              id: 5,
              answer: "Его",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/1/Его.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/1/Его.jpg`,
            },
            {
              id: 6,
              answer: "Её",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/1/Её.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/1/Её.jpg`,
            },
            {
              id: 7,
              answer: "Жестовое имя",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/1/Жестовое имя.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/1/Жестовое имя.jpg`,
            },
            {
              id: 8,
              answer: "Зачем",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/1/Зачем.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/1/Зачем.jpg`,
            },
            {
              id: 9,
              answer: "Здравствуйте",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/1/Здравствуйте.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/1/Здравствуйте.jpg`,
            },
            {
              id: 10,
              answer: "Знакомиться",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/1/Знакомиться.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/1/Знакомиться.jpg`,
            },
            {
              id: 11,
              answer: "Извиниться",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/1/Извиниться.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/1/Извиниться.jpg`,
            },
            {
              id: 12,
              answer: "Имя",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/1/Имя.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/1/Имя.jpg`,
            },
            {
              id: 13,
              answer: "Какой",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/1/Какой.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/1/Какой.jpg`,
            },
            {
              id: 14,
              answer: "Когда",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/1/Когда.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/1/Когда.jpg`,
            },
            {
              id: 15,
              answer: "Кто",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/1/Кто.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/1/Кто.jpg`,
            },
            {
              id: 16,
              answer: "Куда",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/1/куда.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/1/куда.jpg`,
            },
            {
              id: 17,
              answer: "Мне",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/1/Мне.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/1/Мне.jpg`,
            },
            {
              id: 18,
              answer: "Мой",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/1/Мой.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/1/Мой.jpg`,
            },
            {
              id: 19,
              answer: "Мы",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/1/Мы.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/1/Мы.jpg`,
            },
            {
              id: 20,
              answer: "Ничего",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/1/Ничего.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/1/Ничего.jpg`,
            },
            {
              id: 21,
              answer: "Он",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/1/Он.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/1/Он.jpg`,
            },
            {
              id: 22,
              answer: "Она",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/1/Она.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/1/Она.jpg`,
            },
            {
              id: 23,
              answer: "Они",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/1/Они.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/1/Они.jpg`,
            },
            {
              id: 24,
              answer: "Отчетство",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/1/Отчетство.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/1/Отчетство.jpg`,
            },
            {
              id: 25,
              answer: "Пожалуйста",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/1/Пожалуйста.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/1/Пожалуйста.jpg`,
            },
            {
              id: 26,
              answer: "Привет",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/1/Привет.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/1/Привет.jpg`,
            },
            {
              id: 27,
              answer: "Приглашать",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/1/Приглашать.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/1/Приглашать.jpg`,
            },
            {
              id: 28,
              answer: "Свой",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/1/Свой.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/1/Свой.jpg`,
            },
            {
              id: 29,
              answer: "Сколько",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/1/Сколько.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/1/Сколько.jpg`,
            },
            {
              id: 30,
              answer: "Спасибо",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/1/Спасибо.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/1/Спасибо.jpg`,
            },
            {
              id: 31,
              answer: "Ты сам",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/1/Ты сам.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/1/Ты сам.jpg`,
            },
            {
              id: 32,
              answer: "Ты",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/1/Ты.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/1/Ты.jpg`,
            },
            {
              id: 33,
              answer: "У Вас",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/1/У Вас.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/1/У Вас.jpg`,
            },
            {
              id: 34,
              answer: "У меня",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/1/У меня.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/1/У меня.jpg`,
            },
            {
              id: 35,
              answer: "Фамилия",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/1/Фамилия.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/1/Фамилия.jpg`,
            },
            {
              id: 36,
              answer: "Часто",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/1/Часто.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/1/Часто.jpg`,
            },
            {
              id: 37,
              answer: "Чей",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/1/Чей.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/1/Чей.jpg`,
            },
            {
              id: 38,
              answer: "Я сам",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/1/Я сам.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/1/Я сам.jpg`,
            },
            {
              id: 39,
              answer: "Я",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/1/Я.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/1/Я.jpg`,
            },
          ],
        },
        {
          id: 1,
          title: "Дом",
          description:
            "Благодаря данному разделу ты сможешь объяснить все, что находится у тебя в доме или квартире, а также описать некоторые его внешние характеристики.",
          words: [
            "Балкон",
            "Мало",
            "Потолок",
            "Ванная",
            "Много",
            "Сосед",
            "Ворота",
            "Ключ",
            "Стены",
            "Дверь",
            "Коммуналка",
            "Телефон",
            "Дом",
            "Квартира",
            "Туалет",
            "Душ",
            "Коридор",
            "Факс",
            "Забор",
            "Форточка",
            "Замок",
            "Чердак",
            "Плитка",
            "Кафель",
            "Лестница",
            "Окно",
            "Этаж",
          ],
          questions: [
            {
              id: 0,
              answer: "Балкон",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/2/Балкон.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/2/Балкон.jpg`,
            },
            {
              id: 1,
              answer: "Ванная",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/2/Ванная.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/2/Ванная.jpg`,
            },
            {
              id: 2,
              answer: "Ворота",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/2/Ворота.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/2/Ворота.jpg`,
            },
            {
              id: 3,
              answer: "Дверь",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/2/Дверь.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/2/Дверь.jpg`,
            },
            {
              id: 4,
              answer: "Дом",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/2/Дом.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/2/Дом.jpg`,
            },
            {
              id: 5,
              answer: "Душ",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/2/Душ.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/2/Душ.jpg`,
            },
            {
              id: 6,
              answer: "Забор",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/2/Забор.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/2/Забор.jpg`,
            },
            {
              id: 7,
              answer: "Замок",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/2/Замок.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/2/Замок.jpg`,
            },
            {
              id: 8,
              answer: "Кафель",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/2/Кафель.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/2/Кафель.jpg`,
            },
            {
              id: 9,
              answer: "Квартира",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/2/Квартира.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/2/Квартира.jpg`,
            },
            {
              id: 10,
              answer: "Ключ",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/2/Ключ.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/2/Ключ.jpg`,
            },
            {
              id: 11,
              answer: "Коммуналка",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/2/Коммуналка.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/2/Коммуналка.jpg`,
            },
            {
              id: 12,
              answer: "Коридор",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/2/Коридор.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/2/Коридор.jpg`,
            },
            {
              id: 13,
              answer: "Лестница",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/2/Лестница.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/2/Лестница.jpg`,
            },
            {
              id: 14,
              answer: "Мало",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/2/Мало.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/2/Мало.jpg`,
            },
            {
              id: 15,
              answer: "Много",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/2/Много.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/2/Много.jpg`,
            },
            {
              id: 16,
              answer: "Окно",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/2/Окно.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/2/Окно.jpg`,
            },
            {
              id: 17,
              answer: "Окно",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/2/Окно.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/2/Окно.jpg`,
            },
            {
              id: 18,
              answer: "Потолок",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/2/Потолок.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/2/Потолок.jpg`,
            },
            {
              id: 19,
              answer: "Сосед",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/2/Сосед.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/2/Сосед.jpg`,
            },
            {
              id: 20,
              answer: "Стены",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/2/Стены.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/2/Стены.jpg`,
            },
            {
              id: 21,
              answer: "Телефон",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/2/Телефон.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/2/Телефон.jpg`,
            },
            {
              id: 22,
              answer: "Туалет",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/2/Туалет.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/2/Туалет.jpg`,
            },
            {
              id: 23,
              answer: "Факс",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/2/Факс.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/2/Факс.jpg`,
            },
            {
              id: 24,
              answer: "Форточка",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/2/Форточка.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/2/Форточка.jpg`,
            },
            {
              id: 25,
              answer: "Чердак",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/2/Чердак.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/2/Чердак.jpg`,
            },
            {
              id: 26,
              answer: "Этаж",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/2/Этаж.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/2/Этаж.jpg`,
            },
          ],
        },
        {
          id: 2,
          title: "Природа",
          description:
            "Данный раздел поможет тебе ориентироваться в фруктах и овощах, для тебя также откроется мир плодовых деревьев, ягод и орехов.",
          words: [
            "Апельсин",
            "Крупный",
            "Ранний",
            "Арбуз",
            "Кукуруза",
            "Берёза",
            "Куст",
            "Банан",
            "Лес",
            "Ветки",
            "Лимон",
            "Свекла",
            "Виноград",
            "Листья",
            "Семечки",
            "Вишня",
            "Сладкий",
            "Горох",
            "Мелкий",
            "Слива",
            "Грибы",
            "Морковь",
            "Стебель",
            "Овощи",
            "Трава",
            "Грязный",
            "Огурец",
            "Дерево",
            "Орехи",
            "Дыня",
            "Цветок",
            "Ель",
            "Чеснок",
            "Кабачок",
            "Поздний",
            "Чистый",
            "Капуста",
            "Полезный",
            "Яблоко",
            "Картофель",
            "Помидор",
            "Ягоды",
          ],
          questions: [
            {
              id: 0,
              answer: "Апельсин",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/3/Апельсин.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/3/Апельсин.jpg`,
            },
            {
              id: 1,
              answer: "Арбуз",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/3/Арбуз.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/3/Арбуз.jpg`,
            },
            {
              id: 2,
              answer: "Банан",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/3/Банан.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/3/Банан.jpg`,
            },
            {
              id: 3,
              answer: "Берёза",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/3/Берёза.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/3/Берёза.jpg`,
            },
            {
              id: 4,
              answer: "Ветки",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/3/Ветки.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/3/Ветки.jpg`,
            },
            {
              id: 5,
              answer: "Виноград",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/3/Виноград.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/3/Виноград.jpg`,
            },
            {
              id: 6,
              answer: "Вишня",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/3/Вишня.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/3/Вишня.jpg`,
            },
            {
              id: 7,
              answer: "Горох",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/3/Горох.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/3/Горох.jpg`,
            },
            {
              id: 8,
              answer: "Грибы",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/3/Грибы.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/3/Грибы.jpg`,
            },
            {
              id: 9,
              answer: "Грязный",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/3/Грязный.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/3/Грязный.jpg`,
            },
            {
              id: 10,
              answer: "Дерево",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/3/Дерево.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/3/Дерево.jpg`,
            },
            {
              id: 11,
              answer: "Дыня",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/3/Дыня.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/3/Дыня.jpg`,
            },
            {
              id: 12,
              answer: "Ель",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/3/Ель.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/3/Ель.jpg`,
            },
            {
              id: 13,
              answer: "Кабачок",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/3/Кабачок.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/3/Кабачок.jpg`,
            },
            {
              id: 14,
              answer: "Капуста",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/3/Капуста.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/3/Капуста.jpg`,
            },
            {
              id: 15,
              answer: "Картофель",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/3/Картофель.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/3/Картофель.jpg`,
            },
            {
              id: 16,
              answer: "Крупный",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/3/Крупный.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/3/Крупный.jpg`,
            },
            {
              id: 17,
              answer: "Кукуруза",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/3/Кукуруза.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/3/Кукуруза.jpg`,
            },
            {
              id: 18,
              answer: "Куст",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/3/Куст.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/3/Куст.jpg`,
            },
            {
              id: 19,
              answer: "Лес",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/3/Лес.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/3/Лес.jpg`,
            },
            {
              id: 20,
              answer: "Лимон",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/3/Лимон.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/3/Лимон.jpg`,
            },
            {
              id: 21,
              answer: "Листья",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/3/Листья.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/3/Листья.jpg`,
            },
            {
              id: 22,
              answer: "Мелкий",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/3/Мелкий.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/3/Мелкий.jpg`,
            },
            {
              id: 23,
              answer: "Морковь",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/3/Морковь.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/3/Морковь.jpg`,
            },
            {
              id: 24,
              answer: "Овощи",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/3/Овощи.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/3/Овощи.jpg`,
            },
            {
              id: 25,
              answer: "Огурец",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/3/Огурец.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/3/Огурец.jpg`,
            },
            {
              id: 26,
              answer: "Орехи",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/3/Орехи.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/3/Орехи.jpg`,
            },
            {
              id: 27,
              answer: "Поздний",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/3/Поздний.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/3/Поздний.jpg`,
            },
            {
              id: 28,
              answer: "Полезный",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/3/Полезный.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/3/Полезный.jpg`,
            },
            {
              id: 29,
              answer: "Помидор",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/3/Помидор.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/3/Помидор.jpg`,
            },
            {
              id: 30,
              answer: "Ранний",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/3/Ранний.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/3/Ранний.jpg`,
            },
            {
              id: 31,
              answer: "Свекла",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/3/Свекла.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/3/Свекла.jpg`,
            },
            {
              id: 32,
              answer: "Семечки",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/3/Семечки.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/3/Семечки.jpg`,
            },
            {
              id: 33,
              answer: "Сладкий",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/3/Сладкий.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/3/Сладкий.jpg`,
            },
            {
              id: 34,
              answer: "Слива",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/3/Слива.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/3/Слива.jpg`,
            },
            {
              id: 35,
              answer: "Стебель",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/3/Стебель.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/3/Стебель.jpg`,
            },
            {
              id: 36,
              answer: "Трава",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/3/Трава.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/3/Трава.jpg`,
            },
            {
              id: 37,
              answer: "Цветок",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/3/Цветок.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/3/Цветок.jpg`,
            },
            {
              id: 38,
              answer: "Чеснок",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/3/Чеснок.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/3/Чеснок.jpg`,
            },
            {
              id: 39,
              answer: "Чистый",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/3/Чистый.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/3/Чистый.jpg`,
            },
            {
              id: 40,
              answer: "Яблоко",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/3/Яблоко.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/3/Яблоко.jpg`,
            },
            {
              id: 41,
              answer: "Ягоды",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/3/Ягоды.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/3/Ягоды.jpg`,
            },
          ],
        },
        {
          id: 3,
          title: "Семья",
          description:
            "Самая важная тема для каждого человека! Благодаря этому блоку ты сможешь описать всю свою семью и связанные с каждым входящим в нее человеком характеристики.",
          words: [
            "Человек",
            "Близнецы",
            "Мужчина",
            "Брат",
            "Старый",
            "Молодой",
            "Мальчик",
            "Дядя",
            "Тётя",
            "Жить",
            "Смерть",
            "Девочка",
            "Племянник",
            "Родиться",
            "Дети",
            "Родственники",
            "Умереть",
            "Ребенок",
            "Родители",
            "Уважать",
            "Подросток",
            "Поколение",
            "Семья",
            "Взрослый",
            "Маленький",
            "Отец",
            "Мать",
            "Старший",
            "Младший",
            "Тонкий",
            "Толстый",
            "Дочь",
            "Сын",
            "Муж/жена",
            "Невеста",
            "Жених",
            "Красивый",
            "Бабушка",
            "Свадьба",
            "Некрасивый",
            "Дедушка",
            "Развод",
            "Бедный",
            "Богатый",
            "Холостяк",
            "Сестра",
            "Любовник",
          ],
          questions: [
            {
              id: 0,
              answer: "Бабушка",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Бабушка.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Бабушка.jpg`,
            },
            {
              id: 1,
              answer: "Бедный",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Бедный.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Бедный.jpg`,
            },
            {
              id: 2,
              answer: "Близнецы",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Близнецы.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Близнецы.jpg`,
            },
            {
              id: 3,
              answer: "Богатый",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Богатый.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Богатый.jpg`,
            },
            {
              id: 4,
              answer: "Брат",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Брат.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Брат.jpg`,
            },
            {
              id: 5,
              answer: "Взрослый",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Взрослый.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Взрослый.jpg`,
            },
            {
              id: 6,
              answer: "Девочка",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Девочка.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Девочка.jpg`,
            },
            {
              id: 7,
              answer: "Дедушка",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Дедушка.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Дедушка.jpg`,
            },
            {
              id: 8,
              answer: "Дети",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Дети.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Дети.jpg`,
            },
            {
              id: 9,
              answer: "Дочь",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Дочь.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Дочь.jpg`,
            },
            {
              id: 10,
              answer: "Дядя",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Дядя.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Дядя.jpg`,
            },
            {
              id: 11,
              answer: "Жених",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Жених.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Жених.jpg`,
            },
            {
              id: 12,
              answer: "Жить",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Жить.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Жить.jpg`,
            },
            {
              id: 13,
              answer: "Красивый",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Красивый.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Красивый.jpg`,
            },
            {
              id: 14,
              answer: "Любовник",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Любовник.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Любовник.jpg`,
            },
            {
              id: 15,
              answer: "Маленький",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Маленький.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Маленький.jpg`,
            },
            {
              id: 16,
              answer: "Мальчик",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Мальчик.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Мальчик.jpg`,
            },
            {
              id: 17,
              answer: "Мать",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Мать.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Мать.jpg`,
            },
            {
              id: 18,
              answer: "Младший",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Младший.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Младший.jpg`,
            },
            {
              id: 19,
              answer: "Молодой",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Молодой.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Молодой.jpg`,
            },
            {
              id: 20,
              answer: "Муж, жена",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Муж, жена.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Муж, жена.jpg`,
            },
            {
              id: 21,
              answer: "Мужчина",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Мужчина.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Мужчина.jpg`,
            },
            {
              id: 22,
              answer: "Невеста",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Невеста.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Невеста.jpg`,
            },
            {
              id: 23,
              answer: "Некрасивый",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Некрасивый.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Некрасивый.jpg`,
            },
            {
              id: 24,
              answer: "Отец",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Отец.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Отец.jpg`,
            },
            {
              id: 25,
              answer: "Племянник",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Племянник.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Племянник.jpg`,
            },
            {
              id: 26,
              answer: "Подросток",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Подросток.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Подросток.jpg`,
            },
            {
              id: 27,
              answer: "Поколение",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Поколение.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Поколение.jpg`,
            },
            {
              id: 28,
              answer: "Развод",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Развод.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Развод.jpg`,
            },
            {
              id: 29,
              answer: "Ребёнок",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Ребёнок.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Ребёнок.jpg`,
            },
            {
              id: 30,
              answer: "Родители",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Родители.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Родители.jpg`,
            },
            {
              id: 31,
              answer: "Родиться",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Родиться.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Родиться.jpg`,
            },
            {
              id: 32,
              answer: "Родственники",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Родственники.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Родственники.jpg`,
            },
            {
              id: 33,
              answer: "Свадьба",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Свадьба.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Свадьба.jpg`,
            },
            {
              id: 34,
              answer: "Семья",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Семья.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Семья.jpg`,
            },
            {
              id: 35,
              answer: "Сестра",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Сестра.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Сестра.jpg`,
            },
            {
              id: 36,
              answer: "Смерть",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Смерть.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Смерть.jpg`,
            },
            {
              id: 37,
              answer: "Старший",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Старший.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Старший.jpg`,
            },
            {
              id: 38,
              answer: "Старый",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Старый.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Старый.jpg`,
            },
            {
              id: 39,
              answer: "Сын",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Сын.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Сын.jpg`,
            },
            {
              id: 40,
              answer: "Тётя",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Тётя.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Тётя.jpg`,
            },
            {
              id: 41,
              answer: "Толстый",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Толстый.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Толстый.jpg`,
            },
            {
              id: 42,
              answer: "Тонкий",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Тонкий.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Тонкий.jpg`,
            },
            {
              id: 43,
              answer: "Уважать",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Уважать.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Уважать.jpg`,
            },
            {
              id: 44,
              answer: "Умереть",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Умереть.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Умереть.jpg`,
            },
            {
              id: 45,
              answer: "Холостяк",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Холостяк.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Холостяк.jpg`,
            },
            {
              id: 46,
              answer: "Человек",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/4/Человек.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/4/Человек.jpg`,
            },
          ],
        },
        {
          id: 4,
          title: "Глаголы",
          description:
            "В данном блоке ты узнаешь основные и чаще всего используемые глаголы жестового языка.",
          words: [
            "Бегать",
            "Гулять",
            "Думать",
            "Есть",
            "Играть",
            "Лежать",
            "Любить",
            "Обнимать",
            "Пить",
            "Работать в офисе",
            "Работать физически",
            "Решать",
            "Скучать",
            "Спать",
            "Спешить",
            "Уезжать",
          ],
          questions: [
            {
              id: 0,
              answer: "Бегать",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/5/Бегать.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/5/Бегать.jpg`,
            },
            {
              id: 1,
              answer: "Гулять",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/5/Гулять.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/5/Гулять.jpg`,
            },
            {
              id: 2,
              answer: "Думать",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/5/Думать.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/5/Думать.jpg`,
            },
            {
              id: 3,
              answer: "Есть",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/5/Есть.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/5/Есть.jpg`,
            },
            {
              id: 4,
              answer: "Играть",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/5/Играть.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/5/Играть.jpg`,
            },
            {
              id: 5,
              answer: "Лежать",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/5/Лежать.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/5/Лежать.jpg`,
            },
            {
              id: 6,
              answer: "Любить",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/5/Любить.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/5/Любить.jpg`,
            },
            {
              id: 7,
              answer: "Обнимать",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/5/Обнимать.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/5/Обнимать.jpg`,
            },
            {
              id: 8,
              answer: "Пить",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/5/Пить.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/5/Пить.jpg`,
            },
            {
              id: 9,
              answer: "Работать в офисе",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/5/Работать в офисе.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/5/Работать в офисе.jpg`,
            },
            {
              id: 10,
              answer: "Работать физически",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/5/Работать физически.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/5/Работать физически.jpg`,
            },
            {
              id: 11,
              answer: "Решать",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/5/Решать.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/5/Решать.jpg`,
            },
            {
              id: 12,
              answer: "Скучать",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/5/Скучать.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/5/Скучать.jpg`,
            },
            {
              id: 13,
              answer: "Спать",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/5/Спать.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/5/Спать.jpg`,
            },
            {
              id: 14,
              answer: "Спешить",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/5/Спешить.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/5/Спешить.jpg`,
            },
            {
              id: 15,
              answer: "Уезжать",
              videoSrc: `${process.env.BASE_URL}videos/dictionary/5/Уезжать.mp4`,
              videoPreview: `${process.env.BASE_URL}videos/dictionary/5/Уезжать.jpg`,
            },
          ],
        },
      ],
    };
  },
  methods: {
    restartGame() {
      this.isThemeChoosed = false;
      this.isEnded = false;
      this.choosedThemeId = -1;
      this.questionId = -1;
      this.correctAnswers = 0;
      this.wrongAnswers = [];
    },
    chooseTheme(themeId) {
      this.isThemeChoosed = true;
      this.choosedThemeId = themeId;
      this.questionId = 0;
      this.randomAnswers();
    },
    chooseAnswer(answerId) {
      let choosedAnswer = this.answersArray[this.questionId].questions.find(
        (answer) => answer.id === answerId
      );
      let correctAnswer = this.answersArray[this.questionId].questions.find(
        (answer) => answer.isCorrect === true
      );
      if (choosedAnswer.isCorrect) {
        choosedAnswer.isClicked = true;
        this.correctAnswers++;
      } else {
        choosedAnswer.isClicked = true;
        correctAnswer.isClicked = true;
        this.wrongAnswers.push(this.questionId + 1);
      }
      this.answersArray[this.questionId].isQuestionDone = true;
    },
    randomAnswers() {
      const allAnswers = [];
      for (
        let k = 0;
        k < this.themes[this.choosedThemeId].questions.length;
        k++
      ) {
        const result_arr = [
          {
            id: 0,
            title: this.themes[this.choosedThemeId].questions[k].answer,
            isCorrect: true,
            isClicked: false,
          },
        ];
        let i = 1;
        while (i < 4) {
          let index = Math.floor(
            Math.random() * this.themes[this.choosedThemeId].words.length
          );
          if (
            this.themes[this.choosedThemeId].words[index] &&
            !result_arr.find(
              (res) =>
                res.title == this.themes[this.choosedThemeId].words[index]
            ) &&
            this.themes[this.choosedThemeId].words[index].toLowerCase() !==
              result_arr[0].title.toLowerCase()
          ) {
            result_arr.push({
              id: i,
              title: this.themes[this.choosedThemeId].words[index],
              isCorrect: false,
              isClicked: false,
            });
            i++;
          }
        }

        const shuffledArray = result_arr
          .map((value) => ({ value, sort: Math.random() }))
          .sort((a, b) => a.sort - b.sort)
          .map(({ value }) => value);
        allAnswers.push({
          id: k,
          questions: shuffledArray,
          isQuestionDone: false,
          videoSrc: this.themes[this.choosedThemeId].questions[k].videoSrc,
        });
      }
      const shuffledAnswersArray = allAnswers
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
      this.answersArray = shuffledAnswersArray;
    },
    prevQuestion() {
      this.questionId--;
    },
    nextQuestion() {
      this.questionId++;
    },

    endGame() {
      this.isEnded = true;
    },
  },
  computed: {
    progressBar() {
      return (
        (100 / this.themes[this.choosedThemeId].questions.length) *
          (this.questionId + 1) +
        "%"
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.container--game {
  padding-top: 60px;
  padding-bottom: 64px;
}
</style>

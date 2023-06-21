<template>
  <v-container class="container--game">
    <div class="game-container">
      <div class="game-header">
        <v-row>
          <v-col>
            <h2>Игра "Название"</h2>
            <!-- <v-btn @click="restartGame">Рестарт</v-btn> -->
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
              <p>
                шаблонный текст шаблонный текст шаблонный текст шаблоннный текст
                шаблонный текст
              </p>
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
              <v-col class="d-flex flex-column align-center">
                <p>Выбери тему</p>
              </v-col>
            </v-row>
            <v-row class="justify-center">
              <v-col
                class="col-md-6 col-12 d-flex align-center justify-center"
                v-for="theme in themes"
                :key="theme.id"
                ><v-btn @click="chooseTheme(theme.id)"
                  >Тема "{{ theme.title }}"</v-btn
                ></v-col
              >
            </v-row>
          </div>
          <div class="game-questions" v-else-if="!isEnded">
            <v-row class="justify-center">
              <p>Тема "{{ themes[choosedThemeId].title }}"</p>
              <p>Вопрос {{ this.questionId + 1 }}</p>
              <p>Варианты ответа:</p>
            </v-row>
            <v-row class="justify-center">
              <v-col
                class="col-md-6 col-12 d-flex align-center justify-center"
                v-for="answer in answersArray[questionId].questions"
                :key="answer.id"
                ><v-btn
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
                  >{{ answer }}</v-btn
                ></v-col
              >
              <v-btn v-if="questionId > 0" @click="prevQuestion"
                >Предыдущий вопрос</v-btn
              >
              <v-btn
                v-if="questionId < answersArray.length - 1"
                @click="nextQuestion"
                >Следующий вопрос</v-btn
              >
              <v-btn
                v-if="questionId == answersArray.length - 1"
                @click="endGame"
                >Завершить игру по теме "{{ themes[choosedThemeId].title }}"
              </v-btn>
            </v-row>
          </div>
          <div class="game-end" v-else>
            <v-row class="justify-center">
              <v-col class="d-flex flex-column align-center">
                <p>
                  Вы закончили игру и набрали {{ correctAnswers }} правильных
                  ответов из {{ answersArray.length }}
                </p>
                <v-btn @click="restartGame">Вернуться к темам </v-btn>
              </v-col>
            </v-row>
          </div>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
import "@/scss/game.scss";
// import Video from "../components/video/Video.vue";
export default {
  // components: { Video },
  data() {
    return {
      maxQuestions: 20,
      isStarted: false,
      isThemeChoosed: false,
      isEnded: false,
      choosedThemeId: -1,
      questionId: -1,
      correctAnswers: 0,
      answersArray: [],
      themes: [
        {
          id: 0,
          title: "Знакомство",
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
            { id: 0, answer: "Я" },
            {
              id: 1,
              answer: "Ты",
            },
            {
              id: 2,
              answer: "Он",
            },
            {
              id: 3,
              answer: "Она",
            },
            {
              id: 4,
              answer: "Мы",
            },
            { id: 5, answer: "Вы" },
            {
              id: 6,
              answer: "Где",
            },
            {
              id: 7,
              answer: "До свидания",
            },
            {
              id: 8,
              answer: "Друг",
            },
            {
              id: 9,
              answer: "Его",
            },
          ],
        },
        {
          id: 1,
          title: "Дом",
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
        },
        {
          id: 2,
          title: "Природа",
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
        },
        {
          id: 3,
          title: "Семья",
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
        },
      ],
    };
  },
  methods: {
    restartGame() {
      // this.isStarted = false;
      this.isThemeChoosed = false;
      this.isEnded = false;
      this.choosedThemeId = -1;
      this.questionId = -1;
      this.correctAnswers = 0;
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
          console.log(
            this.themes[this.choosedThemeId].words[index],
            !result_arr.find(
              (res) =>
                res.title == this.themes[this.choosedThemeId].words[index]
            )
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
        });
      }
      const shuffledAnswersArray = allAnswers
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
      console.log(shuffledAnswersArray);
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
};
</script>

<style lang="scss" scoped>
.container--game {
  padding-bottom: 64px;
}
</style>

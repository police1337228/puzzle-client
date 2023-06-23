<template>
  <v-container>
    <v-row justify="center">
      <v-dialog
        v-model="formDialog"
        max-width="500px"
        class="elevation-0 dialog-modal"
        persistent
      >
        <v-card class="elevation-0 modal modal__login modal__form">
          <v-card-title class="justify-center modal__title">
            <span>СПАСИБО ЗА ВАШЕ ОБРАЩЕНИЕ!</span>
          </v-card-title>
        </v-card>
      </v-dialog>
    </v-row>
    <v-snackbar v-model="snackbar" timeout="2000" location="top">
      Для использования необходимо зарегистрироваться или войти в аккаунт!
      <template v-slot:actions>
        <v-btn color="pink" variant="text" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <div class="greet">
      <div class="img-container">
        <v-row>
          <v-col class="col-lg-6 col-12">
            <h1>ПАЗЛ - ИЗУЧЕНИЕ РУССКОГО <br />ЖЕСТОВОГО ЯЗЫКА ОНЛАЙН</h1>
            <p>
              Мы предлагаем Вам возможность учиться <br />легко, быстро и там,
              где ВЫ этого хотите
            </p>
          </v-col>
        </v-row>
      </div>
    </div>
    <div class="pluses">
      <div class="img-container">
        <v-row>
          <v-col class="col-12">
            <h2>УДОБНЫЙ, ПРОСТОЙ И ПОНЯТНЫЙ ПРОЦЕСС ОБУЧЕНИЯ</h2>
          </v-col>
        </v-row>
        <v-row class="pluses__container justify-center">
          <v-col class="col-12">
            <p class="text-center">
              Изучайте жестовый язык<br />
              с помощью этих сервисов:
            </p>
          </v-col>
          <v-col class="col-xl-4 col-md-4 col-sm-12">
            <div class="pluses__item">
              <div class="pluses__logo pluses__logo--blue">
                <img src="../assets/16.png" alt="" />
              </div>
              <div class="pluses__body">
                <div class="pluses__title"><h3>Словарь</h3></div>
                <div class="pluses__desc">
                  <p>Выбирайте и изучайте только нужные слова</p>
                </div>
                <div class="pluses__link">
                  <router-link to="/dictionary">Перейти к словарю</router-link>
                </div>
              </div>
            </div>
          </v-col>
          <v-col class="col-xl-4 col-md-4 col-sm-12">
            <div class="pluses__item">
              <div class="pluses__logo pluses__logo--green">
                <img src="../assets/15.png" alt="" />
              </div>
              <div class="pluses__body">
                <div class="pluses__title"><h3>Алфавит и цифры</h3></div>
                <div class="pluses__desc">
                  <p>В одном месте, в одно касание</p>
                </div>
                <div class="pluses__link text-center">
                  <router-link to="/alphabet">Перейти к алфавиту</router-link
                  ><br />
                  <router-link to="/numbers">Перейти к цифрам</router-link>
                </div>
              </div>
            </div>
          </v-col>
          <v-col class="col-xl-4 col-md-4 col-sm-12">
            <div class="pluses__item">
              <div class="pluses__logo pluses__logo--purple">
                <img src="../assets/12.png" alt="" />
              </div>
              <div class="pluses__body">
                <div class="pluses__title"><h3>Видео-лекции</h3></div>
                <div class="pluses__desc">
                  <p>
                    Квалифицированный сурдопедагог покажет и научит основам
                    жестового языка
                  </p>
                </div>
                <div class="pluses__link">
                  <router-link to="/lectures">Перейти к лекциям</router-link>
                </div>
              </div>
            </div>
          </v-col>
          <v-col class="col-xl-4 col-md-4 col-sm-12">
            <div class="pluses__item">
              <div class="pluses__logo pluses__logo--yellow">
                <img src="../assets/13.png" alt="" />
              </div>
              <div class="pluses__body">
                <div class="pluses__title"><h3>Игры</h3></div>
                <div class="pluses__desc">
                  <p>Закрепите материал и проверьте свои знания</p>
                </div>
                <div class="pluses__link">
                  <router-link to="/game">Перейти к игре</router-link>
                </div>
              </div>
            </div>
          </v-col>
          <v-col class="col-xl-4 col-md-4 col-sm-12">
            <div class="pluses__item">
              <div class="pluses__logo pluses__logo--violet">
                <img src="../assets/14.png" alt="" />
              </div>
              <div class="pluses__body">
                <div class="pluses__title">
                  <h3>Подборка по тематикам</h3>
                </div>
                <div class="pluses__desc">
                  <p>Можете выбрать и учить, лишь то, что нужно сейчас</p>
                </div>
                <div class="pluses__link">
                  <router-link to="/dictionary">Перейти к темам</router-link>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
    <div class="how">
      <div class="img-container">
        <v-row>
          <v-col class="col-xl-4 col-md-6 col-sm-6 col-12">
            <h2>КАК ВСЕ УСТРОЕНО?</h2>
            <p>
              В 21 веке у каждого должна быть возможность изучать то, что он
              хочет в любом удобном формате. На нашей платформе Вы сможете
              учиться в любое время и в любом месте, подбирать удобный формат и
              темп обучения.<br /><br />
              Вы сможете выбирать то, что нужно именно вам: наладить общение,
              получить образование, найти друзей, познать новое и многое другое.
              Все решаете именно Вы, ПАЗЛ станет проводником к целям.
            </p>
          </v-col>
        </v-row>
      </div>
    </div>
    <div class="abilities">
      <div class="img-container">
        <h2>ПЛАТФОРМА ПРЕДОСТАВЛЯЕТ</h2>
        <v-carousel
          class="d-block d-sm-none abilities__carousel"
          height="350"
          hide-delimiters
          progress
          progress-color="#CA88F3"
        >
          <template v-slot:prev="{ on, attrs }">
            <a v-bind="attrs" v-on="on"
              ><img
                src="../assets/arrow.svg"
                alt=""
                style="transform: rotate(-90deg)"
                width="25px"
                height="25px"
            /></a>
          </template>
          <template v-slot:next="{ on, attrs }">
            <a v-bind="attrs" v-on="on"
              ><img
                src="../assets/arrow.svg"
                alt=""
                style="transform: rotate(90deg)"
                width="25px"
                height="25px"
            /></a>
          </template>
          <v-carousel-item v-for="item in carouselItems" :key="item.id">
            <v-sheet height="100%" tile>
              <v-row class="fill-height" align="center" justify="center">
                <v-col class="col-xl-2 col-md-2 col-sm-6 col-12"
                  ><div class="abilities__item">
                    <div class="abilities__photo">
                      <img :src="item.img" alt="" />
                    </div>
                    <div class="abilities__title">
                      <p>{{ item.title }}</p>
                    </div>
                  </div></v-col
                >
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
        <v-row class="abilities__list justify-center d-none d-sm-flex">
          <v-col class="col-xl-2 col-md-2 col-sm-6 col-12"
            ><div class="abilities__item">
              <div class="abilities__photo">
                <img src="../assets/17.png" alt="" />
              </div>
              <div class="abilities__title"><p>Разнообразность</p></div>
            </div></v-col
          >
          <v-col class="col-xl-2 col-md-2 col-sm-6 col-12"
            ><div class="abilities__item">
              <div class="abilities__photo">
                <img src="../assets/21.png" alt="" />
              </div>
              <div class="abilities__title"><p>Результативность</p></div>
            </div></v-col
          >
          <v-col class="col-xl-2 col-md-2 col-sm-6 col-12"
            ><div class="abilities__item">
              <div class="abilities__photo">
                <img src="../assets/18.png" alt="" />
              </div>
              <div class="abilities__title"><p>Доступность</p></div>
            </div></v-col
          >
          <v-col class="col-xl-2 col-md-2 col-sm-6 col-12"
            ><div class="abilities__item">
              <div class="abilities__photo">
                <img src="../assets/20.png" alt="" />
              </div>
              <div class="abilities__title"><p>Мобильность</p></div>
            </div></v-col
          >
          <v-col class="col-xl-2 col-md-2 col-sm-6 col-12"
            ><div class="abilities__item">
              <div class="abilities__photo">
                <img src="../assets/19.png" alt="" />
              </div>
              <div class="abilities__title"><p>Универсальность</p></div>
            </div></v-col
          >
        </v-row>
      </div>
    </div>
    <div class="skills">
      <div class="img-container">
        <h2>ЧТО УМЕЕТ НАША ПЛАТФОРМА?</h2>
        <v-row>
          <v-col class="col-xl-6 col-md-6 col-sm-6 col-12">
            <ul>
              <li>
                <p>
                  Возможность изучать только то, что необходимо именно сейчас
                </p>
              </li>
              <li><p>Разбиение образовательного процесса на блоки</p></li>
              <li><p>Различные инструменты получения информации</p></li>
              <li><p>Тестирование приобретенных знаний</p></li>
              <li><p>Быстрый процесс обучения</p></li>
              <li>
                <p>Возможность задать вопросы и оставить предложения</p>
              </li>
              <li><p>Возможность изменения настроек видео</p></li>
            </ul>
          </v-col>
        </v-row>
      </div>
    </div>
    <div class="future">
      <div class="img-container">
        <h2>ЧТО БУДЕТ ДАЛЬШЕ?</h2>

        <div class="future__container">
          <div class="future__list jusitfy-center">
            <v-row
              ><v-col class="col-12">
                <p class="text-center">
                  Мы активно работаем над тем, чтобы<br />
                  у Вас было больше возможностей в изучении жестового языка
                </p>
              </v-col></v-row
            >
            <v-row>
              <v-col class="col-xl-4 col-md-4 col-12">
                <div class="future__item">
                  <div class="future__title">ВКЛЮЧЕНИЕ</div>
                  <div class="future__desc text-center">
                    <p>
                      Добавление новый игровых заданий, для лучшего усвоения
                      материала<br /><br />Возможность создания индивидуальных и
                      групповых видеочатов для занятий
                    </p>
                  </div>
                </div>
              </v-col>
              <v-col class="col-xl-4 col-md-4 col-12">
                <div class="future__item">
                  <div class="future__title">РАСШИРЕНИЕ</div>
                  <div class="future__desc text-center">
                    <p>
                      Подключение новых языков жестов:
                      <br /><br />
                      международный<br /><br />
                      английский
                    </p>
                  </div>
                </div>
              </v-col>
              <v-col class="col-xl-4 col-md-4 col-12">
                <div class="future__item">
                  <div class="future__title">НОВИНКИ</div>
                  <div class="future__desc text-center">
                    <p>
                      Новые тематики образовательной программы
                      <br /><br />Расширение количества видеолекций с
                      профессиональным сурдопедагогом
                    </p>
                  </div>
                </div>
              </v-col>
            </v-row>
          </div>
        </div>
      </div>
    </div>
    <div class="suggest">
      <div class="img-container">
        <v-row class="justify-space-between">
          <v-col class="col-xl-5 col-md-5 col-12 form-col">
            <div class="suggest__form">
              <v-form @submit.prevent="handleForm" ref="form">
                <v-row>
                  <div v-html="error" class="text-center red--text" />
                  <v-col cols="12">
                    <v-text-field
                      class="textfield"
                      v-model="name"
                      name="name"
                      :rules="rules.name"
                      label="ФИО"
                      outlined
                      shaped
                      color="#E0C4FA"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12">
                    <v-text-field
                      class="textfield"
                      v-model="email"
                      name="email"
                      :rules="rules.email"
                      label="Почта"
                      type="email"
                      outlined
                      color="#E0C4FA"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12">
                    <v-textarea
                      class="textfield"
                      no-resize
                      rows="5"
                      v-model="text"
                      name="text"
                      :rules="rules.text"
                      label="Вопрос/предложение"
                      outlined
                      color="#E0C4FA"
                    ></v-textarea>
                  </v-col>
                  <v-col cols="12">
                    <v-btn
                      block
                      color="#CE93D8"
                      rounded
                      depressed
                      class="header-login mr-5 white--text"
                      light
                      type="submit"
                    >
                      ОТПРАВИТЬ</v-btn
                    >
                  </v-col>
                </v-row>
              </v-form>
            </div>
          </v-col>
          <v-col class="col-xl-5 col-md-5 col-12 form-text-col">
            <h3>
              ЗДЕСТЬ МОЖНО <br />ОСТАВИТЬ <br />СВОИ ВОПРОСЫ И
              <br />ПРЕДЛОЖЕНИЯ!
            </h3>
            <p>
              Ваше мнение очень важно для нас. Мы стремимся сделать Ваше
              обучение еще удобнее и интереснее. Поэтому Ваше мнение помогает
              нам совершенствовать нашу платформу, учитывая потребности каждого
              нашего пользователя!
            </p>
          </v-col>
        </v-row>
      </div>
    </div>
  </v-container>
</template>

<script>
import MailService from "@/services/MailService";
export default {
  name: "MainPage",

  data() {
    return {
      snackbar: false,
      carouselItems: [
        {
          id: 0,
          title: "Разнообразность",
          img: require("../assets/17.png"),
        },
        { id: 1, title: "Результативность", img: require("../assets/21.png") },
        { id: 2, title: "Доступность", img: require("../assets/18.png") },
        { id: 3, title: "Мобильность", img: require("../assets/20.png") },
        { id: 4, title: "Универсальность", img: require("../assets/19.png") },
      ],
      email: "",
      name: "",
      text: "",
      error: null,
      rules: {
        name: [(v) => !!v || "Введите ФИО"],
        email: [(v) => !!v || "Введите Email"],
        text: [(v) => !!v || "Введите вопрос/предложение"],
      },
    };
  },
  mounted() {
    if (this.$route.query.message) this.snackbar = true;
  },
  computed: {
    formDialog: {
      get() {
        return this.$store.state.formDialog;
      },
      set(val) {
        this.$store.commit("toggleFormDialog", val);
      },
    },
  },
  methods: {
    async handleForm() {
      if (!this.$refs.form.validate()) return;

      try {
        await MailService.mail({
          email: this.email,
          name: this.name,
          text: this.text,
        });
        this.$store.commit("toggleFormDialog", true);
        setTimeout(() => {
          this.$store.commit("toggleFormDialog", false);
        }, 1500);
      } catch (error) {
        this.error = error.response.data.error;
        this.$store.commit("toggleFormDialog", false);
      }
    },
  },
  watch: {
    $route() {
      if (this.$route.query.message) this.snackbar = true;
    },
  },
};
</script>

<style></style>

<template>
  <v-footer class="footer" :class="footerImage">
    <v-card
      class="d-flex container elevation-0 img-container"
      color="transparent"
    >
      <v-row class="justify-space-between align-center">
        <v-col class="col-12 col-md-8 col-xl-8">
          <div class="footer__contacts d-flex">
            <p>КОНТАКТЫ</p>
            <ul class="footer__links">
              <li>
                <a href="mailto:socialproject2022@mail.ru" target="_blank"
                  ><img src="../../assets/35.svg"
                /></a>
              </li>
              <li>
                <a href="https://t.me/+qtJ6uVyUlqAxNzky" target="_blank"
                  ><img src="../../assets/37.svg"
                /></a>
              </li>
              <li>
                <a href="https://vk.com/public220092563" target="_blank"
                  ><img src="../../assets/36.svg"
                /></a>
              </li>
            </ul>
          </div>
          <div class="footer__developers">
            <p>
              Разработчики: Петренко В. В., Погорелова Е. Ю., Рассказова Т. А.,
              Митяев И. А. 2023, Краснодар
            </p>
          </div>
        </v-col>
        <v-col class="col-12 col-md-4 col-xl-4 d-flex footer__logo">
          <img
            src="@/assets/logo/ЛОГО_КОНТУР.svg"
            alt=""
            width="120px"
            height="100px"
          />
        </v-col>
      </v-row>
    </v-card>
  </v-footer>
</template>

<script>
import "@/scss/footer.scss";
export default {
  computed: {
    footerImage() {
      const paths = ["/", "/dictionary", "/lectures", "/profile"];
      if (this.$route.path.includes("/lectures/")) return "footer--lecture";
      if (paths.includes(this.$route.path)) {
        return "footer--" + this.$route.path.substr(1, this.$route.path.length);
      }
      return "footer--noimg";
    },
  },
};
</script>

<style></style>

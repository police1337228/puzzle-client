<template>
  <v-app class="app-wrapper">
    <app-bar></app-bar>

    <app-drawer></app-drawer>

    <v-main class="main">
      <login-modal></login-modal>
      <register-modal></register-modal>
      <router-view></router-view>
    </v-main>

    <app-footer></app-footer>
  </v-app>
</template>
<script>
import "./scss/main.scss";
import AppBar from "@/components/base/AppBar";
import AppDrawer from "@/components/base/AppDrawer";
import AppFooter from "@/components/base/AppFooter";
import LoginModal from "@/components/modals/LoginModal";
import RegisterModal from "@/components/modals/RegisterModal";

export default {
  components: {
    AppBar,
    AppDrawer,
    AppFooter,
    LoginModal,
    RegisterModal,
  },
  data() {
    return {
      model: 0,
    };
  },
};
</script>

<style lang="scss">
.v-btn.v-size--default {
  font-size: 14px !important;
}
.v-dialog {
  box-shadow: none !important;
  overflow: visible !important;
  // overflow-y: scroll;
  @media screen and (max-width: 600px) {
    margin: 40px !important;
  }
}

.modal {
  background: #c4c1ff; /* Old browsers */
  background: -moz-linear-gradient(
    top,
    #c4c1ff 0%,
    #f1cfff 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    top,
    #c4c1ff 0%,
    #f1cfff 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to bottom,
    #c4c1ff 0%,
    #f1cfff 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  border-radius: 54px !important;
  padding-bottom: 20px !important;
  &__text {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }

  &__title {
    span {
      font-size: 24px;
      font-family: "FuturaLightC", sans-serif;
      font-weight: bold;
      color: white;
      margin-top: 37px;
      margin-bottom: 35px;
    }
  }

  &__actions {
    p {
      font-family: "FuturaMediumC";
      color: #fff;
      margin-bottom: 0 !important;
    }
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
  &__login {
    font-family: "FuturaMediumC";
    font-size: 18px;
    padding: 13px 37px !important;
    @media screen and (max-width: 400px) {
      padding-left: 10px !important;
      padding-right: 10px !important;
    }
  }
  &__new {
    font-size: 18px !important;
    font-family: "FuturaMediumC" !important;
    text-decoration: underline !important;
    text-transform: initial !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
  }

  &__check {
    margin-top: 0 !important;
    padding-bottom: 0 !important;
    border-radius: 100% !important;
  }

  &__check-label {
    font-family: "FuturaMediumC", sans-serif;
    font-size: 13px;
    color: #ca88f3;
    a {
      color: #ca88f3 !important;
      text-decoration: underline;
    }
  }

  .textfield {
    border-width: 4px !important;
  }
  fieldset {
    border: 4.5px solid !important;
    border-radius: 26.25px !important;
    color: white !important;
  }
  label {
    font-family: "FuturaMediumC";
    font-size: 16px;
    padding-left: 15px;
    color: white !important;
  }
  input {
    padding-left: 15px !important;
    color: white !important;
  }

  &__video {
    height: 400px;
    border-radius: 28px !important;
    background: white !important;

    .modal__container {
      height: 300px;
    }
    &--photo {
      height: auto;
      .modal__container {
        height: 100% !important;
      }
    }
    .mdi-chevron-left {
      position: absolute !important;
      top: 40%;
      left: -60px;
      font-size: 65px !important;
      &:focus:after {
        opacity: 0 !important;
      }
    }
    .mdi-chevron-right {
      position: absolute !important;
      top: 40%;
      right: -60px;
      font-size: 65px !important;
      &:focus:after {
        opacity: 0 !important;
      }
    }
    .v-card__text {
      padding-bottom: 0 !important;
    }
    @media screen and (max-width: 430px) {
      .v-card__text {
        padding-left: 0 !important;
        padding-right: 0 !important;
      }
      .vjs-control {
        width: 2em !important;
      }
      .vjs-remaining-time {
        display: none;
      }
    }
  }

  &__reg {
    .modal__title {
      padding-top: 5px !important;
      padding-bottom: 0 !important;
      span {
        font-size: 24px;
        font-family: "FuturaLightC", sans-serif;
        font-weight: bold;
        color: white;
        margin-top: 0px;
        margin-bottom: 0px;
      }
    }
    .mdi-checkbox-blank-circle-outline {
      color: #ca88f3 !important;
    }
    .v-input--selection-controls__input {
      margin-right: 0 !important;
    }
    .v-label {
      line-height: auto !important;
    }

    @media screen and (max-width: 400px) {
      .modal__login {
        font-size: 12px !important;
        padding-left: 10px !important;
        padding-right: 10px !important;
      }

      padding-left: 10px !important;
      padding-right: 10px !important;
    }
  }

  &__form {
    overflow: hidden;
    @media screen and (max-width: 500px) {
      border-radius: 30px !important;
    }
    .modal__title {
      span {
        font-family: "Poiret One" !important;
        font-size: 22px !important;
        margin-top: 10px;
        margin-bottom: 109px;

        @media screen and (max-width: 500px) {
          font-size: 18px !important;
          margin-bottom: 50px;
        }
        @media screen and (max-width: 445px) {
          font-size: 16px !important;
          margin-bottom: 50px;
        }
        @media screen and (max-width: 415px) {
          font-size: 14px !important;
          margin-bottom: 50px;
        }
        @media screen and (max-width: 390px) {
          font-size: 12px !important;
          margin-bottom: 50px;
        }
      }
      @media screen and (max-width: 357px) {
        padding-left: 0 !important;
        padding-right: 0 !important;
      }
      @media screen and (max-width: 310px) {
        word-break: break-word;
        text-align: center;
      }
    }

    &::after {
      content: "";
      top: 0px;
      left: 0;
      bottom: -2px;
      right: 0;
      position: absolute;
      background: url("./assets/Clip.png") no-repeat;
      z-index: 5;
      background-size: 100%;
      background-position: bottom;
    }
  }

  &__game {
    .modal__title {
      position: relative;
      z-index: 7;
      span {
        color: black;
        margin-bottom: 20px;
      }
    }
    .modal__text {
      position: relative;
      z-index: 7;
      p {
        font-family: "FuturaMediumC", sans-serif;
        font-size: 24px;
        text-align: center;
      }
      span {
        display: block;
      }
      margin-bottom: 90px;

      button {
        span {
          text-decoration: underline;
        }
      }
    }
  }
}

header {
  background-color: #faf4d5 !important;
  z-index: 6 !important;

  .header-login {
    width: 129px;
    font-size: 13.5px;
    color: white;

    @media screen and (max-width: 376px) {
      width: 110px;
    }
    @media screen and (max-width: 300px) {
      width: 90px;
      font-size: 11px !important;
    }
  }

  .logo {
    font-family: "Vetrino", sans-serif;
    text-transform: uppercase;
    color: black;
    font-size: 32px !important;

    @media screen and (max-width: 360px) {
      font-size: 30px !important;
    }
    @media screen and (max-width: 300px) {
      font-size: 26px !important;
    }
  }
}

.nav {
  overflow-y: auto !important;
  background: #d3c5ff; /* Old browsers */
  background: -moz-linear-gradient(
    top,
    #d3c5ff 0%,
    #e3e1ff 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    top,
    #d3c5ff 0%,
    #e3e1ff 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to bottom,
    #d3c5ff 0%,
    #e3e1ff 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */

  // font-family: "FuturaLightC", sans-serif;
  width: 500px !important;
  padding-top: 40px;
  padding-left: 50px;
  padding-right: 50px;
  &__item {
    font-size: 25px !important;

    &--active {
      color: white !important;
    }
  }

  &__list {
    margin-top: 100px;
    margin-left: 100px;

    @media screen and (max-width: 500px) {
      margin-left: 0;
    }
    @media screen and (max-height: 730px) {
      margin-top: 50px;
    }
    @media screen and (max-height: 670px) {
      margin-top: 30px;
    }
    @media screen and (max-height: 620px) {
      margin-top: 10px;
    }
  }

  .logo {
    font-family: "Vetrino", sans-serif;
    text-transform: uppercase;
    font-size: 35px !important;
  }
  &__title {
    font-family: "FuturaLightC", sans-serif;
    font-size: 22.5px !important;
    line-height: initial !important;
    padding-bottom: 2px;
    text-decoration: underline;
  }

  &__contacts {
    margin-top: 90px;
    p {
      font-family: "FuturaMediumC", sans-serif;
      font-size: 22.5px !important;
    }
    @media screen and (max-height: 670px) {
      margin-top: 60px;
    }
    @media screen and (max-height: 620px) {
      margin-top: 20px;
    }
  }

  &__links {
    display: flex;
    gap: 23px;
    padding-left: 0 !important;

    a img {
      width: 34px;
      height: 34px;
      filter: invert(65%) sepia(73%) saturate(365%) hue-rotate(205deg)
        brightness(99%) contrast(105%);
    }
  }

  @media screen and (max-width: 500px) {
    padding-left: 25px;
  }
}

.app-wrapper {
  position: relative;
  background: #fff9d9 no-repeat !important; /* Old browsers */
  background: -moz-linear-gradient(top, #fff9d9 0%, #f4ddff 52%, #ddbfff 100%)
    no-repeat !important; /* FF3.6-15 */
  background: -webkit-linear-gradient(
      top,
      #fff9d9 0%,
      #f4ddff 52%,
      #ddbfff 100%
    )
    no-repeat !important; /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom, #fff9d9 0%, #f4ddff 52%, #ddbfff 100%)
    no-repeat !important; /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
}

.img-container {
  position: relative;
  z-index: 6;
}

.main {
  margin-top: 67px;
  .container {
    background: #fff !important;
    border-radius: 36px;
    padding-top: 70px;
    padding-left: 48px;
    padding-right: 48px;
    padding-bottom: 500px;

    @media screen and (max-width: 1120px) {
      padding-bottom: 370px;
    }
    @media screen and (max-width: 415px) {
      padding-top: 40px;
      padding-left: 15px;
      padding-right: 15px;
    }
  }
  @media screen and (max-width: 1280px) {
    margin-left: 15px !important;
    margin-right: 15px !important;
    margin-top: 40px;
  }
}

.greet {
  z-index: 15;
  &::before {
    content: "";
    top: -70px;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    background: url("./assets/главная1.png") no-repeat;
    z-index: 5;
    left: -15px;
    right: -15px;
    background-size: 100%;

    @media screen and (max-width: 1275px) {
      top: -50px;
      left: -15px;
      right: -15px;
    }
    @media screen and (max-width: 1080px) {
      top: 60px;
    }
    @media screen and (max-width: 910px) {
      top: 150px;
    }
    @media screen and (max-width: 746px) {
      top: 120px;
    }
    @media screen and (max-width: 672px) {
      background: url("./assets/главнаям1.png") no-repeat;
      top: -110px;
      right: -101px;
      background-size: contain;
    }
    @media screen and (max-width: 527px) {
      top: -40px;
      right: -70px;
    }
    @media screen and (max-width: 494px) {
      top: 0;
      right: -70px;
    }
    @media screen and (max-width: 442px) {
      top: 85px;
      right: -60px;
    }
    @media screen and (max-width: 375px) {
      top: 65px;
      right: -46px;
    }
    @media screen and (max-width: 333px) {
      top: 100px;
      right: -39px;
      left: -73px;
    }
    @media screen and (max-width: 305px) {
      top: 160px;
      right: -70px;
    }
    @media screen and (max-width: 290px) {
      top: 200px;
      right: -80px;
    }
  }
  p {
    margin-top: 45px;
  }

  @media screen and (max-width: 527px) {
    p {
      padding-right: 45%;
    }
  }

  @media screen and (max-width: 375px) {
    h1 {
      font-size: 30px;
      letter-spacing: 0;
    }
    p {
      margin-top: 20px;
    }
  }
}

.pluses {
  margin-top: 700px;
  h2 {
    text-align: center;
  }
  @media screen and (max-width: 1800px) {
    margin-top: 600px;
  }
  @media screen and (max-width: 1550px) {
    margin-top: 500px;
  }
  @media screen and (max-width: 1280px) {
    margin-top: 375px;
  }
  @media screen and (max-width: 750px) {
    margin-top: 250px;
  }
  @media screen and (max-width: 672px) {
    margin-top: 650px;
  }
  @media screen and (max-width: 630px) {
    margin-top: 500px;
  }
  @media screen and (max-width: 550px) {
    margin-top: 320px;
    h2 {
      text-align: left !important;
    }
  }
  &__container {
    border-radius: 75px;
    background: #bbb8ff; /* Old browsers */
    background: -moz-linear-gradient(
      top,
      #bbb8ff 0%,
      #fdaaff 100%
    ); /* FF3.6-15 */
    background: -webkit-linear-gradient(
      top,
      #bbb8ff 0%,
      #fdaaff 100%
    ); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(
      to bottom,
      #bbb8ff 0%,
      #fdaaff 100%
    ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    padding-left: 57px;
    padding-right: 57px;
    padding-top: 47px;
    padding-bottom: 75px;

    p {
      font-size: 20px;
    }

    @media screen and (max-width: 450px) {
      padding-left: inherit;
      padding-right: inherit;
      border-radius: 15px;
      padding-bottom: 20px;
    }
  }

  &__item {
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    background: #fff;
    border-radius: 30px;
    padding: 30px 52px;
    transition: all 0.2s ease;
    backface-visibility: hidden;
    transform: translateZ(0);
    -webkit-font-smoothing: subpixel-antialiased;
    &:hover {
      transform: scale(1.05);
    }

    @media screen and (max-width: 450px) {
      flex-direction: row;
      gap: 15px;
      background: #fff0fb;
      padding-top: 13px;
      padding-bottom: 13px;
      align-items: flex-start;
    }
  }

  &__body {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  &__logo {
    width: 72px;
    height: 72px;
    padding: 20px 13px;
    border-radius: 100%;
    margin-top: 0;
    img {
      width: 45px;
      height: 30px;
      object-fit: contain;
    }

    &--blue {
      background: #d9efff;
    }
    &--green {
      background: #ddecc6;
    }
    &--purple {
      background: #ffc0fe;
    }
    &--yellow {
      background: #ffffe1;
    }
    &--violet {
      background: #d6d4f7;
    }

    @media screen and (max-width: 450px) {
      margin-top: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px 10px;
      width: 56px;
      height: 56px;
      img {
        max-width: unset !important;
        width: 45px;
        height: 25px;
      }
    }
  }

  &__title {
    margin-top: 17px;
    @media screen and (max-width: 450px) {
      margin-top: 0;
    }
  }

  &__desc {
    text-align: center;
    margin-top: 12px;
    p {
      font-size: 15px;
    }
    @media screen and (max-width: 450px) {
      margin-top: 7px;
    }
  }

  &__link {
    a {
      font-size: 13px;
      color: #c4c4c4 !important;
      border-bottom: 1px solid #c4c4c4;
    }
  }
}

.how {
  margin-top: 170px;

  p {
    margin-top: 60px;
  }
  @media screen and (max-width: 768px) {
    margin-top: 130px;
    h2 {
      text-align: left;
    }
  }
  @media screen and (max-width: 494px) {
    margin-top: 85px;
  }
  &::before {
    content: "";
    top: -1000px;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    background: url("./assets/главная3.png") no-repeat;
    z-index: 5;
    background-size: auto;
    background-position: right;

    @media screen and (max-width: 1750px) {
      right: -10%;
    }
    @media screen and (max-width: 1550px) {
      right: -15%;
      top: -1250px;
    }
    @media screen and (max-width: 1377px) {
      right: -25%;
    }
    @media screen and (max-width: 1300px) {
      right: -35%;
      top: -1450px;
    }
    @media screen and (max-width: 1100px) {
      right: -55%;
      top: -1600px;
    }
    @media screen and (max-width: 959px) {
      right: -67%;
      top: -2000px;
    }
    @media screen and (max-width: 851px) {
      right: -77%;
      top: -2100px;
    }
    @media screen and (max-width: 821px) {
      right: -84%;
      top: -2100px;
    }
    @media screen and (max-width: 771px) {
      right: -89%;
      top: -2100px;
    }
    @media screen and (max-width: 733px) {
      right: -60%;
      top: -2200px;
      background-size: 80%;
    }
    @media screen and (max-width: 672px) {
      right: -15px;
      top: -2300px;
      background-image: url("./assets/главнаям2.png");
      background-size: 100%;
    }
    @media screen and (max-width: 600px) {
      right: -50px;
      top: -2000px;
    }
    @media screen and (max-width: 599px) {
      top: -1000px;
    }
    @media screen and (max-width: 550px) {
      top: -1400px;
      right: -35px;
    }
    @media screen and (max-width: 501px) {
      top: -1100px;
    }
    @media screen and (max-width: 450px) {
      top: -1900px;
      right: -15px;
    }
    @media screen and (max-width: 450px) {
      top: -2000px;
      right: -20px;
    }
    @media screen and (max-width: 340px) {
      top: -1800px;
      right: -15px;
    }
    @media screen and (max-width: 325px) {
      top: -1950px;
      right: -15px;
    }
    @media screen and (max-width: 300px) {
      top: -2000px;
      right: -20px;
    }
  }
  &::after {
    content: "";
    top: -150px;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    background: url("./assets/главная2.png") no-repeat;
    z-index: 5;
    background-size: auto;
    background-position: left;

    @media screen and (max-width: 1800px) {
      top: -550px;
    }
    @media screen and (max-width: 1552px) {
      top: -650px;
    }
    @media screen and (max-width: 1377px) {
      left: -10%;
    }
    @media screen and (max-width: 1256px) {
      left: -15%;
      top: -750px;
    }
    @media screen and (max-width: 1100px) {
      left: -20%;
      top: -850px;
    }
    @media screen and (max-width: 960px) {
      left: -25%;
      top: -800px;
    }
    @media screen and (max-width: 959px) {
      left: -25%;
      top: -1300px;
    }
    @media screen and (max-width: 851px) {
      left: -35%;
    }
    @media screen and (max-width: 753px) {
      left: -45%;
    }
    @media screen and (max-width: 733px) {
      top: -1400px;
    }
    @media screen and (max-width: 700px) {
      top: -1300px;
      left: -50%;
    }
    @media screen and (max-width: 673px) {
      background: none;
    }
  }
}

.abilities {
  margin-top: 500px;
  h2 {
    text-align: center;
  }
  @media screen and (max-width: 550px) {
    h2 {
      text-align: left !important;
    }
  }
  @media screen and (max-width: 960px) {
    margin-top: 400px;
  }
  @media screen and (max-width: 725px) {
    margin-top: 300px;
  }
  @media screen and (max-width: 673px) {
    margin-top: 50px;
  }
  .abilities__list {
    margin-top: 58px;
  }

  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img {
      height: 250px;
      width: 192px;
      border-radius: 30px;
      object-fit: cover;
      transition: all 0.2s ease;
      cursor: pointer;
    }

    :hover {
      img {
        transform: perspective(300px) rotateY(25deg);
      }
    }
  }
  &__title {
    margin-top: 10px;
  }

  &__carousel {
    .v-window__prev {
      background: none;
      img {
        filter: invert(77%) sepia(68%) saturate(4575%) hue-rotate(222deg)
          brightness(104%) contrast(91%);
      }
      top: 35%;
      @media screen and (max-width: 350px) {
        left: -15px !important;
      }
      @media screen and (max-width: 300px) {
        left: -20px !important;
      }
    }
    .v-window__next {
      background: none;
      img {
        filter: invert(77%) sepia(68%) saturate(4575%) hue-rotate(222deg)
          brightness(104%) contrast(91%);
      }
      top: 35%;
      @media screen and (max-width: 350px) {
        right: -15px !important;
      }
      @media screen and (max-width: 300px) {
        right: -20px !important;
      }
    }
    @media screen and (max-width: 550px) {
      margin-top: 40px;
    }
  }
}

.skills {
  margin-top: 130px;
  @media screen and (max-width: 600px) {
    margin-top: 80px;
    li {
      margin-bottom: 30px;
      padding-right: 40px;
    }
  }
  p {
    font-size: 22.5px;
  }
  @media screen and (max-width: 500px) {
    p {
      font-size: 18px;
    }
  }
  ul {
    margin-top: 30px;
  }
  li {
    position: relative;
    padding-left: 10px;
    &:before {
      content: "";
      position: absolute;
      top: 3px;
      left: -20px;
      background: #bbb8ff; /* Old browsers */
      background: -moz-linear-gradient(
        top,
        #bbb8ff 0%,
        #fdaaff 100%
      ); /* FF3.6-15 */
      background: -webkit-linear-gradient(
        top,
        #bbb8ff 0%,
        #fdaaff 100%
      ); /* Chrome10-25,Safari5.1-6 */
      background: linear-gradient(
        to bottom,
        #bbb8ff 0%,
        #fdaaff 100%
      ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
      z-index: 1;
      display: inline-block;
      width: 16px;
      height: 16px;
      border-radius: 100%;

      @media screen and (max-width: 500px) {
        top: 4px;
      }
    }
  }

  &::after {
    content: "";
    top: 1740px;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    background: url("./assets/главная4.png") no-repeat;
    z-index: 5;
    background-size: auto;
    background-position: right center;
    @media screen and (max-width: 1875px) {
      top: 1670px;
    }
    @media screen and (max-width: 1800px) {
      top: 1570px;
      right: -5%;
    }
    @media screen and (max-width: 1621px) {
      right: -10%;
    }
    @media screen and (max-width: 1550px) {
      right: -10%;
      top: 1470px;
    }
    @media screen and (max-width: 1460px) {
      right: -20%;
    }
    @media screen and (max-width: 1280px) {
      right: -30%;
      top: 1370px;
    }
    @media screen and (max-width: 1200px) {
      right: -35%;
      top: 1370px;
      background-size: 85%;
    }
    @media screen and (max-width: 959px) {
      right: -70%;
      top: 2000px;
      background-size: 85%;
    }
    @media screen and (max-width: 912px) {
      right: -75%;
      top: 2000px;
      background-size: 85%;
    }
    @media screen and (max-width: 880px) {
      right: -75%;
      top: 2000px;
    }
    @media screen and (max-width: 815px) {
      right: -90%;
      top: 2000px;
      background-size: 100%;
    }
    @media screen and (max-width: 780px) {
      right: -90%;
      top: 2000px;
      background-size: 90%;
    }
    @media screen and (max-width: 750px) {
      top: 1700px;
    }
    @media screen and (max-width: 672px) {
      background-image: url("./assets/главнаям3.png");
      background-size: 50%;
      top: 2000px;
      right: -5%;
    }
    @media screen and (max-width: 600px) {
      top: 2000px;
      right: -10%;
    }
    @media screen and (max-width: 599px) {
      top: 1250px;
      right: -7%;
      background-size: 40%;
    }
    @media screen and (max-width: 549px) {
      top: 1000px;
      right: -7%;
      background-size: 40%;
    }
    @media screen and (max-width: 500px) {
      top: 1450px;
      right: -7%;
      background-size: 40%;
    }
    @media screen and (max-width: 450px) {
      top: 600px;
      right: -7%;
      background-size: 40%;
    }
    @media screen and (max-width: 320px) {
      top: 700px;
      right: -7%;
    }
  }
}

.future {
  margin-top: 210px;
  @media screen and (max-width: 600px) {
    margin-top: 50px;
  }
  h2 {
    text-align: center;
  }
  @media screen and (max-width: 960px) {
    h2 {
      text-align: left !important;
    }
  }
  &__container {
    margin-top: 50px;
    border-radius: 75px;
    background: #bbb8ff; /* Old browsers */
    background: -moz-linear-gradient(
      top,
      #bbb8ff 0%,
      #fdaaff 100%
    ); /* FF3.6-15 */
    background: -webkit-linear-gradient(
      top,
      #bbb8ff 0%,
      #fdaaff 100%
    ); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(
      to bottom,
      #bbb8ff 0%,
      #fdaaff 100%
    ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    padding-left: 18px;
    padding-right: 18px;
    padding-top: 47px;
    padding-bottom: 75px;

    p {
      font-size: 20px;
    }
    @media screen and (max-width: 600px) {
      margin-top: 20px;
    }
    @media screen and (max-width: 500px) {
      border-radius: 15px;
      padding-bottom: 30px;
    }
  }

  &__item {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 35px;
    padding-right: 35px;
    padding-left: 35px;
    background: transparent;
    border-radius: 30px;
    border: 6px solid #fff;
    transition: background-color, transform 0.2s ease;
    cursor: pointer;
    &:hover {
      background-color: #fff;
      transform: scale(1.05);
    }

    @media screen and (max-width: 500px) {
      background: #fff;

      padding-top: 12px;
      padding-right: 20px;
      padding-left: 20px;
    }
  }

  &__title {
    font-family: "FuturaMediumC", sans-serif;
    color: #3c008c;
    font-size: 22.5px;
    text-transform: uppercase;
    padding: 22px 52px;
    background-color: #fff6ba;
    border-radius: 26.25px;

    @media screen and (max-width: 500px) {
      font-size: 16px;
      padding: 18px 42px;
    }
  }

  &__desc {
    margin-top: 25px;
    font-size: 22.5px;
    padding: 0 20px;

    @media screen and (max-width: 500px) {
      font-size: 16px;
      padding: 0;
    }
  }
}

.suggest {
  margin-top: 135px;
  h3 {
    font-size: 36px;
    & + p {
      margin-top: 20px;
      padding-right: 20px;
      @media screen and (max-width: 600px) {
        display: none;
      }
    }
  }
  @media screen and (max-width: 600px) {
    h3 {
      font-size: 28px;
      text-align: right;
    }
    margin-top: 35px;
  }
  @media screen and (max-width: 960px) {
    .form-col {
      order: 2;
    }
    .form-text-col {
      order: 1;
    }
  }
  &__form {
    .textfield {
      border-width: 4px !important;
      border-radius: 26.25px;
    }
    fieldset {
      border: 4.5px solid !important;
      color: #e0c4fa !important;
    }
    label {
      font-family: "FuturaMediumC";
      font-size: 15px;
      padding-left: 15px;
      color: #91008d !important;
    }
    .header-login {
      height: auto !important;
      padding: 12px 34px !important;
      font-size: 16.5;
    }
  }
}

h1 {
  font-family: "Poiret One", sans-serif;
  font-size: 33px;
  letter-spacing: 2px;
  line-height: 45px;

  @media screen and (max-width: 425px) {
    font-size: 30px;
    letter-spacing: 0;
  }
}

h2 {
  font-family: "Poiret One", sans-serif;
  font-size: 27px;
  line-height: 45px;

  @media screen and (max-width: 425px) {
    font-size: 24px;
    letter-spacing: 0;
  }
}

h3 {
  font-family: "Poiret One", sans-serif;
  font-size: 18px;
}

p {
  font-family: "FuturaLightC", sans-serif;
  font-size: 18px;
  line-height: 27px;
}
</style>

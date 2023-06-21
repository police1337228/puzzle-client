<template>
  <v-container class="container--dictionary">
    <div class="dictionary-header">
      <v-row>
        <v-col>
          <h2>Словарь</h2>
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
                  :to="'dictionary/' + item.id"
                  class="dictionary__button"
                  >Словарь {{ item.id + 1 }} «{{ item.title }}»</v-btn
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
  name: "Dictionary",

  data() {
    return {
      dictionaryItems: [
        {
          id: 0,
          title: "Знакомство",
        },
        {
          id: 1,
          title: "Дом",
        },
        {
          id: 2,
          title: "Природа, растения",
        },
        {
          id: 3,
          title: "Семья",
        },
        {
          id: 4,
          title: "Глаголы",
        },
      ],
    };
  },
};
</script>

<style lang="scss"></style>

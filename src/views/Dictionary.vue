<template>
  <v-container class="container--dictionary">
    <div class="dictionary-header">
      <v-row>
        <v-col>
          <h2>Словарь</h2>
          <p>
            В данном разделе ты найдешь тематические подборки слов, оформленные
            в словари
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
                  :to="'dictionary/' + item.id"
                  class="dictionary__button"
                  >Словарь {{ item.id + 1 }} «{{ item.title }}»</v-btn
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
  name: "Dictionary",
  metaInfo: {
    title: "Словари",
  },
  data() {
    return {
      dictionaryItems: [
        {
          id: 0,
          title: "Знакомство",
          description:
            "Познакомься с основной лексикой раздела «Знакомства», слова представлены в отдельных видеороликах.",
        },
        {
          id: 1,
          title: "Дом",
          description:
            "Познакомься с основной лексикой раздела «Дом», слова представлены в отдельных видеороликах.",
        },
        {
          id: 2,
          title: "Природа, растения",
          description:
            "Познакомься с основной лексикой раздела «Природа, растения», слова представлены в отдельных видеороликах.",
        },
        {
          id: 3,
          title: "Семья",
          description:
            "Познакомься с основной лексикой раздела «Семья», слова представлены в отдельных видеороликах.",
        },
        {
          id: 4,
          title: "Глаголы",
          description:
            "Познакомься с наиболее часто используемыми глаголами, слова представлены в отдельных видеороликах. ",
        },
      ],
    };
  },
};
</script>

<style lang="scss"></style>

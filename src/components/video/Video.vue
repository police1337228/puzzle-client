<template>
  <div>
    <video
      ref="videoJsPlayer"
      class="video-js vjs-defaultskin"
      controls
      data-setup='{ "playbackRates": [0.5, 1, 1.5, 2] }'
    >
      >
      <!-- <track label="Русский" kind="subtitles" srclang="en" src="video.vtt" /> -->
    </video>
  </div>
</template>
<script>
import videojs from "video.js";
import "video.js/dist/video-js.min.css";
export default {
  name: "VideoJsPlayer",
  props: {
    videoSrc: {
      type: String,
    },
    modal: {
      type: Boolean,
    },
    options: {
      type: Object,
      default() {
        return {
          autoplay: false,
          sources: [
            {
              src: this.videoSrc,
              type: "video/mp4",
            },
          ],
        };
      },
    },
  },
  data() {
    return {
      player: null,
    };
  },

  mounted() {
    this.player = videojs(this.$refs.videoJsPlayer, this.options, () => {});
    videojs.addLanguage("ru", {
      Play: "Смотреть",
      "Play Video": "Смотреть видео",
      Pause: "Пауза",
      "Current Time": "Текущее время",
      Duration: "Длительность",
      "Remaining Time": "Времени осталось",
      "Stream Type": "Тип потока",
      LIVE: "ЛАЙВ",
      Loaded: "Загружено",
      Progress: "Прогресс",
      Fullscreen: "Полноэкранный режим",
      "Non-Fullscreen": "Обычный режим",
      "Exit Fullscreen": "Выйти из полноэкранного режима",
      Mute: "Выключить звук",
      Unmute: "Включить звук",
      "Playback Rate": "Скорость воспроизведения",
      Subtitles: "Субтитры",
      "subtitles off": "Субтитры выключены",
      Captions: "Субтитры",
      "captions off": "Субтитры выключены",
      "captions settings": "Настройки субтитров",
      Chapters: "Блоки",
    });
    this.player.language("ru");
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  },
  watch: {
    videoSrc() {
      this.player.src(this.videoSrc);
      this.player.load();
      console.log("changed");
    },
    modal(newState) {
      console.log(newState);
      if (newState === false) {
        if (this.player) this.player.pause();
      }
    },
  },
};
</script>

<style scoped>
div {
  width: 100%;
  height: 100%;
}
</style>

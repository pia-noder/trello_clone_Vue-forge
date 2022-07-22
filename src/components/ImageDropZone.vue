<template>
  <div :class="$style.root">
    <h1>Image Drop Zone</h1>

    <div
      ref="dropzoneEl"
      :class="[$style.inputZone, isOverDropZone && $style.overZone]"
    >
      <div :class="$style.cta">Drag an image or select a file</div>
      <div :class="$style.imageWrapper">
        <img :class="$style.imageFile" :src="url" />
      </div>

      <input
        @input="onFileChange"
        type="file"
        accept="image/*"
        :class="$style.inputHide"
      />
    </div>
    <button @click.stop="clear">Remove image</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useDropZone, useBase64 } from "@vueuse/core";

const dropzoneEl = ref<HTMLElement | null>(null);
const file = ref();
const { base64: url } = useBase64(file); //Incode the file into a string. So it can be used as dataUrl, allowing to embed image into Url so the browser can display it

const { isOverDropZone } = useDropZone(dropzoneEl, (files) => {
  //This is working well! Just, really need to drop a file above the zone, not just the mouse.
  if (!files) return;

  file.value = files[0];
});

const onFileChange = (e: any) => {
  //To grab the file (this file's format isn't ready to be display inside html )
  file.value = e.target.files[0];
};

const clear = () => (file.value = null);
</script>

<style module>
.root {
  padding: 24px;
}

/* Is use to create the new shape of the input */
.inputZone {
  display: flex;
  position: relative;
  width: 300px;
  height: 200px;
  background: #3332;
}
.inputHide {
  position: absolute;
  z-index: 1; /*To put the input on top of the text*/
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  opacity: 0; /*Hide the UI created by the browser*/
}
.imageWrapper {
  position: absolute;
  z-index: 1; /*To put the image on top of the text*/
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
.imageFile {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.cta {
  margin: auto;
  opacity: 50%;
}
.overZone {
  border: 2px solid orange;
}
</style>

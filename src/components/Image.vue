<template>
    <div v-if="loading" class="skelaton col-12"></div>
    <img ref="ImageRef" @load="() => loadImage(src)" @error="handleErrorImage" :data-src="src" :class="[props.class]"
        :alt="alt" :title="title" width="auto" height="auto" loading="lazy" v-lazy-load />
</template>

<script setup>
const props = defineProps(["alt", "title", "src", "class"]);
const NO_IMAGE = "/img/no_image.svg";
const ImageRef = ref(null)
const loading = ref(true);

const handleErrorImage = () => {
    console.log("error")
    ImageRef.value.src = NO_IMAGE;
    loading.value = false;
}

function loadImage(src) {
    console.log("load")

        var image = new Image();
        image.src = src;

        image.onload = () => {
            loading.value = false;
        };
}

onUpdated(() => {
    console.log("udpate")
    if (ImageRef.value && ImageRef.value.complete) {
        const currentSrc = ImageRef.value.src;
        // console.log("currentSrc", currentSrc)
        // console.log("props.src", props.src)
        if (currentSrc !== props.src) {
            ImageRef.value.src = props.src
        }
    }
})

</script>
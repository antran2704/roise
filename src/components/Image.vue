<template>
    <img ref="ImageRef" @error="handleErrorImage" :data-src="src" :class="[props.class]" :alt="alt" :title="title"
        width="auto" height="auto" loading="lazy" v-lazy-load />
</template>

<script setup>
const props = defineProps(["alt", "title", "src", "class"]);
const NO_IMAGE = "/img/no_image.svg";
const ImageRef = ref(null);

const handleErrorImage = () => {
    ImageRef.value.src = NO_IMAGE;
}

onUpdated(() => {
    if (ImageRef.value.src !== NO_IMAGE && ImageRef.value.src !== props.src) {
        ImageRef.value.src = props.src
    }
})

</script>
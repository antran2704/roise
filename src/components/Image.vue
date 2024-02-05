<template>
    <img v-if="isLazy" ref="ImageRef" @error="handleErrorImage" :data-src="src" :class="[props.class]" :alt="alt"
        :title="title" width="auto" height="auto" loading="lazy" v-lazy-load />
    <img v-if="!isLazy" ref="ImageRef" @error="handleErrorImage" :class="[props.class]" :alt="alt" :title="title"
        width="auto" height="auto" loading="lazy" />
</template>

<script setup>
const props = defineProps(["alt", "title", "src", "class", "isLazy"]);
const NO_IMAGE = "/img/no_image.svg";
const ImageRef = ref(null);

const handleErrorImage = () => {
    ImageRef.value.src = NO_IMAGE;
}

const onLoad = () => {
    const image = new Image();
    image.src = props.src;
    console.log("load")
    
    image.onload = () => {
        if(image.complete) {
            ImageRef.value.src = props.src;
        }
    }

    image.onerror = () => {
        handleErrorImage();
    }
}

onMounted(() => {
    if(!props.isLazy) {
        onLoad();
    }
})

onUpdated(() => {
    if (ImageRef.value.src !== NO_IMAGE && ImageRef.value.src !== props.src) {
        ImageRef.value.src = props.src
    }
})

</script>
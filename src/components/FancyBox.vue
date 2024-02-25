<template>
    <div class="fancybox">
        <div @click="prop.onClose" class="fancybox_layout"></div>
        <div class="fancybox_header">
            <div class="d-flex align-items-center">
                <p>{{ currentIndex + 1 }}</p>
                <p>/</p>
                <p>{{ gallery.length }}</p>
            </div>
            <div @click="prop.onClose" class="fancybox_header-close">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                    stroke="currentColor" class="w-10 h-10 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
        </div>
        <div class="fancybox_content">
            <div class="fancybox_content-large-image">
                <img @touchend="handleTouchOnMobile" class="w-full h-full" :src="gallery[currentIndex].imageUrl">
            </div>
            <ul class="scroll fancybox_gallery">
                <li v-for="(image, index) in prop.gallery" :key="index" @click="() => handleClickImage(index)"
                    class="fancybox_gallery-item" :class="{ isActive: currentIndex === index }">
                    <Image :src="image.imageUrl" />
                </li>
            </ul>
        </div>
        <div @click="handlePrevImage" class="fancybox_control-arrow fancybox_control-arrow-prev">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                class="w-12 h-12 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>

        </div>
        <div @click="handleNextImage" class="fancybox_control-arrow fancybox_control-arrow-next">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                class="w-12 h-12 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
        </div>

    </div>
</template>

<script setup>
const prop = defineProps({
    gallery: {
        type: Array
    },
    currentIndex: {
        type: Number,
        defult: 0
    },
    onClose: {
        type: Function
    }
})

const gallery = ref(prop.gallery)
const currentIndex = ref(prop.currentIndex);
const currentImage = ref(gallery.value[currentIndex.value]);

const handleClickImage = (index) => {
    currentIndex.value = index;
    currentImage.value = gallery.value[index];
}

const handleNextImage = () => {
    let nextIndex = ++currentIndex.value;

    if (nextIndex > prop.gallery.length - 1) {
        nextIndex = 0;
    }
    currentIndex.value = nextIndex;
    currentImage.value = prop.gallery[nextIndex];
}

const handlePrevImage = () => {
    let prevIndex = --currentIndex.value;
    if (prevIndex < 0) {
        prevIndex = prop.gallery.length - 1;
    }
    currentIndex.value = prevIndex;
    currentImage.value = prop.gallery[prevIndex];
}

const handleTouchOnMobile = (e) => {
    console.log("touce")
    const centerScreen = window.innerWidth / 2;
    const direction = e.pageX;

    if (direction < centerScreen) {
        handlePrevImage();
    } else {
        handleNextImage();
    }
}

onMounted(() => {
    document.querySelector("body").style.overflowY = "hidden";
})

onBeforeUnmount(() => {
    document.querySelector("body").style.overflowY = "auto"
})

</script>
<template>
    <div>
        <ul ref="listRef" class="d-flex flex-column align-items-start mt-1 show_list">
            <slot />
        </ul>

        <button v-if="isShowBtn" @click="() => handleShowMore()"
            class="d-flex align-items-center justify-content-center show_btn">
            {{ show ? "Thu gọn" : "Xem thêm" }}
        </button>
    </div>
</template>

<script setup>
const listRef = ref(null);
const show = ref(false);
const isShowBtn = ref(false);

const props = defineProps(["maxHeight"]);

const handleShowMore = () => {
    const element = listRef.value;
    if (element) {
        if (show.value) {
            element.style.maxHeight = props.maxHeight + "px";
            show.value = false;
        } else {
            const height = element.scrollHeight;
            element.style.maxHeight = height + "px";
            show.value = true;
        }
    }
};

onMounted(() => {
    const element = listRef.value;
    if (element) {
        const height = element.scrollHeight;

        if (height > props.maxHeight) {
            element.style.maxHeight = props.maxHeight + "px";
            isShowBtn.value = true;
        }
    }
})

</script>
<template>
    <ul class="pagination">
        <li :class="[currentPage < 2 && 'pagination_arrow-disable']" class="pagination_arrow">
            <button @click="() => onClick(currentPage - 1)" class="pagination_arrow-prev">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                    class="pagination_arrow-icon">
                    <path fillRule="evenodd"
                        d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                        clipRule="evenodd" />
                </svg>
            </button>
        </li>

        <li v-if="props.totalItems > props.pageSize" v-for="page in totalPagesShow.slice(start, end)"
            class="pagination_item" :class="{ active: page === currentPage }">

            <button :key="page" @click="() => onClick(page)">
                {{ page }}
            </button>
        </li>
        <li :class="[currentPage >= pageCount && 'pagination_arrow-disable']" class="pagination_arrow">
            <button @click="() => onClick(currentPage + 1)" class="pagination_arrow-prev">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                    class="pagination_arrow-icon">
                    <path fillRule="evenodd"
                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                        clipRule="evenodd" />
                </svg>
            </button>
        </li>
    </ul>
</template>

<script setup>
const props = defineProps({
    currentPage: {
        type: Number,
        default: 1
    },
    totalItems: {
        type: Number,
        default: 0
    },
    pageSize: {
        type: Number,
        default: 1
    },
    url: {
        type: String
    },
    onClick: {
        type: Function
    }
})

const totalPagesShow = ref([]);
const pageCount = ref(0);
const showItems = ref(5);
const start = ref(props.currentPage);
const end = ref(showItems.value);

const pages = Math.ceil(props.totalItems / props.pageSize);

const handleTotalPages = () => {
    let totalPages = [];

    for (let i = 0; i < pages; i++) {
        totalPages.push(i + 1);
    };

    totalPagesShow.value = totalPages;
    pageCount.value = pages;
}

const setStart = () => {
    if (props.currentPage <= 2) {
        start.value = 0;
        return;
    }

    // 6 5 - 1 = 4
    if (props.currentPage > totalPagesShow.value.length - 1) {
        start.value = props.currentPage - showItems.value;
        return;
    }

    if (props.currentPage > totalPagesShow.value.length - 2) {
        start.value = props.currentPage - (showItems.value - 1);
        return;
    }

    if (props.currentPage > totalPagesShow.value.length - 3) {
        start.value = props.currentPage - (showItems.value - 2);
        return;
    }

    start.value = props.currentPage - Math.floor(showItems.value / 2);
}

const setEnd = () => {
    if (props.currentPage <= 2) {
        end.value = showItems.value;
        return;
    }

    end.value = props.currentPage + Math.ceil(showItems.value / 2);
}

onUpdated(() => {
    if (pageCount.value > 4) {
        setStart();
        setEnd();
    } else {
        start.value = 0;
        end.value = showItems.value;
    }

})

onMounted(() => {
    handleTotalPages();
})
</script>
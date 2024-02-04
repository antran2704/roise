<template>
    <div class="ltn__breadcrumb-area ltn__breadcrumb-area-4 ltn__breadcrumb-color-white---">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="ltn__breadcrumb-inner text-center">
                        <h2 class="ltn__page-title text-capitalize">{{ title }}</h2>
                        <div class="ltn__breadcrumb-list">
                            <ul>
                                <li v-for="(item, index) in list" :key="index">
                                    <NuxtLink v-if="item.path" :to="item.path" class="text-capitalize">{{ item.label }}</NuxtLink>
                                    <p v-else class="text-capitalize">{{ item.label }}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    title: String,
    list: Array
})
</script>
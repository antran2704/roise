<template>
    <div :class="col">
        <div class="ltn__banner-item">
            <div class="ltn__banner-img">
                <a href="shop.html">
                    <img :src="src" :alt="alt" :title="title" height="auto" width="auto" loading="lazy" /></a>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['src', "alt", "title", "col"]);
</script>
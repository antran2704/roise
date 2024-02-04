<template>
    <div class="ltn__product-area ltn__product-gutter pt-65 pb-40">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title-area text-center">
                        <h1 class="section-title section-title-border">{{ title }}</h1>
                    </div>
                </div>
            </div>
            <div class="row">
                    <Product v-for="(item, index) in items" :key="index" :data="item" col="col-lg-3 col-md-4 col-sm-6 col-6" />
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(["title", "items"])
</script>

<template>
    <div :class="col" class="product_skelaton">
        <div class="skelaton product_skelaton-img"></div>

        <div class="d-flex flex-column mt-2 gap-2">
            <p class="skelaton product_skelaton-content"></p>
            <p class="skelaton product_skelaton-content col-10"></p>
            <p class="skelaton product_skelaton-content col-4"></p>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(["col"])
</script>
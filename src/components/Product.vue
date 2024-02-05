
<template>
    <div :class="col">
        <NuxtLink :to="`${LINK}/${data.id}`" class="ltn__product-item text-center">
            <div class="product-img">
                <Image :isLazy="isLazy" :src="data.picture" :alt="data.name" :title="data.name" />
                <!-- <img v-if="!isLazy" :src="data.picture" :alt="data.name" :title="data.name" width="auto" height="auto" loading="lazy"/> -->
                <div class="product-badge">
                    <ul>
                        <li class="badge-2">10%</li>
                    </ul>
                </div>
            </div>

            <div class="product-info">
                <p class="product-title text-capitalize px-1 line-clamp" style="--line-clamp: 2">
                    {{ data.name }}
                </p>
                <div class="product-price">
                    <div class="d-flex align-items-center justify-content-center gap-2">
                        <p>Giá bán sỉ</p>
                        <p class="product-price-sale">{{ `${formatBigNumber(data.wholesalePrice)} ${CURRENCY_CHARACTER}` }}</p>
                    </div>
                    <p class="product-price-special">{{ `${formatBigNumber(data.specialPrice)} ${CURRENCY_CHARACTER}` }}</p>
                </div>
            </div>
        </NuxtLink>
    </div>
</template>

<script setup>
const props = defineProps(["col", "data", "isLazy"])
const LINK = "/product"
</script>
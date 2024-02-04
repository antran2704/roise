
<template>
    <div :class="col">
        <div class="ltn__product-item text-center">
            <NuxtLink :to="`${LINK}/${data._id}`" class="product-img">
                <Image :src="data.Picture" :alt="data.Name" :title="data.Name" />
                <div class="product-badge">
                    <ul>
                        <li class="badge-2">10%</li>
                    </ul>
                </div>
            </NuxtLink>

            <div class="product-info">
                <p class="product-title text-capitalize px-1">
                    <NuxtLink :to="`${LINK}/${data._id}`" class="line-clamp" style="--line-clamp: 2">{{ data.Name }}</NuxtLink>
                </p>
                <div class="product-price">
                    <div class="d-flex align-items-center justify-content-center gap-2">
                        <p class="fs-6">Giá bán sỉ</p>
                        <span>{{ `${formatBigNumber(data.WholesalePrice)} ${CURRENCY_CHARACTER}` }}</span>
                    </div>
                    <del>{{ `${formatBigNumber(data.SpecialPrice)} ${CURRENCY_CHARACTER}` }}</del>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(["col", "data"])
const LINK = "/product"
</script>
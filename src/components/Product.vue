
<template>
    <div :class="col">
        <NuxtLink :to="`${LINK}/${data._id}`" class="ltn__product-item text-center">
            <div class="product-img">
                <Image :src="data.Picture" :alt="data.Name" :title="data.Name" />
                <div class="product-badge">
                    <ul>
                        <li class="badge-2">10%</li>
                    </ul>
                </div>
            </div>

            <div class="product-info">
                <p class="product-title text-capitalize px-1 line-clamp" style="--line-clamp: 2">
                    {{ data.Name }}
                </p>
                <div class="product-price">
                    <div class="d-flex align-items-center justify-content-center gap-2">
                        <p>Giá bán sỉ</p>
                        <span class="product-price-sale">{{ `${formatBigNumber(data.WholesalePrice)} ${CURRENCY_CHARACTER}` }}</span>
                    </div>
                    <del>{{ `${formatBigNumber(data.SpecialPrice)} ${CURRENCY_CHARACTER}` }}</del>
                </div>
            </div>
        </NuxtLink>
    </div>
</template>

<script setup>
const props = defineProps(["col", "data"])
const LINK = "/product"
</script>
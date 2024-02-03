
<template>
    <div :class="col">
        <div class="ltn__product-item text-center">
            <div class="product-img">
                <NuxtLink to="/product/1"><img src="/img/product/1.png" alt="product" title="product" width="auto" height="auto" loading="lazy"></NuxtLink>
                <div class="product-badge">
                    <ul>
                        <li class="badge-2">10%</li>
                    </ul>
                </div>
            </div>
            <div class="product-info">
                <p class="product-title"><a href="product-details.html">Hoa Hồng</a></p>
                <div class="product-price">
                    <div class="d-flex align-items-center justify-content-center gap-2">
                        <p class="fs-6">Giá bán sỉ</p>
                        <span>{{ `${formatBigNumber(100000)} ${CURRENCY_CHARACTER}` }}</span>
                    </div>
                    <del>{{ `${formatBigNumber(21000)} ${CURRENCY_CHARACTER}` }}</del>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps(["col"])
</script>
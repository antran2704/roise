<template>
    <SlideShow />
    <ProductRow title="Sản phẩm nổi bật" :items="data" />
    <div class="ltn__banner-area">
        <div class="container">
            <div class="row justify-content-center">
                <BannerDiscount title="Banner Image" alt="Banner Image" src="/img/banner/6.jpg" col="col-md-6 col-12" />
                <BannerDiscount title="Banner Image" alt="Banner Image" src="/img/banner/7.jpg" col="col-md-6 col-12" />
            </div>
        </div>
    </div>
    <SlideProduct title="Sản phẩm nổi bật" :items="data" />
    <Brand />
</template>

<script setup>
const runtimeConfig = useRuntimeConfig();
const { data } = await useAsyncData(() => $fetch(`${runtimeConfig.public.apiEndpont}/products`), { server: false })

</script>
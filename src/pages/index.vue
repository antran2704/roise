<template>
    <Seo title="Nội y giá sỉ" description="Fiama description" :canonical="`${runtimeConfig.public.domain}`"
        picture="/img/logo.jpg" />

    <!-- <SlideShow /> -->
    <div class="pt-40">
        <ProductRow title="Sản phẩm mới" :items="newProducts.slice(0, 12)" :isLoading="pending" />
    </div>
    <!-- <div class="ltn__banner-area">
        <div class="container">
            <div class="row justify-content-center">
                <BannerDiscount title="Banner Image" alt="Banner Image" src="/img/banner/6.jpg" col="col-md-6 col-12" />
                <BannerDiscount title="Banner Image" alt="Banner Image" src="/img/banner/7.jpg" col="col-md-6 col-12" />
            </div>
        </div>
    </div> -->
    <SlideProduct title="Sản phẩm nổi bật" :items="hotProducts" :isLoading="pending" />
</template>

<script setup>
const runtimeConfig = useRuntimeConfig();
const { data, pending } = await useFetch(`${runtimeConfig.public.apiEndpoint}/product`);

const newProducts = ref(data.value ? data.value.filter(product => product.isShow && product.isNew) : []);
const hotProducts = ref(data.value ? data.value.filter(product => product.isShow && product.isHot) : []);

</script>
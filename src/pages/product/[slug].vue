<template>
    <Loading v-if="pending || !product" />
    <div v-if="!pending && product">
        <Seo :title="product.name" :description="product.overview"
            :canonical="`${runtimeConfig.public.domain}/products/${product.id}`" :picture="product.picture" />


        <Breadcrumb title="Sản phẩm"
            :list="[{ label: 'Trang Chủ', path: '/' }, { label: 'Shop', path: '/shop' }, { label: product.name }]" />

        <!-- SHOP DETAILS AREA START -->
        <div class="ltn__shop-details-area pb-70">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <div class="ltn__shop-details-inner">
                            <div class="row">
                                <div class="col-lg-6 mb-5">
                                    <div @click="onClickFancybox" class="ltn__shop-details-large-img">
                                        <Image :isLazy="false" :src="currentImage" :alt="product.name"
                                            :title="product.name" />

                                        <div v-if="gallery.length > 0"
                                            class="ltn__shop-details-gallery-count d-flex justify-content-center align-items-center">
                                            <p class="ltn__shop-details-gallery-number">{{ currentIndexSlide + 1 }}</p>
                                            <p class="ltn__shop-details-gallery-number">/</p>
                                            <p class="ltn__shop-details-gallery-number">{{ gallery.length }}</p>
                                        </div>
                                    </div>

                                    <div v-if="gallery.length > 0"
                                        class="ltn__shop-details-img-gallery ltn__shop-details-img-gallery-2">
                                        <Swiper @swiper="getRef" :modules="[SwiperNavigation]" :slides-per-view="3"
                                            :space-between="10" :navigation="{
        enabled: true,
    }" :breakpoints="{ 768: { slidesPerView: 4 } }" :slides-per-group="1"
                                            class="ltn__shop-details-small-img slick-arrow-2">
                                            <SwiperSlide v-for="(image, index) in gallery" :key="index"
                                                class="single-small-img" @click="() => {
        currentImage = image.imageUrl
        onSlideChange();
    }">
                                                <Image :class="{ isActive: image === currentImage }"
                                                    :src="image.imageUrl" :alt="product.name" :title="product.name" />
                                            </SwiperSlide>
                                        </Swiper>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="modal-product-info shop-details-info">
                                        <div>
                                            <h3 class="mb-10">{{ product.name }}</h3>

                                            <div class="product_price-wrap mb-10">
                                                <div class="product_price">
                                                    <p class="product_price-title product_title text-nowrap"> Giá bán
                                                        sỉ:
                                                    </p>
                                                    <p class="product_price-value">
                                                        {{ product.wholesalePrice ?
        `${formatBigNumber(product.wholesalePrice)}
                                                        ${CURRENCY_CHARACTER}` : "Đang cập nhật" }}
                                                    </p>
                                                </div>
                                                <div class="product_price">
                                                    <p class="product_price-title product_title text-nowrap"> Giá bán
                                                        buôn:
                                                    </p>
                                                    <p class="product_price-value">
                                                        {{ product.specialPrice ?
        `${formatBigNumber(product.specialPrice)}
                                                        ${CURRENCY_CHARACTER}` : "Đang cập nhật" }}
                                                    </p>
                                                </div>
                                            </div>

                                            <div class="modal-product-meta ltn__product-details-menu-1 mb-20">
                                                <ul>
                                                    <li v-if="product.colours.length > 0">
                                                        <div class="ltn__size-widget clearfix">
                                                            <strong class="d-meta-title fw-bolder">Color:</strong>
                                                            <ul>
                                                                <li v-for="color in product.colours">{{ color.name }}
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li v-if="product.sizes.length > 0">
                                                        <div class="ltn__size-widget clearfix mt-2">
                                                            <strong class="d-meta-title fw-bolder">Size:</strong>
                                                            <ul>
                                                                <li v-for="size in product.sizes">{{ size.name }}</li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div>
                                            <div class="modal-product-brief mb-10">
                                                <p class="product_price-title product_title fw-bolder">Tổng quan sản
                                                    phẩm:
                                                </p>
                                                <p class="product_text">
                                                    {{ product.overview }}
                                                </p>
                                            </div>

                                            <div class="modal-product-brief d-flex align-items-start mb-10 gap-2">
                                                <p class="product_price-title product_title fw-bolder">Hãng:</p>
                                                <p class="product_text">
                                                    {{ product.brand ? product.brand : "Đang cập nhật" }}
                                                </p>
                                            </div>
                                            <div class="modal-product-brief d-flex align-items-start mb-10 gap-2">
                                                <p class="product_price-title product_title fw-bolder">SKU:</p>
                                                <p class="product_text">
                                                    {{ product.sku ? product.sku : "Đang cập nhật" }}
                                                </p>
                                            </div>
                                            <div class="modal-product-brief d-flex align-items-start mb-10 gap-2">
                                                <p class="product_price-title product_title fw-bolder">Thư mục:</p>
                                                <p class="product_text">
                                                    {{ product.category.id ? product.category.name : "Đang cập nhật" }}
                                                </p>
                                            </div>
                                            <div v-if="product.tags.length > 0"
                                                class="modal-product-brief d-flex align-items-start mb-10 gap-2">
                                                <p class="product_price-title product_title fw-bolder">Tags:</p>
                                                <p class="product_text">
                                                    {{ product.tags.join(", ") }}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <FancyBox v-if="isShowFancybox && gallery.length > 0" :gallery="gallery" :currentIndex="currentIndexSlide"
            :onClose="onClickFancybox" />
        <!-- SHOP DETAILS AREA END -->
        <!-- SHOP DETAILS TAB AREA START -->
        <div class="ltn__shop-details-tab-area pb-60">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="ltn__shop-details-tab-inner">
                            <div class="tab-content">
                                <div class="tab-pane fade active show" id="liton_tab_details_1_1">
                                    <div class="ltn__shop-details-tab-content-inner">
                                        <ShowMore :maxHeight="120">
                                            <p>
                                                {{ product.description }}
                                            </p>
                                        </ShowMore>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <SlideProduct :isLoading="pedingOtherProducts" title="Sản phẩm khác" :items="otherProducts" />
    </div>
</template>
<script setup>
const runtimeConfig = useRuntimeConfig();
const route = useRoute();
const router = useRouter();
const slug = route.params.slug;

const { data: product, pending } = await useFetch(`/api/product/${slug}`)

if (!product.value && !pending.value) {
    router.push("/404");
}

const gallery = product.value ? product.value.images : [];
const isShowFancybox = ref(false);
const currentImage = ref(gallery.length > 0 ? gallery[0].imageUrl : []);
const currentIndexSlide = ref(0);
const swiper = ref(null);
const otherProducts = ref([]);

const { pending: pedingOtherProducts } = await useFetch(`/api/product`, {
    server: false,
    onResponse({ response }) {
        const products = response._data.filter(product => product.isShow).slice(0, 12);
        otherProducts.value = products;
    }
});

const getRef = (swiperInstance) => {
    swiper.value = swiperInstance
}

const onClickFancybox = () => {
    isShowFancybox.value = !isShowFancybox.value
}

const onSlideChange = () => {
    const newIndex = swiper.value.clickedIndex;
    if (newIndex > currentIndexSlide.value) {
        swiper.value.slideNext();
    }

    if (newIndex < currentIndexSlide.value) {
        swiper.value.slidePrev();
    }

    currentIndexSlide.value = newIndex
};

</script>
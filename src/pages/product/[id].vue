<template>
    <Loading v-if="pending || !product" />
    <div v-if="!pending && product">
        <Seo :title="product.name" :description="product.overview"
            :canonical="`${runtimeConfig.public.domain}/products/${product.id}`" :picture="product.Picture"/>


        <Breadcrumb title="Sản phẩm" :list="[{ label: 'Trang Chủ', path: '/' }, { label: 'Shop', path: '/shop' }, { label: product.name }]" />

        <!-- SHOP DETAILS AREA START -->
        <div class="ltn__shop-details-area pb-70">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <div class="ltn__shop-details-inner">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div @click="onClickFancybox" class="ltn__shop-details-large-img">
                                        <Image :isLazy="false" :src="currentImage" :alt="product.name" title="thumbnail" loading="lazy"
                                            width="auto" height="auto" />

                                        <div v-if="gallery.length > 0"
                                            class="ltn__shop-details-gallery-count d-flex justify-content-center align-items-center">
                                            <p class="ltn__shop-details-gallery-number">{{ currentIndexSlide + 1 }}</p>
                                            <p class="ltn__shop-details-gallery-number">/</p>
                                            <p class="ltn__shop-details-gallery-number">{{ gallery.length }}</p>
                                        </div>
                                    </div>

                                    <div v-if="gallery.length > 0" class="ltn__shop-details-img-gallery ltn__shop-details-img-gallery-2">
                                        <Swiper @swiper="getRef" :modules="[SwiperNavigation]" :slides-per-view="3"
                                            :space-between="10" :navigation="{
                                                enabled: true,
                                            }" :breakpoints="{ 768: { slidesPerView: 4 } }" :slides-per-group="1"
                                            class="ltn__shop-details-small-img slick-arrow-2">
                                            <SwiperSlide v-for="(image, index) in gallery" :key="index"
                                                class="single-small-img" @click="() => {
                                                    currentImage = image
                                                    onSlideChange();
                                                }">
                                                <Image :class="{ isActive: image === currentImage }" :src="image"
                                                    :alt="product.name" :title="product.name" />
                                            </SwiperSlide>
                                        </Swiper>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="modal-product-info shop-details-info">
                                        <h3 class="mb-10">{{ product.name }}</h3>

                                        <div class="modal-product-brief d-flex align-items-center mb-10 gap-2">
                                            <p class="product_price-title product_title">Hãng:</p>
                                            <p class="product_text">
                                                {{ product.brand ? product.brand : "Đang cập nhật" }}
                                            </p>
                                        </div>

                                        <div class="product_price-wrap mb-10">
                                            <div class="product_price">
                                                <p class="product_price-title product_title text-nowrap"> Giá bán sỉ:</p>
                                                <p class="product_price-value">
                                                    {{ product.wholesalePrice ? `${formatBigNumber(product.wholesalePrice)}
                                                                                                        ${CURRENCY_CHARACTER}` : "Đang cập nhật" }}
                                                </p>
                                            </div>
                                            <div class="product_price">
                                                <p class="product_price-title product_title text-nowrap"> Giá bán lẻ:</p>
                                                <p class="product_price-value">
                                                    {{ product.specialPrice ? `${formatBigNumber(product.specialPrice)}
                                                                                                        ${CURRENCY_CHARACTER}` : "Đang cập nhật" }}
                                                </p>
                                            </div>
                                        </div>
                                        <div class="modal-product-brief mb-10">
                                            <p class="product_price-title product_title">Tổng quan sản phẩm:</p>
                                            <p class="product_text">
                                                {{ product.overview }}
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

        <FancyBox v-if="isShowFancybox && gallery.length > 0" :gallery="gallery" :currentIndex="currentIndexSlide" :onClose="onClickFancybox" />
        <!-- SHOP DETAILS AREA END -->
        <!-- SHOP DETAILS TAB AREA START -->
        <div class="ltn__shop-details-tab-area pb-60">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="ltn__shop-details-tab-inner">
                            <div class="ltn__shop-details-tab-menu">
                                <div class="nav">
                                    <a class="active show" data-bs-toggle="tab"
                                        href="#liton_tab_details_1_1">Description</a>
                                    <a data-bs-toggle="tab" href="#liton_tab_details_1_4" class="">Shipping</a>
                                </div>
                            </div>
                            <div class="tab-content">
                                <div class="tab-pane fade active show" id="liton_tab_details_1_1">
                                    <div class="ltn__shop-details-tab-content-inner">
                                        <ShowMore :maxHeight="120">
                                            <p>
                                                {{ product.description }}
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                tempor
                                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                                nost
                                                exercit ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                                irure
                                                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                pariatur Excepte sint occaecat cupidatat non proident, sunt in culpa qui
                                                officia
                                                deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste
                                                natus
                                                error sit volu accusantium doloremque laudantium, totam rem aperiam, eaque
                                                ipsa
                                                quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                                                explica Nemllo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                                                aut
                                                fugit,
                                            </p>
                                        </ShowMore>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="liton_tab_details_1_4">
                                    <div class="ltn__shop-details-tab-content-inner">
                                        <h4 class="title-2">Shipping policy for our store</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam voluptates rerum
                                            neque ea libero numquam officiis ipsum, consectetur ducimus dicta in earum
                                            repellat sunt ab odit laboriosam cupiditate ipsam, doloremque.</p>
                                        <ul>
                                            <li>1-2 business days (Typically by end of day)</li>
                                            <li><a href="#">30 days money back guaranty</a></li>
                                            <li>24/7 live support</li>
                                            <li>odio dignissim qui blandit praesent</li>
                                            <li>luptatum zzril delenit augue duis dolore</li>
                                            <li>te feugait nulla facilisi.</li>
                                        </ul>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, quia vel
                                            eligendi ipsam. Ea, quasi quam ducimus recusandae unde ipsa nam rem a minus
                                            tenetur quae sint voluptatem voluptate inventore.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <SlideProduct title="Sản phẩm khác" :items="data" />
        <Brand />
    </div>
</template>
<script setup>
const runtimeConfig = useRuntimeConfig();
const route = useRoute();
const router = useRouter();
const id = route.params.id;
const { data: product, pending } = await useFetch(`${runtimeConfig.public.apiEndpoint}/products/${id}`)
// const { data: product, pending } = await useFetch(`${runtimeConfig.public.apiEndpoint}/product/${id}`)

if (!product.value && !pending.value) {
    router.push("/404");
}

const gallery = product.value ? product.value.gallery : [];

const isShowFancybox = ref(false);
const currentImage = ref(gallery[0]);
const currentIndexSlide = ref(0);
const swiper = ref(null);

const { data } = await useAsyncData(() => $fetch(`${runtimeConfig.public.apiEndpoint}/products`))
// const { data } = await useAsyncData(() => $fetch(`${runtimeConfig.public.apiEndpoint}/product`))

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
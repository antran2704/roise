<template>
    <Loading v-if="pending" />
    <div v-else>

        <Head>
            <Title>{{ product.Name }}</Title>
            <Link rel="canonical" :href="`${runtimeConfig.domain}/products/${product._id}`"/>
            <Meta name="description" :content="product.Overview" />

            <!-- Open Graph / Facebook -->
            <Meta property="og:type" content="website" />
            <Meta property="og:url" content="https://metatags.io/" />
            <Meta property="og:title" :content="product.Name" />
            <Meta property="og:description" :content="product.Overview" />
            <Meta property="og:image" :content="product.Picture" />

            <!-- Twitter -->
            <Meta property="twitter:card" content="summary_large_image" />
            <Meta property="twitter:url" content="https://metatags.io/" />
            <Meta property="twitter:title" :content="product.Name" />
            <Meta property="twitter:description" :content="product.Overview" />
            <Meta property="twitter:image" :content="product.Picture" />
        </Head>


        <Breadcrumb title="Sản phẩm" :list="[{ label: 'Home', path: '/' }, { label: product.Name }]" />

        <!-- SHOP DETAILS AREA START -->
        <div class="ltn__shop-details-area pb-70">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <div class="ltn__shop-details-inner">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div @click="onClickFancybox" class="ltn__shop-details-large-img">
                                        <img :src="currentImage" alt="Product" title="Product" loading="lazy" width="auto"
                                            height="auto">

                                        <div
                                            class="ltn__shop-details-gallery-count d-flex justify-content-center align-items-center">
                                            <p class="ltn__shop-details-gallery-number">{{ currentIndexSlide + 1 }}</p>
                                            <p class="ltn__shop-details-gallery-number">/</p>
                                            <p class="ltn__shop-details-gallery-number">{{ gallery.length }}</p>
                                        </div>
                                    </div>

                                    <div class="ltn__shop-details-img-gallery ltn__shop-details-img-gallery-2">
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
                                                <img :class="{ isActive: image === currentImage }" :src="image"
                                                    alt="Product" title="Product" loading="lazy" width="auto" height="auto">
                                            </SwiperSlide>
                                        </Swiper>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="modal-product-info shop-details-info">
                                        <h3 class="mb-10">{{ product.Name }}</h3>

                                        <div class="modal-product-brief d-flex align-items-center mb-10 gap-2">
                                            <p class="product_price-title product_title">Hãng:</p>
                                            <p class="product_text">
                                                {{ product.Brand ? product.Brand : "Đang cập nhật" }}
                                            </p>
                                        </div>

                                        <div class="product_price-wrap mb-10">
                                            <div class="product_price">
                                                <p class="product_price-title product_title"> Giá bán sỉ:</p>
                                                <p class="product_price-value">
                                                    {{ product.WholesalePrice ? `${formatBigNumber(product.WholesalePrice)}
                                                                                                        ${CURRENCY_CHARACTER}` : "Đang cập nhật" }}
                                                </p>
                                            </div>
                                            <div class="product_price">
                                                <p class="product_price-title product_title"> Giá bán lẻ:</p>
                                                <p class="product_price-value">
                                                    {{ product.SpecialPrice ? `${formatBigNumber(product.SpecialPrice)}
                                                                                                        ${CURRENCY_CHARACTER}` : "Đang cập nhật" }}
                                                </p>
                                            </div>
                                        </div>
                                        <div class="modal-product-brief mb-10">
                                            <p class="product_price-title product_title">Tổng quan sản phẩm:</p>
                                            <p class="product_text">
                                                {{ product.Overview }}
                                            </p>
                                        </div>

                                        <!-- <div class="modal-product-meta ltn__product-details-menu-1 mb-30">
                                            <ul>
                                                <li><strong>SKU:</strong> <span>12345</span></li>
                                                <li>
                                                    <strong>Categories:</strong>
                                                    <span>
                                                        <a href="#">Flower</a>
                                                    </span>
                                                </li>
                                                <li>
                                                    <strong>Tags:</strong>
                                                    <span>
                                                        <a href="#">Love</a>
                                                        <a href="#">Flower</a>
                                                        <a href="#">Heart</a>
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="ltn__safe-checkout d-none">
                                            <h5>Guaranteed Safe Checkout</h5>
                                            <img src="/img/icons/payment-2.png" alt="Payment Image">
                                        </div> -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- SHOP DETAILS AREA END -->
        <FancyBox v-if="isShowFancybox" :gallery="gallery" :currentIndex="currentIndexSlide" :onClose="onClickFancybox" />
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
                                    <div class="ltn__shop-details-tab-content-inner text-center">
                                        <ShowMore :maxHeight="120">
                                            <p>
                                                {{ product.Description }}
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
                                <div class="tab-pane fade" id="liton_tab_details_1_5">
                                    <div class="ltn__shop-details-tab-content-inner">

                                        <div class="table-1 mb-20">
                                            <table class="">
                                                <tbody>
                                                    <tr>
                                                        <th>SIZE</th>
                                                        <th>XS</th>
                                                        <th>S</th>
                                                        <th>S/M</th>
                                                        <th>M</th>
                                                        <th>M/L</th>
                                                        <th>L</th>
                                                        <th>XL</th>
                                                    </tr>
                                                    <tr data-bs-region="uk">
                                                        <th>UK</th>
                                                        <td>4</td>
                                                        <td>6 - 8</td>
                                                        <td>6 - 10</td>
                                                        <td>10 - 12</td>
                                                        <td>12 - 16</td>
                                                        <td>14 - 16</td>
                                                        <td>18</td>
                                                    </tr>
                                                    <tr data-bs-region="eur">
                                                        <th>
                                                            <span class="mobile-show">EUR</span><span
                                                                class="mobile-none">EUROPE</span>
                                                        </th>
                                                        <td>32</td>
                                                        <td>34 - 36</td>
                                                        <td>34 - 38</td>
                                                        <td>38 - 40</td>
                                                        <td>40 - 44</td>
                                                        <td>42 - 44</td>
                                                        <td>46</td>
                                                    </tr>
                                                    <tr data-bs-region="usa">
                                                        <th>
                                                            <span>USA/</span><span class="mobile-none">CANADA</span><span
                                                                class="mobile-show"> CA</span>
                                                        </th>
                                                        <td>0</td>
                                                        <td>2 - 4</td>
                                                        <td>2 - 6</td>
                                                        <td>6 - 8</td>
                                                        <td>8 - 12</td>
                                                        <td>10 - 12</td>
                                                        <td>14</td>
                                                    </tr>
                                                    <tr data-bs-region="aus">
                                                        <th>AUS / NZ</th>
                                                        <td>4</td>
                                                        <td>6 - 8</td>
                                                        <td>6 - 10</td>
                                                        <td>10 - 12</td>
                                                        <td>12 - 16</td>
                                                        <td>14 - 16</td>
                                                        <td>18</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <SlideProduct />
        <Brand />
    </div>
</template>
<script setup>
const runtimeConfig = useRuntimeConfig();
const route = useRoute();
const router = useRouter();
const id = route.params.id;
const { data: product, pending, error, refresh } = await useFetch(`${runtimeConfig.public.apiEndpont}/products/${id}`)

if (!product.value && !pending.value) {
    router.push("/404");
}

const gallery = product.value.Gallery;

const isShowFancybox = ref(false);

const currentImage = ref(gallery[0]);
const currentIndexSlide = ref(0);
const swiper = ref(null);

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

useSeoMeta({
    title: product.Name,
    ogTitle: product.Name,
    description: product.Overview,
    ogDescription: product.Overview,
    ogImage: product.Picture,
    twitterCard: 'summary_large_image',
})
</script>
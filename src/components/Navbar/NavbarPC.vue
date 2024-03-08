<template>
    <div>
        <!-- ltn__header-middle-area start -->
        <div class="ltn__header-middle-area">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="site-logo">
                            <NuxtLink to="/">
                                <p>Tổng Kho Nội Y</p>
                            </NuxtLink>
                        </div>
                    </div>
                    <div class="col header-contact-serarch-column d-none d-lg-block">
                        <div class="header-contact-search">
                            <!-- header-feature-item -->

                            <!-- header-search-2 -->
                            <div class="header-search-2">
                                <form id="#123" @submit.prevent="onSearch">
                                    <input v-model.trim="searchText" type="text" name="search"
                                        placeholder="Tìm kiếm..." />
                                    <button @click="onSearch" type="submit">
                                        <span><i class="icon-magnifier"></i></span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <!-- header-options -->
                        <div class="ltn__header-options">
                            <ul>
                                <li class="d-none">
                                    <!-- header-search-1 -->
                                    <div class="header-search-wrap">
                                        <div class="header-search-1">
                                            <div class="search-icon">
                                                <i class="icon-magnifier  for-search-show"></i>
                                                <i class="icon-magnifier-remove  for-search-close"></i>
                                            </div>
                                        </div>
                                        <div class="header-search-1-form">
                                            <form @submit.prevent="onSearch" id="#">
                                                <input v-model.trim="searchText" type="text" name="Tìm kiếm..."
                                                    placeholder="Tìm kiếm" />
                                                <button @click="onSearch" type="submit">
                                                    <span><i class="icon-magnifier"></i></span>
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <!-- mini-cart 2 -->
                                    <div class="header-feature-item">
                                        <div class="header-feature-icon">
                                            <i class="icon-phone"></i>
                                        </div>
                                        <div class="header-feature-info">
                                            <p class="fw-bold">Điện thoại</p>
                                            <p>
                                                <NuxtLink :to='`tel:${runtimeConfig.public.phoneNumber}`'>+{{
                                    runtimeConfig.public.phoneNumber }}</NuxtLink>
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <!-- Mobile Menu Button -->
                                    <div class="mobile-menu-toggle d-lg-none">
                                        <a href="#ltn__utilize-mobile-menu" class="ltn__utilize-toggle">
                                            <svg viewBox="0 0 800 600">
                                                <path
                                                    d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200"
                                                    id="top"></path>
                                                <path d="M300,320 L540,320" id="middle"></path>
                                                <path
                                                    d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190"
                                                    id="bottom"
                                                    transform="translate(480, 320) scale(1, -1) translate(-480, -318) ">
                                                </path>
                                            </svg>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- ltn__header-middle-area end -->

        <!-- header-bottom-area start -->
        <div
            class="header-bottom-area ltn__border-top ltn__header-sticky  ltn__sticky-bg-white ltn__primary-bg---- menu-color-white---- d-none d-lg-block">
            <div class="container">
                <div class="row">
                    <div class="col header-menu-column justify-content-center">
                        <div class="sticky-logo">
                            <div class="site-logo">
                                <NuxtLink to="/">
                                    <img src="/img/logo.jpg" alt="Logo" title="Logo" width="auto" height="auto"
                                        loading="lazy" />
                                </NuxtLink>
                            </div>
                        </div>
                        <div class="header-menu header-menu-2">
                            <nav>
                                <div class="ltn__main-menu">
                                    <ul>
                                        <li class="menu-icon">
                                            <NuxtLink to="/">Trang Chủ</NuxtLink>
                                        </li>
                                        <!-- <li class="menu-icon mega-menu-parent">
                                            <NuxtLink to="/">Pages</NuxtLink>
                                            <ClientOnly>
                                                <ul class="mega-menu">
                                                    <li>
                                                        <NuxtLink to="#">Inner Pages</NuxtLink>
                                                        <ul>
                                                            <li>
                                                                <NuxtLink to="/contact">About Us</NuxtLink>
                                                            </li>
                                                            <li>
                                                                <NuxtLink to="/">Portfolio</NuxtLink>
                                                            </li>
                                                            <li>
                                                                <NuxtLink to="/">Portfolio - 02</NuxtLink>
                                                            </li>
                                                            <li>
                                                                <NuxtLink to="/">Portfolio Details
                                                                </NuxtLink>
                                                            </li>
                                                            <li>
                                                                <NuxtLink to="/">FAQ</NuxtLink>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <NuxtLink to="#">Inner Pages</NuxtLink>
                                                        <ul>
                                                            <li>
                                                                <NuxtLink to="/">Google Map Locations
                                                                </NuxtLink>
                                                            </li>
                                                            <li>
                                                                <NuxtLink to="/404">404</NuxtLink>
                                                            </li>
                                                            <li>
                                                                <NuxtLink to="/contact">Contact</NuxtLink>
                                                            </li>
                                                            <li>
                                                                <NuxtLink to="/">Coming Soon</NuxtLink>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <NuxtLink to="#">Shop Pages</NuxtLink>
                                                        <ul>
                                                            <li>
                                                                <NuxtLink to="/shop">Shop</NuxtLink>
                                                            </li>
                                                            <li>
                                                                <NuxtLink to="/shop">Shop Grid</NuxtLink>
                                                            </li>
                                                            <li>
                                                                <NuxtLink to="/shop">Shop Left sidebar
                                                                </NuxtLink>
                                                            </li>
                                                            <li>
                                                                <NuxtLink to="/shop">Shop right sidebar
                                                                </NuxtLink>
                                                            </li>
                                                            <li>
                                                                <NuxtLink to="/shop">Shop details </NuxtLink>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <NuxtLink to="#">Blog Pages</NuxtLink>
                                                        <ul>
                                                            <li>
                                                                <NuxtLink to="/">News</NuxtLink>
                                                            </li>
                                                            <li>
                                                                <NuxtLink to="/">News Grid</NuxtLink>
                                                            </li>
                                                            <li>
                                                                <NuxtLink to="/">News Left sidebar
                                                                </NuxtLink>
                                                            </li>
                                                            <li>
                                                                <NuxtLink to="/">News Right sidebar
                                                                </NuxtLink>
                                                            </li>
                                                            <li>
                                                                <NuxtLink to="/">News details</NuxtLink>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </ClientOnly>

                                        </li> -->
                                        <li class="menu-icon">
                                            <NuxtLink to="/shop">Cửa Hàng</NuxtLink>
                                            <!-- <ul>
                                                <li>
                                                    <NuxtLink to="/shop">Shop</NuxtLink>
                                                </li>
                                                <li>
                                                    <NuxtLink to="/shop">Shop Grid</NuxtLink>
                                                </li>
                                                <li>
                                                    <NuxtLink to="/shop">Shop Left sidebar</NuxtLink>
                                                </li>
                                                <li>
                                                    <NuxtLink to="/shop">Shop right sidebar</NuxtLink>
                                                </li>
                                                <li>
                                                    <NuxtLink to="/shop">Shop details </NuxtLink>
                                                </li>
                                                <li>
                                                    <NuxtLink to="#">Other Pages <span class="float-right">>></span>
                                                    </NuxtLink>
                                                    <ul>
                                                        <li>
                                                            <NuxtLink to="/">Cart</NuxtLink>
                                                        </li>
                                                        <li>
                                                            <NuxtLink to="/">Wishlist</NuxtLink>
                                                        </li>
                                                        <li>
                                                            <NuxtLink to="/">Checkout</NuxtLink>
                                                        </li>
                                                        <li>
                                                            <NuxtLink to="/">Order Tracking</NuxtLink>
                                                        </li>
                                                        <li>
                                                            <NuxtLink to="/">My Account</NuxtLink>
                                                        </li>
                                                        <li>
                                                            <NuxtLink to="/">Sign in</NuxtLink>
                                                        </li>
                                                        <li>
                                                            <NuxtLink to="/">Register</NuxtLink>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul> -->
                                        </li>
                                        <li>
                                            <NuxtLink to="/contact">Liên Hệ</NuxtLink>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- header-bottom-area end -->
    </div>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig();
const router = useRouter();
const searchText = ref(null);

const onSearch = () => {
    if (!searchText.value) return;

    // router.replace({ path: '/shop', query: { search: searchText.value, page: 1 } })
    searchText.value = null;
}

</script>
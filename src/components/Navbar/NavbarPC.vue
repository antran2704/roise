

<template>
    <div>
        <!-- ltn__header-middle-area start -->
        <div class="ltn__header-middle-area">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="site-logo">
                            <NuxtLink to="/"><img src="/img/logo.png" alt="Logo" title="Logo" width="auto" height="auto"
                                    loading="lazy"></NuxtLink>
                        </div>
                    </div>
                    <div class="col header-contact-serarch-column d-none d-xl-block">
                        <div class="header-contact-search">
                            <!-- header-feature-item -->

                            <!-- header-search-2 -->
                            <div class="header-search-2">
                                <form id="#123" method="get" action="#">
                                    <input type="text" name="search" value="" placeholder="Tìm kiếm..." />
                                    <button type="submit">
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
                                            <form id="#" method="get" action="#">
                                                <input type="text" name="search" value="" placeholder="Search here..." />
                                                <button type="submit">
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
                                            <h6>Phone</h6>
                                            <p>
                                                <NuxtLink to="tel:0123456789">+0123-456-789</NuxtLink>
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
                                    <img src="/img/logo.png" alt="Logo" title="Logo" width="auto" height="auto"
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
                                            <ul>
                                                <li>
                                                    <NuxtLink to="/">Home Style - 01</NuxtLink>
                                                </li>
                                                <li>
                                                    <NuxtLink to="/">Home Style - 02</NuxtLink>
                                                </li>
                                                <li>
                                                    <NuxtLink to="/">Home Style - 03</NuxtLink>
                                                </li>
                                                <li>
                                                    <NuxtLink to="/">Home Style - 04</NuxtLink>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="menu-icon mega-menu-parent">
                                            <NuxtLink to="/">Pages</NuxtLink>
                                            <ClientOnly>
                                                <ul class="mega-menu">
                                                    <li>
                                                        <NuxtLink to="#">Inner Pages</NuxtLink>
                                                        <ul>
                                                            <li>
                                                                <NuxtLink to="about.html">About Us</NuxtLink>
                                                            </li>
                                                            <li>
                                                                <NuxtLink to="portfolio.html">Portfolio</NuxtLink>
                                                            </li>
                                                            <li>
                                                                <NuxtLink to="portfolio-2.html">Portfolio - 02</NuxtLink>
                                                            </li>
                                                            <li>
                                                                <NuxtLink to="portfolio-details.html">Portfolio Details
                                                                </NuxtLink>
                                                            </li>
                                                            <li>
                                                                <NuxtLink to="faq.html">FAQ</NuxtLink>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <NuxtLink to="#">Inner Pages</NuxtLink>
                                                        <ul>
                                                            <li>
                                                                <NuxtLink to="locations.html">Google Map Locations
                                                                </NuxtLink>
                                                            </li>
                                                            <li>
                                                                <NuxtLink to="404.html">404</NuxtLink>
                                                            </li>
                                                            <li>
                                                                <NuxtLink to="contact.html">Contact</NuxtLink>
                                                            </li>
                                                            <li>
                                                                <NuxtLink to="coming-soon.html">Coming Soon</NuxtLink>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <NuxtLink to="#">Shop Pages</NuxtLink>
                                                        <ul>
                                                            <li>
                                                                <NuxtLink to="shop.html">Shop</NuxtLink>
                                                            </li>
                                                            <li>
                                                                <NuxtLink to="shop-grid.html">Shop Grid</NuxtLink>
                                                            </li>
                                                            <li>
                                                                <NuxtLink to="shop-left-sidebar.html">Shop Left sidebar
                                                                </NuxtLink>
                                                            </li>
                                                            <li>
                                                                <NuxtLink to="shop-right-sidebar.html">Shop right sidebar
                                                                </NuxtLink>
                                                            </li>
                                                            <li>
                                                                <NuxtLink to="product-details.html">Shop details </NuxtLink>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <NuxtLink to="#">Blog Pages</NuxtLink>
                                                        <ul>
                                                            <li>
                                                                <NuxtLink to="blog.html">News</NuxtLink>
                                                            </li>
                                                            <li>
                                                                <NuxtLink to="blog-grid.html">News Grid</NuxtLink>
                                                            </li>
                                                            <li>
                                                                <NuxtLink to="blog-left-sidebar.html">News Left sidebar
                                                                </NuxtLink>
                                                            </li>
                                                            <li>
                                                                <NuxtLink to="blog-right-sidebar.html">News Right sidebar
                                                                </NuxtLink>
                                                            </li>
                                                            <li>
                                                                <NuxtLink to="blog-details.html">News details</NuxtLink>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </ClientOnly>

                                        </li>
                                        <li class="menu-icon">
                                            <NuxtLink to="/">Cửa Hàng</NuxtLink>
                                            <ul>
                                                <li>
                                                    <NuxtLink to="shop.html">Shop</NuxtLink>
                                                </li>
                                                <li>
                                                    <NuxtLink to="shop-grid.html">Shop Grid</NuxtLink>
                                                </li>
                                                <li>
                                                    <NuxtLink to="shop-left-sidebar.html">Shop Left sidebar</NuxtLink>
                                                </li>
                                                <li>
                                                    <NuxtLink to="shop-right-sidebar.html">Shop right sidebar</NuxtLink>
                                                </li>
                                                <li>
                                                    <NuxtLink to="product-details.html">Shop details </NuxtLink>
                                                </li>
                                                <li>
                                                    <NuxtLink to="#">Other Pages <span class="float-right">>></span>
                                                    </NuxtLink>
                                                    <ul>
                                                        <li>
                                                            <NuxtLink to="cart.html">Cart</NuxtLink>
                                                        </li>
                                                        <li>
                                                            <NuxtLink to="wishlist.html">Wishlist</NuxtLink>
                                                        </li>
                                                        <li>
                                                            <NuxtLink to="checkout.html">Checkout</NuxtLink>
                                                        </li>
                                                        <li>
                                                            <NuxtLink to="order-tracking.html">Order Tracking</NuxtLink>
                                                        </li>
                                                        <li>
                                                            <NuxtLink to="account.html">My Account</NuxtLink>
                                                        </li>
                                                        <li>
                                                            <NuxtLink to="login.html">Sign in</NuxtLink>
                                                        </li>
                                                        <li>
                                                            <NuxtLink to="register.html">Register</NuxtLink>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="menu-icon">
                                            <NuxtLink to="/">Portfolio</NuxtLink>
                                            <ul>
                                                <li>
                                                    <NuxtLink to="portfolio.html">Portfolio</NuxtLink>
                                                </li>
                                                <li>
                                                    <NuxtLink to="portfolio-2.html">Portfolio - 02</NuxtLink>
                                                </li>
                                                <li>
                                                    <NuxtLink to="portfolio-details.html">Portfolio Details</NuxtLink>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="menu-icon">
                                            <NuxtLink to="/">News</NuxtLink>
                                            <ul>
                                                <li>
                                                    <NuxtLink to="blog.html">News</NuxtLink>
                                                </li>
                                                <li>
                                                    <NuxtLink to="blog-grid.html">News Grid</NuxtLink>
                                                </li>
                                                <li>
                                                    <NuxtLink to="blog-left-sidebar.html">News Left sidebar</NuxtLink>
                                                </li>
                                                <li>
                                                    <NuxtLink to="blog-right-sidebar.html">News Right sidebar</NuxtLink>
                                                </li>
                                                <li>
                                                    <NuxtLink to="blog-details.html">News details</NuxtLink>
                                                </li>
                                            </ul>
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
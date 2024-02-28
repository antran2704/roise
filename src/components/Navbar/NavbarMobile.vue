<template>
    <div>
        <!-- Utilize Mobile Menu Start -->
        <div id="ltn__utilize-mobile-menu" class="ltn__utilize ltn__utilize-mobile-menu">
            <div class="ltn__utilize-menu-inner ltn__scrollbar">
                <div class="ltn__utilize-menu-head">
                    <div class="site-logo">
                        <NuxtLink to="/">
                            <img src="/img/logo.jpg" alt="Logo" title="Logo" width="auto" height="auto" loading="lazy" />
                        </NuxtLink>
                    </div>
                    <button class="ltn__utilize-close">×</button>
                </div>
                <div class="ltn__utilize-menu-search-form">
                    <form @submit.prevent="onSearch">
                        <input v-model.trim="searchText" type="text" placeholder="Tìm kiếm...">
                        <button @click="onSearch"><i class="icon-magnifier"></i></button>
                    </form>
                </div>
                <div class="ltn__utilize-menu">
                    <ul>
                        <li>
                            <a href="/">Trang Chủ</a>
                        </li>
                        <li>
                            <a href="/shop">Cửa Hàng</a>
                        </li>
                        <li>
                            <a href="/contact">Liên Hệ</a>
                        </li>
                    </ul>
                </div>
                <div class="ltn__social-media-2">
                    <ul>
                        <li><a href="#" title="Facebook"><i class="icon-social-facebook"></i></a></li>
                        <li><a href="#" title="Twitter"><i class="icon-social-twitter"></i></a></li>
                        <li><a href="#" title="Pinterest"><i class="icon-social-pinterest"></i></a></li>
                        <li><a href="#" title="Instagram"><i class="icon-social-instagram"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- Utilize Mobile Menu End -->

        <div class="ltn__utilize-overlay"></div>
    </div>
</template>

<script setup>
const router = useRouter();
const searchText = ref(null);



const onSearch = () => {
    if (!searchText.value) return;
    document.getElementById("ltn__utilize-mobile-menu").classList.remove("ltn__utilize-open");
    document.querySelector(".ltn__utilize-overlay").style.display = "none";
    document.querySelector(".ltn__utilize-toggle").classList.remove("close");

    router.replace({ path: '/shop', query: { search: searchText.value, page: 1 } })
    searchText.value = null;
}

</script>
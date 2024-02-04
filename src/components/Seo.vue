<template>
    <Head>
        <Title>{{ title }}</Title>
        <Link rel="canonical" :href="canonical" />
        <Meta name="description" :content="description" />

        <!-- Open Graph / Facebook -->
        <Meta property="og:type" content="website" />
        <Meta property="og:url" content="https://metatags.io/" />
        <Meta property="og:title" :content="title" />
        <Meta property="og:description" :content="description" />
        <Meta property="og:image" :content="picture" />

        <!-- Twitter -->
        <Meta property="twitter:card" content="summary_large_image" />
        <Meta property="twitter:url" content="https://metatags.io/" />
        <Meta property="twitter:title" :content="title" />
        <Meta property="twitter:description" :content="description" />
        <Meta property="twitter:image" :content="picture" />
    </Head>
</template>

<script setup>
    const props = defineProps(["canonical", "title", "description", "picture"]);
</script>
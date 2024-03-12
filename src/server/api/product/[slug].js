export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig(event);
  const slug = event.context.params.slug;

  const res = await $fetch(`${runtimeConfig.public.apiEndpoint}/product/slug/${slug}`);

  return res;
});

export function getConfig(item: string) {
  const config = useRuntimeConfig();
  return config.public[item];
}

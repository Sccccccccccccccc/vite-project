export const useImageUrl = (
  name: string | undefined,
  folder: string = 'img',
  type: string = 'png'
): string => {
  /**
   * @method vite动态引入图片
   * @params folder 文件夹名称 name 文件名称 type 文件格式 一般为png/jpg/webp/gif等...
   * @returns 图片
   */
  if (name === undefined) return ''
  return new URL(`../assets/${folder}/${name}.${type}`, import.meta.url).href
}

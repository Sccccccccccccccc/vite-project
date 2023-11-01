import { useMapStore } from '@/store/map'
import { toRefs } from 'vue'
const mapStore = useMapStore()
const { villageMap, mapInstance } = toRefs(mapStore)

export function useCellMoveIcon(id: number) {
  const iconItem = villageMap.value.find((r) => r.id === id)
  if (iconItem && mapInstance.value) {
    mapInstance.value.setZoomAndCenter(19, [iconItem.lon, iconItem.lat], false, 400)
  }
}

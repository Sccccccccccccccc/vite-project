import screenfull from 'screenfull'
import { ElMessage } from 'element-plus'
export default function () {
  if (!screenfull.isEnabled) {
    ElMessage({
      message: '您的浏览器暂不支持全屏Api',
      type: 'warning'
    })
    return false
  }
  screenfull.toggle()
}

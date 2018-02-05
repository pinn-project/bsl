// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import lodash from 'lodash'
import moment from 'vue-moment'
import JWToken from 'json-web-token'
import clipboard from 'vue-clipboard2'

import App from '~/App'
import i18n from '~/i18n'
import store from '~/store'
import router from '~/router'

// Call Style.
import '~/assets/style/iView/index.less'
import '~/assets/core.less'

// Call Component.
import InputGroup from '~/components/UIComponent/Other/input-group'
import Languages  from '~/components/UIComponent/Other/language'
import RowHead    from '~/components/layout/row-head'
import {
  Alert,
  Avatar,
  Badge,
  Button,
  Checkbox,
  Col,
  Content,
  DatePicker,
  Dropdown,
  Form,
  Header,
  Icon,
  Input,
  Layout,
  LoadingBar,
  Message,
  Modal,
  Notice,
  Option,
  Radio,
  Scroll,
  Select,
  Spin,
  Switch,
  Tag,
  Timeline,
  Row
} from 'iview'

const components = {
  Alert,
  Avatar,
  Badge,
  Button,
  ButtonGroup: Button.Group,
  Checkbox,
  Col,
  Content,
  DatePicker,
  Dropdown,
  DropdownItem: Dropdown.Item,
  DropdownMenu: Dropdown.Menu,
  Form,
  FormItem: Form.Item,
  Header: Header,
  Icon,
  Input,
  Layout: Layout,
  LoadingBar,
  Message,
  Modal,
  Notice,
  Option,
  Radio,
  RadioGroup: Radio.Group,
  Row,
  Spin,
  Select,
  Scroll,
  Tag,
  Timeline,
  TimelineItem: Timeline.Item,
  RowHead,
  Languages,
  InputGroup,
  iSwitch: Switch
}

// install components.
Object.keys(components).forEach(key => {
  Vue.component(key, components[key])
})

Vue.use(moment)
Vue.use(clipboard)
Vue.prototype.$uri      = 'tap.co/' // `${location.host}/`
Vue.prototype.$typeA    = 'TYPE.Authentication'
Vue.prototype.$secret   = 'H-I-M-I-T-S-U-K-E-N' // 秘密鍵
Vue.prototype.$lodash   = lodash
Vue.prototype.$jwt      = JWToken
Vue.prototype.$loading  = LoadingBar
Vue.prototype.$message  = Message
Vue.prototype.$modal    = Modal
Vue.prototype.$notice   = Notice

Vue.config.devtools = true
Vue.config.productionTip = false

window.app = new Vue({
  el: '#app',
  i18n,
  store,
  router,
  render: h => h(App)
})

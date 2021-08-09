import { Toast as vantToast, Notify as vantNotify } from 'vant'

const enumMsgType = {
  NONE: 0, // 不提示
  SUCCESS: 1, // 成功
  ERROR: 2, // 错误
  WARN: 3, // 警告
  INFO: 4, // 普通
  props: {
    0: {
    },
    1: {
      title: '成功',
      level: 'success',
      icon: 'success',
      duration: 3,
      isShowCode: false,
    },
    2: {
      title: '错误',
      level: 'danger',
      icon: 'cross',
      duration: 7,
      isShowCode: false,
    },
    3: {
      title: '警告',
      level: 'warning',
      icon: 'fail',
      duration: 5,
      isShowCode: false,
    },
    4: {
      title: '提示',
      level: 'primary',
      icon: '',
      duration: 5,
      isShowCode: false,
    },
  },
}

/**
 * @description 消息类
 * @property {Object} codes 消息码键值对
 * @property {Function} toast 弹出全局提示方法
 * @property {Function} notice 弹出通知提醒框方法
 */
const Msg = {
  install(Vue) {
    Vue.prototype.msg = this
  },
  // 键（消息码）
  // 值（数组）：[消息文案, 消息类型, 消息关闭延时（可选；单位：秒；0则不自动关闭）]
  codes: {
    // HTTP 状态码（xxx）
    401: ['未登录或登录已失效，请重新登录', enumMsgType.INFO],
    403: ['没有权限，请联系管理员', enumMsgType.WARN],
    500: ['系统错误，请联系管理员', enumMsgType.ERROR],
    // Java 基础错误（11xx）
    1103: ['参数错误', enumMsgType.ERROR],
    1111: ['登录失效，请重新登录', enumMsgType.INFO],
    // 前端（xxxxx）
    10001: ['操作成功', enumMsgType.SUCCESS],
    10002: ['删除成功', enumMsgType.SUCCESS],
    20001: ['获取用户信息失败', enumMsgType.ERROR],
    90001: ['请求失败，请求超时', enumMsgType.ERROR],
    90002: ['请求失败，网络错误', enumMsgType.ERROR],
    99999: ['未知错误，请联系管理员', enumMsgType.ERROR],
    // Java 业务错误（xxxxxx）
  },

  /**
   * @description 弹出全局提示
   * @param {Number} code 消息码字符串，如：'100001'
   * @param {String} defaultMessage 未匹配到消息码时的提示信息
   * @param {Function} onClose 关闭时触发的回调函数
   * @dependency vant
   */
  toast: (code, defaultMessage, onClose = () => {}) => {
    let msg = Msg.codes[code]
    let msgSuffix = ` (${code})`
    if (msg) {
      let [msgText, msgType] = msg
      let msgTypeProps = enumMsgType.props[msgType]
      if (msgType) {
        vantToast({
          message: msgTypeProps.isShowCode ? msgText + msgSuffix : msgText,
          icon: msgTypeProps.icon,
          duration: msgTypeProps.duration,
          onClose,
        })
      }
    } else if (defaultMessage) {
      let msgTypeProps = enumMsgType.props[enumMsgType.ERROR]
      vantToast({
        message: defaultMessage + msgSuffix,
        icon: msgTypeProps.icon,
        duration: msgTypeProps.duration,
        onClose,
      })
    } else {
      Msg.toast(99999)
    }
  },

  /**
   * @description 弹出通知提醒框
   * @param {number} code 消息码字符串，如：'100001'
   * @param {String} defaultMessage 未匹配到消息码时的提示信息
   * @param {Function} onClose 点击默认关闭按钮时触发的回调函数
   * @param {Function} onClick 点击通知时触发的回调函数
   * @dependency vant
   */
  notice: (code, defaultMessage, onClose = () => {}, onClick = null) => {
    let msg = Msg.codes[code]
    let msgSuffix = ` (${code})`
    if (msg) {
      let [msgText, msgType, msgDuration] = msg
      let msgTypeProps = enumMsgType.props[msgType]
      if (msgType) {
        vantNotify({
          type: msgTypeProps.level,
          message: msgTypeProps.isShowCode ? msgText + msgSuffix : msgText,
          duration: msgDuration ? msgDuration === -1 ? null : msgDuration : msgTypeProps.duration,
          onClose,
          onClick,
        })
      }
    } else if (defaultMessage) {
      let msgTypeProps = enumMsgType.props[enumMsgType.ERROR]
      vantNotify({
        type: msgTypeProps.level,
        message: defaultMessage + msgSuffix,
        duration: msgTypeProps.duration,
        onClose,
        onClick,
      })
    } else {
      Msg.toast(99999)
    }
  },
}

export default Msg

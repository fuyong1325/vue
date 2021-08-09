// 状态
export default {
  ENABLED: 1,
  DISABLED: 2,
  props: {
    1: {
      text: '已启用',
      textInForm: '启用',
      shelfText: '已上架',
      shelfTextInForm: '上架',
      badgeStatus: 'success',
    },
    2: {
      text: '已禁用',
      textInForm: '禁用',
      shelfText: '已下架',
      shelfTextInForm: '下架',
      badgeStatus: 'default',
    },
  },
}

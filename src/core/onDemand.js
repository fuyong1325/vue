import Vue from 'vue'

// Vant（请根据文档顺序书写）
import {
  // 基础组件
  // Button, // 按钮
  // Cell, // 单元格
  // CellGroup, // 单元格
  // Icon, // 图标
  // Image, // 图片
  // Row, // 布局行
  // Col, // 布局列
  // Popup, // 弹出层
  Toast, // 轻提示

  // 表单组件
  // Calendar, // 日历
  // Cascader, // 级联选择
  // Checkbox, // 复选框
  // CheckboxGroup, // 复选框组
  // DatetimePicker, // 时间选择
  // Field, // 输入框
  // Form, // 表单
  // NumberKeyboard, // 数字键盘
  // PasswordInput, // 密码输入框
  // Picker, // 选择器
  // Radio, // 单选框
  // RadioGroup, // 单选框组
  // Rate, // 评分
  // Search, // 搜索
  // Slider, // 滑块
  // Stepper, // 步进器
  // Switch, // 开关
  // Uploader, // 文件上传

  // 反馈组件
  // ActionSheet, // 动作面板
  // Dialog, // 弹出框
  // DropdownMenu, // 下拉菜单
  // DropdownItem, // 下拉菜单项
  // Loading, // 加载
  Notify, // 消息通知
  // Overlay, // 遮罩层
  // PullRefresh, // 下拉刷新
  // ShareSheet, // 分享面板
  // SwipeCell, // 滑动单元格

  // 展示组件
  // Badge, // 徽标
  // Circle, // 环形进度条
  // Collapse, // 折叠面板
  // CollapseItem, // 折叠面板项
  // CountDown, // 倒计时
  // Divider, // 分割线
  Empty, // 空状态
  // ImagePreview, // 图片预览
  // Lazyload, // 懒加载
  // List, // 列表
  // NoticeBar, // 通知栏
  // Popover, // 气泡弹出框
  // Progress, // 进度条
  // Skeleton, // 骨架屏
  // Steps, // 步骤条
  // Step, // 步骤
  // Sticky, // 粘性布局
  // Swipe, // 轮播
  // SwipeItem, // 轮播项
  // Tag, // 标签

  // 导航组件
  // Grid, // 宫格
  // GridItem, // 宫格项
  // IndexBar, // 索引栏
  // IndexAnchor, // 索引锚点
  // NavBar, // 导航栏
  // Pagination, // 分页
  // Sidebar, // 侧边导航
  // SidebarItem, // 侧边导航项
  // Tabs, // 标签页
  // Tab, // 标签页项
  // Tabbar, // 标签栏
  // TabbarItem, // 标签栏项
  // TreeSelect, // 分类选择

  // 业务组件
  // AddressEdit, // 地址编辑
  // AddressList, // 地址列表
  // Area, // 省市区选择
  // Card, // 商品卡片
  // ContactCard, // 联系人卡片
  // ContactEdit, // 联系人编辑
  // ContactList, // 联系人列表
  // CouponCell, // 优惠券单元格
  // CouponList, // 优惠券列表
  // GoodsAction, // 商品导航
  // GoodsActionIcon, // 商品导航图标
  // GoodsActionButton, // 商品导航按钮
  // SubmitBar, // 提交订单栏
  // Sku, // 商品规格
} from 'vant'

// 基础组件
// Vue.use(Button) // 按钮
// Vue.use(Cell) // 单元格
// Vue.use(CellGroup) // 单元格组
// Vue.use(Icon) // 图标
// Vue.use(Image) // 图片
// Vue.use(Row) // 布局行
// Vue.use(Col) // 布局列
// Vue.use(Popup) // 弹出层
Vue.use(Toast) // 轻提示

// 表单组件
// Vue.use(Calendar) // 日历
// Vue.use(Cascader) // 级联选择
// Vue.use(Checkbox) // 复选框
// Vue.use(CheckboxGroup) // 复选框组
// Vue.use(DatetimePicker) // 时间选择
// Vue.use(Field) // 输入框
// Vue.use(Form) // 表单
// Vue.use(NumberKeyboard) // 数字键盘
// Vue.use(PasswordInput) // 密码输入框
// Vue.use(Picker) // 选择器
// Vue.use(Radio) // 单选框
// Vue.use(RadioGroup) // 单选框组
// Vue.use(Rate) // 评分
// Vue.use(Search) // 搜索
// Vue.use(Slider) // 滑块
// Vue.use(Stepper) // 步进器
// Vue.use(Switch) // 开关
// Vue.use(Uploader) // 文件上传

// 反馈组件
// Vue.use(ActionSheet) // 动作面板
// Vue.use(Dialog) // 弹出框
// Vue.use(DropdownMenu) // 下拉菜单
// Vue.use(DropdownItem) // 下拉菜单项
// Vue.use(Loading) // 加载
Vue.use(Notify) // 消息通知
// Vue.use(Overlay) // 遮罩层
// Vue.use(PullRefresh) // 下拉刷新
// Vue.use(ShareSheet) // 分享面板
// Vue.use(SwipeCell) // 滑动单元格

// 展示组件
// Vue.use(Badge) // 徽标
// Vue.use(Circle) // 环形进度条
// Vue.use(Collapse) // 折叠面板
// Vue.use(CollapseItem) // 折叠面板项
// Vue.use(CountDown) // 倒计时
// Vue.use(Divider) // 分割线
Vue.use(Empty) // 空状态
// Vue.use(ImagePreview) // 图片预览
// Vue.use(Lazyload) // 懒加载
// Vue.use(List) // 列表
// Vue.use(NoticeBar) // 通知栏
// Vue.use(Popover) // 气泡弹出框
// Vue.use(Progress) // 进度条
// Vue.use(Skeleton) // 骨架屏
// Vue.use(Steps) // 步骤条
// Vue.use(Step) // 步骤
// Vue.use(Sticky) // 粘性布局
// Vue.use(Swipe) // 轮播
// Vue.use(SwipeItem) // 轮播项
// Vue.use(Tag) // 标签

// 导航组件
// Vue.use(Grid) // 宫格
// Vue.use(GridItem) // 宫格项
// Vue.use(IndexBar) // 索引栏
// Vue.use(IndexAnchor) // 索引锚点
// Vue.use(NavBar) // 导航栏
// Vue.use(Pagination) // 分页
// Vue.use(Sidebar) // 侧边导航
// Vue.use(SidebarItem) // 侧边导航项
// Vue.use(Tabs) // 标签页
// Vue.use(Tab) // 标签页项
// Vue.use(Tabbar) // 标签栏
// Vue.use(TabbarItem) // 标签栏项
// Vue.use(TreeSelect) // 分类选择

// 业务组件
// Vue.use(AddressEdit) // 地址编辑
// Vue.use(AddressList) // 地址列表
// Vue.use(Area) // 省市区选择
// Vue.use(Card) // 商品卡片
// Vue.use(ContactCard) // 联系人卡片
// Vue.use(ContactEdit) // 联系人编辑
// Vue.use(ContactList) // 联系人列表
// Vue.use(CouponCell) // 优惠券单元格
// Vue.use(CouponList) // 优惠券列表
// Vue.use(GoodsAction) // 商品导航
// Vue.use(GoodsActionIcon) // 商品导航图标
// Vue.use(GoodsActionButton) // 商品导航按钮
// Vue.use(SubmitBar) // 提交订单栏
// Vue.use(Sku) // 商品规格

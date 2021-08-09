import enumStatus from './enumStatus'

export default {
  enumStatus,
}

export const mapEnumPropsToOptions = (props) => {
  return Object.keys(props).map((key) => {
    return { value: parseInt(key), label: props[key].text, needI18N: true }
  })
}

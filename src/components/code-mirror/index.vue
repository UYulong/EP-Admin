<template>
  <!-- Code Mirror 代码展示 -->
  <!--
    @change="log('change', $event)"
    @focus="log('focus', $event)"
    @blur="log('blur', $event)"

   -->
  <codemirror
    v-model="codeHTML"
    :style="styleObj"
    :placeholder="placeholder"
    :tab-size="tabSize"
    :disabled="disabled"
    :autofocus="autofocus"
    :indent-with-tab="indentWithTab"
    :phrases="phrases === 'en-us' ? {} : germanPhrases"
    :extensions="extensions"
    @ready="handleReady"
  />
</template>

<script lang="ts" setup name='CodeMirror'>
import { Codemirror } from 'vue-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import { oneDark } from '@codemirror/theme-one-dark'
import { html } from '@codemirror/lang-html'
import { json } from '@codemirror/lang-json'
import { markdown } from '@codemirror/lang-markdown'

// 定义更新事件
const emit = defineEmits<{
  (e: 'update:modelValue', v: string): void
}>()

// 定义接口属性
interface PropsModel {
  modelValue: string,
  height: number,
  disabled?: boolean
  indentWithTab?: boolean
  tabSize?: number
  autofocus?: boolean
  placeholder?: string
  backgroundColor?: string
  language?: string
  theme?: string
  phrases?: string
}

// 接收属性
const props = withDefaults(defineProps<PropsModel>(), {
  code: '',
  height: 50,
  disabled: true,
  indentWithTab: true,
  tabSize: 4,
  autofocus: true,
  placeholder: 'Code goes here...',
  backgroundColor: 'black',
  language: 'javascript',
  theme: 'oneDark',
  phrases: 'en-us'
})

// 样式计算
const { height, backgroundColor } = toRefs(props)
const styleObj = reactive({
  height: height.value + 'px',
  backgroundColor
})

// 扩展 设置主题和插件
const { language, theme } = toRefs(props)
const themes: any = { oneDark }
const languages: any = {
  javascript: javascript(),
  html: html(),
  json: json(),
  markdown: markdown()
}
const extensions = computed(() => {
  const res = []
  res.push(languages[language.value])
  if (themes[theme.value]) {
    res.push(themes[theme.value])
  }
  return res
})
const germanPhrases = {
    // @codemirror/view
    'Control character': 'Steuerzeichen',
    // @codemirror/commands
    'Selection deleted': 'Auswahl gelöscht',
    // @codemirror/language
    'Folded lines': 'Eingeklappte Zeilen',
    'Unfolded lines': 'Ausgeklappte Zeilen',
    to: 'bis',
    'folded code': 'eingeklappter Code',
    unfold: 'ausklappen',
    'Fold line': 'Zeile einklappen',
    'Unfold line': 'Zeile ausklappen',
    // @codemirror/search
    'Go to line': 'Springe zu Zeile',
    go: 'OK',
    Find: 'Suchen',
    Replace: 'Ersetzen',
    next: 'nächste',
    previous: 'vorherige',
    all: 'alle',
    'match case': 'groß/klein beachten',
    'by word': 'ganze Wörter',
    replace: 'ersetzen',
    'replace all': 'alle ersetzen',
    close: 'schließen',
    'current match': 'aktueller Treffer',
    'replaced $ matches': '$ Treffer ersetzt',
    'replaced match on line $': 'Treffer on Zeile $ ersetzt',
    'on line': 'auf Zeile',
    // @codemirror/autocomplete
    Completions: 'Vervollständigungen',
    // @codemirror/lint
    Diagnostics: 'Diagnosen',
    'No diagnostics': 'Keine Diagnosen'
}

// 对 Codemirror 实例的引用
const view = shallowRef()
// 存储一份组件实例
const handleReady = (payload: any) => {
  view.value = payload.view
}

// 数据绑定
const codeHTML = computed({
  get() {
    return props.modelValue
  },
  set(v) {
    emit('update:modelValue', v)
  }
})
/* let code = ref('')

watchEffect(() => {
  if (props.modelValue) {
    code.value = props.modelValue
  }
}) */

// 打印事件参数
// const log = console.log
</script>

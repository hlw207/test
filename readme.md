# l23o6-frontend

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and
disable
Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### 相关规范
+ 组件的命名方式尽量为 camelCase （驼峰式 ）形式
+ 每一个组件结构为如下所示
```
<script setup lang="ts">
</script>

<template>
</template>

<style scoped>
</style>
```
+ 对于每一个路径界面，格式应为如下所示,例如/user界面
```
- pages
  - user
    - index.vue
    - information    # /user/information界面
      - index.vue
      - components
        - informationComponents.vue
    - components
      - userComponent.vue
```
+ components里面为通用组件，如果需要改变和添加，请和和大家讨论（可能一动都会出问题
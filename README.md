Heading

# H1

## H2

### H3

Bold **bold text**

Italic _italicized text_

Blockquote > blockquote

Ordered List

1. First item
2. Second item
3. Third item

Unordered List

- First item
- Second item
- Third item

Code `code`

```
{
"firstName": "John",
"lastName": "Smith",
"age": 25
}
```

```diff
## git diff a/test.txt b/test.txt
diff --git a/a/test.txt b/b/test.txt
index 309ee57..c995021 100644
--- a/a/test.txt
+++ b/b/test.txt
@@ -1,8 +1,6 @@
-The quick brown fox jumps over the lazy dog
+The quick brown fox jumps over the lazy cat

 a
-b
 c
 d
-e
 f
```

```diff
- Text in Red
+ Text in Green
! Text in Orange
# Text in Gray
@@ Text in Purple and bold @@
```

> [!NOTE]
> Essential details that users should not overlook, even when browsing quickly.

> [!TIP]
> Additional advice to aid users in achieving better outcomes.

> [!IMPORTANT]
> Vital information required for users to attain success.

> [!WARNING]
> Urgent content that requires immediate user focus due to possible risks.

> [!CAUTION]
> Possible negative outcomes resulting from an action.

$\color{Aquamarine}{The\ quick\ brown\ fox\ jumps\ over\ the\ lazy\ dog.}$

Horizontal Rule ---

Link [title](https://www.example.com)

Image ![alt text](image.jpg)

    I need to highlight these ==very important words==.

# vue-masterclass-2024

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

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

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

# Folder Structure

```
vscode --> Config Files Relevent to Project
node_modules --> Project dependencies
public --> handles website's static assests without any changes duing build process and without going through compilation process
src --> Main hub where all actions happens, containing sub directories to diff parts of apps
assets --> Stores  images/fonts & static files
components --> Building reusable components
router --> directory for vue router
stores --> State management
views --> Holds main views/pages what user will see
src\main.ts --> Initialize Vue app, importing all necessary pieces and gets things running.
index.html --> References main.ts directly in documents body, kicking off vue app
```

```
Interesting Home Page Inspiration
https://patorjk.com/software/taag/#p=display&f=Graffiti&t=Type%20Something%20
Text Art


https://izacfe.github.io/izac-dev
https://github.com/IzacFE/izacFe.github.io/blob/main/index.html
```

### Env Example

.env.example
Serves as placeholder file with all the necessary env key and sample values needed in a project .env to start up

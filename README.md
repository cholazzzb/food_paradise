# food_paradise

## NOTES

1. Developed in macOS
2. this code using eslint, prettier, typescript, git hook to make sure only high quality code are in the production.
3. There is a small amount of testing and custom tools in scripts folder to generate all icon component to improve help Developer Experience and developing pace.
4. There is a small amount of docs on `./docs` folder for you to read 

## To develop
1. install
```bash
yarn install
```

2. running on local machine
```bash
yarn dev
```

## Features
1. See menu from all merchants
2. Add multiple Items from multiple merchants to basket
3. (Additional Feature) Delete Item from basket
4. See all menu in the basket

## Stacks
- Runtime
    - React 18
    - Next.js 13
- State Management
    - Zustand
- Style
    - PandaCSS 
    - Design System: [moon](https://www.figma.com/community/file/1002945721703152933/Moon-Design-System)
- Static Check
    - eslint
    - prettier
- Test
    - Vitest
- Docs
    - [Mermaid.js](https://mermaid.js.org)
- Others
    - Git hook with husky & lint staged
    - [better-commits](https://github.com/Everduin94/better-commits)

## Project structure
```
root
|_.husky -> git hook script (before commit and push)
|_.temp -> generated js file to generate mock data (generated)
|_docs -> documentation written in mermaidjs
|_readme -> file related to this file
|_s3-dummy -> mock served files(img, etc...) on Github like Amazon S3 
|_scripts -> ts script such as mock data generator and custom tools.
|_src -> main source code for the web app and dummy backend
    |___generated__ -> generated file such as pandacss and mock data
    |_app -> page route and backend mock api, any UI related code, e.g. custom features, pandacss components, recipes
    |_domains -> any logic related code for each feature/domain
        |_[domain_name]
            |_contract.ts -> contract for the api between frontend and backend
            |_entity.ts -> type for the domain
            |_hook.ts -> use case for each domain
            |_logic.ts -> code that heavy on logic written in pure function
            |_logic.test.ts -> testing logic
            |_service.ts -> code to call backend api
            |_store.ts -> code to save about data on localstorage / shared state
    |_shared -> any general shared logic code
|_...etc -> config files for eslint, prettier, typescript, pandacss, etc
```

## To see and create docs
1. Please install Markdown Preview Mermaid Support Extension on Visual Code
2. Open `./docs/**/md` file
3. [macOS] command+shift+v or click preview button on right tabs (see the red circle below)
![Open Readme](/readme/open-readme.png?raw=true 'Open Readme')


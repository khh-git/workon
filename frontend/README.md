Frontend setup:

run npm i react
run npm i react-dom

run npm i typescript --save-dev
run tsc --init
tsconfig noEmit:true & isolatedModules:true
run npm i -D @types/react @types/react-dom
tsconfig lib:[es2020, dom] & jsx:preserve

npm i -D vite
npm i @vitejs/plugin-react (
uses SWC for JSX transpilation escaping manual config using babel or esbuild(default),
auto import React,
faster react refresh
)
vite.config plugins: [react()]
vite-env.d.ts file in src

npm install tailwindcss @tailwindcss/vite
tsconfig module:'es2020', moduleResolution: 'bundler'

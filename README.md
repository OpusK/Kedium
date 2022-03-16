# Kedium
Cloning Medium 2.0 with next.js ([Sonny Sangha's youtube](https://youtu.be/I2dcpatq54o))

## Create example
```bash
npx create-next-app --example with-tailwindcss Kedium
```
- install node packages
  - tailwindcss
  - [react-portable-text](https://www.npmjs.com/package/react-portable-text)
  - [react-hook-form](https://react-hook-form.com/get-started)

## Run example
```bash
npm run dev
```

## Prepare for using sanity
- install sanity ([PAPAFAM boosted free plan](https://www.sanity.io/sonny))
  ```bash
  npm install -g @sanity/cli
  npm install next-sanity
  npm install --save @sanity/image-url
  npm install @sanity/client
  ```
- Create project on sanity.io
```bash
sanity init --coupon sonny2022   # thank you Sangha

? Login type GitHub
? Project name: Kedium
? Use the default dataset configuration? Yes
✔ Creating dataset
? Project output path: D:\source\frontend\Kedium\kedium
? Select project template Blog (schema)
```
- Create sanity.js file in root
```
touch sanity.js
```
- Run sanity studio locally
```bash
cd kedium  # sanity installed folder
sanity start
```
- Enter localhost page & Login
- Write Author & Post
  - refer to `kedium/schemas/*` codes
- Test query in Vision tab
  - example query
    ```
    *[_type == "post"] {
      _id,
      title,
      slug,
      author -> {
        name,
        image
      }
    }
    ```


---

# Next.js + Tailwind CSS Example

This example shows how to use [Tailwind CSS](https://tailwindcss.com/) [(v3.0)](https://tailwindcss.com/blog/tailwindcss-v3) with Next.js. It follows the steps outlined in the official [Tailwind docs](https://tailwindcss.com/docs/guides/nextjs).

## Preview

Preview the example live on [StackBlitz](http://stackblitz.com/):

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/with-tailwindcss)

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss&project-name=with-tailwindcss&repository-name=with-tailwindcss)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example with-tailwindcss with-tailwindcss-app
# or
yarn create next-app --example with-tailwindcss with-tailwindcss-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

# Nuxt 에서 정적 이미지 파일

root/public/images 내부에 두어 파일 변형이 일어나지 않게 하고 불러올 시 '/images'로 시작하는 URL을 사용할 수 있도록 하거나

root/src/assets/images 내부에 두어 번들링 시 같이 되도록 하여 js단에서 파일에 대한 접근이 필요할 경우 유용

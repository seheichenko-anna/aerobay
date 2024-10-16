# 🛩️ AeroBay (frontend)

![image](https://github.com/user-attachments/assets/02ed76a7-5eaa-40c7-a245-ae5e3db1155e)

## 🎒 Production

Before pushing changes to the main branch (which triggers the build process for deployment to GitHub Pages), it's recommended to run a local build check to ensure everything compiles correctly. This step helps prevent build errors from reaching the deployment stage.

```bash
npm run build
```

If the project is built successfully, pull a request to the main branch 🤝

> [!Note]
> If you're using another package manager like PNPM or Yarn, ensure that the npm lock file is synced, as it is required for deployment!

```bash
# sync package-lock.json for deployment
npm install
```

## 🔧 Development

```shell
npm run dev
```

## 🧪 Tech Stack

- TypeScript
- React
- Redux Toolkit
- Vite

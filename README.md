# Spotify Music Search

## デモページ

https://quizzical-dubinsky-53f36f.netlify.app/

## 技術要件
```
・VueCLI v4.5.9
・Tailwindcss v2.0.1-compat
・axios v0.21.1
・vuex v3.6.0
・vuejs-paginate v2.1.0
```

## Setting
ソースコードをCLONEした場合は、`./setting/setting.js` に以下のように `CLIENT_ID` と `CLIENT_SECRET` を設置する必要があります。

```
const CLIENT_ID = 'ご自身で取得したクライアントID'
const CLIENT_SECRET = 'ご自身で取得したクライアントSECRET'

export default { CLIENT_ID, CLIENT_SECRET }
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

#### アプリ使用上の注意
アクセストークン取得を簡易化しているため、APIのアクセストークンは６０分です。
アプリを再度リロードして頂けると再取得しますので、リロードして下さい。
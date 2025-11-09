<!--
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Internationalization (JA/EN with next-intl)

- Default locale: `ja` (Japanese). English available at `/en`.
- Language routes are statically exported to `/ja` and `/en`.
- Language switcher is in the navbar; the root path `/` redirects to `/ja`.

Tech details:

- Messages live in `messages/ja.json` and `messages/en.json`.
- Provider lives in `app/[locale]/layout.tsx` via `NextIntlClientProvider`.
- Pages under `app/[locale]` use `useTranslations` and `useLocale`.
- `next-intl` plugin is enabled in `next.config.ts`.

### GitHub Pages

This repo is set up to deploy to GitHub Pages via `.github/workflows/nextjs.yml`.

- If deploying to a project site (e.g. `/owner/repo`), the Pages action auto-injects a basePath; no manual change needed.
- For local builds that mimic a project base path, set `NEXT_PUBLIC_BASE_PATH`:

```bash
NEXT_PUBLIC_BASE_PATH=/utokyo-qff-2025 npm run build
```

Output lives in `out/` and can be served via `npm run preview`.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
-->

# UTokyo Qiskit Fall Fest 2025

## Winners!!
- 1位 : [Q-Bitcoin](https://github.com/Yut702/q-bitcoin)
- 2位 : [繋がろう！心の量子友達](https://github.com/Nevaseme/Connect-Quantum-Soulmate)
- 3位 : [QuRL](https://github.com/king-p3nguin/utokyo-qiskit-fall-fest-2025-qurl)



## ハッカソンを始める前の事前準備について
### ハッカソンで使用するQiskitの環境構築  
環境構築の詳しい方法については、こちらのサイト：[Quantum Tokyo](https://quantum-tokyo.github.io/introduction/intro.html) を参照してください。
Quantum Tokyo内の、[Qiskitの始め方](https://quantum-tokyo.github.io/introduction/get_started.html)について
1. Qiskitの環境構築  
   1.1 Webブラウザー経由の使用
2. IBMの量子コンピュータの始め方  
   2.1 IBM Quantum アカウントの設定〜先生・学生バージョン  
   2.2 IBM Quantum 実デバイスで実行する手順
    
までを、Day1(11/1)までに実行して、環境を用意してください。

>[!Important]    
>* 今回のハッカソンではWebブラウザー経由でQiskitを使用する方法として、**qBraid Lab**の使用を推奨しています。ただし、Qiskitをご自身のパソコンにインストールして使用して頂いても構いません。
>* **実デバイスの使える時間には制限があります**。そのため、事前準備で2.2以降の作業を実デバイスで行わないようにお願いします。


## ハッカソンの流れ
今回のハッカソンでは、チーム開発をしていただきます。各チームはそれぞれのテーマ(以下プロンプトと呼びます)に沿って開発を行い、最終日にその成果を発表していただきます。発表内容に基づき審査を行い、各チームで成果を競い合います。  
### スケジュールについて 
| 日付  | 内容 |
:-------|:--------:
| 10/25 | プロンプト募集開始 |
|       | チーミング期間  |
| 11/1  | チーム最終決定・開発スタート |
|       | 開発期間 |
| 11/8  | 発表・審査 |
  
### プロンプトの提案方法について  
各チームで行うプロンプトは参加者から募集しています。  
- **提案方法**  
このリポジトリ内の[Issues](https://github.com/Qiskit-Fall-Fest-UT/utokyo-qff-2025/issues)から、具体的なプロンプトとソリューションを記入してご提出ください。(※ Issuesの詳しい記述方法は、Organizerが用意したテンプレートをご参照ください。)

- **参考資料**  
  - プロンプトのイメージ : [資料](https://github.com/Qiskit-Fall-Fest-UT/utokyo-qff-2025/blob/main/lectures/prompt/プロンプト紹介資料_共有用.pdf)  
  - IBMから提供されたプロンプト案 : [prompt](https://github.com/Qiskit-Fall-Fest-UT/utokyo-qff-2025/tree/main/lectures/prompt)

### チーミングについて
4〜6人で1チームを編成します。Issuesで挙げられたプロンプトの中で、自分が面白そうと思うものに参加表明してください。参加表明は各Issuesのコメントを通して行うことができます。韓国で行われたハッカソンでの[表明方法](https://github.com/qiskit-community/qiskit-hackathon-korea-22/issues/5)を参考にしてください。

### 審査基準について
ハッカソン最終日(11/8)の午後、各チームによる成果発表会を行います。発表は日本語または英語によるプレゼンテーション形式です。この発表内容に基づき、以下の評価基準に沿って審査が行われ、優秀チームが選出されます。**詳細な発表時間は追って連絡します。**  

**評価基準**  
- 独創性・新規性 (30%)
- 有用性(社会・コミュニティへのインパクト) (30%)
- 技術性(科学的インパクト) (30%)
- プレゼンテーション (10%)



import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({locale}) => {
  // Ensure only supported locales are used
  const supported = ['ja', 'en'] as const;
  const l: (typeof supported)[number] = supported.includes(locale as any)
    ? (locale as (typeof supported)[number])
    : 'ja';

  const messages = (await import(`../messages/${l}.json`)).default;
  return {locale: l, messages};
});

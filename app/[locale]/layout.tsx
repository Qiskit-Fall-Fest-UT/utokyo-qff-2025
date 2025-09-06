import type {Metadata} from 'next';
import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
import '../globals.css';

export const metadata: Metadata = {
  title: 'UTokyo Qiskit Fall Fest 2025',
  description: 'UTokyo QFF 2025 official site'
};

export function generateStaticParams() {
  return [{locale: 'ja'}, {locale: 'en'}];
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const {locale} = await params;

  let messages: Record<string, unknown>;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default as Record<string, unknown>;
  } catch {
    notFound();
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages} timeZone="Asia/Tokyo">
      {children}
    </NextIntlClientProvider>
  );
}

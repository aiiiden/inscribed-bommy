import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mint | Inscribed Bommy',
};

export default async function MintLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}

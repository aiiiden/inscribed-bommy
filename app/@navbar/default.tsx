'use server';

import Link from 'next/link';

import BommyFace from '@/components/shared/bommy-face';
import { buttonVariants } from '@/components/ui/button';

export default async function DefaultNavbar() {
  const linkClass = buttonVariants({
    variant: 'outline',
    size: 'sm',
  });

  return (
    <nav className="flex flex-col items-center justify-between gap-4 sm:flex-row sm:gap-10">
      <Link
        className="flex w-full items-center justify-center gap-3 rounded-xl bg-white px-3 py-1.5 sm:w-fit"
        href="/"
      >
        <BommyFace size={54 / 1.5} />
        <h1 className="font-bold tracking-tight">Inscribed Bommy</h1>
      </Link>
      <menu className="flex items-center gap-4">
        <li>
          <Link href="/mint" className={linkClass}>
            Mint
          </Link>
        </li>
        {/* <li>
          <Link href="/" className={linkClass}>
            Dashboard
          </Link>
        </li> */}
      </menu>
    </nav>
  );
}

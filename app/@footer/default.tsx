'use server';

import { GitHubLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

import { Button, buttonVariants } from '@/components/ui/button';

export default async function DefaultFooter() {
  return (
    <footer className="flex flex-col items-center justify-center gap-4 sm:flex-row">
      <div className="flex items-center justify-center gap-2">
        <Link
          className={buttonVariants({
            variant: 'ghost',
            size: 'icon',
          })}
          href={`https://github.com/aiiiden`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubLogoIcon className="h-6 w-6" />
          <span className="sr-only">GitHub</span>
        </Link>
        <Link
          className={buttonVariants({
            variant: 'ghost',
            size: 'icon',
          })}
          href={`https://x.com/aiiiden0`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-3xl">𝕏</span>
        </Link>
      </div>

      <p className="text-xs font-bold text-gray-600">Created by @aiiiden0</p>
    </footer>
  );
}

'use client';

export function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-svh w-full items-center py-10">{children}</div>
  );
}

export function Layout({
  children,
  navbar,
  footer,
}: {
  children: React.ReactNode;
  navbar: React.ReactNode;
  footer: React.ReactNode;
}) {
  return (
    <div className="container">
      <div className="flex flex-col gap-4">
        <div className="mx-auto w-full max-w-screen-md">{navbar}</div>
        <div className="mx-auto w-full max-w-screen-md rounded-xl border-2 bg-white p-4">
          {children}
        </div>
        <div>{footer}</div>
      </div>
    </div>
  );
}

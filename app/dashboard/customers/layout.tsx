import Link from 'next/link';
import React from 'react';

export default function Layout({
  children,
  analytics,
  teams,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  teams: React.ReactNode;
}) {
  return (
    <>
      <nav>
        <Link href="/dashboard/customers" className='text-blue-400'>Customers</Link>&nbsp;
        <Link href="/dashboard/customers/settings" className='text-blue-400'>Customers Settings</Link>
      </nav>
      {children}
      {analytics}
      {teams}
    </>
  );
}

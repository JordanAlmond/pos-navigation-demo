import { redirect } from '@remix-run/node';
import type { LoaderFunction } from '@remix-run/node';
import { Outlet } from '@remix-run/react';

export default function PatternsLayout () {
  return <Outlet />
}; 
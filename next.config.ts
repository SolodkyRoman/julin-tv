import type { NextConfig } from 'next';
import { PHASE_PRODUCTION_BUILD } from 'next/constants';

const nextConfig = (phase: string): NextConfig => ({
  /* config options here */
  output: 'export',
  basePath: phase === PHASE_PRODUCTION_BUILD ? '/julin-tv' : undefined,
  assetPrefix: phase === PHASE_PRODUCTION_BUILD ? '/julin-tv' : undefined,
});

export default nextConfig;

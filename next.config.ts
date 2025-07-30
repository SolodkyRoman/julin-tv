import type { NextConfig } from 'next';

const nextConfig = (): NextConfig => ({
  output: 'export',
  // gh default url support
  // basePath: phase === PHASE_PRODUCTION_BUILD ? '/julin-tv' : undefined,
  // assetPrefix: phase === PHASE_PRODUCTION_BUILD ? '/julin-tv' : undefined,
});

export default nextConfig;

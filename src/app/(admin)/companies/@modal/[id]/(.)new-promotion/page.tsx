'use client';

import React, { use } from 'react';
import { useRouter } from 'next/navigation';
import PromotionFormModal from '@/app/components/promotion-form-modal';

export interface PageProps {
  params: Promise<{ id: string }>;
}

export default function Page({ params }: PageProps) {
  const router = useRouter();
  const unwrappedParams = use(params);
  return (
    <PromotionFormModal
      companyId={unwrappedParams.id}
      show={true}
      onClose={() => router.back()}
    />
  );
}

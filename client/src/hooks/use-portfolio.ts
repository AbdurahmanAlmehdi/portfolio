import { useState, useCallback } from 'react';
import { apps, packages, companies, technologyCategories, type App } from '@/data/portfolio-data';

export function usePortfolio() {
  const [selectedApp, setSelectedApp] = useState<App | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openAppModal = useCallback((appId: string) => {
    const app = apps.find(a => a.id === appId);
    if (app) {
      setSelectedApp(app);
      setIsModalOpen(true);
    }
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedApp(null);
  }, []);

  return {
    apps,
    packages,
    companies,
    technologyCategories,
    selectedApp,
    isModalOpen,
    openAppModal,
    closeModal
  };
}

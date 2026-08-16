import { useCallback, useEffect, useState } from 'react';

export const useProjectOverlay = () => {
  const [selectedId, setSelectedId] = useState(null);

  const openProject = useCallback((projectId) => {
    setSelectedId(projectId);
  }, []);

  const closeProject = useCallback(() => {
    setSelectedId(null);
  }, []);

  useEffect(() => {
    if (!selectedId) {
      return undefined;
    }
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeProject();
      }
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [selectedId, closeProject]);

  return { selectedId, openProject, closeProject };
};

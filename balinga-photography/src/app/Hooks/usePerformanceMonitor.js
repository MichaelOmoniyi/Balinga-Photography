import { useEffect } from 'react';

const usePerformanceMonitor = (componentName) => {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.performance) {
      const startTime = performance.now();

      return () => {
        const endTime = performance.now();
        const duration = endTime - startTime;

        // Log performance metrics
        console.log(`[Performance] ${componentName}:`, {
          duration: `${duration.toFixed(2)}ms`,
          memory: window.performance.memory ? {
            usedJSHeapSize: `${(window.performance.memory.usedJSHeapSize / 1024 / 1024).toFixed(2)}MB`,
            totalJSHeapSize: `${(window.performance.memory.totalJSHeapSize / 1024 / 1024).toFixed(2)}MB`,
          } : 'Not available',
        });

        // Send to analytics if available
        if (window.gtag) {
          window.gtag('event', 'performance_metric', {
            event_category: 'Performance',
            event_label: componentName,
            value: Math.round(duration),
          });
        }
      };
    }
  }, [componentName]);
};

export default usePerformanceMonitor; 
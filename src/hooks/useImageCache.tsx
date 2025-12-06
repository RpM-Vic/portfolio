// useImageCache.js
import { useEffect } from 'react';

export function useImageCache(imageUrls:string[]) {
  useEffect(() => {
    const cacheImages = async () => {
      try {
        const cache = await caches.open('image-cache');
        
        // Convert single string to array if needed
        const urls = Array.isArray(imageUrls) ? imageUrls : [imageUrls];
        
        await Promise.all(
          urls.map(url => {
            return cache.add(url).catch(err => {
              console.error(`Failed to cache ${url}:`, err);
            });
          })
        );
      } catch (error) {
        console.error('Caching failed:', error);
      }
    };
    
    cacheImages();
  }, [imageUrls]); // Dependency on imageUrls array
}
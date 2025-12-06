import { useState, useCallback, useEffect } from 'react';

const KEY = 'favoriteVideos';

export function useFavoriteVideos() {
  const [favorites, setFavorites] = useState<string[]>([]);
  useEffect(() => {
    try {
      const saved = localStorage.getItem(KEY);
      if (saved) setFavorites(JSON.parse(saved));
    } catch {}
  }, []);
  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(favorites));
    } catch {}
  }, [favorites]);
  const add = useCallback((id:string) => setFavorites(favs => favs.includes(id)?favs:[...favs,id]), []);
  const remove = useCallback((id:string) => setFavorites(favs => favs.filter(v => v!==id)), []);
  const toggle = useCallback((id:string) => setFavorites(favs => favs.includes(id)?favs.filter(v=>v!==id):[...favs,id]), []);
  const isFavorite = useCallback((id:string)=>favorites.includes(id), [favorites]);
  return { favorites, add, remove, toggle, isFavorite };
}


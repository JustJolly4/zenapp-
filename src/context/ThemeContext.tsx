import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type ThemeName = 'forest' | 'ocean' | 'night';

interface Theme {
  background: string;
  text: string;
}

const themes: Record<ThemeName, Theme> = {
  forest: { background: '#2e5339', text: '#e8f5e9' },
  ocean:  { background: '#004e7c', text: '#e1f7ff' },
  night:  { background: '#1a1a1a', text: '#f5f5f5' },
};

interface ThemeContextValue {
  current: ThemeName;
  colors: Theme;
  setTheme: (name: ThemeName) => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const STORAGE_KEY = 'zenapp:theme';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [current, setCurrent] = useState<ThemeName>('forest');

  // load saved theme once
  useEffect(() => {
    (async () => {
      const saved = await AsyncStorage.getItem(STORAGE_KEY);
      if (saved === 'forest' || saved === 'ocean' || saved === 'night') {
        setCurrent(saved);
      }
    })();
  }, []);

  // persist whenever theme changes
  useEffect(() => {
    AsyncStorage.setItem(STORAGE_KEY, current).catch(() => {});
  }, [current]);

  const value: ThemeContextValue = {
    current,
    colors: themes[current],
    setTheme: setCurrent,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
};

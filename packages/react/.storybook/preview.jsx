import { useEffect, useState } from 'react';
import { IcarusProvider } from '../src/lib/Provider/Provider';

export const decorators = [
  (Story) => {
    const [currentTheme, setCurrentTheme] = useState('dark');
    useEffect(() => {
      if (typeof document === 'undefined') return;
      if (currentTheme === 'light')
        document.querySelector('html').classList.remove('dark');
      else document.querySelector('html').classList.add('dark');
    }, [currentTheme]);
    return (
      <>
        Theme:
        <select
          value={currentTheme}
          onChange={(e) => {
            setCurrentTheme(e.target.value);
          }}
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
        <div style={{ height: 50 }} />
        <hr />
        <div style={{ height: 50 }} />
        <Story />
      </>
    );
  },
  (Story) => (
    <IcarusProvider>
      <Story />
    </IcarusProvider>
  ),
];

'use client';
import { useEffect } from 'react';

export default function DisableDevTools() {
  useEffect(() => {
    
    if (
      typeof window !== "undefined" &&
      typeof window.navigator !== "undefined" &&
      typeof navigator !== "undefined" &&
      navigator.userAgent
    ) {
      const disableDevtool = require("disable-devtool");
      disableDevtool();
    }
  }, []);

  return null;
}

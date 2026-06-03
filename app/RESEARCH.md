# React useEffect Memory Leak Analysis

## Problem
useEffect without cleanup causes memory leak

## Bad Code (DON'T do this)
useEffect(() => {
  const interval = setInterval(() => {
    console.log('Running...');
  }, 1000);
}, []);  // NO CLEANUP - MEMORY LEAK!

## What happens
- Component mounts → interval starts
- Component unmounts → interval keeps running
- Repeat 10 times → 10 intervals running → Browser CRASHES

## Good Code (DO this)
useEffect(() => {
  const interval = setInterval(() => {
    console.log('Running...');
  }, 1000);
  
  return () => clearInterval(interval);  // CLEANUP
}, []);

## When to add cleanup
- setInterval → clearInterval
- setTimeout → clearTimeout  
- addEventListener → removeEventListener

## My Modal Component Example
useEffect(() => {
  if (isOpen) {
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleEsc);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEsc);
    };
  }
}, [isOpen]);
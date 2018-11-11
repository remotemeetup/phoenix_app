const raf = (global as any).requestAnimationFrame = (cb: any) => {
  setTimeout(cb, 0);
};

export default raf;

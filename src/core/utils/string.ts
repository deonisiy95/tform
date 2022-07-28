export function generateId(): string {
  const s4 = () => Math.floor(Math.random() * 0x10000).toString(16);

  return (
    s4() + s4() + '-' +
    s4() + '-' +
    s4() + '-' +
    s4() + '-' +
    s4() + s4() + s4()
  );
}

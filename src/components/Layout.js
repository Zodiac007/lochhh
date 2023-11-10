export default function Layout({ children }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-8 lg:px-24 py-16">
      {children}
    </div>
  );
}

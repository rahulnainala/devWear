export default function RootLayout({ children }) {
  return (
    <>
      <div className="flex flex-row w-full justify-center px-10">
        <div className="w-full">{children}</div>
      </div>
    </>
  );
}

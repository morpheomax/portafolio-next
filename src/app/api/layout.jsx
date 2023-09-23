export default function LayoutApi({ children }) {
  return (
    <>
      <div>
        <small>Home &bull; Posts</small>
        {children}
      </div>
    </>
  );
}

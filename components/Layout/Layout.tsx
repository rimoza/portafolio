const Layout = ({
  children,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return (
    <div className={`bg-ternary`}>
      <main>{children}</main>
    </div>
  );
};

export default Layout;

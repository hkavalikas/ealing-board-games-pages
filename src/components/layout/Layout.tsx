import { FC, PropsWithChildren } from 'react';

const Layout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <main className="layout">
            {children}
        </main>
    );
};

export default Layout;

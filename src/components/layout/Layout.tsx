import { PropsWithChildren } from 'react';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className="layout">
            {children}
        </div>
    );
};

export default Layout;

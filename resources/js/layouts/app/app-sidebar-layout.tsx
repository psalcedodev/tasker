import { AppContent } from '@/components/app-content';
import { AppShell } from '@/components/app-shell';
import { AppSidebar } from '@/components/app-sidebar';
import { AppSidebarHeader } from '@/components/app-sidebar-header';
import { TcnThemeRoot } from '@/components/tcn-theme-root';
import type { AppLayoutProps } from '@/types';

export default function AppSidebarLayout({
    children,
    breadcrumbs = [],
}: AppLayoutProps) {
    return (
        <AppShell variant="sidebar">
            <AppSidebar />
            <AppContent
                variant="sidebar"
                className="min-h-0 overflow-x-hidden overflow-y-hidden"
            >
                <AppSidebarHeader breadcrumbs={breadcrumbs} />
                <TcnThemeRoot>{children}</TcnThemeRoot>
            </AppContent>
        </AppShell>
    );
}

import type { ReactNode } from 'react';

/**
 * Ergo sets `font-family`, `color`, and material tokens on `.tcn-theme-root` (see `@tcn/ui` ergo_theme.css).
 * Storybook wraps demos in `<Theme>`, which applies this class. Without it, TCN inherits the Laravel
 * shell (`html`/`body` Instrument Sans), so labels and fields won’t match Storybook.
 *
 * This is not the full `<Theme styleSheets={…}>` provider (constructable stylesheets + adoptedStyleSheets);
 * those are redundant once Ergo/reset are in `app.css` and are awkward with SSR.
 */
export function TcnThemeRoot({ children }: { children: ReactNode }) {
    return (
        <div className="tcn-theme-root flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden">
            {children}
        </div>
    );
}

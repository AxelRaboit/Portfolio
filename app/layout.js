import "./globals.css";
import { LayoutComponent } from "./layoutComponent";

export const metadata = {
    title: {
        default: "Accueil | Axel Portfolio",
        template: "%s | Axel Portfolio",
    },
    template: " %s | Axel Portfolio",
    description: "Accueil du portfolio",
    keywords: "accueil, axel raboit, axel, presentation, compétences, projets",
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <LayoutComponent children={children } />
            </body>
        </html>
    );
}
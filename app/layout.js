import "./globals.css";
import { Providers } from "./GlobalRedux/provider";


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
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}

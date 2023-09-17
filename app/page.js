"use client";
import { GlobalWrapper } from "@/src/components";
import translationEN from "@/src/translation/en.json";
import translationFR from "@/src/translation/fr.json";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { Home } from "@/src/components";
import { initi18n } from "@/src/tools/initi18n";

export default function Page() {

    initi18n();

    return (
            <main>
                <GlobalWrapper>
                    <Home />
                </GlobalWrapper>
            </main>
    );
}

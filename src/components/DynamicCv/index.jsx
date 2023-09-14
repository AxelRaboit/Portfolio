import React from "react";
import { Container } from "./DynamicCvElements";
import { Slide } from "react-awesome-reveal";

export const DynamicCv = () => {
    return (
        <Container>
            <Slide direction="left" triggerOnce>
                <div className="container-introduction">
                    <h2>Profil Professionnel</h2>
                    <p>
                        J'ai commencé à coder en 2020 lorem ipsum lorem ipsum
                        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
                        ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
                        ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
                        ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
                        ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
                        ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum{" "}
                    </p>
                </div>
            </Slide>
            <Slide direction="left" triggerOnce>
                <h2>Expérience Professionnelle</h2>
            </Slide>

            {/* --------------------------------------- */}

            <Slide direction="right" triggerOnce>
                <div className="container-xp">
                    <div className="xp-date">
                        <h3>Juillet 2024 - Aujourd'hui</h3>
                    </div>
                    <h5>EDGCo - ESN DIGITAL CONSEIL</h5>
                    <h6>
                        Developpeur Web Fullstack PHP / Symfony / Twig / Jquery
                        - Nantes (44), FRANCE (Télétravail)
                    </h6>
                    <p className="xp-post-desc">
                        Contrat à duré indéterminé (CDI)
                    </p>
                    <ul>
                        <li>
                            Travail sur un CMS maison, interne à l'entreprise
                            reprenant le fonctionnement de Wordpress. Disposant
                            donc d'un Back Office, et d'un system de création de
                            page dynamique.
                        </li>
                        <li>Travail autant sur le front que sur le back.</li>
                        <li>
                            Cette experience m'a permis de consolider énormement
                            mes connaissances en PHP et en Symfony.
                        </li>
                        <li>
                            J'ai également appris à travailler en équipe et à
                            utiliser Git & Gitlab.
                        </li>
                        <li>
                            En plus d'avoir travaillé sur le développement de la
                            partie backend et d'avoir amélioré le CMS maison,
                            j'ai également travaillé sur la partie front-end en
                            améliorant son fonctionnement pour une meilleure
                            maintenabilité du code, ainsi que la réutilisation
                            de composants afin d'accélérer la création de nos
                            sites web.
                        </li>
                    </ul>
                </div>
            </Slide>

            {/* --------------------------------------- */}

            <Slide direction="left" triggerOnce>
                <div className="container-xp">
                    <div className="xp-date">
                        <h3>Juillet 2022 - Juillet 2024</h3>
                    </div>
                    <h5>EDGCo - ESN DIGITAL CONSEIL</h5>
                    <h6>
                        Developpeur Web Fullstack PHP / Symfony / Twig / Jquery
                        - Nantes (44), FRANCE (Télétravail)
                    </h6>
                    <p className="xp-post-desc">
                        Alternance 4 jours en entreprise / 1 jour à l'école
                    </p>
                    <ul>
                        <li>
                            Travail sur un CMS maison, interne à l'entreprise
                            reprenant le fonctionnement de Wordpress. Disposant
                            donc d'un Back Office, et d'un system de création de
                            page dynamique.
                        </li>
                        <li>Travail autant sur le front que sur le back.</li>
                        <li>
                            Cette experience m'a permis de consolider énormement
                            mes connaissances en PHP et en Symfony.
                        </li>
                        <li>
                            J'ai également appris à travailler en équipe et à
                            utiliser Git & Gitlab.
                        </li>
                        <li>
                            En plus d'avoir travaillé sur le développement de la
                            partie backend et d'avoir amélioré le CMS maison,
                            j'ai également travaillé sur la partie front-end en
                            améliorant son fonctionnement pour une meilleure
                            maintenabilité du code, ainsi que la réutilisation
                            de composants afin d'accélérer la création de nos
                            sites web.
                        </li>
                    </ul>
                </div>
            </Slide>

            {/* --------------------------------------- */}

            <Slide direction="right" triggerOnce>
                <div className="container-xp">
                    <div className="xp-date">
                        <h3>Mai 2022 - Juillet 2022</h3>
                    </div>
                    <h5>EDGCo - ESN DIGITAL CONSEIL</h5>
                    <h6>
                        Developpeur Web Fullstack PHP / Symfony / Twig / Jquery
                        - Nantes (44), FRANCE (Télétravail)
                    </h6>
                    <p className="xp-post-desc">Stage à temp complet</p>
                    <ul>
                        <li>
                            Travail sur un CMS maison, interne à l'entreprise
                            reprenant le fonctionnement de Wordpress. Disposant
                            donc d'un Back Office, et d'un system de création de
                            page dynamique.
                        </li>
                        <li>Travail autant sur le front que sur le back.</li>
                        <li>
                            Cette experience m'a permis de consolider énormement
                            mes connaissances en PHP et en Symfony.
                        </li>
                        <li>
                            J'ai également appris à travailler en équipe et à
                            utiliser Git & Gitlab.
                        </li>
                        <li>
                            En plus d'avoir travaillé sur le développement de la
                            partie backend et d'avoir amélioré le CMS maison,
                            j'ai également travaillé sur la partie front-end en
                            améliorant son fonctionnement pour une meilleure
                            maintenabilité du code, ainsi que la réutilisation
                            de composants afin d'accélérer la création de nos
                            sites web.
                        </li>
                    </ul>
                </div>
            </Slide>

            {/* --------------------------------------- */}

            <Slide direction="left" triggerOnce>
                <div className="container-xp">
                    <div className="xp-date">
                        <h3>Juillet 2021 - Novembre 2021</h3>
                    </div>
                    <h5>Transport Fery - Trebouet</h5>
                    <h6>Conducteur SPL - Sézanne (51), FRANCE</h6>
                    <p className="xp-post-desc">
                        Contrat à duré déterminé (CDD)
                    </p>
                    <ul>
                        <li>Conduite de camion SPL (Semi Remorque)</li>
                        <li>
                            Livraison de marchandises sur la région Parisienne,
                            Marnaise et Auboise.
                        </li>
                    </ul>
                </div>
            </Slide>

            {/* --------------------------------------- */}

            <Slide direction="right" triggerOnce>
                <div className="container-xp">
                    <div className="xp-date">
                        <h3>Février 2021 - Juin 2021</h3>
                    </div>
                    <h5>UPKAY</h5>
                    <h6>
                        Developpeur Web Fullstack PHP / Symfony / Twig / Jquery
                        - Bezannes (51), FRANCE (Présentiel)
                    </h6>
                    <p className="xp-post-desc">Stage à temp complet</p>
                    <ul>
                        <li>
                            Travail sur un site web portant sous le theme de la
                            recherche d'artisan chauffagiste pour les
                            particuliers.
                        </li>
                        <li>Travail autant sur le front que sur le back.</li>
                        <li>
                            Cette expérience m'a permis de faire mes premières
                            armes en entreprise après être sorti de l'école.
                        </li>
                        <li>
                            J'ai également appris à travailler en équipe et à
                            utiliser Git & BitBucket.
                        </li>
                    </ul>
                </div>
            </Slide>

            {/* --------------------------------------- */}

            <Slide direction="left" triggerOnce>
                <div className="container-xp">
                    <div className="xp-date">
                        <h3>Février 2018 - Mars 2020</h3>
                    </div>
                    <h5>Transport Cautel & Brugnon</h5>
                    <h6>Conducteur SPL - Épernay (51), FRANCE</h6>
                    <p className="xp-post-desc">
                        Contrat à duré déterminé (CDD)
                    </p>
                    <ul>
                        <li>Conduite de camion SPL (Semi Remorque)</li>
                        <li>
                            Livraison de marchandises dans la région Marnaise,
                            pour le compte de Moët & Chandon.
                        </li>
                        <li>
                            Navette entre les différents sites de production de
                            Moët & Chandon et autres.
                        </li>
                    </ul>
                </div>
            </Slide>

            {/* --------------------------------------- */}

            <Slide direction="right" triggerOnce>
                <div className="container-xp">
                    <div className="xp-date">
                        <h3>Novembre 2015 - Novembre 2017</h3>
                    </div>
                    <h5>Transport System Danfreight Inc</h5>
                    <h6>Conducteur SPL - USA / Canada</h6>
                    <p className="xp-post-desc">
                        Contrat à duré indéterminé (CDI)
                    </p>
                    <ul>
                        <li>
                            Conduite de camion SPL (Semi Remorque Americain)
                        </li>
                        <li>
                            Livraison de marchandise sur tout le continent Nord
                            Américain, USA & Canada.
                        </li>
                    </ul>
                </div>
            </Slide>
        </Container>
    );
};

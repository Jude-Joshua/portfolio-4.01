import { DribbbleLogoIcon } from "@phosphor-icons/react";
import Url from "../Links/Link";

export default function DribbbleBadge() {
    return (
        <>
            <style>
                {`
                    @keyframes spin {
                        from { transform: rotate(0deg); }
                        to { transform: rotate(360deg); }
                    }
                    .text-spin {
                        animation: spin 10s linear infinite;
                        transform-origin: 100px 100px;
                    }
                    .badge-spin:hover .text-spin {
                        animation-play-state: paused;
                    }
                `}
            </style>

            <div className="philosophy-card-data-text-badge">
                <Url target={'_blank'} className="badge-spin" isNavigationLink={'body-link'} href={'https://e10f1b95-2516-461d-bb22-db062d62e110.pipedrive.email/c/wy5vdr9x4e/84l0pmo784/zyr7g1v2kw/1?redirectUrl=https%3A%2F%2Fdribbble.com%2Fexperts%2Fwebflow&hash=-0eYw-z9hguf5aP1-8ggZrGwpBPC7HAJpCw2wvmMKDo'}>
                    <svg
                        className="badge-spin"
                        viewBox="0 0 200 200"
                        xmlns="http://www.w3.org/2000/svg"
                        width="200"
                        height="200"
                    >
                        <defs>
                            <path
                                id="circlePath"
                                d="M 100,100 m -85,0 a 85,85 0 1,1 170,0 a 85,85 0 1,1 -170,0"
                            />
                        </defs>

                        <circle cx="100" cy="100" r="80" fill="#39FF1400" />

                        <g className="text-spin">
                            <text
                                fontSize="15.5"
                                fontWeight="600"
                                fontFamily="sans-serif"
                                fill="#39FF14"
                                letterSpacing="2.2"
                            >
                                <textPath href="#circlePath" startOffset="0%">
                                    ✦  RECOGNISED AS A WEBFLOW EXPERT ON DRIBBBLE
                                </textPath>
                            </text>
                        </g>

                        <foreignObject x="50" y="50" width="104" height="104">
                            <div
                                xmlns="http://www.w3.org/1999/xhtml"
                                style={{
                                    width: "104px",
                                    height: "104px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <DribbbleLogoIcon size={64} weight="fill" color="#39FF14" />
                            </div>
                        </foreignObject>
                    </svg>
                </Url>
            </div>
        </>
    );
}
import {Head, Html, Main, NextScript} from "next/document";
import React from "react";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <title>Planning Poker</title>
                {/* Removido favicon */}
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    );
}

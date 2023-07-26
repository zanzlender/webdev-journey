import { Html } from "@react-email/html";
import { Button } from "@react-email/button";
import { Font } from "@react-email/font";
import { Preview } from "@react-email/preview";
import { Container } from "@react-email/Container";
import { Link } from "@react-email/link";
import { Heading } from "@react-email/heading";
import { Text } from "@react-email/text";
import { Head } from "@react-email/head";
import { Img } from "@react-email/img";
import { Body } from "@react-email/body";
import { Tailwind } from "@react-email/tailwind";
import * as React from "react";

export const NotionMagicLinkEmail = () => (
  <Html>
    <Head>
      <Font
        fontFamily="Comfortaa"
        fallbackFontFamily="Verdana"
        webFont={{
          url: "https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap",
          format: "embedded-opentype",
        }}
        fontWeight={400}
        fontStyle="normal"
      />
    </Head>
    <Preview>Log in with this magic link</Preview>
    <Body style={{ backgroundColor: "#fffeb7" }}>
      <Tailwind>
        <Container className="mx-auto max-w-2xl px-4">
          <Img
            src="https://images.unsplash.com/photo-1682685797898-6d7587974771?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            width={300}
            className="mx-auto mb-20"
          />

          <Heading className="text-orange-600 font-bold text-center text-3xl mb-10">Login</Heading>

          <Text className="text-slate-700 mb-4">
            If you didn&apos;t try to login, you can safely ignore this email.
          </Text>

          <Text className="text-slate-700 mb-4 text-center">
            Klikni na gumb ispod i odvesti će te do stranice gdje možeš kreirati novu lozinku :)
          </Text>

          <Text className="text-slate-700 mb-4">Or, copy and paste this temporary login code:</Text>

          <Container className="mt-10 px-10 mx-auto py-6 border-2 border-orange-600 border-dashed flex justify-center gap-2 items-center w-fit">
            <Text className="inline font-semibold">Code:</Text>
            <Text className="inline font-bold">123456</Text>
          </Container>
        </Container>
      </Tailwind>
    </Body>
  </Html>
);

export default NotionMagicLinkEmail;

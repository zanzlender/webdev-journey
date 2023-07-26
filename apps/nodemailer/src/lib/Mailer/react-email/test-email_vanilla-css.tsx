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

export const VanillaCSSEmailTest = () => (
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
        <Container
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: 672,
            paddingLeft: 16,
            paddingRight: 16,
          }}
        >
          <Img
            src="https://images.unsplash.com/photo-1682685797898-6d7587974771?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            width={300}
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: 80,
            }}
          />

          <Heading
            style={{
              color: "#e47309",
              fontWeight: "bolder",
              textAlign: "center",
              fontSize: 36,
              marginBottom: 40,
            }}
          >
            Login
          </Heading>

          <Text
            style={{
              color: "#333333",
              marginBottom: 16,
            }}
          >
            If you didn&apos;t try to login, you can safely ignore this email.
          </Text>

          <Text
            style={{
              color: "#333333",
              marginBottom: 16,
              textAlign: "center",
            }}
          >
            Klikni na gumb ispod i odvesti će te do stranice gdje možeš kreirati novu lozinku :)
          </Text>

          <Text
            style={{
              color: "#333333",
              marginBottom: 16,
            }}
          >
            Or, copy and paste this temporary login code:
          </Text>

          <Container
            style={{
              marginTop: 40,
              padding: "24px 40px",
              marginLeft: "auto",
              marginRight: "auto",
              border: "2px dashed #e47309",
              display: "flex",
              gap: 2,
              justifyContent: "center",
              alignItems: "center",
              width: "fit-content",
            }}
          >
            <Text
              style={{
                display: "inline",
                fontWeight: "bold",
              }}
            >
              Code:
            </Text>
            <Text
              style={{
                display: "inline",
                fontWeight: "bold",
              }}
            >
              123456
            </Text>
          </Container>
        </Container>
      </Tailwind>
    </Body>
  </Html>
);

export default VanillaCSSEmailTest;

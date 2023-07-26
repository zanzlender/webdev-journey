"use client";

import React from "react";
import useTranslation from "next-translate/useTranslation";

type Props = {};

const page = (props: Props) => {
  const { t, lang } = useTranslation("next-translate-page");

  return (
    <div>
      <h1>{t("title")}</h1>
      <h3>{t("description")}</h3>
      <p>{t("variable", { count: 42 })}</p>
    </div>
  );
};

export default page;

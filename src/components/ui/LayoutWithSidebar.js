import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Container from "@/components/ui/container";
import classNames from "classnames";

export default function LayoutWithSidebar({
  top,
  bottom,
  title,
  header,
  sidebar,
  children,
  breadcrumbs,
  footer,
  className,
  containerClassName,
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Flake Hub" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={classNames(className)}>
        {top && top()}
        <Container className={classNames(containerClassName)}>
          {breadcrumbs && <Breadcrumbs breadcrumbs={breadcrumbs} />}
          {header && header()}
          {sidebar && (
            <div className="lg:grid lg:grid-cols-5 lg:gap-6">
              <div className="lg:col-span-1">{sidebar()}</div>
              <div className="lg:col-span-4">{children}</div>
            </div>
          )}
          {!sidebar && children}
          {footer && footer()}
        </Container>
        {bottom && bottom()}
      </main>
    </>
  );
}

LayoutWithSidebar.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  sidebar: PropTypes.func,
  Breadcrumbs: PropTypes.shape({
    homeTitle: PropTypes.string,
    homeUrl: PropTypes.string,
    pages: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      }),
    ),
  }),
};

LayoutWithSidebar.defaultProps = {
  title: "Mockups",
  pages: [],
};

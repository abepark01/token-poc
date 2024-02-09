import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Container from "@/components/ui/Container";
import classNames from "classnames";
import Sidebar from "./Sidebar";

export default function LayoutWithSidebar({ title, children, breadcrumbs }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Flake Hub" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div>
        <Sidebar />
        <div className="lg:pl-72">
          <main className="py-10">
            <div className="px-4 sm:px-6 lg:px-12">
              {breadcrumbs && <Breadcrumbs breadcrumbs={breadcrumbs} />}
              {children}
            </div>
          </main>
        </div>
      </div>
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

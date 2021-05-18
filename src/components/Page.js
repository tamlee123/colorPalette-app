import * as React from "react";
import "../style/page.css";

function Page({ children }) {
  return <section className="page">{children}</section>;
}
export default Page;

import "@/styles/globals.scss";
import Contentlayout from "@/shared/layout-components/layout/content-layout";
import Landingpagelayout from "@/shared/layout-components/layout/landingpage-layout";
import Switcherlayout from "@/shared/layout-components/layout/switcher-layout";
import Authenticationlayout from "@/shared/layout-components/layout/authentication-layout";
import SSRProvider from "react-bootstrap/SSRProvider";
import { ContextProvider } from "./contexts/authContext";

const layouts = {
  Contentlayout: Contentlayout,
  Landingpagelayout: Landingpagelayout,
  Switcherlayout: Switcherlayout,
  Authenticationlayout: Authenticationlayout,
};
function MyApp({ Component, pageProps }) {
  const Layout =
    layouts[Component.layout] ||
    ((pageProps) => <Component>{pageProps}</Component>);
  return (
    <Layout>
      <ContextProvider>
        <SSRProvider>
          <Component {...pageProps} />
        </SSRProvider>
      </ContextProvider>
    </Layout>
  );
}

export default MyApp;

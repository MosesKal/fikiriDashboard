import React from "react";
import dynamic from "next/dynamic";
import Seo from "@/shared/layout-components/seo/seo";
const DataTablesCom = dynamic(
  () => import("@/shared/data/table/datatable/dataTableCurrateurs"),
  { ssr: false }
);

const CurateurListe = () => (
  <>
    <Seo title={"Data Tables"} />
    
  </>
);

CurateurListe.propTypes = {};
CurateurListe.defaultProps = {};
CurateurListe.layout = "Contentlayout";

export default CurateurListe;
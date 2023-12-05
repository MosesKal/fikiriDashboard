import React from "react";

import dynamic from "next/dynamic";

import Seo from "@/shared/layout-components/seo/seo";

const DataTablesThématique = dynamic(
  () => import("@/shared/data/table/datatable/dataTableThematiques"),
  { ssr: false }
);

import {useRouter} from "next/router";


const Thematique = () => (
  <>
    <Seo title={"Data Tables"} />
    <DataTablesThématique />
  </>
);


Thematique.propTypes = {};
Thematique.defaultProps = {};
Thematique.layout = "Contentlayout";

export default Thematique;
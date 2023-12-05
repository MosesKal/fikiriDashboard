import React from "react";
import dynamic from "next/dynamic";
import Seo from "@/shared/layout-components/seo/seo";

const DataTablesSolution = dynamic(
  () => import("@/shared/data/table/datatable/dataTableSolution"),
  { ssr: false }
);


const ProjectListe = () => (
  <>
    <Seo title={"Data Tables"} />
    <DataTablesSolution />
  </>
);

ProjectListe.propTypes = {};
ProjectListe.defaultProps = {};
ProjectListe.layout = "Contentlayout";

export default ProjectListe;
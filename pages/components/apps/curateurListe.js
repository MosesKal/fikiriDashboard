import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import Seo from "@/shared/layout-components/seo/seo";

const DataTablesCom = dynamic(
  () => import("@/shared/data/table/datatable/dataTableCurrateurs"),
  { ssr: false }
);

import {useRouter} from "next/router";

const CurateurListe = () => {

  const navigate = useRouter();

  // useEffect(()=>{
  //   const status = JSON.parse(localStorage.getItem("status"))
  //   if(!status.isLogged){
  //     navigate.push("/")
  //   }
  // }, [])

  return (
    <>
      <Seo title={"Data Tables"} />
      <DataTablesCom />
    </>
  );
};

CurateurListe.propTypes = {};
CurateurListe.defaultProps = {};
CurateurListe.layout = "Contentlayout";

export default CurateurListe;

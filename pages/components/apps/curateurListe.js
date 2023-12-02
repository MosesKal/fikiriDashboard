import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import Seo from "@/shared/layout-components/seo/seo";
const DataTablesCom = dynamic(
  () => import("@/shared/data/table/datatable/dataTableCurrateur"),
  { ssr: false }
);
import { useAuthContext } from "@/pages/contexts/authContext";
import {useRouter} from "next/router"

const CurateurListe = () => {

  const { isLogged } = useAuthContext();
  const navigate = useRouter();

  useEffect(()=>{
    if(!isLogged){
      navigate.push("/")
    }
  }, [])

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

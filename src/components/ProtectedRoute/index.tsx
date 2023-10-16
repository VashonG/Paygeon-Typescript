import React from "react";
import { Navigate, useLocation } from "react-router-dom";

type Props = {
  element: React.FC;
};

export const ProtectedRoute: React.FC<Props> = ({ element: Element }) => {
  const { pathname } = useLocation();
  const popcorn12 = localStorage.getItem("Popcorn@12");

  if (
    !popcorn12 &&
    [
      "/",
      "/dashboardv1",
      "/dashboardv3",
      "/accountsempty",
      "/accountsv1",
      "/accountsv2",
      "/accountsv3",
      "/accountsdetails",
      "/accountsdetailsdeposit",
      "/cardslistv1",
      "/transactionsempty",
      "/transactionsv1",
      "/transactionsv2",
      "/paymentcategories",
      "/paymentcategoriessearch",
      "/paymentserviceform",
      "/paymentexchange",
      "/paymentprivatetransferempty",
      "/paymentprivatetransferlist",
      "/paymentprivatetransfersend",
      "/paymentprivatetransferdetails",
      "/paymentprivatetransferform",
      "/invoicesempty",
      "/invoicesv1",
      "/invoicesdetails",
      "/invoicesaddinvoice",
      "/tradingmarketv1",
      "/tradingmarketv2",
      "/tradingcurrencyindex",
      "/reportsv1",
      "/reportsv2",
      "/profilesettingsaccount",
      "/profilesettingssecurity",
      "/profilesettingsapps",
      "/profilesettingsnotifications",
      "/profilesettingslimits",
      "/supportproducts",
      "/supportcategories",
      "/supportsearch",
      "/supportarticle",
    ].includes(pathname)
  ) {
    return <Navigate to="/dhiwise-dashboard" />;
  }
  return <Element />;
};

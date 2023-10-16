import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import { ProtectedRoute } from "components";
const SupportArticle = React.lazy(() => import("pages/SupportArticle"));
const SupportSearch = React.lazy(() => import("pages/SupportSearch"));
const SupportCategories = React.lazy(() => import("pages/SupportCategories"));
const SupportProducts = React.lazy(() => import("pages/SupportProducts"));
const ProfileSettingsLimits = React.lazy(
  () => import("pages/ProfileSettingsLimits"),
);
const ProfileSettingsNotifications = React.lazy(
  () => import("pages/ProfileSettingsNotifications"),
);
const ProfileSettingsApps = React.lazy(
  () => import("pages/ProfileSettingsApps"),
);
const ProfileSettingsSecurity = React.lazy(
  () => import("pages/ProfileSettingsSecurity"),
);
const ProfileSettingsAccount = React.lazy(
  () => import("pages/ProfileSettingsAccount"),
);
const Reportsv2 = React.lazy(() => import("pages/Reportsv2"));
const Reportsv1 = React.lazy(() => import("pages/Reportsv1"));
const TradingCurrencyIndex = React.lazy(
  () => import("pages/TradingCurrencyIndex"),
);
const TradingMarketv2 = React.lazy(() => import("pages/TradingMarketv2"));
const TradingMarketv1 = React.lazy(() => import("pages/TradingMarketv1"));
const InvoicesAddInvoice = React.lazy(() => import("pages/InvoicesAddInvoice"));
const InvoicesDetails = React.lazy(() => import("pages/InvoicesDetails"));
const Invoicesv1 = React.lazy(() => import("pages/Invoicesv1"));
const InvoicesEmpty = React.lazy(() => import("pages/InvoicesEmpty"));
const PaymentPrivateTransferForm = React.lazy(
  () => import("pages/PaymentPrivateTransferForm"),
);
const PaymentPrivateTransferDetails = React.lazy(
  () => import("pages/PaymentPrivateTransferDetails"),
);
const PaymentPrivateTransferSend = React.lazy(
  () => import("pages/PaymentPrivateTransferSend"),
);
const PaymentPrivateTransferList = React.lazy(
  () => import("pages/PaymentPrivateTransferList"),
);
const PaymentPrivateTransferEmpty = React.lazy(
  () => import("pages/PaymentPrivateTransferEmpty"),
);
const PaymentExchange = React.lazy(() => import("pages/PaymentExchange"));
const PaymentServiceForm = React.lazy(() => import("pages/PaymentServiceForm"));
const PaymentCategoriesSearch = React.lazy(
  () => import("pages/PaymentCategoriesSearch"),
);
const PaymentCategories = React.lazy(() => import("pages/PaymentCategories"));
const Transactionsv2 = React.lazy(() => import("pages/Transactionsv2"));
const Transactionsv1 = React.lazy(() => import("pages/Transactionsv1"));
const TransactionsEmpty = React.lazy(() => import("pages/TransactionsEmpty"));
const CardsListv1 = React.lazy(() => import("pages/CardsListv1"));
const AccountsDetailsDeposit = React.lazy(
  () => import("pages/AccountsDetailsDeposit"),
);
const AccountsDetails = React.lazy(() => import("pages/AccountsDetails"));
const Accountsv3 = React.lazy(() => import("pages/Accountsv3"));
const Accountsv2 = React.lazy(() => import("pages/Accountsv2"));
const Accountsv1 = React.lazy(() => import("pages/Accountsv1"));
const AccountsEmpty = React.lazy(() => import("pages/AccountsEmpty"));
const Dashboardv3 = React.lazy(() => import("pages/Dashboardv3"));
const Dashboardv1 = React.lazy(() => import("pages/Dashboardv1"));
const RegistrationSignInwithQR = React.lazy(
  () => import("pages/RegistrationSignInwithQR"),
);
const RegistrationPasswordReset = React.lazy(
  () => import("pages/RegistrationPasswordReset"),
);
const RegistrationSignUp = React.lazy(() => import("pages/RegistrationSignUp"));
const RegistrationSignIn = React.lazy(() => import("pages/RegistrationSignIn"));
const Invoicesv2 = React.lazy(() => import("pages/Invoicesv2"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<ProtectedRoute element={Invoicesv2} />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/registrationsignin" element={<RegistrationSignIn />} />
          <Route path="/registrationsignup" element={<RegistrationSignUp />} />
          <Route
            path="/registrationpasswordreset"
            element={<RegistrationPasswordReset />}
          />
          <Route
            path="/registrationsigninwithqr"
            element={<RegistrationSignInwithQR />}
          />
          <Route
            path="/dashboardv1"
            element={<ProtectedRoute element={Dashboardv1} />}
          />
          <Route
            path="/dashboardv3"
            element={<ProtectedRoute element={Dashboardv3} />}
          />
          <Route
            path="/accountsempty"
            element={<ProtectedRoute element={AccountsEmpty} />}
          />
          <Route
            path="/accountsv1"
            element={<ProtectedRoute element={Accountsv1} />}
          />
          <Route
            path="/accountsv2"
            element={<ProtectedRoute element={Accountsv2} />}
          />
          <Route
            path="/accountsv3"
            element={<ProtectedRoute element={Accountsv3} />}
          />
          <Route
            path="/accountsdetails"
            element={<ProtectedRoute element={AccountsDetails} />}
          />
          <Route
            path="/accountsdetailsdeposit"
            element={<ProtectedRoute element={AccountsDetailsDeposit} />}
          />
          <Route
            path="/cardslistv1"
            element={<ProtectedRoute element={CardsListv1} />}
          />
          <Route
            path="/transactionsempty"
            element={<ProtectedRoute element={TransactionsEmpty} />}
          />
          <Route
            path="/transactionsv1"
            element={<ProtectedRoute element={Transactionsv1} />}
          />
          <Route
            path="/transactionsv2"
            element={<ProtectedRoute element={Transactionsv2} />}
          />
          <Route
            path="/paymentcategories"
            element={<ProtectedRoute element={PaymentCategories} />}
          />
          <Route
            path="/paymentcategoriessearch"
            element={<ProtectedRoute element={PaymentCategoriesSearch} />}
          />
          <Route
            path="/paymentserviceform"
            element={<ProtectedRoute element={PaymentServiceForm} />}
          />
          <Route
            path="/paymentexchange"
            element={<ProtectedRoute element={PaymentExchange} />}
          />
          <Route
            path="/paymentprivatetransferempty"
            element={<ProtectedRoute element={PaymentPrivateTransferEmpty} />}
          />
          <Route
            path="/paymentprivatetransferlist"
            element={<ProtectedRoute element={PaymentPrivateTransferList} />}
          />
          <Route
            path="/paymentprivatetransfersend"
            element={<ProtectedRoute element={PaymentPrivateTransferSend} />}
          />
          <Route
            path="/paymentprivatetransferdetails"
            element={<ProtectedRoute element={PaymentPrivateTransferDetails} />}
          />
          <Route
            path="/paymentprivatetransferform"
            element={<ProtectedRoute element={PaymentPrivateTransferForm} />}
          />
          <Route
            path="/invoicesempty"
            element={<ProtectedRoute element={InvoicesEmpty} />}
          />
          <Route
            path="/invoicesv1"
            element={<ProtectedRoute element={Invoicesv1} />}
          />
          <Route
            path="/invoicesdetails"
            element={<ProtectedRoute element={InvoicesDetails} />}
          />
          <Route
            path="/invoicesaddinvoice"
            element={<ProtectedRoute element={InvoicesAddInvoice} />}
          />
          <Route
            path="/tradingmarketv1"
            element={<ProtectedRoute element={TradingMarketv1} />}
          />
          <Route
            path="/tradingmarketv2"
            element={<ProtectedRoute element={TradingMarketv2} />}
          />
          <Route
            path="/tradingcurrencyindex"
            element={<ProtectedRoute element={TradingCurrencyIndex} />}
          />
          <Route
            path="/reportsv1"
            element={<ProtectedRoute element={Reportsv1} />}
          />
          <Route
            path="/reportsv2"
            element={<ProtectedRoute element={Reportsv2} />}
          />
          <Route
            path="/profilesettingsaccount"
            element={<ProtectedRoute element={ProfileSettingsAccount} />}
          />
          <Route
            path="/profilesettingssecurity"
            element={<ProtectedRoute element={ProfileSettingsSecurity} />}
          />
          <Route
            path="/profilesettingsapps"
            element={<ProtectedRoute element={ProfileSettingsApps} />}
          />
          <Route
            path="/profilesettingsnotifications"
            element={<ProtectedRoute element={ProfileSettingsNotifications} />}
          />
          <Route
            path="/profilesettingslimits"
            element={<ProtectedRoute element={ProfileSettingsLimits} />}
          />
          <Route
            path="/supportproducts"
            element={<ProtectedRoute element={SupportProducts} />}
          />
          <Route
            path="/supportcategories"
            element={<ProtectedRoute element={SupportCategories} />}
          />
          <Route
            path="/supportsearch"
            element={<ProtectedRoute element={SupportSearch} />}
          />
          <Route
            path="/supportarticle"
            element={<ProtectedRoute element={SupportArticle} />}
          />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;

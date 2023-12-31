import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <p className="headline">
        This project was generated By{" "}
        <a href="https://www.dhiwise.com">Dhiwise</a>. Quickly use below links
        to navigate through all pages.
      </p>
      <ul>
        <li>
          <Link to="/">Invoicesv2</Link>
        </li>
        <li>
          <Link to="/registrationsignin">RegistrationSignIn</Link>
        </li>
        <li>
          <Link to="/registrationsignup">RegistrationSignUp</Link>
        </li>
        <li>
          <Link to="/registrationpasswordreset">RegistrationPasswordReset</Link>
        </li>
        <li>
          <Link to="/registrationsigninwithqr">RegistrationSignInwithQR</Link>
        </li>
        <li>
          <Link to="/dashboardv1">Dashboardv1</Link>
        </li>
        <li>
          <Link to="/dashboardv3">Dashboardv3</Link>
        </li>
        <li>
          <Link to="/accountsempty">AccountsEmpty</Link>
        </li>
        <li>
          <Link to="/accountsv1">Accountsv1</Link>
        </li>
        <li>
          <Link to="/accountsv2">Accountsv2</Link>
        </li>
        <li>
          <Link to="/accountsv3">Accountsv3</Link>
        </li>
        <li>
          <Link to="/accountsdetails">AccountsDetails</Link>
        </li>
        <li>
          <Link to="/accountsdetailsdeposit">AccountsDetailsDeposit</Link>
        </li>
        <li>
          <Link to="/cardslistv1">CardsListv1</Link>
        </li>
        <li>
          <Link to="/transactionsempty">TransactionsEmpty</Link>
        </li>
        <li>
          <Link to="/transactionsv1">Transactionsv1</Link>
        </li>
        <li>
          <Link to="/transactionsv2">Transactionsv2</Link>
        </li>
        <li>
          <Link to="/paymentcategories">PaymentCategories</Link>
        </li>
        <li>
          <Link to="/paymentcategoriessearch">PaymentCategoriesSearch</Link>
        </li>
        <li>
          <Link to="/paymentserviceform">PaymentServiceForm</Link>
        </li>
        <li>
          <Link to="/paymentexchange">PaymentExchange</Link>
        </li>
        <li>
          <Link to="/paymentprivatetransferempty">
            PaymentPrivateTransferEmpty
          </Link>
        </li>
        <li>
          <Link to="/paymentprivatetransferlist">
            PaymentPrivateTransferList
          </Link>
        </li>
        <li>
          <Link to="/paymentprivatetransfersend">
            PaymentPrivateTransferSend
          </Link>
        </li>
        <li>
          <Link to="/paymentprivatetransferdetails">
            PaymentPrivateTransferDetails
          </Link>
        </li>
        <li>
          <Link to="/paymentprivatetransferform">
            PaymentPrivateTransferForm
          </Link>
        </li>
        <li>
          <Link to="/invoicesempty">InvoicesEmpty</Link>
        </li>
        <li>
          <Link to="/invoicesv1">Invoicesv1</Link>
        </li>
        <li>
          <Link to="/invoicesdetails">InvoicesDetails</Link>
        </li>
        <li>
          <Link to="/invoicesaddinvoice">InvoicesAddInvoice</Link>
        </li>
        <li>
          <Link to="/tradingmarketv1">TradingMarketv1</Link>
        </li>
        <li>
          <Link to="/tradingmarketv2">TradingMarketv2</Link>
        </li>
        <li>
          <Link to="/tradingcurrencyindex">TradingCurrencyIndex</Link>
        </li>
        <li>
          <Link to="/reportsv1">Reportsv1</Link>
        </li>
        <li>
          <Link to="/reportsv2">Reportsv2</Link>
        </li>
        <li>
          <Link to="/profilesettingsaccount">ProfileSettingsAccount</Link>
        </li>
        <li>
          <Link to="/profilesettingssecurity">ProfileSettingsSecurity</Link>
        </li>
        <li>
          <Link to="/profilesettingsapps">ProfileSettingsApps</Link>
        </li>
        <li>
          <Link to="/profilesettingsnotifications">
            ProfileSettingsNotifications
          </Link>
        </li>
        <li>
          <Link to="/profilesettingslimits">ProfileSettingsLimits</Link>
        </li>
        <li>
          <Link to="/supportproducts">SupportProducts</Link>
        </li>
        <li>
          <Link to="/supportcategories">SupportCategories</Link>
        </li>
        <li>
          <Link to="/supportsearch">SupportSearch</Link>
        </li>
        <li>
          <Link to="/supportarticle">SupportArticle</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;

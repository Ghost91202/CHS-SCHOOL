import React from 'react';
import PdfDownloader from './PdfDownloader.js';
import Navbar from './navbar.js';
import {
  AcademicCalendar,
  LinkofPTA,
  LinkofThreeYearResult,
  MandatoryDisclosure,
  NOC,
  RecognitionCertificate,
  SMC,
  TrustCertificate,
  WaterHealthCertificate,
  FireCertificate,
  FeeStructure,
  DEOCertificate,
  BuildingCertificate,
  affiliationletter
} from "../../assets/index.js";

const App = () => {
  const pdfUrls = [
    { url: AcademicCalendar, name: 'Academic Calendar' },
    { url: LinkofPTA, name: 'Link of PTA' },
    { url: LinkofThreeYearResult, name: 'Link of Three Year Result' },
    { url: MandatoryDisclosure, name: 'Mandatory Disclosure' },
    { url: NOC, name: 'NOC' },
    { url: RecognitionCertificate, name: 'Recognition Certificate' },
    { url: SMC, name: 'SMC' },
    { url: TrustCertificate, name: 'Trust Certificate' },
    { url: WaterHealthCertificate, name: 'Water Health Certificate' },
    { url: FireCertificate, name: 'Fire Certificate' },
    { url: FeeStructure, name: 'Fee Structure' },
    { url: DEOCertificate, name: 'DEO Certificate' },
    { url: BuildingCertificate, name: 'Building Certificate' },
    { url: affiliationletter, name: 'Affiliation Letter' },
    // Add more PDF URLs as needed
  ];

  return (
    <div classname="relative">
      <Navbar />
      <div classname="flex mt-20">
        <PdfDownloader pdfUrls={pdfUrls} />
      </div>    </div>
  );
};

export default App;

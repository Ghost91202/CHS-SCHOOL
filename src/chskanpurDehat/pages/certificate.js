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
    { url: AcademicCalendar, name: 'Academic Calendar', title:"Academic Calender CHS Education Center "},
    { url: LinkofPTA, name: 'Link of PTA', title:"Academic Calender CHS Education Center "},
    { url: LinkofThreeYearResult, name: 'Link of Three Year Result', title:"Academic Calender CHS Education Center "},
    { url: MandatoryDisclosure, name: 'Mandatory Disclosure', title:"Academic Calender CHS Education Center "},
    { url: NOC, name: 'NOC', title:"Academic Calender CHS Education Center "},
    { url: RecognitionCertificate, name: 'Recognition Certificate', title:"Academic Calender CHS Education Center "},
    { url: SMC, name: 'SMC', title:"Academic Calender CHS Education Center "},
    { url: TrustCertificate, name: 'Trust Certificate', title:"Academic Calender CHS Education Center "},
    { url: WaterHealthCertificate, name: 'Water Health Certificate', title:"Academic Calender CHS Education Center "},
    { url: FireCertificate, name: 'Fire Certificate', title:"Academic Calender CHS Education Center "},
    { url: FeeStructure, name: 'Fee Structure', title:"Academic Calender CHS Education Center "},
    { url: DEOCertificate, name: 'DEO Certificate', title:"Academic Calender CHS Education Center "},
    { url: BuildingCertificate, name: 'Building Certificate', title:"Academic Calender CHS Education Center "},
    { url: affiliationletter, name: 'Affiliation Letter', title:"Academic Calender CHS Education Center "},
    // Add more PDF URLs as needed
  ];

  return (
    <div classname="relative ">
      <Navbar />
     
      <div classname="flex flex-col mt-20">
     
        <PdfDownloader pdfUrls={pdfUrls} />
      </div> 
    </div>
  );
};

export default App;

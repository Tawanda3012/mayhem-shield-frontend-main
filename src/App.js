import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import Error from "./components/shared/Error";
import Home from "./components/Home";
import Footer from "./components/shared/Footer";
import Partners from "./components/Partners";
import Solutions from "./components/Solutions";
import Company from "./components/Company";
import ContentHub from "./components/ContentHub";
import Careers from "./components/Careers";
import LetsTalk from "./components/LetsTalk";
import GoogleCloud from "./components/patners/GoogleCloud";
import AmazonWebService from "./components/patners/AmazonWebService";
import MicrosoftAzure from "./components/patners/MicrosoftAzure";
import CloudMigration from "./components/CloudMigration";
import CloudConsulting from "./components/ClooudConsultant";
import Blogs from "./components/Blogs";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Cloudsecurity from "./components/Cloudsecurity";
import CloudAndDataAnalisis from "./components/CloudAndDataAnalisis";
import ApplicationDevelopment from "./components/ApplicationDevelopment";
import DevOps from "./components/DevOps";
import CloudManagement from "./components/CloudManagement";
import TermsOfService from "./components/TermsOfService";
import MCQSwiper from "./components/MCQSwiper";
import AddRoutePage from "./components/shared/Add_route";
import Developer from "./components/Developer";
import Marketplace from "./components/Marketplace";
import Shop from "./components/Shop";
import MakePDF from "./components/MakePDF";
import Cloudlandingzone from "./components/solutions/cloud-migration/Cloud-landing-zone";
import Zero_to_cloud_in_50_days from "./components/solutions/cloud-migration/Zero_to_cloud_in_50_days";
import ZeroMayhemMigration from "./components/solutions/cloud-migration/ZeroMayhemMigration";
import CloudAdaptionWorkshop from "./components/solutions/cloud-consulting/CloudAdaptionWorkshop";
import CloudGovernanceFramework from "./components/solutions/cloud-consulting/CloudGovernanceFramework";
import CloudTransformationPrimer from "./components/solutions/cloud-consulting/CloudTransformationPrimer";
import ZeroMayhemModernization from "./components/solutions/applicationDevelopment/ZeroMayhemModernization";
import TheKubernetesLaunchpad from "./components/solutions/applicationDevelopment/TheKubernetesLaunchpad";
import ServerlessArchitectureServices from "./components/solutions/applicationDevelopment/ServerlessArchitectureServices";
import ApplicationStrategy from "./components/solutions/applicationDevelopment/ApplicationStrategy";
import MultiTenantSecurityInTheCloud from "./components/solutions/cloudAndDataAnalysis/MultiTenantSecurityInTheCloud";
import ZeroTrustNetworking from "./components/solutions/cloudAndDataAnalysis/ZeroTrustNetworking";
import DatabaseandDataWarehouseMigration from "./components/solutions/cloudAndDataAnalysis/DatabaseandDataWarehouseMigration";
import CloudNativeDataLakes from "./components/solutions/cloudAndDataAnalysis/CloudNativeDataLakes";
import DataOpsAsAService from "./components/solutions/cloudAndDataAnalysis/DataOpsAsAService";
import DevOpsEssentials from "./components/solutions/cloudAndDataAnalysis/DevOpsEssentials";
import MachineLearningAndAdvancedAnalytics from "./components/solutions/cloudAndDataAnalysis/MachineLearningAndAdvancedAnalytics";
import CoreManagedServices from "./components/solutions/cloudManagement/CoreManagedServices";
import ZeroMayhem from "./components/solutions/cloudManagement/ZeroMayhem";
import Google_email from "./components/patners/google/Google_email";
import Cart from "./components/patners/google/Cart";
import AwsLandingPage from "./components/patners/AwsLandingPage";
import AwsConfig from "./components/patners/AwsConfig";
import AwsLanding2 from "./components/patners/AwsLanding2";
import AWSHome from "./Pages/AWSMicrosite/AWSHome";
import MachineLearning from "./Pages/AWSMicrosite/MachineLearning";
import Containers from "./Pages/AWSMicrosite/Containers";
import DataAnalysis from "./Pages/AWSMicrosite/DataAnalysis";
import ApplicationModernization from "./Pages/AWSMicrosite/ApplicationModernization";
import DatabaseService from "./Pages/AWSMicrosite/DatabaseService";
import IoT from "./Pages/AWSMicrosite/IoT";
import GenAI from "./Pages/AWSMicrosite/GenAI";
import ManagedServices from "./Pages/AWSMicrosite/ManagedServices";
import Login from "./Pages/Chat/Login";
import ChatHome from "./Pages/Chat/ChatHome";
import ZeroMayhemMigrationV2 from "./components/solutions/cloud-migration/ZeroMayhemMigrationV2";
import SignUp from "./Pages/Chat/SignUp ";
import ZeroTrust from "./components/solutions/cloud-migration/ZeroTrust";
import ZeroTrustEmail from "./components/solutions/cloud-migration/ZeroTrustEmail";
import ZeroTrustVault from "./components/solutions/cloud-migration/ZeroTrustVault";
import ZeroTrustGateway from "./components/solutions/cloud-migration/ZeroTrustGateway";




function App() {
  return (
    <div className="lg:max-w-[1440px]   scroll-smooth mx-auto overflow-hidden">
      <div className="w-full h-20 ">
        <Navbar />
      </div>
      <div className="min-h-[55vh]  ">
        <Routes>


          {/* chat start */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/adminchatHome" element={<ChatHome />} />
          {/* chat end */}


          <Route path="/" element={<Home />} />
          {/* <Route path="/swiper" element={<SwiperRoute />} /> */}
          <Route path="/swiper3" element={<MCQSwiper />} />
          <Route path="/pdf" element={<MakePDF />} />
          <Route path="/cloud-maturity" element={<MCQSwiper />} />  {/*this and the previous are same */}



          <Route path="/addroute" element={<AddRoutePage />} />
          <Route path="/marketplace" element={<Marketplace />} />

          {/* cloud migration sub pages */}
          <Route path="/solutions/zero-to-cloud-in-50-days" element={<Zero_to_cloud_in_50_days />} />
          <Route path="/solutions/CloudLandingZone" element={<Cloudlandingzone />} />
          <Route path="/solutions/zero mayhem migration" element={<ZeroMayhemMigrationV2 />} />
          <Route path="/solutions/ZeroTrust" element={<ZeroTrust />} />
          <Route path="/solutions/ZeroTrustEmail" element={<ZeroTrustEmail />} />
          <Route path="/solutions/ZeroTrustVault" element={<ZeroTrustVault />} />
          <Route path="/solutions/ZeroTrustGateway" element={<ZeroTrustGateway />} />

          {/* cloud consulting sub pages */}
          <Route path="/solutions/CloudAdaptionWorkshop" element={<CloudAdaptionWorkshop />} />
          <Route path="/solutions/CloudGovernanceFramework" element={<CloudGovernanceFramework />} />
          <Route path="/solutions/CloudTransformationPrimer" element={<CloudTransformationPrimer />} />


          {/* application development sub pages */}
          <Route path="/solutions/TheKubernetesLaunchpad" element={<TheKubernetesLaunchpad />} />
          <Route path="/solutions/ServerlessArchitecture" element={<ServerlessArchitectureServices />} />
          <Route path="/solutions/ZeroMayhemModernization" element={<ZeroMayhemModernization />} />
          <Route path="/solutions/ApplicationStrategy" element={<ApplicationStrategy />} />


          {/* cloud and data analysis pages */}
          <Route path="/solutions/MultiTenantSecurityInTheCloud" element={<MultiTenantSecurityInTheCloud />} />
          <Route path="/solutions/ZeroTrustNetworking" element={<ZeroTrustNetworking />} />
          <Route path="/solutions/DatabaseandDataWarehouseMigration" element={<DatabaseandDataWarehouseMigration />} />
          <Route path="/solutions/CloudNativeDataLakes" element={<CloudNativeDataLakes />} />
          <Route path="/solutions/DataOpsAsAService" element={<DataOpsAsAService />} />
          <Route path="/solutions/DevOpsEssentials" element={<DevOpsEssentials />} />
          <Route path="/solutions/MachineLearningAndAdvancedAnalytics" element={<MachineLearningAndAdvancedAnalytics />} />


          {/* cloud management sub pages */}
          <Route path="/solutions/CoreManagedServices" element={<CoreManagedServices />} />
          <Route path="/solutions/ZeroMayhem" element={<ZeroMayhem />} />


          <Route path="/shop" element={<Shop />} />
          <Route path="/developer" element={<Developer />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/company" element={<Company />} />
          <Route path="/content-hub" element={<ContentHub />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/cloud-migration" element={<CloudMigration />} />
          <Route path="/lets-talk" element={<LetsTalk />} />
          <Route path="/cloud-consulting" element={<CloudConsulting />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/pivacy-policy" element={<PrivacyPolicy />} />
          <Route path="/term-of-service" element={<TermsOfService />} />
          <Route path="/cloud-management" element={<CloudManagement />} />
          <Route path="/devops" element={<DevOps />} />
          <Route path="/application-development" element={<ApplicationDevelopment />} />
          <Route path="/cloud-security" element={<Cloudsecurity />} />
          <Route path="/cloud-and-data-analysis" element={<CloudAndDataAnalisis />} />
          <Route path="/aws/ml" element={<MachineLearning />} />
          <Route path="/aws/containers" element={<Containers />} />
          <Route path="/aws/data-analytics" element={<DataAnalysis />} />
          <Route path="/aws/application-development" element={<ApplicationDevelopment />} />
          <Route path="/aws/application-modernization" element={<ApplicationModernization />} />
          <Route path="/aws/databas-service" element={<DatabaseService />} />
          <Route path="/aws/iot" element={<IoT />} />
          <Route path="/aws/managedServives" element={<ManagedServices />} />
          <Route path="/aws/GenAI" element={<GenAI />} />


          {/* partners */}
          <Route path="/partners/google-cloud" element={<GoogleCloud />} />
          <Route path="/partners/google-cloud/email-service" element={<Google_email />} />
          <Route path="/partners/google-cloud/email-service/cart" element={<Cart />} />
          <Route
            path="/partners/aws"
            element={<AWSHome />}
          />
          <Route
            path="/partners/aws/awsLanding"
            element={<AwsLandingPage />}
          />
          <Route
            path="/partners/aws/config"
            element={<AwsConfig />}
          />
          <Route
            path="/partners/microsoft-azure"
            element={<MicrosoftAzure />}
          />
          <Route
            path="/partners/aws/landing2"
            element={<AwsLanding2 />}
          />




          <Route path="*" element={<Error />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;

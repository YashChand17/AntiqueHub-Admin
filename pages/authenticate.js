import Layout from "@/components/Layout";
import { useState, useEffect } from "react";

export default function AuthenticatePage() {
  const [antiqueHubInfo, setAntiqueHubInfo] = useState("");
  const [antiqueImagesInfo, setAntiqueImagesInfo] = useState("");
  const [nonAntiqueImagesInfo, setNonAntiqueImagesInfo] = useState("");

  useEffect(() => {
    // Set AntiqueHub info
    const antiqueHubIntro = `In the digital transformation era, 'Antique Hub' emerges as a pioneering e-commerce platform dedicated to antique enthusiasts, offering an exclusive platform to explore and procure genuine artifacts. The integration of advanced deep learning technologies, particularly Convolutional Neural Networks (CNNs) like Inception V3 and VGGNet, sets Antique Hub apart, achieving remarkable accuracies of 96% and 94% respectively. These sophisticated models play a pivotal role in authenticating antique items, ensuring the platform's commitment to trust and authenticity. Through rigorous evaluation, the precision of these models in identifying and validating items has been confirmed. Antique Hub's innovative approach not only redefines the antiquities market but also contributes to the continuous enhancement of user experience, shaping the future of antique acquisition in the digital age.`;

    // Set dataset info
    const antiqueImagesInfo = {
      collectedFrom: "The Metropolitan Museum of Art",
      dating: "1400 - 1900",
    };

    const nonAntiqueImagesInfo = {
      collectedFrom: "Cleveland Museum of Art collection",
      dating: "After 1923",
    };

    setAntiqueHubInfo(antiqueHubIntro);
    setAntiqueImagesInfo(antiqueImagesInfo);
    setNonAntiqueImagesInfo(nonAntiqueImagesInfo);
  }, []);

  const handleAuthenticate = () => {
    window.location.href = "ApiLink";
  };

  return (
    <Layout>
      <div className="flex flex-col items-start">
        <h1 className="text-2xl font-medium mb-4">AntiqueHub Authentication</h1>
        <div className="grid grid-cols-1 gap-4 w-full max-w-7xl">
          <div className="bg-gray-100 rounded-md p-4">
            <h2 className="text-lg font-medium mb-2">About Us:</h2>
            <p>{antiqueHubInfo}</p>
            <div className="mt-2">
              <h2 className="text-lg font-medium mb-2">Dataset:</h2>
              <div className="flex justify-between gap-4">
                <div className="bg-gray-200 rounded-md p-4 flex-1">
                  <h3 className="text-base font-medium mb-2">
                    Antique Images:
                  </h3>
                  <ul>
                    <li>
                      <strong>Source:</strong> {antiqueImagesInfo.collectedFrom}
                    </li>
                    <li>
                      <strong>Approximate Dating:</strong>{" "}
                      {antiqueImagesInfo.dating}
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-200 rounded-md p-4 flex-1">
                  <h3 className="text-base font-medium mb-2">
                    Non Antique Images:
                  </h3>
                  <ul>
                    <li>
                      <strong>Source:</strong>{" "}
                      {nonAntiqueImagesInfo.collectedFrom}
                    </li>
                    <li>
                      <strong>Approximate Dating:</strong>{" "}
                      {nonAntiqueImagesInfo.dating}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 rounded-md p-4">
            <div className="mt-2">
              <button
                onClick={handleAuthenticate}
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
              >
                Authenticate
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

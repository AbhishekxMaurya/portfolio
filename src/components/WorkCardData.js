import pro1 from "../assets/project1.jpeg";
import pro2 from "../assets/project2.jpeg";
import pro3 from "../assets/project3.jpeg";

const WorkCardData = [
  {
    imgsrc: pro1,
    title: "Talent Turbocharged",
    text: "ML model facilitates efficient talent acquisition by automatically comparing job descriptions with candidate resumes to identify suitable matches.",
    view: "https://talent-turbocharging.onrender.com/"
  },
  {
    imgsrc: pro2,
    title: "Stock Anomaly Detector",
    text: "Developed an anomaly detection model  to predict stock price anomalies, integrated into a Flask web application for real-time anomaly detection based on historical stock data.",
    view: "https://stockanomaly-production.up.railway.app/"
  },
  {
    imgsrc: pro3,
    title: "Weather Forecast",
    text: "Discover current weather conditions for any city you select. Real-time temperature, wind-speed, humidity level. Leveraged the OpenWeatherMap API to fetch up-to-data weather information.",
    view: "https://abhishekxmaurya.github.io/resumeproject/"
  }
];

export default WorkCardData;

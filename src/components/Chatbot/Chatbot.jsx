import React, { useState, useEffect, useRef } from "react";
import styles from "./Chatbot.module.css";
import axios from "axios";

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [profileEmbeddings, setProfileEmbeddings] = useState([]);
  const messagesEndRef = useRef(null);
  const [apiKey, setApiKey] = useState(null); // Store API Key

  // ✅ Fetch API Key from Backend
  useEffect(() => {
    const fetchApiKey = async () => {
      try {
        const response = await axios.get("https://backend-d72q.onrender.com/api/key");
        const key = response.data.apiKey?.trim().replace(/^'|'$/g, "");  // Ensure key is trimmed properly
        setApiKey(key);// Remove extra spaces or quotes
      } catch (error) {
        console.error("Error fetching API key:", error);
      }
    };
    fetchApiKey();
  }, []);
  // Profile Data
  const profileData = [
    {
      section: "about",
      text: `Naveen is a Data Scientist with over 4 years of experience in building scalable AI-driven solutions, data pipelines, and automation workflows. Proficient in Python, RASA, TensorFlow, PyTorch, SQL, AWS, and Big Data technologies like Hadoop and Spark, he has successfully delivered impactful projects, including chatbot integration, stock forecasting,
     and PDF processing systems. He is a recipient of the AI & Data Pioneer Award for leveraging AI to achieve a 20% increase in revenue and the Cognizant Bronze Cheers Award for outstanding performance and project success. Naveen holds a Bachelor’s in Electronics and Communication Engineering and a Master’s in Data Science, showcasing a strong blend of technical expertise and academic excellence.`   
    },
    {
      section: "experience",
      text: `Data Scientist at Corp 2 Corp Inc (August 2024 – Present):
      - Integrated a chatbot using RASA and Python with an existing application.
      - Designed automated pipelines using AWS for data ingestion and transformation.
    
      Programmer Analyst at Cognizant (February 2021 – December 2022):
      - Designed and automated ETL pipelines using Apache Airflow and Spark, reducing manual workload by 80% and improving real-time data processing efficiency.
      - Led CRM data workflow automation using IICS and SQL, reducing manual data entry by 80%, boosting data accuracy by 90%, and enabling better investment analysis.
      - Built and optimized large-scale data pipelines using Databricks and Azure Functions for CRM and ERP synchronization, achieving a 40% performance boost and a 35% reporting speed increase.
    
      Data Science Intern at Young Minds Technology Solutions Pvt Ltd (July 2020 – December 2020):
      - Built scalable data pipelines using Python, SQL, and AWS SageMaker, achieving 85.7% model precision and enabling seamless integration with DynamoDB.
      - Developed predictive analytics with TSQL, reducing customer churn by 25%, increasing retention by 20%, and delivering actionable insights for data-driven strategies.
    
      Machine Learning Intern at Ed & Immigo (January 2020 – May 2020):
      - Identified patterns and trends in student immigration data using Python and Machine Learning.
      - Developed an automation pipeline where students could self-shortlist universities based on their profiles.`
    },
    {
      section: "skills",
      text: `Languages and Frameworks: Python, R, Scala, SAS, PyTorch, TensorFlow, Spark, Shell Script, SQL, RDBMS, NoSQL.
      Cloud and Developer Tools: AWS (CloudWatch, SageMaker, Redshift, S3, EMR, Lambda, DynamoDB), Big Data (Hadoop, Hive, Spark, EMR), IICS, Azure, GCP, SQL Optimization, Airflow, ETL, Jenkins, Firebase, Git, Postman, Docker, Kafka, Generative AI, Conversational AI, MongoDB, PostgreSQL, Cassandra, SSMS, MySQL, Tableau, Power BI, RASA.`
    },
    {
        section: "education",
        text: (() => {
          const currentDate = new Date();
          const graduationDate = new Date("2024-05-01");
          const bachelorsCompletionDate = new Date("2021-05-01");
    
          let educationText = `Bachelor of Technology in Electronics and Communication Engineering, GITAM University (Aug 2017 – May 2021).`;
    
          if (currentDate < graduationDate) {
            educationText += ` Master of Science in Data Science, Stevens Institute of Technology (Jan 2023 – May 2024) (Currently pursuing).`;
          } else {
            educationText += ` Master of Science in Data Science, Stevens Institute of Technology (Jan 2023 – May 2024) (Completed).`;
          }
    
          return educationText;
        })(),
    },
    {
      section: "projects",
      text: `Research ai (October 2024 - November 2024): A bot that can generate articles with a proper format using Crewai, Serper API and GPT-4. given a topic.
      Ask PDF (April 2024 – May 2024): Developed a PDF processing system using AWS Bedrock, LangChain, and FAISS, achieving over 90% accuracy in retrieving relevant document chunks and reducing query response time by 70%.
      Type SQL (May 2024 – August 2024): Built a Text-to-SQL generator with ER diagram creation to streamline database design validation and enhance schema accuracy, reducing setup time by 40% and improving query generation efficiency by 20%.
      Talk Beyond (March 2024 - April 2024): A Message translating app built using Flutter and Google Translate API which is localized over 30+ languages.
      Investo (January 2024 – February 2024): Developed a stock forecasting app using Python and AWS to stream stock data, predict prices with 95% accuracy using ARIMA and GARCH models in SageMaker, and visualize trends with AWS Lambda.`
    },
    {
      section: "Achievements",
      text: `AI & Data Pioneer Award (Corp 2 Corp Inc, 2025): Leveraged AI to achieve a 20% increase in revenue by optimizing data pipelines and automating workflows. Cognizant Bronze Cheers Award (Cognizant, 2022): Recognized for outstanding performance and project success in CRM data workflow automation and large-scale data pipeline optimization.`
    },
    {
      section: "contact",
      text: `Email: naveenvenkat58@gmail.com and LinkedIn: https/linkedin.com/in/naveen1609`
    },
    {
      section: "Personal Information",
      text: `Gender: Male, DOB: 16th September 1999, Nationality: Indian.`,
    },
    {
      section: "Languages",
      text: `English, Telugu, Hindi.`,
    },
    {
      section: "Location",
      text: `United States.`,
    },
    {
      section: "Visa and Work Status",
      text: `Visa: F1 OPT, Sponsorship: Required for H1B.`,
    },
    {
      section: "Other Details",
      text: `Not Physically Disabled, No Criminal Records, Has a Legal Driving License, Willing to Relocate, Flexible working On-site, Remote, or Hybrid.`,
    }
  ];
  console.log("Profile Data Loaded:", profileData); 
  // Toggle Chat Widget
  const toggleChat = () => {
    setIsOpen((prev) => !prev);
  };

  // ✅ Generate Profile Embeddings
  useEffect(() => {
    const generateProfileEmbeddings = async () => {
      if (!apiKey) return;
      try {
        const embeddedData = await Promise.all(
          profileData.map(async (item) => {
            const response = await axios.post(
              "https://api.openai.com/v1/embeddings",
              { model: "text-embedding-ada-002", input: item.text },
              { headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" } }
            );
            return { ...item, embedding: response.data.data[0].embedding };
          })
        );
        setProfileEmbeddings(embeddedData);
      } catch (error) {
        console.error("Error generating embeddings:", error);
      }
    };

    generateProfileEmbeddings();
  }, [apiKey]);

  // ✅ Semantic Search Function
  const semanticSearch = (queryEmbedding) => {
    if (!profileEmbeddings.length) return "Profile data not available.";

    const similarities = profileEmbeddings.map((data) => {
      const similarity = queryEmbedding.reduce((acc, value, index) => acc + value * data.embedding[index], 0);
      return { similarity, text: data.text };
    });

    similarities.sort((a, b) => b.similarity - a.similarity);
    return similarities[0]?.text || "No relevant information found.";
  };

  // ✅ Send Message Function
  const sendMessage = async () => {
    if (!input.trim() || loading) return;
    setMessages((prev) => [...prev, { role: "user", content: input }]);
    setInput("");
    setLoading(true);

    try {
      const responseEmbedding = await axios.post(
        "https://api.openai.com/v1/embeddings",
        { model: "text-embedding-ada-002", input },
        { headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" } }
      );

      const queryEmbedding = responseEmbedding.data.data[0].embedding;
      const relevantInfo = semanticSearch(queryEmbedding);

      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-4",
          messages: [
            { role: "system", content: "You are an AI answering questions about Naveen's profile. Use only available profile data." },
            { role: "user", content: `Relevant info: ${relevantInfo}. Question: ${input}` }
          ]
        },
        { headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" } }
      );

      setMessages((prev) => [...prev, { role: "assistant", content: response.data.choices[0].message.content }]);
    } catch (error) {
      console.error("API Error:", error.response?.data || error.message);
      setMessages((prev) => [...prev, { role: "assistant", content: "Sorry, something went wrong!" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className={styles.floatingButton} onClick={() => setIsOpen((prev) => !prev)}>💬</div>

      {isOpen && (
        <div className={styles.chatContainer}>
          <div className={styles.chatHeader}>
            <h4>Chat with AI</h4>
            <button className={styles.closeButton} onClick={() => setIsOpen(false)}>✖</button>
          </div>
          <div className={styles.chatWindow}>
            {messages.map((msg, index) => (
              <div key={index} className={`${styles.message} ${msg.role === "user" ? styles.user : styles.bot}`}>
                <p className={styles.bubble}>{msg.content}</p>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className={styles.inputArea}>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type your message..."
              className={styles.input} disabled={loading} />
            <button onClick={sendMessage} className={styles.sendButton} disabled={loading}>{loading ? "..." : "Send"}</button>
          </div>
        </div>
      )}
    </>
  );
};
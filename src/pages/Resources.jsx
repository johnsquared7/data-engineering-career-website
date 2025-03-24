import React, { useState, useEffect } from 'react';
import MarkdownRenderer from '../components/MarkdownRenderer';
import { FaBook, FaUsers, FaTools, FaGraduationCap, FaLaptopCode } from 'react-icons/fa';

const Resources = () => {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        // Using comprehensive_transition_plan.md for resources section
        const response = await fetch('/src/data/comprehensive_transition_plan.md');
        const text = await response.text();
        setContent(text);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching resources content:', error);
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  const resourceCategories = [
    {
      title: "Learning Resources",
      icon: <FaGraduationCap className="h-8 w-8 text-blue-500" />,
      items: [
        { name: "Python for Data Science and Machine Learning Bootcamp", url: "https://www.udemy.com/course/python-for-data-science-and-machine-learning-bootcamp/" },
        { name: "The Data Engineering Cookbook", url: "https://github.com/andkret/Cookbook" },
        { name: "Fundamentals of Data Engineering", url: "https://www.oreilly.com/library/view/fundamentals-of-data/9781098108298/" },
        { name: "Apache Spark - The Definitive Guide", url: "https://www.oreilly.com/library/view/spark-the-definitive/9781491912201/" },
        { name: "Databricks Academy", url: "https://academy.databricks.com/" }
      ]
    },
    {
      title: "Community Support",
      icon: <FaUsers className="h-8 w-8 text-green-500" />,
      items: [
        { name: "Reddit r/dataengineering", url: "https://www.reddit.com/r/dataengineering/" },
        { name: "Discord Data Engineering Channels", url: "https://discord.com/invite/9vHy5NXfQK" },
        { name: "Slack Communities (Locally Optimistic, dbt)", url: "https://locallyoptimistic.com/community/" },
        { name: "Stack Overflow", url: "https://stackoverflow.com/" }
      ]
    },
    {
      title: "Tools and Platforms",
      icon: <FaTools className="h-8 w-8 text-purple-500" />,
      items: [
        { name: "AWS Training and Certification", url: "https://aws.amazon.com/training/" },
        { name: "Microsoft Learn for Azure", url: "https://docs.microsoft.com/en-us/learn/azure/" },
        { name: "Google Cloud Training", url: "https://cloud.google.com/training" },
        { name: "dbt (data build tool) Fundamentals", url: "https://courses.getdbt.com/courses/fundamentals" },
        { name: "MongoDB University", url: "https://university.mongodb.com/" }
      ]
    },
    {
      title: "Project Resources",
      icon: <FaLaptopCode className="h-8 w-8 text-red-500" />,
      items: [
        { name: "Kaggle Datasets", url: "https://www.kaggle.com/datasets" },
        { name: "AWS Public Datasets", url: "https://registry.opendata.aws/" },
        { name: "Google Public Datasets", url: "https://cloud.google.com/datasets" },
        { name: "DataCamp Projects", url: "https://www.datacamp.com/projects" },
        { name: "GitHub Learning Lab", url: "https://lab.github.com/" }
      ]
    },
    {
      title: "Recommended Reading",
      icon: <FaBook className="h-8 w-8 text-yellow-500" />,
      items: [
        { name: "The Data Warehouse Toolkit (Kimball)", url: "https://www.kimballgroup.com/data-warehouse-business-intelligence-resources/books/data-warehouse-dw-toolkit/" },
        { name: "Streaming Systems", url: "https://www.oreilly.com/library/view/streaming-systems/9781491983867/" },
        { name: "Practical MLOps", url: "https://www.oreilly.com/library/view/practical-mlops/9781098103002/" },
        { name: "Data Mesh (Zhamak Dehghani)", url: "https://www.oreilly.com/library/view/data-mesh/9781492092384/" },
        { name: "Building LLM Powered Applications", url: "https://www.oreilly.com/library/view/building-llm-powered/9781098150952/" }
      ]
    }
  ];

  if (loading) {
    return <div className="text-center py-10">Loading resources content...</div>;
  }

  return (
    <div className="space-y-8">
      <div className="text-center py-6">
        <h1 className="text-3xl font-bold text-gray-900">Resources</h1>
        <p className="text-xl text-gray-600 mt-2">Curated learning materials and tools for your data engineering journey</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {resourceCategories.map((category) => (
          <div key={category.title} className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0">
                {category.icon}
              </div>
              <h2 className="ml-3 text-xl font-semibold text-gray-900">{category.title}</h2>
            </div>
            <ul className="space-y-3">
              {category.items.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline flex items-center"
                  >
                    <span className="mr-2">•</span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Additional Resources</h2>
        <div className="prose prose-blue max-w-none">
          <p>
            The resources listed above are just a starting point. As you progress through your data engineering journey, 
            you'll discover many more valuable resources. Remember to:
          </p>
          <ul>
            <li>Join online communities to stay updated with the latest trends and technologies</li>
            <li>Follow thought leaders in the data engineering space on social media and blogs</li>
            <li>Participate in webinars, workshops, and conferences when possible</li>
            <li>Contribute to open-source projects to build your portfolio and network</li>
            <li>Create your own content to solidify your learning and establish your presence in the community</li>
          </ul>
          <p>
            The field of data engineering evolves rapidly. Continuous learning and community engagement 
            are essential for staying current and advancing your career.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Full Resource Documentation</h2>
        <MarkdownRenderer content={content} />
      </div>
    </div>
  );
};

export default Resources;

import React, { useState, useEffect } from 'react';
import MarkdownRenderer from '../components/MarkdownRenderer';
import ChecklistGroup from '../components/ChecklistGroup';
import ChecklistItem from '../components/ChecklistItem';
import { useChecklist } from '../contexts/ChecklistContext';

const SkillsAssessment: React.FC = () => {
  const [content, setContent] = useState<string>('');
  const { isItemChecked, toggleItem, calculateProgress } = useChecklist();
  const [loading, setLoading] = useState<boolean>(true);

  // High priority skills
  const highPriorityItems: string[] = [
    'python_skills', 'cloud_computing', 'big_data_tech', 
    'modern_etl', 'data_warehousing'
  ];

  // Medium priority skills
  const mediumPriorityItems: string[] = [
    'nosql_databases', 'data_ingestion', 'real_time_processing', 
    'cloud_data_platforms', 'data_modeling'
  ];

  // Lower priority skills
  const lowerPriorityItems: string[] = [
    'ml_integration', 'generative_ai', 'data_governance', 
    'advanced_visualization', 'container_tech'
  ];

  useEffect(() => {
    const fetchContent = async (): Promise<void> => {
      try {
        const response = await fetch('/src/data/skills_assessment.md');
        const text = await response.text();
        setContent(text);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching skills assessment content:', error);
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  if (loading) {
    return <div className="text-center py-10">Loading skills assessment content...</div>;
  }

  return (
    <div className="space-y-8">
      <div className="text-center py-6">
        <h1 className="text-3xl font-bold text-gray-900">Skills Assessment</h1>
        <p className="text-xl text-gray-600 mt-2">Analyze your current skills and identify gaps to become a world-class data engineer</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <MarkdownRenderer content={content} />
          </div>
        </div>

        <div className="space-y-6">
          <ChecklistGroup 
            title="High Priority Skills" 
            progress={calculateProgress(highPriorityItems)}
          >
            <ChecklistItem 
              id="python_skills" 
              label="Develop Python programming skills" 
              isChecked={isItemChecked('python_skills')} 
              onChange={() => toggleItem('python_skills')}
            />
            <ChecklistItem 
              id="cloud_computing" 
              label="Learn a major cloud platform" 
              isChecked={isItemChecked('cloud_computing')} 
              onChange={() => toggleItem('cloud_computing')}
            />
            <ChecklistItem 
              id="big_data_tech" 
              label="Gain experience with Spark and Hadoop" 
              isChecked={isItemChecked('big_data_tech')} 
              onChange={() => toggleItem('big_data_tech')}
            />
            <ChecklistItem 
              id="modern_etl" 
              label="Learn modern ETL/ELT approaches" 
              isChecked={isItemChecked('modern_etl')} 
              onChange={() => toggleItem('modern_etl')}
            />
            <ChecklistItem 
              id="data_warehousing" 
              label="Expand knowledge of cloud data warehouses" 
              isChecked={isItemChecked('data_warehousing')} 
              onChange={() => toggleItem('data_warehousing')}
            />
          </ChecklistGroup>

          <ChecklistGroup 
            title="Medium Priority Skills" 
            progress={calculateProgress(mediumPriorityItems)}
          >
            <ChecklistItem 
              id="nosql_databases" 
              label="Learn NoSQL database solutions" 
              isChecked={isItemChecked('nosql_databases')} 
              onChange={() => toggleItem('nosql_databases')}
            />
            <ChecklistItem 
              id="data_ingestion" 
              label="Gain experience with data ingestion tools" 
              isChecked={isItemChecked('data_ingestion')} 
              onChange={() => toggleItem('data_ingestion')}
            />
            <ChecklistItem 
              id="real_time_processing" 
              label="Understand stream processing frameworks" 
              isChecked={isItemChecked('real_time_processing')} 
              onChange={() => toggleItem('real_time_processing')}
            />
            <ChecklistItem 
              id="cloud_data_platforms" 
              label="Learn cloud data platforms" 
              isChecked={isItemChecked('cloud_data_platforms')} 
              onChange={() => toggleItem('cloud_data_platforms')}
            />
            <ChecklistItem 
              id="data_modeling" 
              label="Develop advanced data modeling skills" 
              isChecked={isItemChecked('data_modeling')} 
              onChange={() => toggleItem('data_modeling')}
            />
          </ChecklistGroup>

          <ChecklistGroup 
            title="Lower Priority Skills" 
            progress={calculateProgress(lowerPriorityItems)}
          >
            <ChecklistItem 
              id="ml_integration" 
              label="Understand ML pipeline integration" 
              isChecked={isItemChecked('ml_integration')} 
              onChange={() => toggleItem('ml_integration')}
            />
            <ChecklistItem 
              id="generative_ai" 
              label="Learn to leverage AI for data engineering" 
              isChecked={isItemChecked('generative_ai')} 
              onChange={() => toggleItem('generative_ai')}
            />
            <ChecklistItem 
              id="data_governance" 
              label="Understand data security and compliance" 
              isChecked={isItemChecked('data_governance')} 
              onChange={() => toggleItem('data_governance')}
            />
            <ChecklistItem 
              id="advanced_visualization" 
              label="Expand visualization skills beyond Power BI" 
              isChecked={isItemChecked('advanced_visualization')} 
              onChange={() => toggleItem('advanced_visualization')}
            />
            <ChecklistItem 
              id="container_tech" 
              label="Learn Docker and Kubernetes" 
              isChecked={isItemChecked('container_tech')} 
              onChange={() => toggleItem('container_tech')}
            />
          </ChecklistGroup>
        </div>
      </div>
    </div>
  );
};

export default SkillsAssessment; 
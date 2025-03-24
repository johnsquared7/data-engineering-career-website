import React, { useState, useEffect } from 'react';
import MarkdownRenderer from '../components/MarkdownRenderer';
import ChecklistGroup from '../components/ChecklistGroup';
import ChecklistItem from '../components/ChecklistItem';
import { useChecklist } from '../contexts/ChecklistContext';

const LearningRoadmap = () => {
  const [content, setContent] = useState('');
  const { isItemChecked, toggleItem, calculateProgress } = useChecklist();
  const [loading, setLoading] = useState(true);

  // Phase 1 checklist items
  const phase1Items = [
    'python_basics', 'python_data_structures', 'pandas_numpy', 
    'sql_advanced', 'sql_performance', 'etl_concepts', 'git_basics'
  ];

  // Phase 2 checklist items
  const phase2Items = [
    'cloud_fundamentals', 'cloud_storage', 'spark_basics', 
    'spark_sql', 'data_streaming'
  ];

  // Phase 3 checklist items
  const phase3Items = [
    'data_warehouse_modeling', 'nosql_databases', 'airflow', 
    'infrastructure_as_code'
  ];

  // Phase 4 checklist items
  const phase4Items = [
    'cloud_data_engineering', 'real_time_processing', 
    'dataops', 'data_governance'
  ];

  // Phase 5 checklist items
  const phase5Items = [
    'ml_engineering', 'generative_ai', 'data_mesh', 
    'event_driven_architecture'
  ];

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch('/src/data/technical_learning_roadmap.md');
        const text = await response.text();
        setContent(text);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching roadmap content:', error);
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  if (loading) {
    return <div className="text-center py-10">Loading roadmap content...</div>;
  }

  return (
    <div className="space-y-8">
      <div className="text-center py-6">
        <h1 className="text-3xl font-bold text-gray-900">Technical Learning Roadmap</h1>
        <p className="text-xl text-gray-600 mt-2">Your path from Senior Data Analyst to World-Class Data Engineer</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <MarkdownRenderer content={content} />
          </div>
        </div>

        <div className="space-y-6">
          <ChecklistGroup 
            title="Phase 1: Foundation Building" 
            progress={calculateProgress(phase1Items)}
          >
            <ChecklistItem 
              id="python_basics" 
              label="Learn Python basics" 
              isChecked={isItemChecked('python_basics')} 
              onChange={() => toggleItem('python_basics')}
            />
            <ChecklistItem 
              id="python_data_structures" 
              label="Master Python data structures" 
              isChecked={isItemChecked('python_data_structures')} 
              onChange={() => toggleItem('python_data_structures')}
            />
            <ChecklistItem 
              id="pandas_numpy" 
              label="Practice with pandas and NumPy" 
              isChecked={isItemChecked('pandas_numpy')} 
              onChange={() => toggleItem('pandas_numpy')}
            />
            <ChecklistItem 
              id="sql_advanced" 
              label="Learn advanced SQL techniques" 
              isChecked={isItemChecked('sql_advanced')} 
              onChange={() => toggleItem('sql_advanced')}
            />
            <ChecklistItem 
              id="sql_performance" 
              label="Study SQL performance tuning" 
              isChecked={isItemChecked('sql_performance')} 
              onChange={() => toggleItem('sql_performance')}
            />
            <ChecklistItem 
              id="etl_concepts" 
              label="Understand ETL/ELT concepts" 
              isChecked={isItemChecked('etl_concepts')} 
              onChange={() => toggleItem('etl_concepts')}
            />
            <ChecklistItem 
              id="git_basics" 
              label="Learn Git version control" 
              isChecked={isItemChecked('git_basics')} 
              onChange={() => toggleItem('git_basics')}
            />
          </ChecklistGroup>

          <ChecklistGroup 
            title="Phase 2: Cloud & Big Data" 
            progress={calculateProgress(phase2Items)}
          >
            <ChecklistItem 
              id="cloud_fundamentals" 
              label="Learn cloud provider fundamentals" 
              isChecked={isItemChecked('cloud_fundamentals')} 
              onChange={() => toggleItem('cloud_fundamentals')}
            />
            <ChecklistItem 
              id="cloud_storage" 
              label="Study cloud storage solutions" 
              isChecked={isItemChecked('cloud_storage')} 
              onChange={() => toggleItem('cloud_storage')}
            />
            <ChecklistItem 
              id="spark_basics" 
              label="Learn Spark fundamentals" 
              isChecked={isItemChecked('spark_basics')} 
              onChange={() => toggleItem('spark_basics')}
            />
            <ChecklistItem 
              id="spark_sql" 
              label="Practice with Spark SQL and DataFrames" 
              isChecked={isItemChecked('spark_sql')} 
              onChange={() => toggleItem('spark_sql')}
            />
            <ChecklistItem 
              id="data_streaming" 
              label="Understand data streaming concepts" 
              isChecked={isItemChecked('data_streaming')} 
              onChange={() => toggleItem('data_streaming')}
            />
          </ChecklistGroup>

          <ChecklistGroup 
            title="Phase 3: Advanced Data Engineering" 
            progress={calculateProgress(phase3Items)}
          >
            <ChecklistItem 
              id="data_warehouse_modeling" 
              label="Study data warehouse modeling" 
              isChecked={isItemChecked('data_warehouse_modeling')} 
              onChange={() => toggleItem('data_warehouse_modeling')}
            />
            <ChecklistItem 
              id="nosql_databases" 
              label="Learn NoSQL databases" 
              isChecked={isItemChecked('nosql_databases')} 
              onChange={() => toggleItem('nosql_databases')}
            />
            <ChecklistItem 
              id="airflow" 
              label="Master Apache Airflow" 
              isChecked={isItemChecked('airflow')} 
              onChange={() => toggleItem('airflow')}
            />
            <ChecklistItem 
              id="infrastructure_as_code" 
              label="Learn infrastructure as code" 
              isChecked={isItemChecked('infrastructure_as_code')} 
              onChange={() => toggleItem('infrastructure_as_code')}
            />
          </ChecklistGroup>

          <ChecklistGroup 
            title="Phase 4: Specialization & Mastery" 
            progress={calculateProgress(phase4Items)}
          >
            <ChecklistItem 
              id="cloud_data_engineering" 
              label="Master cloud-native data engineering" 
              isChecked={isItemChecked('cloud_data_engineering')} 
              onChange={() => toggleItem('cloud_data_engineering')}
            />
            <ChecklistItem 
              id="real_time_processing" 
              label="Learn real-time data processing" 
              isChecked={isItemChecked('real_time_processing')} 
              onChange={() => toggleItem('real_time_processing')}
            />
            <ChecklistItem 
              id="dataops" 
              label="Implement DataOps & MLOps" 
              isChecked={isItemChecked('dataops')} 
              onChange={() => toggleItem('dataops')}
            />
            <ChecklistItem 
              id="data_governance" 
              label="Study data governance & security" 
              isChecked={isItemChecked('data_governance')} 
              onChange={() => toggleItem('data_governance')}
            />
          </ChecklistGroup>

          <ChecklistGroup 
            title="Phase 5: Cutting-Edge Technologies" 
            progress={calculateProgress(phase5Items)}
          >
            <ChecklistItem 
              id="ml_engineering" 
              label="Learn ML engineering" 
              isChecked={isItemChecked('ml_engineering')} 
              onChange={() => toggleItem('ml_engineering')}
            />
            <ChecklistItem 
              id="generative_ai" 
              label="Explore generative AI for data engineering" 
              isChecked={isItemChecked('generative_ai')} 
              onChange={() => toggleItem('generative_ai')}
            />
            <ChecklistItem 
              id="data_mesh" 
              label="Understand data mesh architecture" 
              isChecked={isItemChecked('data_mesh')} 
              onChange={() => toggleItem('data_mesh')}
            />
            <ChecklistItem 
              id="event_driven_architecture" 
              label="Study event-driven architecture" 
              isChecked={isItemChecked('event_driven_architecture')} 
              onChange={() => toggleItem('event_driven_architecture')}
            />
          </ChecklistGroup>
        </div>
      </div>
    </div>
  );
};

export default LearningRoadmap;

import React, { useState, useEffect } from 'react';
import MarkdownRenderer from '../components/MarkdownRenderer';
import ChecklistGroup from '../components/ChecklistGroup';
import ChecklistItem from '../components/ChecklistItem';
import { useChecklist } from '../contexts/ChecklistContext';

const ProjectPlan = () => {
  const [content, setContent] = useState('');
  const { isItemChecked, toggleItem, calculateProgress } = useChecklist();
  const [loading, setLoading] = useState(true);

  // Phase 1 projects
  const phase1Items = [
    'project1_data_analysis_pipeline', 'project2_sql_python_integration', 
    'project3_version_control'
  ];

  // Phase 2 projects
  const phase2Items = [
    'project4_cloud_data_lake', 'project5_spark_processing', 
    'project6_streaming_pipeline'
  ];

  // Phase 3 projects
  const phase3Items = [
    'project7_data_warehouse', 'project8_nosql_integration', 
    'project9_airflow_orchestration'
  ];

  // Phase 4 projects
  const phase4Items = [
    'project10_cloud_native_platform', 'project11_real_time_analytics', 
    'project12_dataops'
  ];

  // Phase 5 projects
  const phase5Items = [
    'project13_ml_feature_store', 'project14_llm_pipeline', 
    'project15_data_mesh'
  ];

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch('/src/data/practical_project_plan.md');
        const text = await response.text();
        setContent(text);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching project plan content:', error);
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  if (loading) {
    return <div className="text-center py-10">Loading project plan content...</div>;
  }

  return (
    <div className="space-y-8">
      <div className="text-center py-6">
        <h1 className="text-3xl font-bold text-gray-900">Practical Project Plan</h1>
        <p className="text-xl text-gray-600 mt-2">Hands-on projects to build your data engineering portfolio</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <MarkdownRenderer content={content} />
          </div>
        </div>

        <div className="space-y-6">
          <ChecklistGroup 
            title="Phase 1 Projects: Foundation Building" 
            progress={calculateProgress(phase1Items)}
          >
            <ChecklistItem 
              id="project1_data_analysis_pipeline" 
              label="Project 1: Data Analysis Pipeline with Python" 
              isChecked={isItemChecked('project1_data_analysis_pipeline')} 
              onChange={() => toggleItem('project1_data_analysis_pipeline')}
            />
            <ChecklistItem 
              id="project2_sql_python_integration" 
              label="Project 2: SQL Server to Python Data Integration" 
              isChecked={isItemChecked('project2_sql_python_integration')} 
              onChange={() => toggleItem('project2_sql_python_integration')}
            />
            <ChecklistItem 
              id="project3_version_control" 
              label="Project 3: Version-Controlled Data Pipeline" 
              isChecked={isItemChecked('project3_version_control')} 
              onChange={() => toggleItem('project3_version_control')}
            />
          </ChecklistGroup>

          <ChecklistGroup 
            title="Phase 2 Projects: Cloud & Big Data" 
            progress={calculateProgress(phase2Items)}
          >
            <ChecklistItem 
              id="project4_cloud_data_lake" 
              label="Project 4: Cloud-Based Data Lake" 
              isChecked={isItemChecked('project4_cloud_data_lake')} 
              onChange={() => toggleItem('project4_cloud_data_lake')}
            />
            <ChecklistItem 
              id="project5_spark_processing" 
              label="Project 5: Spark Data Processing" 
              isChecked={isItemChecked('project5_spark_processing')} 
              onChange={() => toggleItem('project5_spark_processing')}
            />
            <ChecklistItem 
              id="project6_streaming_pipeline" 
              label="Project 6: Streaming Data Pipeline" 
              isChecked={isItemChecked('project6_streaming_pipeline')} 
              onChange={() => toggleItem('project6_streaming_pipeline')}
            />
          </ChecklistGroup>

          <ChecklistGroup 
            title="Phase 3 Projects: Advanced Data Engineering" 
            progress={calculateProgress(phase3Items)}
          >
            <ChecklistItem 
              id="project7_data_warehouse" 
              label="Project 7: Modern Data Warehouse" 
              isChecked={isItemChecked('project7_data_warehouse')} 
              onChange={() => toggleItem('project7_data_warehouse')}
            />
            <ChecklistItem 
              id="project8_nosql_integration" 
              label="Project 8: NoSQL Database Integration" 
              isChecked={isItemChecked('project8_nosql_integration')} 
              onChange={() => toggleItem('project8_nosql_integration')}
            />
            <ChecklistItem 
              id="project9_airflow_orchestration" 
              label="Project 9: Airflow Orchestration" 
              isChecked={isItemChecked('project9_airflow_orchestration')} 
              onChange={() => toggleItem('project9_airflow_orchestration')}
            />
          </ChecklistGroup>

          <ChecklistGroup 
            title="Phase 4 Projects: Specialization & Mastery" 
            progress={calculateProgress(phase4Items)}
          >
            <ChecklistItem 
              id="project10_cloud_native_platform" 
              label="Project 10: Cloud-Native Data Engineering Platform" 
              isChecked={isItemChecked('project10_cloud_native_platform')} 
              onChange={() => toggleItem('project10_cloud_native_platform')}
            />
            <ChecklistItem 
              id="project11_real_time_analytics" 
              label="Project 11: Real-Time Analytics System" 
              isChecked={isItemChecked('project11_real_time_analytics')} 
              onChange={() => toggleItem('project11_real_time_analytics')}
            />
            <ChecklistItem 
              id="project12_dataops" 
              label="Project 12: DataOps Implementation" 
              isChecked={isItemChecked('project12_dataops')} 
              onChange={() => toggleItem('project12_dataops')}
            />
          </ChecklistGroup>

          <ChecklistGroup 
            title="Phase 5 Projects: Cutting-Edge Technologies" 
            progress={calculateProgress(phase5Items)}
          >
            <ChecklistItem 
              id="project13_ml_feature_store" 
              label="Project 13: ML Feature Store" 
              isChecked={isItemChecked('project13_ml_feature_store')} 
              onChange={() => toggleItem('project13_ml_feature_store')}
            />
            <ChecklistItem 
              id="project14_llm_pipeline" 
              label="Project 14: LLM-Enhanced Data Pipeline" 
              isChecked={isItemChecked('project14_llm_pipeline')} 
              onChange={() => toggleItem('project14_llm_pipeline')}
            />
            <ChecklistItem 
              id="project15_data_mesh" 
              label="Project 15: Data Mesh Implementation" 
              isChecked={isItemChecked('project15_data_mesh')} 
              onChange={() => toggleItem('project15_data_mesh')}
            />
          </ChecklistGroup>
        </div>
      </div>
    </div>
  );
};

export default ProjectPlan;

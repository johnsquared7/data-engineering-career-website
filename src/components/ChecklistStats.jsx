import React, { useState } from 'react';
import { useChecklist } from '../contexts/ChecklistContext';

const ChecklistStats = () => {
  const { isItemChecked } = useChecklist();
  const [expanded, setExpanded] = useState(false);
  
  // Define all checklist categories and their items
  const categories = [
    {
      name: 'Learning Roadmap',
      items: [
        'python_basics', 'python_data_structures', 'pandas_numpy', 
        'sql_advanced', 'sql_performance', 'etl_concepts', 'git_basics',
        'cloud_fundamentals', 'cloud_storage', 'spark_basics', 
        'spark_sql', 'data_streaming',
        'data_warehouse_modeling', 'nosql_databases', 'airflow', 
        'infrastructure_as_code',
        'cloud_data_engineering', 'real_time_processing', 
        'dataops', 'data_governance',
        'ml_engineering', 'generative_ai', 'data_mesh', 
        'event_driven_architecture'
      ]
    },
    {
      name: 'Skills Assessment',
      items: [
        'python_skills', 'cloud_computing', 'big_data_tech', 
        'modern_etl', 'data_warehousing',
        'nosql_databases', 'data_ingestion', 'real_time_processing', 
        'cloud_data_platforms', 'data_modeling',
        'ml_integration', 'generative_ai', 'data_governance', 
        'advanced_visualization', 'container_tech'
      ]
    },
    {
      name: 'Project Plan',
      items: [
        'project1_data_analysis_pipeline', 'project2_sql_python_integration', 
        'project3_version_control',
        'project4_cloud_data_lake', 'project5_spark_processing', 
        'project6_streaming_pipeline',
        'project7_data_warehouse', 'project8_nosql_integration', 
        'project9_airflow_orchestration',
        'project10_cloud_native_platform', 'project11_real_time_analytics', 
        'project12_dataops',
        'project13_ml_feature_store', 'project14_llm_pipeline', 
        'project15_data_mesh'
      ]
    },
    {
      name: 'Career Progression',
      items: [
        'junior_python_training', 'junior_first_pipeline', 'junior_version_control',
        'junior_github_portfolio', 'junior_join_communities', 'junior_update_resume',
        'mid_cloud_solution', 'mid_spark_job', 'mid_data_warehouse',
        'mid_streaming_pipeline', 'mid_cloud_certification', 'mid_opensource_contribution',
        'mid_technical_blog',
        'senior_end_to_end_architecture', 'senior_data_quality', 'senior_orchestration',
        'senior_performance_optimization', 'senior_mentoring', 'senior_presentation',
        'senior_advanced_certification',
        'principal_data_platform', 'principal_best_practices', 'principal_ml_integration',
        'principal_self_service', 'principal_content_publishing', 'principal_conference_speaking',
        'principal_team_leading',
        'distinguished_innovative_solution', 'distinguished_opensource_framework',
        'distinguished_thought_leadership', 'distinguished_data_strategy',
        'distinguished_mentoring_engineers', 'distinguished_industry_recognition'
      ]
    }
  ];
  
  // Calculate statistics
  const totalItems = categories.reduce((acc, category) => acc + category.items.length, 0);
  const completedItems = categories.reduce((acc, category) => {
    return acc + category.items.filter(item => isItemChecked(item)).length;
  }, 0);
  
  const overallPercentage = totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;
  
  // Calculate category statistics
  const categoryStats = categories.map(category => {
    const total = category.items.length;
    const completed = category.items.filter(item => isItemChecked(item)).length;
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
    
    return {
      name: category.name,
      completed,
      total,
      percentage
    };
  });
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-900">Progress Summary</h2>
        <button 
          onClick={() => setExpanded(!expanded)}
          className="text-sm text-blue-600 hover:text-blue-800"
        >
          {expanded ? 'Show Less' : 'Show Details'}
        </button>
      </div>
      
      <div className="mb-6">
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium text-gray-700">Overall Progress</span>
          <span className="text-sm font-medium text-gray-500">{completedItems}/{totalItems} ({overallPercentage}%)</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-blue-600 h-2.5 rounded-full transition-all duration-300 ease-in-out" 
            style={{ width: `${overallPercentage}%` }}
          ></div>
        </div>
      </div>
      
      {expanded && (
        <div className="space-y-4">
          {categoryStats.map((stat) => (
            <div key={stat.name} className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">{stat.name}</span>
                <span className="text-sm font-medium text-gray-500">{stat.completed}/{stat.total} ({stat.percentage}%)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-blue-600 h-2.5 rounded-full transition-all duration-300 ease-in-out" 
                  style={{ width: `${stat.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChecklistStats;

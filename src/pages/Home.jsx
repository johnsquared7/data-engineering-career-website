import React from 'react';
import ChecklistStats from '../components/ChecklistStats';
import ChecklistExport from '../components/ChecklistExport';
import { useChecklist } from '../contexts/ChecklistContext';

const Home = () => {
  const { isItemChecked } = useChecklist();
  
  // Calculate overall progress for the dashboard
  const calculateOverallProgress = () => {
    // Define all checklist items across categories
    const allCategories = [
      // Learning Roadmap items
      'python_basics', 'python_data_structures', 'pandas_numpy', 
      'sql_advanced', 'sql_performance', 'etl_concepts', 'git_basics',
      'cloud_fundamentals', 'cloud_storage', 'spark_basics', 
      'spark_sql', 'data_streaming',
      'data_warehouse_modeling', 'nosql_databases', 'airflow', 
      'infrastructure_as_code',
      'cloud_data_engineering', 'real_time_processing', 
      'dataops', 'data_governance',
      'ml_engineering', 'generative_ai', 'data_mesh', 
      'event_driven_architecture',
      
      // Skills Assessment items
      'python_skills', 'cloud_computing', 'big_data_tech', 
      'modern_etl', 'data_warehousing',
      'nosql_databases', 'data_ingestion', 'real_time_processing', 
      'cloud_data_platforms', 'data_modeling',
      'ml_integration', 'generative_ai', 'data_governance', 
      'advanced_visualization', 'container_tech',
      
      // Project Plan items
      'project1_data_analysis_pipeline', 'project2_sql_python_integration', 
      'project3_version_control',
      'project4_cloud_data_lake', 'project5_spark_processing', 
      'project6_streaming_pipeline',
      'project7_data_warehouse', 'project8_nosql_integration', 
      'project9_airflow_orchestration',
      'project10_cloud_native_platform', 'project11_real_time_analytics', 
      'project12_dataops',
      'project13_ml_feature_store', 'project14_llm_pipeline', 
      'project15_data_mesh',
      
      // Career Progression items
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
    ];
    
    // Count completed items
    const completedCount = allCategories.filter(item => isItemChecked(item)).length;
    
    // Calculate percentage
    return completedCount / allCategories.length;
  };

  const sections = [
    {
      title: 'Learning Roadmap',
      description: 'Technical skills and learning resources organized by phase',
      link: '/learning-roadmap'
    },
    {
      title: 'Skills Assessment',
      description: 'Current skills and gaps analysis with prioritized development areas',
      link: '/skills-assessment'
    },
    {
      title: 'Project Plan',
      description: 'Practical projects aligned with learning phases',
      link: '/project-plan'
    },
    {
      title: 'Career Progression',
      description: 'Career levels and milestones from Junior to Distinguished Engineer',
      link: '/career-progression'
    },
    {
      title: 'Resources',
      description: 'Curated learning materials and community resources',
      link: '/resources'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Data Engineering Career Transition</h1>
        <p className="text-xl text-gray-600">Your journey from Senior Data Analyst to World-Class Data Engineer</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ChecklistStats />
        <ChecklistExport />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Career Transition Sections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sections.map((section) => (
            <a 
              key={section.title} 
              href={section.link}
              className="block p-6 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors"
            >
              <h3 className="text-lg font-medium text-gray-900">{section.title}</h3>
              <p className="mt-2 text-gray-600">{section.description}</p>
            </a>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Getting Started</h2>
        <p className="text-gray-600 mb-4">
          This interactive website helps you track your journey from a Senior Data Analyst to a World-Class Data Engineer. Here's how to use it:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-gray-600">
          <li>Review your <a href="/skills-assessment" className="text-blue-600 hover:underline">current skills and gaps</a></li>
          <li>Follow the <a href="/learning-roadmap" className="text-blue-600 hover:underline">learning roadmap</a> to acquire new skills</li>
          <li>Complete <a href="/project-plan" className="text-blue-600 hover:underline">practical projects</a> to build your portfolio</li>
          <li>Track your <a href="/career-progression" className="text-blue-600 hover:underline">career progression</a> through defined milestones</li>
          <li>Use the <a href="/resources" className="text-blue-600 hover:underline">resources</a> section for learning materials</li>
        </ol>
        <p className="mt-4 text-gray-600">
          Use the interactive checklists on each page to track your progress. Your progress is automatically saved in your browser.
          You can export your progress data for backup using the export feature on this page.
        </p>
      </div>
    </div>
  );
};

export default Home;

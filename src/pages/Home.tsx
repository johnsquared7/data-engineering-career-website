import React from 'react';
import ChecklistStats from '../components/ChecklistStats';
import ChecklistExport from '../components/ChecklistExport';
import { useChecklist } from '../contexts/ChecklistContext';
import { FaRoad, FaClipboardCheck, FaProjectDiagram, FaUserTie, FaBook } from 'react-icons/fa';

interface Section {
  title: string;
  description: string;
  link: string;
  icon: React.ReactNode;
}

const Home: React.FC = () => {
  const { isItemChecked } = useChecklist();
  
  // Calculate overall progress for the dashboard
  const calculateOverallProgress = (): number => {
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

  const sections: Section[] = [
    {
      title: 'Learning Roadmap',
      description: 'Follow a structured path to acquire the necessary skills for data engineering.',
      link: '/learning-roadmap',
      icon: <FaRoad className="h-6 w-6" />
    },
    {
      title: 'Skills Assessment',
      description: 'Evaluate your current skills and identify areas for improvement.',
      link: '/skills-assessment',
      icon: <FaClipboardCheck className="h-6 w-6" />
    },
    {
      title: 'Project Plan',
      description: 'Build a portfolio of practical data engineering projects.',
      link: '/project-plan',
      icon: <FaProjectDiagram className="h-6 w-6" />
    },
    {
      title: 'Career Progression',
      description: 'Track your progress through different career levels in data engineering.',
      link: '/career-progression',
      icon: <FaUserTie className="h-6 w-6" />
    },
    {
      title: 'Resources',
      description: 'Access curated learning materials and community resources.',
      link: '/resources',
      icon: <FaBook className="h-6 w-6" />
    }
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center py-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-6">
          <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">DE</span>
          </div>
        </div>
        <h1 className="text-4xl font-bold text-neutral-900 mb-4">
          Data Engineering Career Transition
        </h1>
        <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
          Your comprehensive guide to transitioning from Senior Data Analyst to World-Class Data Engineer
        </p>
      </div>

      {/* Progress Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ChecklistStats />
        <ChecklistExport />
      </div>

      {/* Main Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((section) => (
          <a 
            key={section.title} 
            href={section.link}
            className="group block p-6 bg-white rounded-xl border border-neutral-200 hover:border-primary-300 hover:bg-primary-50/50 transition-all duration-300"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-2 bg-primary-100 rounded-lg text-primary-600 group-hover:bg-primary-200 transition-colors">
                {section.icon}
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors">
                {section.title}
              </h3>
            </div>
            <p className="text-neutral-600">{section.description}</p>
          </a>
        ))}
      </div>

      {/* Getting Started Section */}
      <div className="bg-white rounded-xl border border-neutral-200 p-8">
        <h2 className="text-2xl font-semibold text-neutral-900 mb-6">Getting Started</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-medium text-neutral-900 mb-4">How to Use This Guide</h3>
            <ol className="list-decimal list-inside space-y-3 text-neutral-600">
              <li>Review your <a href="/skills-assessment" className="text-primary-600 hover:text-primary-700 hover:underline">current skills and gaps</a></li>
              <li>Follow the <a href="/learning-roadmap" className="text-primary-600 hover:text-primary-700 hover:underline">learning roadmap</a> to acquire new skills</li>
              <li>Complete <a href="/project-plan" className="text-primary-600 hover:text-primary-700 hover:underline">practical projects</a> to build your portfolio</li>
              <li>Track your <a href="/career-progression" className="text-primary-600 hover:text-primary-700 hover:underline">career progression</a> through defined milestones</li>
              <li>Use the <a href="/resources" className="text-primary-600 hover:text-primary-700 hover:underline">resources</a> section for learning materials</li>
            </ol>
          </div>
          <div>
            <h3 className="text-lg font-medium text-neutral-900 mb-4">Features</h3>
            <ul className="space-y-3 text-neutral-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                Interactive checklists to track your progress
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                Automatic progress saving in your browser
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                Export functionality for backup
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                Comprehensive learning resources
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                Career progression tracking
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 
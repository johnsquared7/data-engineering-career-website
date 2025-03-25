import React, { useState, useEffect } from 'react';
import MarkdownRenderer from '../components/MarkdownRenderer';
import ChecklistGroup from '../components/ChecklistGroup';
import ChecklistItem from '../components/ChecklistItem';
import { useChecklist } from '../contexts/ChecklistContext';

const CareerProgression: React.FC = () => {
  const [content, setContent] = useState<string>('');
  const { isItemChecked, toggleItem, calculateProgress } = useChecklist();
  const [loading, setLoading] = useState<boolean>(true);

  // Junior Data Engineer milestones
  const juniorItems: string[] = [
    'junior_python_training', 'junior_first_pipeline', 'junior_version_control',
    'junior_github_portfolio', 'junior_join_communities', 'junior_update_resume'
  ];

  // Data Engineer milestones
  const midLevelItems: string[] = [
    'mid_cloud_solution', 'mid_spark_job', 'mid_data_warehouse',
    'mid_streaming_pipeline', 'mid_cloud_certification', 'mid_opensource_contribution',
    'mid_technical_blog'
  ];

  // Senior Data Engineer milestones
  const seniorItems: string[] = [
    'senior_end_to_end_architecture', 'senior_data_quality', 'senior_orchestration',
    'senior_performance_optimization', 'senior_mentoring', 'senior_presentation',
    'senior_advanced_certification'
  ];

  // Principal Data Engineer milestones
  const principalItems: string[] = [
    'principal_data_platform', 'principal_best_practices', 'principal_ml_integration',
    'principal_self_service', 'principal_content_publishing', 'principal_conference_speaking',
    'principal_team_leading'
  ];

  // Distinguished Data Engineer milestones
  const distinguishedItems: string[] = [
    'distinguished_innovative_solution', 'distinguished_opensource_framework',
    'distinguished_thought_leadership', 'distinguished_data_strategy',
    'distinguished_mentoring_engineers', 'distinguished_industry_recognition'
  ];

  useEffect(() => {
    const fetchContent = async (): Promise<void> => {
      try {
        const response = await fetch('/data/career_progression_milestones.md');
        const text = await response.text();
        setContent(text);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching career progression content:', error);
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  if (loading) {
    return <div className="text-center py-10">Loading career progression content...</div>;
  }

  return (
    <div className="space-y-8">
      <div className="text-center py-6">
        <h1 className="text-3xl font-bold text-gray-900">Career Progression Milestones</h1>
        <p className="text-xl text-gray-600 mt-2">Track your journey from Junior to Distinguished Data Engineer</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <MarkdownRenderer content={content} />
          </div>
        </div>

        <div className="space-y-6">
          <ChecklistGroup 
            title="Junior Data Engineer Milestones" 
            progress={calculateProgress(juniorItems)}
          >
            <ChecklistItem 
              id="junior_python_training" 
              label="Completed Python for data engineering training" 
              isChecked={isItemChecked('junior_python_training')} 
              onChange={() => toggleItem('junior_python_training')}
            />
            <ChecklistItem 
              id="junior_first_pipeline" 
              label="Built first automated data pipeline" 
              isChecked={isItemChecked('junior_first_pipeline')} 
              onChange={() => toggleItem('junior_first_pipeline')}
            />
            <ChecklistItem 
              id="junior_version_control" 
              label="Implemented version control for data projects" 
              isChecked={isItemChecked('junior_version_control')} 
              onChange={() => toggleItem('junior_version_control')}
            />
            <ChecklistItem 
              id="junior_github_portfolio" 
              label="Created GitHub portfolio with initial projects" 
              isChecked={isItemChecked('junior_github_portfolio')} 
              onChange={() => toggleItem('junior_github_portfolio')}
            />
            <ChecklistItem 
              id="junior_join_communities" 
              label="Joined data engineering communities" 
              isChecked={isItemChecked('junior_join_communities')} 
              onChange={() => toggleItem('junior_join_communities')}
            />
            <ChecklistItem 
              id="junior_update_resume" 
              label="Updated resume with data engineering skills" 
              isChecked={isItemChecked('junior_update_resume')} 
              onChange={() => toggleItem('junior_update_resume')}
            />
          </ChecklistGroup>

          <ChecklistGroup 
            title="Data Engineer Milestones" 
            progress={calculateProgress(midLevelItems)}
          >
            <ChecklistItem 
              id="mid_cloud_solution" 
              label="Deployed first cloud data solution" 
              isChecked={isItemChecked('mid_cloud_solution')} 
              onChange={() => toggleItem('mid_cloud_solution')}
            />
            <ChecklistItem 
              id="mid_spark_job" 
              label="Implemented Spark job for large dataset processing" 
              isChecked={isItemChecked('mid_spark_job')} 
              onChange={() => toggleItem('mid_spark_job')}
            />
            <ChecklistItem 
              id="mid_data_warehouse" 
              label="Built first data warehouse model" 
              isChecked={isItemChecked('mid_data_warehouse')} 
              onChange={() => toggleItem('mid_data_warehouse')}
            />
            <ChecklistItem 
              id="mid_streaming_pipeline" 
              label="Set up first streaming data pipeline" 
              isChecked={isItemChecked('mid_streaming_pipeline')} 
              onChange={() => toggleItem('mid_streaming_pipeline')}
            />
            <ChecklistItem 
              id="mid_cloud_certification" 
              label="Obtained cloud certification" 
              isChecked={isItemChecked('mid_cloud_certification')} 
              onChange={() => toggleItem('mid_cloud_certification')}
            />
            <ChecklistItem 
              id="mid_opensource_contribution" 
              label="Contributed to open-source project" 
              isChecked={isItemChecked('mid_opensource_contribution')} 
              onChange={() => toggleItem('mid_opensource_contribution')}
            />
            <ChecklistItem 
              id="mid_technical_blog" 
              label="Published first technical blog post" 
              isChecked={isItemChecked('mid_technical_blog')} 
              onChange={() => toggleItem('mid_technical_blog')}
            />
          </ChecklistGroup>

          <ChecklistGroup 
            title="Senior Data Engineer Milestones" 
            progress={calculateProgress(seniorItems)}
          >
            <ChecklistItem 
              id="senior_end_to_end_architecture" 
              label="Designed end-to-end data architecture" 
              isChecked={isItemChecked('senior_end_to_end_architecture')} 
              onChange={() => toggleItem('senior_end_to_end_architecture')}
            />
            <ChecklistItem 
              id="senior_data_quality" 
              label="Implemented data quality framework" 
              isChecked={isItemChecked('senior_data_quality')} 
              onChange={() => toggleItem('senior_data_quality')}
            />
            <ChecklistItem 
              id="senior_orchestration" 
              label="Set up orchestration for complex workflows" 
              isChecked={isItemChecked('senior_orchestration')} 
              onChange={() => toggleItem('senior_orchestration')}
            />
            <ChecklistItem 
              id="senior_performance_optimization" 
              label="Optimized performance of data systems" 
              isChecked={isItemChecked('senior_performance_optimization')} 
              onChange={() => toggleItem('senior_performance_optimization')}
            />
            <ChecklistItem 
              id="senior_mentoring" 
              label="Mentored junior data engineers" 
              isChecked={isItemChecked('senior_mentoring')} 
              onChange={() => toggleItem('senior_mentoring')}
            />
            <ChecklistItem 
              id="senior_presentation" 
              label="Presented at meetup or conference" 
              isChecked={isItemChecked('senior_presentation')} 
              onChange={() => toggleItem('senior_presentation')}
            />
            <ChecklistItem 
              id="senior_advanced_certification" 
              label="Obtained advanced certification" 
              isChecked={isItemChecked('senior_advanced_certification')} 
              onChange={() => toggleItem('senior_advanced_certification')}
            />
          </ChecklistGroup>

          <ChecklistGroup 
            title="Principal Data Engineer Milestones" 
            progress={calculateProgress(principalItems)}
          >
            <ChecklistItem 
              id="principal_data_platform" 
              label="Led enterprise data platform implementation" 
              isChecked={isItemChecked('principal_data_platform')} 
              onChange={() => toggleItem('principal_data_platform')}
            />
            <ChecklistItem 
              id="principal_best_practices" 
              label="Established data engineering best practices" 
              isChecked={isItemChecked('principal_best_practices')} 
              onChange={() => toggleItem('principal_best_practices')}
            />
            <ChecklistItem 
              id="principal_ml_integration" 
              label="Integrated ML workflows with data engineering" 
              isChecked={isItemChecked('principal_ml_integration')} 
              onChange={() => toggleItem('principal_ml_integration')}
            />
            <ChecklistItem 
              id="principal_self_service" 
              label="Built self-service data capabilities" 
              isChecked={isItemChecked('principal_self_service')} 
              onChange={() => toggleItem('principal_self_service')}
            />
            <ChecklistItem 
              id="principal_content_publishing" 
              label="Published industry-recognized content" 
              isChecked={isItemChecked('principal_content_publishing')} 
              onChange={() => toggleItem('principal_content_publishing')}
            />
            <ChecklistItem 
              id="principal_conference_speaking" 
              label="Spoke at major industry conferences" 
              isChecked={isItemChecked('principal_conference_speaking')} 
              onChange={() => toggleItem('principal_conference_speaking')}
            />
            <ChecklistItem 
              id="principal_team_leading" 
              label="Led data engineering team" 
              isChecked={isItemChecked('principal_team_leading')} 
              onChange={() => toggleItem('principal_team_leading')}
            />
          </ChecklistGroup>

          <ChecklistGroup 
            title="Distinguished Data Engineer Milestones" 
            progress={calculateProgress(distinguishedItems)}
          >
            <ChecklistItem 
              id="distinguished_innovative_solution" 
              label="Created innovative data solution" 
              isChecked={isItemChecked('distinguished_innovative_solution')} 
              onChange={() => toggleItem('distinguished_innovative_solution')}
            />
            <ChecklistItem 
              id="distinguished_opensource_framework" 
              label="Developed open-source framework" 
              isChecked={isItemChecked('distinguished_opensource_framework')} 
              onChange={() => toggleItem('distinguished_opensource_framework')}
            />
            <ChecklistItem 
              id="distinguished_thought_leadership" 
              label="Established thought leadership" 
              isChecked={isItemChecked('distinguished_thought_leadership')} 
              onChange={() => toggleItem('distinguished_thought_leadership')}
            />
            <ChecklistItem 
              id="distinguished_data_strategy" 
              label="Led data strategy initiatives" 
              isChecked={isItemChecked('distinguished_data_strategy')} 
              onChange={() => toggleItem('distinguished_data_strategy')}
            />
            <ChecklistItem 
              id="distinguished_mentoring_engineers" 
              label="Mentored multiple senior engineers" 
              isChecked={isItemChecked('distinguished_mentoring_engineers')} 
              onChange={() => toggleItem('distinguished_mentoring_engineers')}
            />
            <ChecklistItem 
              id="distinguished_industry_recognition" 
              label="Received industry recognition" 
              isChecked={isItemChecked('distinguished_industry_recognition')} 
              onChange={() => toggleItem('distinguished_industry_recognition')}
            />
          </ChecklistGroup>
        </div>
      </div>
    </div>
  );
};

export default CareerProgression; 
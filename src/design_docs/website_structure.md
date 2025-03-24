# Website Structure and Component Design

## Page Structure

### 1. Home/Dashboard
- Overview of career transition plan
- Progress summary with visual indicators
- Quick links to main sections
- Recent activity or updates

### 2. Learning Roadmap
- Phase-based display of technical skills
- Interactive timeline
- Resource links for each skill
- Progress tracking for each phase

### 3. Skills Assessment
- Current skills visualization
- Gap analysis display
- Prioritized skills to develop
- Progress tracking for skill acquisition

### 4. Project Plan
- Project cards organized by phase
- Detailed project information on expansion/click
- Project status tracking
- Resource links for each project

### 5. Career Progression
- Career level visualization
- Milestone tracking for each level
- Role transition guidance
- Professional development tracking

### 6. Resources
- Curated learning materials
- Tools and platforms
- Community resources
- Recommended reading

## Component Hierarchy

### App
- Router
  - Layout
    - Header
    - Sidebar/Navigation
    - Main Content Area
    - Footer

### Shared Components
- ProgressBar
- ChecklistItem
- PhaseCard
- ResourceLink
- MarkdownRenderer
- StatusBadge
- Timeline
- SearchBar

### Page-Specific Components
- Dashboard
  - ProgressSummary
  - QuickLinks
  - RecentActivity
  
- LearningRoadmap
  - PhaseAccordion
  - SkillCard
  - CertificationTracker
  
- SkillsAssessment
  - SkillGapVisualizer
  - PriorityList
  - StrengthsDisplay
  
- ProjectPlan
  - ProjectCard
  - ProjectSteps
  - DeliverablesList
  
- CareerProgression
  - CareerLevelCard
  - MilestoneChecklist
  - TransitionTimeline
  
- Resources
  - ResourceCategory
  - ResourceCard
  - ExternalLinkList

## Interactive Checklist Design

### ChecklistContainer
- Manages overall checklist state
- Handles persistence via localStorage
- Provides context for child components

### ChecklistGroup
- Groups related checklist items
- Tracks group completion status
- Collapsible/expandable sections

### ChecklistItem
- Individual checkable item
- Completion status toggle
- Optional description/details
- Optional resource links

## Data Flow

### State Management
- Use React Context for global state
- Store checklist completion status
- Track overall progress
- Maintain user preferences

### Data Loading
- Load markdown files on demand
- Parse markdown content into React components
- Cache parsed content for performance

### Persistence
- Save checklist state to localStorage
- Implement export/import functionality
- Track progress over time

## Responsive Design Considerations

### Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### Layout Adjustments
- Sidebar collapses to top navigation on mobile
- Single column layout on mobile
- Two column layout on tablet and desktop
- Adjusted font sizes and spacing

### Navigation
- Bottom navigation bar on mobile
- Sidebar navigation on tablet and desktop
- Breadcrumbs for deep navigation

## Theme and Styling

### Color Palette
- Primary: #3B82F6 (Blue)
- Secondary: #10B981 (Green)
- Accent: #8B5CF6 (Purple)
- Background: #F9FAFB (Light Gray)
- Text: #1F2937 (Dark Gray)

### Typography
- Headings: Inter, sans-serif
- Body: Inter, sans-serif
- Code: Fira Code, monospace

### UI Elements
- Cards with subtle shadows
- Rounded corners
- Minimal, clean interfaces
- Progress indicators with color coding

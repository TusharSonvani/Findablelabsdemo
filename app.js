// Application Data
const appData = {
  business: {
    name: "Blue Ridge Plumbing",
    location: "Denver, Colorado",
    category: "Local Plumbing Services",
    website: "www.blueridgeplumbing.com"
  },
  aiSearchTraffic: {
    totalVisits30d: 2847,
    growthPercent: 34,
    chatgptVisits: 892,
    chatgptConversions: 3,
    perplexityVisits: 445,
    perplexityConversions: 1,
    googleAiVisits: 612,
    googleAiConversions: 2,
    otherVisits: 898
  },
  trafficTrend: [
    { date: "2025-11-01", traffic: 151 },
    { date: "2025-11-02", traffic: 165 },
    { date: "2025-11-03", traffic: 178 },
    { date: "2025-11-04", traffic: 201 },
    { date: "2025-11-05", traffic: 195 },
    { date: "2025-11-06", traffic: 138 },
    { date: "2025-11-07", traffic: 142 },
    { date: "2025-11-08", traffic: 167 },
    { date: "2025-11-09", traffic: 156 },
    { date: "2025-11-10", traffic: 128 },
    { date: "2025-11-11", traffic: 132 },
    { date: "2025-11-12", traffic: 145 }
  ],
  workflows: [
    {
      id: 1,
      name: "FAQ Generation",
      description: "Analyzes customer questions and auto-generates FAQ schema markup",
      status: "active",
      lastExecution: "2 hours ago",
      actionsThisMonth: 12,
      pendingApproval: true,
      approvalDetail: "We're about to add 8 new FAQs to your website based on customer questions"
    },
    {
      id: 2,
      name: "Review Catalyst",
      description: "Triggers targeted review requests at optimal times",
      status: "active",
      lastExecution: "6 hours ago",
      actionsThisMonth: 24,
      pendingApproval: false
    },
    {
      id: 3,
      name: "Media Enhancement",
      description: "Nudges business to upload high-impact photos and videos",
      status: "active",
      lastExecution: "1 day ago",
      actionsThisMonth: 8,
      pendingApproval: false
    },
    {
      id: 4,
      name: "Citation Completeness",
      description: "Scans 200+ directories and fixes missing listings",
      status: "paused",
      lastExecution: "5 days ago",
      actionsThisMonth: 15,
      pendingApproval: false
    },
    {
      id: 5,
      name: "Schema Optimization",
      description: "Maintains LocalBusiness and Service schema markup",
      status: "active",
      lastExecution: "1 hour ago",
      actionsThisMonth: 47,
      pendingApproval: false
    },
    {
      id: 6,
      name: "Competitor Benchmarking",
      description: "Monitors visibility against local competitors",
      status: "active",
      lastExecution: "30 minutes ago",
      actionsThisMonth: 30,
      pendingApproval: false
    }
  ],
  topQueries: [
    { query: "24 hour emergency plumber near me", platform: "ChatGPT", visits: 234, conversions: 15 },
    { query: "best plumber in Denver", platform: "Google AI Overviews", visits: 189, conversions: 8 },
    { query: "plumbing repair costs Denver", platform: "Perplexity", visits: 156, conversions: 4 },
    { query: "drain cleaning services near me", platform: "ChatGPT", visits: 142, conversions: 3 },
    { query: "water heater replacement Denver", platform: "Google AI Overviews", visits: 128, conversions: 2 }
  ],
  integrations: [
    { name: "Yelp", status: "connected", lastSync: "2 hours ago" },
    { name: "Google Business Profile", status: "connected", lastSync: "1 hour ago" },
    { name: "WordPress", status: "connected", lastSync: "30 minutes ago" },
    { name: "CallRail", status: "connected", lastSync: "15 minutes ago" },
    { name: "Google Analytics", status: "not_connected" },
    { name: "Shopify", status: "not_connected" },
    { name: "HubSpot", status: "not_connected" }
  ],
  competitiveMetrics: [
    { competitor: "Blue Ridge Plumbing (You)", aiVisibilityScore: 78, reviewCount: 156, faqCompleteness: 92 },
    { competitor: "Rapids Plumbing", aiVisibilityScore: 92, reviewCount: 234, faqCompleteness: 78 },
    { competitor: "Mile High Plumbers", aiVisibilityScore: 88, reviewCount: 201, faqCompleteness: 85 },
    { competitor: "Denver Pro Plumbing", aiVisibilityScore: 85, reviewCount: 189, faqCompleteness: 72 }
  ],
  conversionFunnel: [
    { stage: "AI Search Visibility", count: 2847, label: "People saw your business" },
    { stage: "Clicked Through", count: 892, label: "31% clicked to your site" },
    { stage: "Contacted Business", count: 156, label: "17% contacted you" },
    { stage: "Conversion", count: 23, label: "15% became customers" }
  ],
  platformBreakdown: [
    { platform: "ChatGPT", percentage: 35, visits: 892 },
    { platform: "Google AI Overviews", percentage: 30, visits: 756 },
    { platform: "Perplexity", percentage: 22, visits: 557 },
    { platform: "Claude & Others", percentage: 13, visits: 330 }
  ]
};

// Chart instances
let trafficChart = null;
let platformChart = null;
let competitorChart = null;

// Initialize application
document.addEventListener('DOMContentLoaded', () => {
  initializeNavigation();
  renderDashboardWorkflows();
  renderWorkflowsGrid();
  renderTrafficChart();
  renderPlatformChart();
  renderConversionFunnel();
  renderQueriesTable();
  renderCompetitorChart();
  renderIntegrations();
});

// Navigation
function initializeNavigation() {
  const navItems = document.querySelectorAll('.nav-item');
  
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const tabName = item.dataset.tab;
      switchTab(tabName);
      
      // Update active nav item
      navItems.forEach(nav => nav.classList.remove('active'));
      item.classList.add('active');
    });
  });
}

function switchTab(tabName) {
  // Hide all tabs
  document.querySelectorAll('.tab-content').forEach(tab => {
    tab.classList.remove('active');
  });
  
  // Show selected tab
  const selectedTab = document.getElementById(`${tabName}-tab`);
  if (selectedTab) {
    selectedTab.classList.add('active');
  }
}

// Dashboard Workflows
function renderDashboardWorkflows() {
  const container = document.getElementById('dashboardWorkflows');
  
  appData.workflows.forEach(workflow => {
    const workflowItem = document.createElement('div');
    workflowItem.className = 'workflow-item';
    
    const statusBadge = workflow.status === 'active' 
      ? '<span class="workflow-badge active">✓ Active</span>'
      : '<span class="workflow-badge paused">⏸ Paused</span>';
    
    workflowItem.innerHTML = `
      <div class="workflow-info">
        <div class="workflow-name">${workflow.name}</div>
        <div class="workflow-stats">${workflow.actionsThisMonth} actions this month • Last run: ${workflow.lastExecution}</div>
      </div>
      ${statusBadge}
    `;
    
    container.appendChild(workflowItem);
  });
}

// Workflows Grid
function renderWorkflowsGrid() {
  const container = document.getElementById('workflowsGrid');
  
  appData.workflows.forEach(workflow => {
    const workflowCard = document.createElement('div');
    workflowCard.className = 'workflow-card';
    
    const toggleId = `toggle-${workflow.id}`;
    const isChecked = workflow.status === 'active' ? 'checked' : '';
    
    workflowCard.innerHTML = `
      <div class="workflow-card-header">
        <div>
          <h4 class="workflow-card-title">${workflow.name}</h4>
        </div>
        <label class="toggle-switch">
          <input type="checkbox" id="${toggleId}" ${isChecked} onchange="toggleWorkflow(${workflow.id})">
          <span class="toggle-slider"></span>
        </label>
      </div>
      <p class="workflow-description">${workflow.description}</p>
      <div class="workflow-meta">
        <div class="workflow-meta-item">
          <span class="workflow-meta-label">Status:</span>
          <span class="workflow-meta-value" id="status-${workflow.id}">${workflow.status === 'active' ? 'Active' : 'Paused'}</span>
        </div>
        <div class="workflow-meta-item">
          <span class="workflow-meta-label">Last Execution:</span>
          <span class="workflow-meta-value">${workflow.lastExecution}</span>
        </div>
        <div class="workflow-meta-item">
          <span class="workflow-meta-label">Actions This Month:</span>
          <span class="workflow-meta-value">${workflow.actionsThisMonth}</span>
        </div>
      </div>
      <div class="workflow-actions">
        <button class="btn btn--outline btn--sm btn--full-width" onclick="configureWorkflow(${workflow.id})">
          Configure
        </button>
      </div>
    `;
    
    container.appendChild(workflowCard);
  });
}

function toggleWorkflow(id) {
  const workflow = appData.workflows.find(w => w.id === id);
  if (workflow) {
    workflow.status = workflow.status === 'active' ? 'paused' : 'active';
    const statusElement = document.getElementById(`status-${id}`);
    if (statusElement) {
      statusElement.textContent = workflow.status === 'active' ? 'Active' : 'Paused';
    }
  }
}

function configureWorkflow(id) {
  const workflow = appData.workflows.find(w => w.id === id);
  if (workflow) {
    const modal = document.getElementById('workflowModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    modalTitle.textContent = `Configure ${workflow.name}`;
    modalBody.innerHTML = `
      <div class="form-group">
        <label class="form-label">Workflow Name</label>
        <input type="text" class="form-control" value="${workflow.name}" disabled>
      </div>
      <div class="form-group">
        <label class="form-label">Description</label>
        <textarea class="form-control" rows="3" disabled>${workflow.description}</textarea>
      </div>
      <div class="form-group">
        <label class="form-label">Status</label>
        <select class="form-control">
          <option value="active" ${workflow.status === 'active' ? 'selected' : ''}>Active</option>
          <option value="paused" ${workflow.status === 'paused' ? 'selected' : ''}>Paused</option>
        </select>
      </div>
      <p style="color: var(--color-text-secondary); font-size: var(--font-size-sm); margin-top: var(--space-16);">
        This workflow runs automatically based on customer behavior and data changes. You can pause it at any time.
      </p>
    `;
    
    modal.classList.add('open');
  }
}

function closeModal() {
  const modal = document.getElementById('workflowModal');
  modal.classList.remove('open');
}

// Traffic Chart
function renderTrafficChart() {
  const ctx = document.getElementById('trafficChart');
  if (!ctx) return;
  
  if (trafficChart) {
    trafficChart.destroy();
  }
  
  trafficChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: appData.trafficTrend.map(d => {
        const date = new Date(d.date);
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      }),
      datasets: [{
        label: 'Daily Traffic',
        data: appData.trafficTrend.map(d => d.traffic),
        borderColor: '#1FB8CD',
        backgroundColor: 'rgba(31, 184, 205, 0.1)',
        fill: true,
        tension: 0.4,
        pointRadius: 4,
        pointHoverRadius: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          padding: 12,
          titleFont: { size: 14 },
          bodyFont: { size: 13 }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            color: 'rgba(0, 0, 0, 0.05)'
          },
          ticks: {
            font: { size: 12 }
          }
        },
        x: {
          grid: {
            display: false
          },
          ticks: {
            font: { size: 12 }
          }
        }
      }
    }
  });
}

// Platform Chart
function renderPlatformChart() {
  const ctx = document.getElementById('platformChart');
  if (!ctx) return;
  
  if (platformChart) {
    platformChart.destroy();
  }
  
  platformChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: appData.platformBreakdown.map(p => p.platform),
      datasets: [{
        data: appData.platformBreakdown.map(p => p.percentage),
        backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5'],
        borderWidth: 2,
        borderColor: '#fff'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            padding: 15,
            font: { size: 13 }
          }
        },
        tooltip: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          padding: 12,
          callbacks: {
            label: function(context) {
              const platform = appData.platformBreakdown[context.dataIndex];
              return `${platform.platform}: ${platform.percentage}% (${platform.visits} visits)`;
            }
          }
        }
      }
    }
  });
}

// Conversion Funnel
function renderConversionFunnel() {
  const container = document.getElementById('conversionFunnel');
  if (!container) return;
  
  appData.conversionFunnel.forEach((stage, index) => {
    const stageDiv = document.createElement('div');
    stageDiv.className = 'funnel-stage';
    
    const maxCount = appData.conversionFunnel[0].count;
    const widthPercent = (stage.count / maxCount) * 100;
    
    stageDiv.innerHTML = `
      <div class="funnel-bar" style="width: ${widthPercent}%;">
        <div class="funnel-bar" style="--bar-width: ${widthPercent}%;"></div>
        <span class="funnel-label">${stage.stage}</span>
        <span class="funnel-value">${stage.count.toLocaleString()}</span>
        <span class="funnel-percent">${stage.label}</span>
      </div>
    `;
    
    container.appendChild(stageDiv);
  });
}

// Queries Table
function renderQueriesTable() {
  const tbody = document.querySelector('#queriesTable tbody');
  if (!tbody) return;
  
  appData.topQueries.forEach(query => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${query.query}</td>
      <td><span class="platform-badge">${query.platform}</span></td>
      <td>${query.visits}</td>
      <td><strong>${query.conversions}</strong></td>
    `;
    tbody.appendChild(row);
  });
}

// Competitor Chart
function renderCompetitorChart() {
  const ctx = document.getElementById('competitorChart');
  if (!ctx) return;
  
  if (competitorChart) {
    competitorChart.destroy();
  }
  
  competitorChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: appData.competitiveMetrics.map(c => c.competitor),
      datasets: [
        {
          label: 'AI Visibility Score',
          data: appData.competitiveMetrics.map(c => c.aiVisibilityScore),
          backgroundColor: '#1FB8CD'
        },
        {
          label: 'Review Count',
          data: appData.competitiveMetrics.map(c => c.reviewCount),
          backgroundColor: '#FFC185'
        },
        {
          label: 'FAQ Completeness',
          data: appData.competitiveMetrics.map(c => c.faqCompleteness),
          backgroundColor: '#B4413C'
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            padding: 15,
            font: { size: 13 }
          }
        },
        tooltip: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          padding: 12
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 250,
          grid: {
            color: 'rgba(0, 0, 0, 0.05)'
          },
          ticks: {
            font: { size: 12 }
          }
        },
        x: {
          grid: {
            display: false
          },
          ticks: {
            font: { size: 11 }
          }
        }
      }
    }
  });
}

// Integrations
function renderIntegrations() {
  const connectedContainer = document.getElementById('connectedIntegrations');
  const availableContainer = document.getElementById('availableIntegrations');
  
  if (!connectedContainer || !availableContainer) return;
  
  appData.integrations.forEach(integration => {
    const card = document.createElement('div');
    card.className = 'integration-card';
    
    if (integration.status === 'connected') {
      card.innerHTML = `
        <div class="integration-header">
          <span class="integration-name">${integration.name}</span>
          <span class="integration-status">
            <span class="status-dot connected"></span>
            Connected
          </span>
        </div>
        <div class="integration-sync">Last sync: ${integration.lastSync}</div>
        <button class="btn btn--outline btn--sm btn--full-width" style="margin-top: var(--space-8);">
          Disconnect
        </button>
      `;
      connectedContainer.appendChild(card);
    } else {
      card.innerHTML = `
        <div class="integration-header">
          <span class="integration-name">${integration.name}</span>
          <span class="integration-status">
            <span class="status-dot disconnected"></span>
            Not connected
          </span>
        </div>
        <button class="btn btn--primary btn--sm btn--full-width" style="margin-top: var(--space-16);">
          Connect
        </button>
      `;
      availableContainer.appendChild(card);
    }
  });
}

// Handle Approval Actions
function handleApproval(action) {
  const alertBox = document.getElementById('pendingApproval');
  
  if (action === 'approve') {
    alert('FAQ updates approved! Changes will be applied to your website.');
    alertBox.style.display = 'none';
  } else if (action === 'review') {
    const workflow = appData.workflows.find(w => w.pendingApproval);
    if (workflow) {
      configureWorkflow(workflow.id);
    }
  } else if (action === 'decline') {
    alert('Changes declined. No updates will be made.');
    alertBox.style.display = 'none';
  }
}

// Show Details Modal
function showDetails(type) {
  const modal = document.getElementById('workflowModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  
  let title = '';
  let content = '';
  
  if (type === 'chatgpt') {
    title = 'ChatGPT Referrals Details';
    content = `
      <div style="margin-bottom: var(--space-16);">
        <h4 style="margin-bottom: var(--space-8);">Traffic Breakdown</h4>
        <p><strong>Total Visits:</strong> ${appData.aiSearchTraffic.chatgptVisits}</p>
        <p><strong>Conversions:</strong> ${appData.aiSearchTraffic.chatgptConversions}</p>
        <p><strong>Conversion Rate:</strong> ${((appData.aiSearchTraffic.chatgptConversions / appData.aiSearchTraffic.chatgptVisits) * 100).toFixed(1)}%</p>
      </div>
      <div>
        <h4 style="margin-bottom: var(--space-8);">Top Performing Queries</h4>
        <ul style="list-style: none; padding: 0;">
          ${appData.topQueries.filter(q => q.platform === 'ChatGPT').map(q => 
            `<li style="padding: var(--space-8) 0; border-bottom: 1px solid var(--color-card-border-inner);">
              <div>${q.query}</div>
              <div style="font-size: var(--font-size-sm); color: var(--color-text-secondary);">Visits: ${q.visits} | Conversions: ${q.conversions}</div>
            </li>`
          ).join('')}
        </ul>
      </div>
    `;
  } else if (type === 'perplexity') {
    title = 'Perplexity Referrals Details';
    content = `
      <div style="margin-bottom: var(--space-16);">
        <h4 style="margin-bottom: var(--space-8);">Traffic Breakdown</h4>
        <p><strong>Total Visits:</strong> ${appData.aiSearchTraffic.perplexityVisits}</p>
        <p><strong>Conversions:</strong> ${appData.aiSearchTraffic.perplexityConversions}</p>
        <p><strong>Conversion Rate:</strong> ${((appData.aiSearchTraffic.perplexityConversions / appData.aiSearchTraffic.perplexityVisits) * 100).toFixed(1)}%</p>
      </div>
    `;
  } else if (type === 'google') {
    title = 'Google AI Overviews Details';
    content = `
      <div style="margin-bottom: var(--space-16);">
        <h4 style="margin-bottom: var(--space-8);">Traffic Breakdown</h4>
        <p><strong>Total Visits:</strong> ${appData.aiSearchTraffic.googleAiVisits}</p>
        <p><strong>Conversions:</strong> ${appData.aiSearchTraffic.googleAiConversions}</p>
        <p><strong>Conversion Rate:</strong> ${((appData.aiSearchTraffic.googleAiConversions / appData.aiSearchTraffic.googleAiVisits) * 100).toFixed(1)}%</p>
      </div>
    `;
  } else if (type === 'position') {
    title = 'Competitive Position Details';
    content = `
      <div style="margin-bottom: var(--space-16);">
        <h4 style="margin-bottom: var(--space-8);">Your Ranking</h4>
        <p>You are currently ranked <strong>3rd</strong> out of 8 local plumbing businesses in Denver for emergency plumbing services on AI search platforms.</p>
      </div>
      <div>
        <h4 style="margin-bottom: var(--space-8);">Competitors</h4>
        <ol style="padding-left: var(--space-20);">
          <li style="padding: var(--space-4) 0;">Rapids Plumbing (Score: 92)</li>
          <li style="padding: var(--space-4) 0;">Mile High Plumbers (Score: 88)</li>
          <li style="padding: var(--space-4) 0; font-weight: var(--font-weight-semibold);">Blue Ridge Plumbing - You (Score: 78)</li>
          <li style="padding: var(--space-4) 0;">Denver Pro Plumbing (Score: 85)</li>
        </ol>
      </div>
    `;
  }
  
  modalTitle.textContent = title;
  modalBody.innerHTML = content;
  modal.classList.add('open');
}

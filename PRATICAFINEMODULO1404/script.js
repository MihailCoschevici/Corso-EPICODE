    function searchJobs(title, location) {
    const lowerTitle = title.toLowerCase();
    const lowerLocation = location.toLowerCase();
    const result = jobs.filter(job => {
      return job.title.toLowerCase().includes(lowerTitle) && 
             job.location.toLowerCase().includes(lowerLocation);
    });
  
    return {
      result: result,
      count: result.length
    };
  }
  
  function displayResults(jobs, count) {
    const resultsContainer = document.getElementById('resultsContainer');
    const resultsCount = document.getElementById('resultsCount');
     resultsCount.textContent = `${count} ${count === 1 ? 'lavoro trovato' : 'lavori trovati'}`;
     resultsContainer.innerHTML = '';
     if (count === 0) {
      resultsContainer.innerHTML = '<div class="no-results">Nessun lavoro trovato con i criteri specificati</div>';
      return;
    }
  
    jobs.forEach(job => {
      const jobCard = document.createElement('div');
      jobCard.className = 'job-card';
      jobCard.innerHTML = `
        <div class="job-title">${job.title}</div>
        <div class="job-location">${job.location}</div>
      `;
      resultsContainer.appendChild(jobCard);
    });
  }
  
  function handleSearch() {
    const title = document.getElementById('titleInput').value.trim();
    const location = document.getElementById('locationInput').value.trim();
    if (!title || !location) {
      alert('Per favore, inserisci sia il titolo che la località');
      return;
    }
    const { result, count } = searchJobs(title, location);
    displayResults(result, count);
  }
  document.getElementById('searchButton').addEventListener('click', handleSearch);
  
  document.getElementById('titleInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') handleSearch();
  });
  
  document.getElementById('locationInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') handleSearch();
  });
  
 /**
 * Array dei lavori - NON MODIFICARE
 * Ogni oggetto rappresenta un lavoro con titolo e località
 */
const jobs = [
  { title: "Marketing Intern", location: "US, NY, New York" },
  { title: "Customer Service - Cloud Video Production", location: "NZ, Auckland" },
  { title: "Commissioning Machinery Assistant (CMA)", location: "US, IA, Wever" },
  { title: "Account Executive - Washington DC", location: "US, DC, Washington" },
  { title: "Bill Review Manager", location: "US, FL, Fort Worth" },
  { title: "Accounting Clerk", location: "US, MD," },
  { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
  { title: "Lead Guest Service Specialist", location: "US, CA, San Francisco" },
  { title: "HP BSM SME", location: "US, FL, Pensacola" },
  { title: "Customer Service Associate - Part Time", location: "US, AZ, Phoenix" },
  { title: "ASP.net Developer Job opportunity at United States,New Jersey", location: "US, NJ, Jersey City" },
  { title: "Talent Sourcer (6 months fixed-term contract)", location: "GB, LND, London" },
  { title: "Applications Developer, Digital", location: "US, CT, Stamford" },
  { title: "Installers", location: "US, FL, Orlando" },
  { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
  { title: "VP of Sales - Vault Dragon", location: "SG, 01, Singapore" },
  { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
  { title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only", location: "GB, SOS, Southend-on-Sea" },
  { title: "Visual Designer", location: "US, NY, New York" },
  { title: "Process Controls Engineer - DCS PLC MS Office - PA", location: "US, PA, USA Northeast" },
  { title: "Marketing Assistant", location: "US, TX, Austin" },
  { title: "Front End Developer", location: "NZ, N, Auckland" },
  { title: "Engagement Manager", location: "AE," },
  { title: "Vice President, Sales and Sponsorship (Businessfriend.com)", location: "US, CA, Carlsbad" },
  { title: "Customer Service", location: "GB, LND, London" },
  { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
  { title: "Marketing Exec", location: "SG," },
  { title: "HAAD/DHA Licensed Doctors Opening in UAE", location: "AE, AZ, Abudhabi" },
  { title: "Talent Management Process Manager", location: "US, MO, St. Louis" },
  { title: "Customer Service Associate", location: "CA, ON, Toronto" },
  { title: "Customer Service Technical Specialist", location: "US, MA, Waltham" },
  { title: "Software Applications Specialist", location: "US, KS," },
  { title: "Craftsman Associate", location: "US, WA, Everett" },
  { title: "Completion Engineer", location: "US, CA, San Ramon" },
  { title: "I Want To Work At Karmarama", location: "GB, LND," },
  { title: "English Teacher Abroad", location: "US, NY, Saint Bonaventure" }
]


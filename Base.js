// Toggle Sidebar
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('show');
  }
  
  // Add event listener to the hamburger menu
  document.querySelector('.hamburger-menu img').addEventListener('click', toggleSidebar);
  
  // Add event listener to the close button
  document.querySelector('.close-sidebar').addEventListener('click', () => {
    document.getElementById('sidebar').classList.remove('show');
  });
  
  // Close the sidebar if clicked outside
  document.addEventListener('click', (event) => {
    const sidebar = document.getElementById('sidebar');
    if (event.target.closest('.hamburger-menu') === null && !event.target.closest('.sidebar')) {
        sidebar.classList.remove('show');
    }
  });

// Open Sidebar
document.getElementById("profile-pic").addEventListener("click", function() {
    document.getElementById("sidebar-right").classList.add("open");
});

// Close Sidebar
document.getElementById("close-sidebar").addEventListener("click", function() {
    document.getElementById("sidebar-right").classList.remove("open");
});



// Function to load the theme from localStorage
function loadTheme() {
  const theme = localStorage.getItem('theme');
  
  if (theme === 'dark') {
    document.body.classList.add('dark-mode');
    document.body.classList.remove('light-mode');
  } else {
    document.body.classList.add('light-mode');
    document.body.classList.remove('dark-mode');
  }
  
  updateIconVisibility();
}

// Function to enable dark mode
function enableDarkMode() {
  document.body.classList.add('dark-mode');
  document.body.classList.remove('light-mode');
  localStorage.setItem('theme', 'dark');
  updateIconVisibility();
}

// Function to enable light mode
function enableLightMode() {
  document.body.classList.add('light-mode');
  document.body.classList.remove('dark-mode');
  localStorage.setItem('theme', 'light');
  updateIconVisibility();
}

// Function to update icon visibility based on the current theme
function updateIconVisibility() {
  if (document.body.classList.contains('dark-mode')) {
    document.getElementById('sun-icon').style.display = 'block';
    document.getElementById('moon-icon').style.display = 'none';
  } else {
    document.getElementById('sun-icon').style.display = 'none';
    document.getElementById('moon-icon').style.display = 'block';
  }
}

// Run the loadTheme function when the page loads
window.addEventListener('DOMContentLoaded', function() {
  loadTheme();
});

// Event listeners for theme toggles
document.getElementById('sun-icon').addEventListener('click', enableLightMode);
document.getElementById('moon-icon').addEventListener('click', enableDarkMode);

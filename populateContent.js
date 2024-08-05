const fetchContent = require('./fetchContent.js');

async function populateServices() {
  const services = await fetchContent('service');
  const container = document.getElementById('services-container');
  
  services.forEach(service => {
    const serviceBox = document.createElement('div');
    serviceBox.className = 'service-box';
    serviceBox.innerHTML = `
      <h3>${service.fields.title}</h3>
      <i class="${service.fields.icon}"></i>
      <p>${service.fields.description}</p>
    `;
    container.appendChild(serviceBox);
  });
}

// Add similar functions for other content types

document.addEventListener('DOMContentLoaded', () => {
  populateServices();
  // Call other populate functions here
});
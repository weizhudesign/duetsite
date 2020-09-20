var loadProjectRecommendationsIntoSection = function() {
    // Look for an element with class 'project-recommendations'
    var projectRecommendationsSection = document.querySelector(".project-recommendations");
    if (projectRecommendationsSection === null) { return; }
    // Read product id from data attribute
    var projectId = projectRecommendationsSection.dataset.projectId;
    // Read limit from data attribute
    var limit = projectRecommendationsSection.dataset.limit;
    // Build request URL
    var requestUrl = "/recommendations/projects?section_id=project-recommendations&limit="+limit+"&project_id="+projectId;
    // Create request and submit it using Ajax
    var request = new XMLHttpRequest();
    request.open("GET", requestUrl);
    request.onload = function() {
      if (request.status >= 200 && request.status < 300) {
        var container = document.createElement("div");
        container.innerHTML = request.response;
        projectRecommendationsSection.parentElement.innerHTML = container.querySelector(".project-recommendations").innerHTML;
      }
    };
    request.send();
  };
  // If your section has theme settings, the theme editor
  // reloads the section as you edit those settings. When that happens, the
  // recommendations need to be fetched again.
  // See https://help.shopify.com/en/themes/development/sections/integration-with-theme-editor
  document.addEventListener("shopify:section:load", function(event) {
    if (event.detail.sectionId === "project-recommendations") {
      loadProjectRecommendationsIntoSection();
    }
  });
  // Fetching the recommendations on page load
  loadProjectRecommendationsIntoSection();
  {% endjavascript %}
  
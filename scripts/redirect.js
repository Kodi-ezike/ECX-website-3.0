const routes = {
  "/register": "https://docs.google.com/forms/d/e/1FAIpQLSfzXgtHzSsLtYlgnOLDQG4kZvqEnZRIHKf_uHD7VchQyWrmiQ/viewform?usp=sf_link",
};

const path = "/" + location.pathname.split("/").pop();

if (routes[path]) {
  location.replace(routes[path]);
}
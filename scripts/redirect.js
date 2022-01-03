const routes = {
  "/register": "https://docs.google.com/forms/d/e/1FAIpQLSfzXgtHzSsLtYlgnOLDQG4kZvqEnZRIHKf_uHD7VchQyWrmiQ/viewform?usp=sf_link",
  "/resources": "https://github.com/ECX-Unilag/Learning-path",
  "/slack": "https://join.slack.com/t/ecxunilag/shared_invite/zt-1116iknia-s4iVcOpd2V9g3VKIoIV6lw"
};

const path = "/" + location.pathname.split("/").pop();

if (routes[path]) {
  location.replace(routes[path]);
}
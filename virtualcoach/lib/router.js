Router.configure({
  layoutTemplate : 'layout',
  loadingTemplate : 'loading',
  notFoundtemplate : 'notFound'
});
Router.route("/", {
  name : "homeIndex",
  data : function () {
  return {
    message : "You Are Now Rockin With Alvin"
    }
  }
});
Router.route("/communications", {
  name : "homeCommunications",
});
Router.route("/posts", {
  name : "homePosts",
});
Router.route("/roster", {
  name : "homeRoster",
});

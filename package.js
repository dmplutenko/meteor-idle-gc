Package.describe({
  summary: "Meteor package for idle-gc Npm module"
});

if((typeof Npm==="object")||(typeof Npm==="function")){
  if (typeof Npm.depends == "function"){
    Npm.depends({"idle-gc": "1.0.0"});
  }
}

Package.on_use(function (api) {
  api.add_files('idle_gc_server.js', 'server');
});


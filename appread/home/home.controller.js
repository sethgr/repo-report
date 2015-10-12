(function(){
  'use strict';

  angular.module('officeAddin')
         .controller('homeController', ['dataService', homeController]);

  /**
   * Controller constructor
   */
  function homeController(dataService){
    var vm = this;  // jshint ignore:line

    vm.repos = [
      {
        'title': 'repo-stats',
        'description': 'A sample Office Add-in (built with Angular) that scans emails for links to GitHub repositories and then fetches information about them.',
        'url': 'https://github.com/martellaj/repo-stats',
        'stars': 0,
        'forks': 0,
        'owner': 'martellaj',
        'ownerUrl': 'https://github.com/martellaj'
      },
      {
        'title': 'Office-UI-Fabric',
        'description': 'The front-end framework for building experiences for Office 365.',
        'url': 'https://github.com/OfficeDev/Office-UI-Fabric',
        'stars': 1673,
        'forks': 182,
        'owner': 'OfficeDev',
        'ownerUrl': 'https://github.com/OfficeDev'
      },
      {
        'title': 'repo-stats',
        'description': 'A sample Office Add-in (built with Angular) that scans emails for links to GitHub repositories and then fetches information about them.',
        'url': 'https://github.com/martellaj/repo-stats',
        'stars': 0,
        'forks': 0,
        'owner': 'martellaj',
        'ownerUrl': 'https://github.com/martellaj'
      },
      {
        'title': 'Office-UI-Fabric',
        'description': 'The front-end framework for building experiences for Office 365.',
        'url': 'https://github.com/OfficeDev/Office-UI-Fabric',
        'stars': 1673,
        'forks': 182,
        'owner': 'OfficeDev',
        'ownerUrl': 'https://github.com/OfficeDev'
      }
    ]; 

    getDataFromService();

    function getDataFromService(){
      dataService.getData()
        .then(function(response){
          vm.dataObject = response;
        });
    }
  }

})();

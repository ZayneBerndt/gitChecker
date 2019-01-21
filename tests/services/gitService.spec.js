var gitService = require('../../services/gitService')();

describe('GitService', function(){
  describe('GetUser', function(){
    it('should return user and repos', function(){
      return gitService.getUser('jonathonfmills').then(
          function(user){
            console.log(user);
        }
      )
    })
  })
});

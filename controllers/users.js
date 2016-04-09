//Users controller 

var Users = {
      index: function(req, res){
      res.render('index', { title: 'Express' });
  }
    
};

module.exports = Users;

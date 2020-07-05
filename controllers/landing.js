exports.get_landing =  function landing (req, res, next) {
    res.render('landing', { title: 'Express' });
  };

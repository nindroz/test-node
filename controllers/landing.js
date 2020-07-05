exports.get_landing =  function (req, res, next) {
    res.render('landing', { title: 'Express' });
  };

  exports.submit_mail =  function (req, res, next) {
    console.log(req.body.submit_email)
    res.redirect('/')
  };
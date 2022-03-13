class SiteController {

    //[GET] /
    index(req, res) {
        res.render('home')
    };

    form(req, res) {
        res.render('post_form')
    }
}

module.exports = new SiteController;
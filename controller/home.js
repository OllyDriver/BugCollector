class Home {
    constructor(req, res) {
        this.req = req
        this.res = res
    }

    render() {
        this.res.render('home.ejs', {
            noOfSections: 5
        })
    }
}

module.exports = Home
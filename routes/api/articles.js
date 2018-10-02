const router = require("express").Router();
const articleController = require("../../controllers/articleController");
const request = require("request");
const cheerio = require("cheerio");

// Matches with "/api/article"
router.route("/")
  .get(articleController.findAll)
  // .post(articleController.create);

// Matches with "/api/article/:id"
router
  .route("/:id")
  .get(articleController.findById)
  .put(articleController.update)
  .delete(articleController.remove);

  ///api/articles/articles/scrape
router.route("/articles/scrape")
  .get(function(req, res){
  console.log("test")
  request("https://www.nytimes.com/search?endDate=20180920&query=topic&sort=best&startDate=20180902", function(err, data, response) {
    // Then, we load that into cheerio and save it to $ for a shorthand selector
    console.log("test")

    var $ = cheerio.load(response);
    const home = "https://www.nytimes.com/search";

    var articles = [];

    // Iterate through each list item
    $("ol li").each(function (i, element) {
        // Save an empty result object
        var result = {};

        // Add text and href of every link, and save them as properties of the result object
        // var article = $(this).find("ol").children("li");

        result.title = $(this).find("h4").text();
        result.url = $(this).find("a").attr("href");
        result.date = $(this).find("time").text();
        
        articles.push(result);
    });
    console.log("test")
    res.json(articles)

    
  })
})

module.exports = router;

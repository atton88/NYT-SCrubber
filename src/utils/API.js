import axios from "axios";
import cheerio from "cheerio";

export default {
    //scrape the NYT
    scrape: function(startDate, endDate, topic) {
        //https://www.nytimes.com/search?endDate=20180920&query=topic&sort=best&startDate=20180902
        if(!endDate) {
            endDate = 20180920;
        }
        if(!topic) {
            topic = "topic";
        }
        if(!startDate) {
            startDate = 20180902;
        }
        
        axios.get(`https://www.nytimes.com/search?endDate=${endDate}&query=${topic}&sort=best&startDate=${startDate}`).then(function (response) {
            // Then, we load that into cheerio and save it to $ for a shorthand selector
            var $ = cheerio.load(response.data);
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
        
            // Create a new Article using the `result` object built from scraping
            db.Article.insertMany(articles)
                .then(function (dbArticle) {
                    // Push the added result to our array to develop our JSON
                    // console.log(dbArticle);
                    res.render("index", { item: dbArticle });
                })
                .catch(function (err) {
                    // send error to client
                    return res.json(err);
                });
        }
    }
};

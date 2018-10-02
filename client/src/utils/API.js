import axios from "axios";
import cheerio from "cheerio";


export default {
    //scrape the NYT
    scrape: function(topic, startDate, endDate, cb) {
        console.log('hello')
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
        // https://www.nytimes.com/search?endDate=${endDate}&query=${topic}&sort=best&startDate=${startDate}
        console.log("world")
        return axios.get("api/articles/articles/scrape").then(function(res){
            console.log(res.data)
            cb(res.data)
        })
        
        // axios.get("https://www.nytimes.com/search?endDate=20180920&query=topic&sort=best&startDate=20180902").then(function(response) {
        //     // Then, we load that into cheerio and save it to $ for a shorthand selector
        //     console.log("test")

        //     var $ = cheerio.load(response.data);
        //     const home = "https://www.nytimes.com/search";
    
        //     var articles = [];
    
        //     // Iterate through each list item
        //     $("ol li").each(function (i, element) {
        //         // Save an empty result object
        //         var result = {};
    
        //         // Add text and href of every link, and save them as properties of the result object
        //         // var article = $(this).find("ol").children("li");

        //         result.title = $(this).find("h4").text();
        //         result.url = $(this).find("a").attr("href");
        //         result.date = $(this).find("time").text();
                
        //         articles.push(result);
        //     });
        //     console.log("test")

        //     cb(articles);
            // Create a new Article using the `result` object built from scraping
            // db.Article.insertMany(articles)
            //     .then(function (dbArticle) {
            //         // Push the added result to our array to develop our JSON
            //         // console.log(dbArticle);
            //         // res.redirect("/");
            //         res.json(dbArticle );
            //     })
            //     .catch(function (err) {
            //         // send error to client
            //         return res.json(err);
            //     });
    //     })
    }
};

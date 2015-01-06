/**
 * Created by Garrett on 1/5/2015.
 */
var KEY = "2163022dc48b505336d2af8f99c02bcc";

function submitForm(){
    var text = $("#search_form").val();


    alert(searchBasic(text));
    //perform search

}

function sendResults(data){
    var json = JSON.parse(data);
    var results = json["results"];

    for(var i = 0; i < results.length; i++){
        var string = "<div class='result-item'><div class='result-item-title'>" + results[i]["title"] + "</div><div class='result-item-text'>" + results[i]["preview"] + "</div>";
        $(".results").append(string);
    }
}

/**
 *
 * @param bibleVersion : Bible you want to use
 * @param mode : Search by Verse or Fuzzy Search
 * @param passages : Passages you want to search (Only in Verse Mode) e.g. "Matthew-John"
 * @param start : 0 based index of first result to return
 * @param limit : Max amount of results to return
 * @param preview : none, text, or html
 * @param sort : how to sort, sort by relevance or passage. Only valid in mode = verse.
 * @param search : what to search
 * @return result : The result that is returned
 */
function searchFull(bibleVersion, mode, passages, start, limit, preview, sort, search){
    return "";
}

function searchFuzzy(bibleVersion, start, limit, search){
    var searchQuery = "http://api.biblia.com/v1/bible/search/LEB.js?query=" + search + "&start=" + start + "&limit=" + limit + "&key=" + KEY;
    $.ajax({
        url: searchQuery,
        dataType: 'text',
        success: function(data){
            alert(data);
            sendResults(data);
        }
    });

    return searchQuery;
}

function searchMode(mode, passages, start, limit, preview, sort, search){
    return "";
}

function searchWithPreview(start, limit, preview, search){
    return "";
}

function searchLimited(start, limit, search){
    return searchFuzzy("KJV", start, limit, search);
}

function searchBasic(search){
    return searchLimited(0, 10, search);
}
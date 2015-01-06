<?php
/**
 * Created by PhpStorm.
 * User: Garrett
 * Date: 1/4/2015
 * Time: 03:34
 */

require("dry/header.php");

?>
<div class="bible-search-header">
    <h2 class="bible-search-text"> Bible Search</h2>
    <span class="bible-search-descrip">A search Engine, for your bible.</span>
</div>
<div class="content">

    <div class="input-group">
        <input type="text" id="search_form" class="form-control" placeholder="Search Terms" aria-describedby="basic-addon2">
        <span class="input-group-addon" id="search_text"><a href="#" onclick="submitForm()"><span class="glyphicon glyphicon-search"></span></a></span>
    </div>

    <div class="results">
        <div class="result-item">
        </div>
    </div>
</div>

<script type="text/javascript">
    $("#search_form").keypress(function(e) {
        if(e.which == 13) {
            submitForm();
        }
    });

</script>

<?php

require("dry/footer.php");

?>


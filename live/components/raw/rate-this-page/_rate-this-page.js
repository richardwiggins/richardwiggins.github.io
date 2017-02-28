<script type="text/javascript">
    function goRating(idNum)
    {
        var postRating = '<form id="cmxcssform" action="http://www.cssgov.com/web/survey/formproc.aspx" method="post">';
        postRating = postRating + '<input type="hidden" name="selected" value="1" />';
        postRating = postRating + '<input type="hidden" name="AccessKey" value= "lyRoQZO/rW/q8/bhZYtF1DPk4WJ1cJlM91hT766nj5Nn1Lk3HpTwvpOb6rcCHDyg"/>';
        postRating = postRating + '</form>';
        $('body').append(postRating);
        var postRatingForm = document.getElementById("cmxcssform");
        postRatingForm.selected.value = idNum;
        postRatingForm.submit();
    }
</script>
$(document).ready(function(){
    update_song();
    setInterval(function() {
	check_if_modified();
    }, 30000); //30 seconds
});
function check_if_modified()
{
    $.ajax({
    type: 'HEAD',
    url: 'https://players.rcast.net/status/66600',
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    dataType: 'text',
    async: true,
    ifModified: true,
    error: function() {
    },
    success: function(data, status, xhr) {
	if(status== 'success')
	    update_song();
	}
    });
}
function update_song()
{
    $.ajax({
    type: 'GET',
    url: 'https://players.rcast.net/status/66600',
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    cache: false,
    dataType: 'text',
    async: true,
    success: function(data, status, xhr) {
            $('#song_name').text(data);
        }
    });
}

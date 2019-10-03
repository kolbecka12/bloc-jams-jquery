{
  $('#album-title').text(album.title);
  $('img#album-cover-art').attr('src', album.albumArtUrl);
  $('.artist').text(album.artist);
  $('#release-info').text(album.releaseInfo);
}











// this script is blank. We'll use it to fulfill the first user story
// by taking the data in album and rendering it to the DOM.

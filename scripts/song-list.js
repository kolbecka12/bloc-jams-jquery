{
  album.songs.forEach( (song, index) => {
    song.element = $(`
      <tr>
        <td>index</td>
        <td>song.title</td>
        <td>song.duration</td>
        <td>
          <button>
            <span class="song-number">${index + 1 }</span>
            <span class="ion-play"></span>
            <span class="ion-pause"></span>
          </button>
        <td>${song.title}</td>
        <td>${song.duration}</td>
       </tr>
    `);
    song.element.on('click', event => {
      player.playPause(song);
    });

    $('#song-list').append(song.element);
  });
}









// this script is blank. We'll use it to fulfill the second user story by listing the songs on the album and playing/pausing songs on click.

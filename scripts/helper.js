class Helper {
constructor(song) {
  this.song = song; //takes song getting passed to class and maps into class so it can be utilized
}
  playPauseAndUpdate(song) {
    player.playPause(song);

    const totalTimeElement = $('.total-time');
    let duration = player.getDuration();
    console.log(totalTimeElement, duration);
    totalTimeElement.text( duration );
  }
}
var helper = new Helper;

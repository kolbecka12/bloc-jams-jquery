class Helper {
constructor(song) {
  this.song = song; //takes song getting passed to class and maps into class so it can be utilized
}
  playPauseAndUpdate(song) {
    const totalTimeElement = $('.total-time');
    const duration = player.getDuration();
    totalTimeElement.text( duration );
    player.playPause(song);
  }
}
var helper = new Helper;

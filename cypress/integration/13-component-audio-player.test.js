class PlayerPanel {
  get title() {
    return this._get('.PlayingTrack-title');
  }
  get subtitle() {
    return this._get('.PlayingTrack-subtitle');
  }
  get togglePlayButton() {
    return this._get('.MediaCtrl:nth-child(2)');
  }
  get isPlaying() {
    return this.togglePlayButton.children('i').invoke('hasClass', 'fa-pause');
  }
  clickSkipBackward() {
    this._get('.MediaCtrl:nth-child(1)').click();
    return this;
  }
  clickTogglePlay() {
    this.togglePlayButton.click();
    return this;
  }
  clickSkipForward() {
    this._get('.MediaCtrl:nth-child(3)').click();
    return this;
  }
  _get(selector) {
    return cy.get(`.PlayerPanel ${selector}`);
  }
}

class SearchBox {
  get input() {
    return cy.get('.SearchForm input');
  }
  clear() {
    this.input.clear();
    return this;
  }
  setText(text) {
    this.input.clear().type(text);
    return this;
  }
}

class TrackList {
  getTrack(index) {
    return new Track(`.Track:nth-child(${index + 1})`);
  }
}

class Track {
  constructor(selector) {
    this.selector = selector;
  }
  get togglePlayButton() {
    return this._get('.MediaCtrl');
  }
  get isPlaying() {
    return this.togglePlayButton.children('i').invoke('hasClass', 'fa-pause');
  }
  get title() {
    return this._get('.Track-title');
  }
  get duration() {
    return this._get('.Track-duration');
  }
  clickTogglePlay() {
    this.togglePlayButton.click();
    return this;
  }
  _get(selector) {
    return cy.get(`${this.selector} ${selector}`);
  }
}

const TRACKS = [
  {
    title: 'Shadow Of The Day',
    artist: 'Freddie Carol',
    duration: '2:15'
  },
  {
    title: "What I've done",
    artist: 'Linkin Park',
    duration: '3:27'
  },
  {
    title: 'Lads Sound Better With You',
    artist: 'Benjamin Leigh',
    duration: '4:30'
  },
  {
    title: 'Hotel England',
    artist: 'Albert Diamond',
    duration: '3:31'
  },
  {
    title: 'Bridge Over Smooth Lads',
    artist: 'Bobbie Fierce',
    duration: '2:17'
  }
];

const playerPanel = new PlayerPanel();
const searchBox = new SearchBox();
const trackList = new TrackList();

const expectCurrentTrackToBe = ({ title, artist }) => {
  playerPanel.title.should('contain.text', title);
  playerPanel.subtitle.should('contain.text', artist);
};

describe('Audio Player', () => {
  beforeEach(() => {
    cy.visit('/13-component-audio-player');
  });

  describe('PlayerPanel', () => {
    it('should display the information of the first track when the app is loaded', () => {
      expectCurrentTrackToBe(TRACKS[0]);
    });

    describe('Toogle Play/Pause', () => {
      it('should play the track when clicking on the Play button', () => {
        playerPanel.clickTogglePlay();

        playerPanel.isPlaying.should('be.true');
      });

      it('should pause the track clicking on the Pause button', () => {
        playerPanel.clickTogglePlay().clickTogglePlay();

        playerPanel.isPlaying.should('be.false');
      });
    });

    describe('Skip Forward', () => {
      it('should play the next track when clicking on the Skip Forward button', () => {
        playerPanel.clickSkipForward();

        expectCurrentTrackToBe(TRACKS[1]);
        playerPanel.isPlaying.should('be.true');
      });

      context('When the player is playing the last track', () => {
        it('should still play the last track when clicking Skip Forward button', () => {
          playerPanel
            .clickSkipForward()
            .clickSkipForward()
            .clickSkipForward()
            .clickSkipForward()
            .clickSkipForward();

          expectCurrentTrackToBe(TRACKS[TRACKS.length - 1]);
        });
      });
    });

    describe('Skip Backward', () => {
      it('should play the previous track', () => {
        playerPanel
          .clickSkipForward()
          .clickSkipForward()
          .clickSkipBackward();

        expectCurrentTrackToBe(TRACKS[1]);
        playerPanel.isPlaying.should('be.true');
      });

      context('When the player is playing the first track', () => {
        it('should still play the first track when clicking Skip Backward button', () => {
          playerPanel.clickSkipBackward();

          expectCurrentTrackToBe(TRACKS[0]);
        });
      });
    });
  });

  describe('Playlist', () => {
    it('should display the tracks', () => {
      TRACKS.forEach(({ title, duration }, index) => {
        const track = trackList.getTrack(index);
        track.title.should('have.text', title);
        track.duration.should('have.text', duration);
        track.isPlaying.should('be.false');
      });
    });

    context('When clicking on the Play button', () => {
      it('should play the selected track', () => {
        const track = trackList.getTrack(0);
        track.clickTogglePlay();

        track.isPlaying.should('be.true');
      });

      it('should display the information on the PlayerPanel', () => {
        trackList.getTrack(1).clickTogglePlay();

        expectCurrentTrackToBe(TRACKS[1]);
        playerPanel.isPlaying.should('be.true');
      });
    });

    context('When clicking on the Pause button', () => {
      it('should pause the selected track', () => {
        const track = trackList.getTrack(3);
        track.clickTogglePlay().clickTogglePlay();

        track.isPlaying.should('be.false');
      });

      it('should display the Play button on the PlayerPanel', () => {
        trackList
          .getTrack(3)
          .clickTogglePlay()
          .clickTogglePlay();

        playerPanel.isPlaying.should('be.false');
      });
    });

    context('Clicking buttons on the PlayerPanel', () => {
      it('should display the Pause button when clicking the Play button', () => {
        playerPanel.clickTogglePlay();

        trackList.getTrack(0).isPlaying.should('be.true');
      });

      it('should display the Play button when clicking the Pause button', () => {
        playerPanel.clickTogglePlay().clickTogglePlay();

        trackList.getTrack(0).isPlaying.should('be.false');
      });

      it('should display the Play button for the next track when clicking the Skip Forward button', () => {
        playerPanel.clickSkipForward();

        trackList.getTrack(1).isPlaying.should('be.true');
      });

      it('should display the Play button for the previous track when clicking the Skip Forward button', () => {
        trackList.getTrack(2).clickTogglePlay();
        playerPanel.clickSkipBackward();

        trackList.getTrack(1).isPlaying.should('be.true');
      });
    });
  });

  describe('Search', () => {
    it('should filter the tracks by title', () => {
      searchBox.setText('lad');

      trackList.getTrack(0).title.should('have.text', TRACKS[2].title);
      trackList.getTrack(1).title.should('have.text', TRACKS[4].title);
    });

    it('should filter the tracks by artist', () => {
      searchBox.setText('dia');

      trackList.getTrack(0).title.should('have.text', TRACKS[3].title);
    });

    it('should display all tracks when the search box is empty', () => {
      searchBox.setText('lad').clear();

      trackList.getTrack(TRACKS.length - 1).title.should('exist');
    });

    context('Filtered tracks', () => {
      it('should display the Pause button in the filtered tracks when the track is being played', () => {
        trackList.getTrack(2).clickTogglePlay();
        searchBox.setText('lad');

        trackList.getTrack(0).isPlaying.should('be.true');
      });

      it('should play the selected track', () => {
        searchBox.setText('lad');
        trackList.getTrack(0).clickTogglePlay();

        trackList.getTrack(0).isPlaying.should('be.true');
      });

      it('should pause the selected track', () => {
        searchBox.setText('lad');
        trackList
          .getTrack(1)
          .clickTogglePlay()
          .clickTogglePlay();

        trackList.getTrack(1).isPlaying.should('be.false');
      });
    });
  });
});

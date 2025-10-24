import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HomeTab from '@/components/HomeTab';
import StudioTab from '@/components/StudioTab';
import CommunityTab from '@/components/CommunityTab';
import ProjectsTab from '@/components/ProjectsTab';
import Footer from '@/components/Footer';
import { Track, Beat, Artist } from '@/types';
import ArtistTracksTab from '@/components/ArtistTracksTab';

const Index = () => {
  const [currentTab, setCurrentTab] = useState('home');
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedBeat, setSelectedBeat] = useState<Beat | null>(null);
  const [lyrics, setLyrics] = useState('');
  const [projectName, setProjectName] = useState('');
  const [popularArtists, setPopularArtists] = useState<Artist[]>([]);
  const [selectedArtist, setSelectedArtist] = useState<string | null>(null);
  const [artistTracks, setArtistTracks] = useState<Track[]>([]);
  const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(null);
  const [currentlyPlayingId, setCurrentlyPlayingId] = useState<number | null>(null);

  useEffect(() => {
    fetch('https://functions.poehali.dev/e574ce03-e2d6-4bdc-9188-c3d391e98865')
      .then(res => res.json())
      .then(data => {
        if (data.artists) {
          setPopularArtists(data.artists);
        }
      })
      .catch(err => console.error('Error loading artists:', err));
  }, []);

  const handleArtistClick = async (artistName: string) => {
    setSelectedArtist(artistName);
    try {
      const response = await fetch(
        `https://functions.poehali.dev/e574ce03-e2d6-4bdc-9188-c3d391e98865?artist=${encodeURIComponent(artistName.toLowerCase())}`
      );
      const data = await response.json();
      if (data.top_tracks) {
        const tracks: Track[] = data.top_tracks.map((t: any) => ({
          ...t,
          artist: artistName,
          preview_url: t.preview_url
        }));
        setArtistTracks(tracks);
        setCurrentTab('artist-tracks');
      }
    } catch (err) {
      console.error('Error loading artist tracks:', err);
    }
  };

  const handlePlayTrack = (track: Track & { preview_url?: string }) => {
    if (currentAudio) {
      currentAudio.pause();
    }

    if (currentlyPlayingId === track.id) {
      setCurrentlyPlayingId(null);
      setCurrentAudio(null);
      return;
    }

    if (track.preview_url) {
      const audio = new Audio(track.preview_url);
      audio.play();
      audio.onended = () => {
        setCurrentlyPlayingId(null);
        setCurrentAudio(null);
      };
      setCurrentAudio(audio);
      setCurrentlyPlayingId(track.id);
    }
  };

  const beats: Beat[] = [
    { id: 1, name: 'Trap Vibes', bpm: 140, genre: 'Trap' },
    { id: 2, name: 'Lo-Fi Chill', bpm: 85, genre: 'Lo-Fi' },
    { id: 3, name: 'Pop Energy', bpm: 128, genre: 'Pop' },
    { id: 4, name: 'Hip-Hop Classic', bpm: 95, genre: 'Hip-Hop' },
    { id: 5, name: 'EDM Banger', bpm: 130, genre: 'EDM' },
    { id: 6, name: 'R&B Smooth', bpm: 88, genre: 'R&B' },
  ];

  const communityTracks: Track[] = [
    { id: 1, title: 'Летняя Ночь', artist: 'SoundMaster', duration: '3:24', plays: 12450, genre: 'Pop' },
    { id: 2, title: 'Городские Огни', artist: 'BeatMaker Pro', duration: '4:12', plays: 8920, genre: 'Hip-Hop' },
    { id: 3, title: 'Мечты', artist: 'VibezCreator', duration: '3:45', plays: 15680, genre: 'Lo-Fi' },
    { id: 4, title: 'Танцуй', artist: 'RhythmKing', duration: '3:08', plays: 22100, genre: 'EDM' },
  ];

  const myProjects: Track[] = [
    { id: 1, title: 'Новый Проект 1', artist: 'Вы', duration: '2:30', plays: 0, genre: 'Draft' },
  ];

  const effects = [
    { name: 'Reverb', icon: 'Waves' },
    { name: 'Echo', icon: 'Radio' },
    { name: 'Distortion', icon: 'Zap' },
    { name: 'Bass Boost', icon: 'Volume2' },
    { name: 'Vocal Tune', icon: 'Mic' },
    { name: 'Compression', icon: 'Maximize2' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-purple-950/20">
      <Navigation currentTab={currentTab} setCurrentTab={setCurrentTab} />

      <main className="container mx-auto px-4 py-8">
        {currentTab === 'home' && (
          <HomeTab 
            popularArtists={popularArtists} 
            setCurrentTab={setCurrentTab}
            onArtistClick={handleArtistClick}
          />
        )}

        {currentTab === 'artist-tracks' && selectedArtist && (
          <ArtistTracksTab
            artistName={selectedArtist}
            tracks={artistTracks}
            currentlyPlayingId={currentlyPlayingId}
            onPlayTrack={handlePlayTrack}
            onBack={() => setCurrentTab('home')}
          />
        )}

        {currentTab === 'studio' && (
          <StudioTab
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            selectedBeat={selectedBeat}
            setSelectedBeat={setSelectedBeat}
            lyrics={lyrics}
            setLyrics={setLyrics}
            projectName={projectName}
            setProjectName={setProjectName}
            beats={beats}
            effects={effects}
          />
        )}

        {currentTab === 'community' && (
          <CommunityTab communityTracks={communityTracks} popularArtists={popularArtists} />
        )}

        {currentTab === 'projects' && (
          <ProjectsTab myProjects={myProjects} setCurrentTab={setCurrentTab} />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Index;
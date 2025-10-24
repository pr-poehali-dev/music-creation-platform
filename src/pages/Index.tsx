import { useState } from 'react';
import Navigation from '@/components/Navigation';
import HomeTab from '@/components/HomeTab';
import StudioTab from '@/components/StudioTab';
import CommunityTab from '@/components/CommunityTab';
import ProjectsTab from '@/components/ProjectsTab';
import Footer from '@/components/Footer';
import { Track, Beat } from '@/types';

const Index = () => {
  const [currentTab, setCurrentTab] = useState('home');
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedBeat, setSelectedBeat] = useState<Beat | null>(null);
  const [lyrics, setLyrics] = useState('');
  const [projectName, setProjectName] = useState('');

  const popularArtists = [
    { name: 'Ваня Дмитриенко', tracks: 24, followers: '2.5М' },
    { name: 'Дима Масленников', tracks: 18, followers: '1.8М' },
    { name: 'Дима Билан', tracks: 156, followers: '4.2М' },
  ];

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
          <HomeTab popularArtists={popularArtists} setCurrentTab={setCurrentTab} />
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
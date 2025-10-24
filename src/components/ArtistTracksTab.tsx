import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Track } from '@/types';

interface ArtistTracksTabProps {
  artistName: string;
  tracks: Track[];
  currentlyPlayingId: number | null;
  onPlayTrack: (track: Track) => void;
  onBack: () => void;
}

const ArtistTracksTab = ({ 
  artistName, 
  tracks, 
  currentlyPlayingId, 
  onPlayTrack, 
  onBack 
}: ArtistTracksTabProps) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={onBack}>
          <Icon name="ArrowLeft" size={24} />
        </Button>
        <h2 className="text-4xl font-bold flex items-center gap-3">
          <Icon name="Music" size={32} className="text-primary" />
          {artistName}
        </h2>
      </div>
      
      <div className="space-y-4">
        {tracks.map((track) => (
          <Card 
            key={track.id} 
            className={`hover:border-primary/50 transition-colors cursor-pointer bg-card/50 backdrop-blur ${
              currentlyPlayingId === track.id ? 'border-primary' : ''
            }`}
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 flex-1">
                  <Button 
                    size="icon" 
                    variant="ghost" 
                    className="hover:text-primary"
                    onClick={() => onPlayTrack(track)}
                  >
                    <Icon 
                      name={currentlyPlayingId === track.id ? "Pause" : "Play"} 
                      size={24} 
                    />
                  </Button>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{track.title}</h3>
                    <p className="text-muted-foreground text-sm">{track.artist}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <Badge variant="outline">{track.genre}</Badge>
                  <div className="flex items-center gap-2">
                    <Icon name="Headphones" size={16} />
                    <span>{track.plays.toLocaleString()}</span>
                  </div>
                  <span>{track.duration}</span>
                  <Button size="icon" variant="ghost">
                    <Icon name="Heart" size={18} />
                  </Button>
                  <Button size="icon" variant="ghost">
                    <Icon name="Share2" size={18} />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ArtistTracksTab;

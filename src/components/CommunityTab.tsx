import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { Track, Artist } from '@/types';

interface CommunityTabProps {
  communityTracks: Track[];
  popularArtists: Artist[];
}

const CommunityTab = ({ communityTracks, popularArtists }: CommunityTabProps) => {
  return (
    <div className="space-y-6">
      <h2 className="text-4xl font-bold flex items-center gap-3">
        <Icon name="Users" size={32} className="text-primary" />
        Треки Сообщества
      </h2>
      
      <Tabs defaultValue="popular" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="popular">Популярное</TabsTrigger>
          <TabsTrigger value="new">Новое</TabsTrigger>
          <TabsTrigger value="artists">Авторы</TabsTrigger>
        </TabsList>
        
        <TabsContent value="popular" className="space-y-4 mt-6">
          {communityTracks.map((track) => (
            <Card key={track.id} className="hover:border-primary/50 transition-colors cursor-pointer bg-card/50 backdrop-blur">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 flex-1">
                    <Button size="icon" variant="ghost" className="hover:text-primary">
                      <Icon name="Play" size={24} />
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
        </TabsContent>

        <TabsContent value="new" className="mt-6">
          <p className="text-center text-muted-foreground py-12">Новые треки появятся скоро...</p>
        </TabsContent>

        <TabsContent value="artists" className="mt-6">
          <div className="grid md:grid-cols-3 gap-6">
            {popularArtists.map((artist, index) => (
              <Card key={index} className="hover:scale-105 transition-transform cursor-pointer border-border/50 bg-card/50 backdrop-blur">
                <CardHeader>
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-4 flex items-center justify-center text-3xl">
                    {artist.name.charAt(0)}
                  </div>
                  <CardTitle className="text-center">{artist.name}</CardTitle>
                  <CardDescription className="text-center">
                    {artist.tracks} треков • {artist.followers} подписчиков
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" variant="outline">
                    <Icon name="Play" size={16} className="mr-2" />
                    Слушать треки
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CommunityTab;
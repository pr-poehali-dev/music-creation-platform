import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Artist } from '@/types';

interface HomeTabProps {
  popularArtists: Artist[];
  setCurrentTab: (tab: string) => void;
}

const HomeTab = ({ popularArtists, setCurrentTab }: HomeTabProps) => {
  return (
    <div className="space-y-12">
      <section className="text-center py-20 relative">
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <div className="w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse-slow"></div>
        </div>
        <div className="relative z-10">
          <h2 className="text-6xl font-bold mb-6 animate-fade-in">
            Создай свою музыку
            <br />
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              совершенно бесплатно
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Профессиональная студия звукозаписи прямо в браузере. Биты, эффекты, редактор текстов и публикация треков.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="glow-effect" onClick={() => setCurrentTab('studio')}>
              <Icon name="Play" size={20} className="mr-2" />
              Начать создавать
            </Button>
            <Button size="lg" variant="outline" onClick={() => setCurrentTab('community')}>
              <Icon name="Headphones" size={20} className="mr-2" />
              Слушать треки
            </Button>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <Icon name="Star" size={28} className="text-primary" />
          Популярные Авторы
        </h3>
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
                  Слушать
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomeTab;
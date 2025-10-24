import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

interface Track {
  id: number;
  title: string;
  artist: string;
  duration: string;
  plays: number;
  genre: string;
}

interface Beat {
  id: number;
  name: string;
  bpm: number;
  genre: string;
}

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
      <nav className="border-b border-border/40 backdrop-blur-xl bg-background/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow-effect">
                <Icon name="Music" size={24} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                BeatLab
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" onClick={() => setCurrentTab('home')}>
                <Icon name="Home" size={18} className="mr-2" />
                Главная
              </Button>
              <Button variant="ghost" size="sm" onClick={() => setCurrentTab('studio')}>
                <Icon name="Music2" size={18} className="mr-2" />
                Студия
              </Button>
              <Button variant="ghost" size="sm" onClick={() => setCurrentTab('community')}>
                <Icon name="Users" size={18} className="mr-2" />
                Сообщество
              </Button>
              <Button variant="ghost" size="sm" onClick={() => setCurrentTab('projects')}>
                <Icon name="FolderOpen" size={18} className="mr-2" />
                Мои Проекты
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        {currentTab === 'home' && (
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
        )}

        {currentTab === 'studio' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-4xl font-bold flex items-center gap-3">
                <Icon name="Sparkles" size={32} className="text-primary" />
                Студия Создания Музыки
              </h2>
              <Button className="glow-effect">
                <Icon name="Save" size={18} className="mr-2" />
                Сохранить проект
              </Button>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <Card className="border-primary/30 bg-card/50 backdrop-blur">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Music" size={20} />
                      Аудио Плеер
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg p-8 text-center">
                      <div className="flex items-center justify-center gap-4 mb-6">
                        <Button size="icon" variant="ghost">
                          <Icon name="SkipBack" size={24} />
                        </Button>
                        <Button size="icon" className="w-16 h-16 glow-effect" onClick={() => setIsPlaying(!isPlaying)}>
                          <Icon name={isPlaying ? "Pause" : "Play"} size={32} />
                        </Button>
                        <Button size="icon" variant="ghost">
                          <Icon name="SkipForward" size={24} />
                        </Button>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm text-muted-foreground">
                          <span>0:00</span>
                          <span>3:24</span>
                        </div>
                        <Slider defaultValue={[0]} max={100} step={1} className="cursor-pointer" />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-3 block">Название проекта</label>
                      <Input 
                        placeholder="Моя новая песня..." 
                        value={projectName}
                        onChange={(e) => setProjectName(e.target.value)}
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-3 block flex items-center gap-2">
                        <Icon name="Volume2" size={18} />
                        Громкость
                      </label>
                      <Slider defaultValue={[70]} max={100} step={1} />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-3 block flex items-center gap-2">
                        <Icon name="Gauge" size={18} />
                        Темп (BPM)
                      </label>
                      <Slider defaultValue={[120]} min={60} max={200} step={1} />
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-primary/30 bg-card/50 backdrop-blur">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="FileText" size={20} />
                      Редактор Текстов Песни
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Textarea 
                      placeholder="Напиши текст своей песни здесь..."
                      className="min-h-[200px] resize-none"
                      value={lyrics}
                      onChange={(e) => setLyrics(e.target.value)}
                    />
                    <div className="flex gap-2 mt-4">
                      <Button variant="outline" size="sm">
                        <Icon name="Type" size={16} className="mr-2" />
                        Форматирование
                      </Button>
                      <Button variant="outline" size="sm">
                        <Icon name="Download" size={16} className="mr-2" />
                        Экспорт
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="border-secondary/30 bg-card/50 backdrop-blur">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Disc3" size={20} />
                      Библиотека Битов
                    </CardTitle>
                    <CardDescription>Выбери бит для своего трека</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[300px]">
                      <div className="space-y-2">
                        {beats.map((beat) => (
                          <div 
                            key={beat.id}
                            onClick={() => setSelectedBeat(beat)}
                            className={`p-3 rounded-lg border cursor-pointer transition-all hover:border-primary ${
                              selectedBeat?.id === beat.id ? 'border-primary bg-primary/10' : 'border-border'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="font-medium">{beat.name}</p>
                                <p className="text-sm text-muted-foreground">{beat.bpm} BPM</p>
                              </div>
                              <Badge variant="secondary">{beat.genre}</Badge>
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>

                <Card className="border-secondary/30 bg-card/50 backdrop-blur">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Sliders" size={20} />
                      Эффекты
                    </CardTitle>
                    <CardDescription>Добавь звуковые эффекты</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-3">
                      {effects.map((effect, index) => (
                        <Button key={index} variant="outline" className="h-20 flex flex-col gap-2">
                          <Icon name={effect.icon as any} size={24} />
                          <span className="text-xs">{effect.name}</span>
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )}

        {currentTab === 'community' && (
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
        )}

        {currentTab === 'projects' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-4xl font-bold flex items-center gap-3">
                <Icon name="FolderOpen" size={32} className="text-primary" />
                Мои Проекты
              </h2>
              <Button className="glow-effect" onClick={() => setCurrentTab('studio')}>
                <Icon name="Plus" size={18} className="mr-2" />
                Новый проект
              </Button>
            </div>

            <div className="space-y-4">
              {myProjects.map((project) => (
                <Card key={project.id} className="hover:border-primary/50 transition-colors cursor-pointer bg-card/50 backdrop-blur">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 flex-1">
                        <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center">
                          <Icon name="Music" size={28} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg">{project.title}</h3>
                          <p className="text-muted-foreground text-sm">Последнее изменение: Сегодня</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Button variant="outline" onClick={() => setCurrentTab('studio')}>
                          <Icon name="Edit" size={16} className="mr-2" />
                          Редактировать
                        </Button>
                        <Button variant="outline">
                          <Icon name="Share2" size={16} className="mr-2" />
                          Опубликовать
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Icon name="MoreVertical" size={18} />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-dashed border-2 border-primary/30 bg-transparent hover:bg-card/20 transition-colors">
              <CardContent className="p-12 text-center">
                <Icon name="Plus" size={48} className="mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Создай свой первый трек</h3>
                <p className="text-muted-foreground mb-6">Начни творить музыку прямо сейчас</p>
                <Button className="glow-effect" onClick={() => setCurrentTab('studio')}>
                  <Icon name="Sparkles" size={18} className="mr-2" />
                  Открыть студию
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </main>

      <footer className="border-t border-border/40 mt-20 py-12 bg-card/20 backdrop-blur">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Icon name="Music" size={18} className="text-white" />
                </div>
                <span className="font-bold text-lg">BeatLab</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Создавай музыку бесплатно и делись своим творчеством с миром
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Возможности</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Студия создания</li>
                <li>Библиотека битов</li>
                <li>Эффекты</li>
                <li>Редактор текстов</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Сообщество</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Популярные треки</li>
                <li>Авторы</li>
                <li>Форум</li>
                <li>Туториалы</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Помощь</li>
                <li>FAQ</li>
                <li>Обратная связь</li>
                <li>О проекте</li>
              </ul>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2024 BeatLab. Все права защищены. Создавай музыку бесплатно.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

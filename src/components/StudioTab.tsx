import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Beat {
  id: number;
  name: string;
  bpm: number;
  genre: string;
}

interface Effect {
  name: string;
  icon: string;
}

interface StudioTabProps {
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
  selectedBeat: Beat | null;
  setSelectedBeat: (beat: Beat | null) => void;
  lyrics: string;
  setLyrics: (lyrics: string) => void;
  projectName: string;
  setProjectName: (name: string) => void;
  beats: Beat[];
  effects: Effect[];
}

const StudioTab = ({
  isPlaying,
  setIsPlaying,
  selectedBeat,
  setSelectedBeat,
  lyrics,
  setLyrics,
  projectName,
  setProjectName,
  beats,
  effects
}: StudioTabProps) => {
  return (
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
  );
};

export default StudioTab;

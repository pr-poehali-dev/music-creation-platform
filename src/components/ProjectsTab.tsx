import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface Track {
  id: number;
  title: string;
  artist: string;
  duration: string;
  plays: number;
  genre: string;
}

interface ProjectsTabProps {
  myProjects: Track[];
  setCurrentTab: (tab: string) => void;
}

const ProjectsTab = ({ myProjects, setCurrentTab }: ProjectsTabProps) => {
  return (
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
  );
};

export default ProjectsTab;

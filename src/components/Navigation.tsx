import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface NavigationProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
}

const Navigation = ({ currentTab, setCurrentTab }: NavigationProps) => {
  return (
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
  );
};

export default Navigation;

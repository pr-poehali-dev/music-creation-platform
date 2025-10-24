import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
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
  );
};

export default Footer;

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [showLoginDialog, setShowLoginDialog] = useState(false);
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const [serverName, setServerName] = useState('');
  const [serverVersion, setServerVersion] = useState('1.20');
  const [serverType, setServerType] = useState('');
  const [maxPlayers, setMaxPlayers] = useState(20);
  const [isCreating, setIsCreating] = useState(false);
  const { toast } = useToast();

  const plugins = [
    { name: 'EssentialsX', description: 'Основные команды и утилиты', downloads: '50M+', icon: 'Wrench' },
    { name: 'WorldEdit', description: 'Редактор мира', downloads: '30M+', icon: 'Globe' },
    { name: 'Vault', description: 'API для экономики', downloads: '25M+', icon: 'DollarSign' },
    { name: 'LuckPerms', description: 'Управление правами', downloads: '20M+', icon: 'Shield' },
    { name: 'PlaceholderAPI', description: 'Динамические переменные', downloads: '15M+', icon: 'Code' },
    { name: 'Citizens', description: 'NPC система', downloads: '12M+', icon: 'Users' },
  ];

  const mods = [
    { name: 'OptiFine', description: 'Оптимизация графики', downloads: '100M+', icon: 'Zap' },
    { name: 'JEI', description: 'Just Enough Items', downloads: '80M+', icon: 'Package' },
    { name: 'Biomes O Plenty', description: 'Новые биомы', downloads: '60M+', icon: 'TreePine' },
    { name: 'Tinkers Construct', description: 'Создание инструментов', downloads: '45M+', icon: 'Hammer' },
    { name: 'Applied Energistics', description: 'Хранилище предметов', downloads: '40M+', icon: 'Database' },
    { name: 'Thermal Expansion', description: 'Механизмы и энергия', downloads: '35M+', icon: 'Cpu' },
  ];

  const features = [
    { icon: 'Rocket', title: 'Мгновенный запуск', description: 'Сервер готов к работе за 30 секунд' },
    { icon: 'Zap', title: 'Высокая производительность', description: 'Оптимизированные серверы на SSD дисках' },
    { icon: 'Shield', title: 'DDoS защита', description: 'Надежная защита от всех видов атак' },
    { icon: 'Crown', title: 'Премиум функции', description: 'Приоритетная поддержка и больше ресурсов' },
  ];

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="flex items-center gap-2 mr-8">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Box" size={24} className="text-primary-foreground" />
            </div>
            <span className="text-xl font-bold font-['Montserrat']">MineCraft Host</span>
          </div>
          
          <nav className="flex items-center gap-6 text-sm font-medium flex-1">
            <button onClick={() => setActiveSection('home')} className={`transition-colors hover:text-primary ${activeSection === 'home' ? 'text-primary' : 'text-muted-foreground'}`}>
              Главная
            </button>
            <button onClick={() => setActiveSection('plugins')} className={`transition-colors hover:text-primary ${activeSection === 'plugins' ? 'text-primary' : 'text-muted-foreground'}`}>
              Плагины
            </button>
            <button onClick={() => setActiveSection('mods')} className={`transition-colors hover:text-primary ${activeSection === 'mods' ? 'text-primary' : 'text-muted-foreground'}`}>
              Моды
            </button>
            <button onClick={() => setActiveSection('create')} className={`transition-colors hover:text-primary ${activeSection === 'create' ? 'text-primary' : 'text-muted-foreground'}`}>
              Создать сервер
            </button>
            <button onClick={() => setActiveSection('support')} className={`transition-colors hover:text-primary ${activeSection === 'support' ? 'text-primary' : 'text-muted-foreground'}`}>
              Поддержка
            </button>
          </nav>

          <Button onClick={() => setShowLoginDialog(true)}>Войти</Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {activeSection === 'home' && (
          <div className="space-y-16">
            <section className="text-center py-20">
              <div className="inline-block mb-4">
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  <Icon name="Sparkles" size={16} className="mr-2" />
                  Бесплатный хостинг серверов
                </Badge>
              </div>
              <h1 className="text-6xl font-black font-['Montserrat'] mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Создай свой Minecraft сервер
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Бесплатный хостинг с поддержкой всех плагинов и модов. Запусти сервер за 30 секунд без знаний программирования.
              </p>
              <div className="flex gap-4 justify-center">
                <Button size="lg" className="text-lg h-14 px-8" onClick={() => setActiveSection('create')}>
                  <Icon name="Rocket" size={20} className="mr-2" />
                  Создать сервер
                </Button>
                <Button size="lg" variant="outline" className="text-lg h-14 px-8">
                  <Icon name="Play" size={20} className="mr-2" />
                  Как это работает
                </Button>
              </div>
            </section>

            <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow border-2 hover:border-primary/50">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon name={feature.icon as any} size={24} className="text-primary" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </section>

            <section className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 text-center text-white">
              <Icon name="Crown" size={48} className="mx-auto mb-4" />
              <h2 className="text-4xl font-bold font-['Montserrat'] mb-4">Премиум функции</h2>
              <p className="text-lg mb-6 opacity-90">
                Все плагины и моды • Приоритетная поддержка • Увеличенные ресурсы • Без рекламы
              </p>
              <Button size="lg" variant="secondary" className="text-lg h-14 px-8">
                Узнать больше
              </Button>
            </section>
          </div>
        )}

        {activeSection === 'plugins' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-black font-['Montserrat'] mb-4">Каталог плагинов</h1>
              <p className="text-xl text-muted-foreground">Более 50,000 бесплатных плагинов для вашего сервера</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {plugins.map((plugin, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-all hover:-translate-y-1 border-2 hover:border-primary/50">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                        <Icon name={plugin.icon as any} size={24} className="text-secondary" />
                      </div>
                      <Badge variant="secondary">{plugin.downloads}</Badge>
                    </div>
                    <CardTitle className="mt-4">{plugin.name}</CardTitle>
                    <CardDescription>{plugin.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full">
                      <Icon name="Download" size={16} className="mr-2" />
                      Установить
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'mods' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-black font-['Montserrat'] mb-4">Каталог модов</h1>
              <p className="text-xl text-muted-foreground">Тысячи модов для расширения игрового опыта</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mods.map((mod, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-all hover:-translate-y-1 border-2 hover:border-accent/50">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                        <Icon name={mod.icon as any} size={24} className="text-accent" />
                      </div>
                      <Badge className="bg-accent text-accent-foreground">{mod.downloads}</Badge>
                    </div>
                    <CardTitle className="mt-4">{mod.name}</CardTitle>
                    <CardDescription>{mod.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bg-accent hover:bg-accent/90">
                      <Icon name="Download" size={16} className="mr-2" />
                      Установить
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'create' && (
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-black font-['Montserrat'] mb-4">Создать сервер</h1>
              <p className="text-xl text-muted-foreground">Настрой свой сервер за пару минут</p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Параметры сервера</CardTitle>
                <CardDescription>Выбери настройки для своего сервера</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Название сервера</label>
                  <Input 
                    placeholder="Мой крутой сервер" 
                    value={serverName}
                    onChange={(e) => setServerName(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Версия Minecraft</label>
                  <Tabs value={serverVersion} onValueChange={setServerVersion} className="w-full">
                    <TabsList className="grid w-full grid-cols-4">
                      <TabsTrigger value="1.20">1.20</TabsTrigger>
                      <TabsTrigger value="1.19">1.19</TabsTrigger>
                      <TabsTrigger value="1.18">1.18</TabsTrigger>
                      <TabsTrigger value="1.16">1.16</TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Тип сервера</label>
                  <div className="grid grid-cols-2 gap-4">
                    <Card 
                      onClick={() => setServerType('vanilla')}
                      className={`cursor-pointer hover:border-primary transition-colors border-2 ${serverType === 'vanilla' ? 'border-primary bg-primary/5' : ''}`}
                    >
                      <CardHeader>
                        <div className="flex items-center gap-2">
                          <Icon name="Box" size={20} className="text-primary" />
                          <CardTitle className="text-base">Vanilla</CardTitle>
                        </div>
                        <CardDescription className="text-xs">Чистый Minecraft</CardDescription>
                      </CardHeader>
                    </Card>
                    <Card 
                      onClick={() => setServerType('spigot')}
                      className={`cursor-pointer hover:border-secondary transition-colors border-2 ${serverType === 'spigot' ? 'border-secondary bg-secondary/5' : ''}`}
                    >
                      <CardHeader>
                        <div className="flex items-center gap-2">
                          <Icon name="Wrench" size={20} className="text-secondary" />
                          <CardTitle className="text-base">Spigot</CardTitle>
                        </div>
                        <CardDescription className="text-xs">С плагинами</CardDescription>
                      </CardHeader>
                    </Card>
                    <Card 
                      onClick={() => setServerType('forge')}
                      className={`cursor-pointer hover:border-accent transition-colors border-2 ${serverType === 'forge' ? 'border-accent bg-accent/5' : ''}`}
                    >
                      <CardHeader>
                        <div className="flex items-center gap-2">
                          <Icon name="Zap" size={20} className="text-accent" />
                          <CardTitle className="text-base">Forge</CardTitle>
                        </div>
                        <CardDescription className="text-xs">С модами</CardDescription>
                      </CardHeader>
                    </Card>
                    <Card 
                      onClick={() => setServerType('fabric')}
                      className={`cursor-pointer hover:border-primary transition-colors border-2 ${serverType === 'fabric' ? 'border-primary bg-primary/5' : ''}`}
                    >
                      <CardHeader>
                        <div className="flex items-center gap-2">
                          <Icon name="Package" size={20} className="text-primary" />
                          <CardTitle className="text-base">Fabric</CardTitle>
                        </div>
                        <CardDescription className="text-xs">Легкие моды</CardDescription>
                      </CardHeader>
                    </Card>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Максимум игроков</label>
                  <Input 
                    type="number" 
                    value={maxPlayers}
                    onChange={(e) => setMaxPlayers(Number(e.target.value))}
                    min="1" 
                    max="100" 
                  />
                </div>

                <Button 
                  className="w-full" 
                  size="lg"
                  onClick={() => {
                    if (!serverName.trim()) {
                      toast({ title: "Ошибка", description: "Введите название сервера", variant: "destructive" });
                      return;
                    }
                    if (!serverType) {
                      toast({ title: "Ошибка", description: "Выберите тип сервера", variant: "destructive" });
                      return;
                    }
                    setIsCreating(true);
                    setTimeout(() => {
                      setIsCreating(false);
                      toast({ 
                        title: "Сервер создан!", 
                        description: `${serverName} (${serverType}, v${serverVersion}) готов к запуску` 
                      });
                      setServerName('');
                      setServerType('');
                    }, 2000);
                  }}
                  disabled={isCreating}
                >
                  {isCreating ? (
                    <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                  ) : (
                    <Icon name="Rocket" size={20} className="mr-2" />
                  )}
                  {isCreating ? 'Создаю сервер...' : 'Создать сервер'}
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'support' && (
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-black font-['Montserrat'] mb-4">Поддержка</h1>
              <p className="text-xl text-muted-foreground">Мы всегда рады помочь с любыми вопросами</p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Icon name="MessageCircle" size={32} className="mx-auto text-primary mb-2" />
                  <CardTitle className="text-lg">Discord</CardTitle>
                  <CardDescription>Присоединяйся к сообществу</CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Icon name="Mail" size={32} className="mx-auto text-secondary mb-2" />
                  <CardTitle className="text-lg">Email</CardTitle>
                  <CardDescription>support@mchost.com</CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Icon name="FileText" size={32} className="mx-auto text-accent mb-2" />
                  <CardTitle className="text-lg">Wiki</CardTitle>
                  <CardDescription>База знаний</CardDescription>
                </CardHeader>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Форма обратной связи</CardTitle>
                <CardDescription>Опиши свою проблему и мы поможем в течение 24 часов</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Имя</label>
                  <Input placeholder="Ваше имя" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Сообщение</label>
                  <Textarea placeholder="Расскажите о своей проблеме..." rows={6} />
                </div>
                <Button className="w-full" size="lg">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить сообщение
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </main>

      <footer className="border-t mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Box" size={20} className="text-primary-foreground" />
              </div>
              <span className="font-bold font-['Montserrat']">MineCraft Host</span>
            </div>
            <p className="text-sm text-muted-foreground">© 2024 MineCraft Host. Бесплатный хостинг серверов Minecraft.</p>
            <div className="flex gap-4">
              <Icon name="Github" size={20} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Icon name="Twitter" size={20} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Icon name="MessageCircle" size={20} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </footer>

      <Dialog open={showLoginDialog} onOpenChange={(open) => {
        setShowLoginDialog(open);
        if (!open) setIsRegisterMode(false);
      }}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{isRegisterMode ? 'Регистрация' : 'Вход в аккаунт'}</DialogTitle>
            <DialogDescription>
              {isRegisterMode ? 'Создай аккаунт для управления серверами' : 'Войди, чтобы управлять своими серверами'}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            {isRegisterMode && (
              <div className="space-y-2">
                <label className="text-sm font-medium">Имя пользователя</label>
                <Input placeholder="Твой игровой ник" />
              </div>
            )}
            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <Input type="email" placeholder="your@email.com" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Пароль</label>
              <Input type="password" placeholder="••••••••" />
            </div>
            {isRegisterMode && (
              <div className="space-y-2">
                <label className="text-sm font-medium">Повтори пароль</label>
                <Input type="password" placeholder="••••••••" />
              </div>
            )}
            <Button 
              className="w-full"
              onClick={() => {
                toast({ 
                  title: isRegisterMode ? 'Регистрация успешна!' : 'Вход выполнен!', 
                  description: isRegisterMode ? 'Добро пожаловать! Теперь можешь создавать серверы' : 'С возвращением!'
                });
                setShowLoginDialog(false);
                setIsRegisterMode(false);
              }}
            >
              <Icon name={isRegisterMode ? "UserPlus" : "LogIn"} size={18} className="mr-2" />
              {isRegisterMode ? 'Зарегистрироваться' : 'Войти'}
            </Button>
            <div className="text-center">
              <button 
                onClick={() => setIsRegisterMode(!isRegisterMode)}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {isRegisterMode ? 'Уже есть аккаунт? Войти' : 'Нет аккаунта? Зарегистрироваться'}
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
import { Question } from "./types";

export const questions: Question[] = [
  // ===================== RH124 (1-15, original) =====================
  {
    id: 1,
    book: "rh124",
    question: "Создайте символическую (мягкую) ссылку на файл /etc/passwd в директории /tmp/ с именем pass_link.",
    correctCommand: ["ln", "-s", "/etc/passwd", "/tmp/pass_link"],
    options: ["ln", "-s", "/etc/passwd", "/tmp/pass_link", "-h", "link", "--soft"],
    explanation: "Команда ln -s создает символическую ссылку. Сначала указывается целевой файл, затем путь и имя создаваемой ссылки.",
    manHint: "ln(1) - make links between files. Option -s, --symbolic make symbolic links instead of hard links."
  },
  {
    id: 2,
    book: "rh124",
    question: "Выполните команду find / -name '*.txt' и перенаправьте только сообщения об ошибках (stderr) в файл /dev/null.",
    correctCommand: ["find", "/", "-name", "'*.txt'", "2>", "/dev/null"],
    options: ["find", "/", "-name", "'*.txt'", "2>", "/dev/null", ">", "&1", "1>"],
    explanation: "Символ '2>' перенаправляет поток ошибок (файловый дескриптор 2). /dev/null - это 'черная дыра' в Linux, куда можно отправлять ненужный вывод.",
    manHint: "bash(1) - Redirection. 2> redirects the standard error (stderr)."
  },
  {
    id: 3,
    book: "rh124",
    question: "Используя dnf, найдите все пакеты, содержащие в названии или описании слово 'nginx'.",
    correctCommand: ["dnf", "search", "nginx"],
    options: ["dnf", "search", "nginx", "find", "locate", "query"],
    explanation: "dnf search ищет пакеты по ключевому слову в названии и кратком описании.",
    manHint: "dnf(8) - DNF Command Reference. 'dnf search <keyword>' searches package metadata for keywords."
  },
  {
    id: 4,
    book: "rh124",
    question: "Покажите историю транзакций пакетного менеджера dnf.",
    correctCommand: ["dnf", "history"],
    options: ["dnf", "history", "log", "transactions", "show"],
    explanation: "dnf history выводит список всех выполненных транзакций (установок, удалений, обновлений пакетов) и их статусы.",
    manHint: "dnf-history(8) - 'dnf history' shows information about past transactions."
  },
  {
    id: 5,
    book: "rh124",
    question: "Найдите приложение 'gimp' в репозитории Flatpak (используйте команду flatpak).",
    correctCommand: ["flatpak", "search", "gimp"],
    options: ["flatpak", "search", "gimp", "find", "query", "--list"],
    explanation: "flatpak search ищет приложения в настроенных удаленных репозиториях (remotes).",
    manHint: "flatpak-search(1) - Search for applications and runtimes."
  },
  {
    id: 6,
    book: "rh124",
    question: "Запустите интерактивную утилиту для просмотра процессов в реальном времени.",
    correctCommand: ["top"],
    options: ["top", "ps", "htop", "free", "uptime"],
    explanation: "Утилита top (или htop) предоставляет динамический просмотр запущенных процессов и использования системных ресурсов.",
    manHint: "top(1) - display Linux processes."
  },
  {
    id: 7,
    book: "rh124",
    question: "Принудительно (сигналом SIGKILL) завершите процесс с PID 1234.",
    correctCommand: ["kill", "-9", "1234"],
    options: ["kill", "-9", "1234", "-15", "-SIGTERM", "pkill"],
    explanation: "Сигнал -9 (SIGKILL) немедленно прерывает процесс, не давая ему шанса корректно завершиться.",
    manHint: "kill(1) - send a signal to a process. -9 is SIGKILL."
  },
  {
    id: 8,
    book: "rh124",
    question: "Возобновите выполнение приостановленного процесса в фоновом режиме (background).",
    correctCommand: ["bg"],
    options: ["bg", "fg", "jobs", "continue", "&"],
    explanation: "Команда bg переводит приостановленную (Ctrl+Z) задачу в фоновое выполнение.",
    manHint: "bash(1) - Job Control. 'bg [jobspec]' resumes suspended jobs in the background."
  },
  {
    id: 9,
    book: "rh124",
    question: "Верните фоновый процесс или приостановленное задание (job номер 1) на передний план (foreground).",
    correctCommand: ["fg", "%1"],
    options: ["fg", "%1", "bg", "1", "-f"],
    explanation: "Команда fg возвращает фоновое задание на передний план, позволяя взаимодействовать с ним напрямую.",
    manHint: "bash(1) - Job Control. 'fg [jobspec]' resumes a suspended or background job in the foreground."
  },
  {
    id: 10,
    book: "rh124",
    question: "Покажите активные сетевые соединения с помощью утилиты nmcli.",
    correctCommand: ["nmcli", "connection", "show", "--active"],
    options: ["nmcli", "connection", "show", "--active", "device", "status", "up"],
    explanation: "nmcli connection show --active выводит список только активных в данный момент профилей соединений.",
    manHint: "nmcli(1) - command-line tool for controlling NetworkManager."
  },
  {
    id: 11,
    book: "rh124",
    question: "Проверьте статус синхронизации времени с помощью chronyc.",
    correctCommand: ["chronyc", "sources"],
    options: ["chronyc", "sources", "status", "chronyd", "tracking", "ntpq"],
    explanation: "chronyc sources отображает информацию о серверах точного времени, с которыми синхронизируется система.",
    manHint: "chronyc(1) - command-line interface for chrony daemon."
  },
  {
    id: 12,
    book: "rh124",
    question: "Включите автозагрузку службы httpd при старте системы с помощью systemctl.",
    correctCommand: ["systemctl", "enable", "httpd"],
    options: ["systemctl", "enable", "httpd", "start", "on", "chkconfig"],
    explanation: "systemctl enable создает символические ссылки, чтобы служба запускалась автоматически при загрузке.",
    manHint: "systemctl(1) - Control the systemd system and service manager."
  },
  {
    id: 13,
    book: "rh124",
    question: "Сгенерируйте новую пару SSH-ключей типа RSA.",
    correctCommand: ["ssh-keygen", "-t", "rsa"],
    options: ["ssh-keygen", "-t", "rsa", "ssh-copy-id", "-p", "key"],
    explanation: "ssh-keygen используется для создания новой пары ключей для SSH-аутентификации.",
    manHint: "ssh-keygen(1) - authentication key generation, management and conversion."
  },
  {
    id: 14,
    book: "rh124",
    question: "Добавьте пользователя 'john' в дополнительную группу 'wheel' (сохранив его текущие группы).",
    correctCommand: ["usermod", "-aG", "wheel", "john"],
    options: ["usermod", "-aG", "wheel", "john", "useradd", "-g", "groupadd"],
    explanation: "usermod -aG добавляет пользователя (-a, append) в дополнительную группу (-G, group), не удаляя из старых.",
    manHint: "usermod(8) - modify a user account."
  },
  {
    id: 15,
    book: "rh124",
    question: "Установите ACL-правило для файла /var/www/html/index.html: дайте пользователю 'bob' права на чтение и запись (rw).",
    correctCommand: ["setfacl", "-m", "u:bob:rw", "/var/www/html/index.html"],
    options: ["setfacl", "-m", "u:bob:rw", "/var/www/html/index.html", "getfacl", "chmod", "chown"],
    explanation: "setfacl -m используется для модификации списка контроля доступа (ACL). 'u:bob:rw' означает user:bob:read-write.",
    manHint: "setfacl(1) - set file access control lists."
  },

  // ===================== RH134 (16-30, original) =====================
  {
    id: 16,
    book: "rh134",
    question: "Используя grep с расширенными регулярными выражениями (Extended Regex), найдите строки, содержащие 'error' или 'fail', в файле /var/log/syslog и посчитайте их количество с помощью wc.",
    correctCommand: ["grep", "-E", "'error|fail'", "/var/log/syslog", "|", "wc", "-l"],
    options: ["grep", "-E", "'error|fail'", "/var/log/syslog", "|", "wc", "-l", "count", ">", "awk"],
    explanation: "grep -E включает расширенные регулярные выражения. Пайп (|) передает вывод в wc -l, которая считает количество строк.",
    manHint: "grep(1) - print lines that match patterns. -E, --extended-regexp."
  },
  {
    id: 17,
    book: "rh134",
    question: "Отредактируйте расписание cron для текущего пользователя.",
    correctCommand: ["crontab", "-e"],
    options: ["crontab", "-e", "-l", "cron", "edit", "-u"],
    explanation: "Команда crontab -e открывает редактор для создания или изменения задач планировщика cron пользователя.",
    manHint: "crontab(1) - maintain crontab files for individual users."
  },
  {
    id: 18,
    book: "rh134",
    question: "Запланируйте выполнение команды 'echo hello' на 15:30 сегодня с помощью утилиты at. (Только запуск оболочки at)",
    correctCommand: ["at", "15:30"],
    options: ["at", "15:30", "time", "cron", "now"],
    explanation: "Утилита at используется для одноразового выполнения команд в заданное время.",
    manHint: "at(1) - executes commands at a specified time."
  },
  {
    id: 19,
    book: "rh134",
    question: "Просмотрите логи systemd (journal) с момента последней загрузки системы.",
    correctCommand: ["journalctl", "-b"],
    options: ["journalctl", "-b", "--boot", "-u", "--since", "syslog"],
    explanation: "Флаг -b (или --boot) указывает journalctl выводить сообщения только для текущей загрузки.",
    manHint: "journalctl(1) - Query the systemd journal."
  },
  {
    id: 20,
    book: "rh134",
    question: "Инициализируйте физический том (Physical Volume) для LVM на диске /dev/sdb.",
    correctCommand: ["pvcreate", "/dev/sdb"],
    options: ["pvcreate", "/dev/sdb", "vgcreate", "lvcreate", "fdisk", "mkfs"],
    explanation: "pvcreate подготавливает диски или разделы для использования в качестве физических томов LVM.",
    manHint: "pvcreate(8) - Initialize a disk or partition for use by LVM."
  },
  {
    id: 21,
    book: "rh134",
    question: "Создайте логический том (Logical Volume) с именем 'data' размером 10 Гигабайт в группе томов 'vg0'.",
    correctCommand: ["lvcreate", "-n", "data", "-L", "10G", "vg0"],
    options: ["lvcreate", "-n", "data", "-L", "10G", "vg0", "-l", "vgcreate", "pvcreate"],
    explanation: "lvcreate создает новый логический том. -n задает имя, -L - размер, а последний аргумент - имя группы томов.",
    manHint: "lvcreate(8) - Create a logical volume."
  },
  {
    id: 22,
    book: "rh134",
    question: "Отформатируйте устройство /dev/vg0/data в файловую систему XFS.",
    correctCommand: ["mkfs.xfs", "/dev/vg0/data"],
    options: ["mkfs.xfs", "/dev/vg0/data", "mkfs.ext4", "format", "xfs_info"],
    explanation: "Утилита mkfs.xfs (или mkfs -t xfs) создает файловую систему XFS на указанном блочном устройстве.",
    manHint: "mkfs.xfs(8) - construct an XFS filesystem."
  },
  {
    id: 23,
    book: "rh134",
    question: "Выведите содержимое файла, который отвечает за монтирование файловых систем при загрузке.",
    correctCommand: ["cat", "/etc/fstab"],
    options: ["cat", "/etc/fstab", "/etc/mtab", "mount", "/boot/grub"],
    explanation: "/etc/fstab содержит конфигурацию статического монтирования файловых систем.",
    manHint: "fstab(5) - static information about the filesystems."
  },
  {
    id: 24,
    book: "rh134",
    question: "Активируйте раздел подкачки (swap) на устройстве /dev/sdb1.",
    correctCommand: ["swapon", "/dev/sdb1"],
    options: ["swapon", "/dev/sdb1", "mkswap", "swapoff", "enable"],
    explanation: "swapon используется для включения устройства подкачки.",
    manHint: "swapon(8) - enable/disable devices and files for paging and swapping."
  },
  {
    id: 25,
    book: "rh134",
    question: "Измените SELinux контекст файла /var/www/html/file.html по умолчанию с помощью semanage (добавьте правило fcontext для типа httpd_sys_content_t).",
    correctCommand: ["semanage", "fcontext", "-a", "-t", "httpd_sys_content_t", "/var/www/html/file.html"],
    options: ["semanage", "fcontext", "-a", "-t", "httpd_sys_content_t", "/var/www/html/file.html", "chcon", "restorecon"],
    explanation: "semanage fcontext добавляет правило контекста SELinux в базу данных политик, что делает изменение постоянным.",
    manHint: "semanage-fcontext(8) - SELinux Policy Management file context tool."
  },
  {
    id: 26,
    book: "rh134",
    question: "Примените (восстановите) SELinux контексты по умолчанию для директории /var/www/html/ рекурсивно.",
    correctCommand: ["restorecon", "-Rv", "/var/www/html/"],
    options: ["restorecon", "-Rv", "/var/www/html/", "semanage", "chcon", "-a"],
    explanation: "restorecon восстанавливает контексты SELinux на основе политики. -R означает рекурсивно, -v - выводить изменения.",
    manHint: "restorecon(8) - restore file(s) default SELinux security contexts."
  },
  {
    id: 27,
    book: "rh134",
    question: "Добавьте порт 80/tcp в зону public брандмауэра firewalld перманентно.",
    correctCommand: ["firewall-cmd", "--permanent", "--zone=public", "--add-port=80/tcp"],
    options: ["firewall-cmd", "--permanent", "--zone=public", "--add-port=80/tcp", "iptables", "--reload"],
    explanation: "firewall-cmd --permanent сохраняет правило конфигурации брандмауэра после перезагрузки.",
    manHint: "firewall-cmd(1) - firewalld command line client."
  },
  {
    id: 28,
    book: "rh134",
    question: "Синхронизируйте директорию /data/ локально в /backup/ с сохранением атрибутов (архивный режим) и выводом подробностей (verbose).",
    correctCommand: ["rsync", "-av", "/data/", "/backup/"],
    options: ["rsync", "-av", "/data/", "/backup/", "cp", "scp", "-z"],
    explanation: "rsync -a (archive) сохраняет разрешения, владельцев, времена и копирует рекурсивно. -v (verbose) добавляет подробный вывод.",
    manHint: "rsync(1) - a fast, versatile, remote (and local) file-copying tool."
  },
  {
    id: 29,
    book: "rh134",
    question: "Найдите образы контейнеров в настроенных реестрах с помощью podman, по ключевому слову 'httpd'.",
    correctCommand: ["podman", "search", "httpd"],
    options: ["podman", "search", "httpd", "docker", "find", "pull"],
    explanation: "podman search позволяет искать образы контейнеров на удаленных регистрах.",
    manHint: "podman-search(1) - Search registry for image."
  },
  {
    id: 30,
    book: "rh134",
    question: "С помощью команды ip покажите информацию об IP-адресах только для интерфейса eth0.",
    correctCommand: ["ip", "addr", "show", "eth0"],
    options: ["ip", "addr", "show", "eth0", "ifconfig", "route", "link"],
    explanation: "ip addr show [dev] выводит детальную информацию об адресах на указанном сетевом интерфейсе.",
    manHint: "ip-address(8) - protocol address management."
  },

  // ===================== RH134 (31-44, advanced) =====================
  {
    id: 31,
    book: "rh134",
    question: "На логическом томе /dev/vg_data/lv_web (файловая система XFS) заканчивается место. Увеличьте его на 5G, используя свободное пространство группы томов vg_data, и сразу же увеличьте файловую систему без размонтирования.",
    correctCommand: ["lvextend", "-L", "+5G", "--resizefs", "/dev/vg_data/lv_web"],
    options: ["lvextend", "-L", "+5G", "--resizefs", "/dev/vg_data/lv_web", "-r", "lvresize", "resize2fs", "xfs_growfs", "-l", "+100%FREE", "vgextend"],
    explanation: "Флаг --resizefs заставляет lvextend автоматически вызвать соответствующую утилиту (xfs_growfs для XFS) для расширения файловой системы сразу после увеличения тома.",
    manHint: "lvextend(8) - extend the size of a logical volume. --resizefs Resize the underlying filesystem together with the logical volume."
  },
  {
    id: 32,
    book: "rh134",
    question: "Создайте раздел подкачки (swap) на устройстве /dev/sdb1 и немедленно активируйте его.",
    correctCommand: ["mkswap", "/dev/sdb1", "&&", "swapon", "/dev/sdb1"],
    options: ["mkswap", "/dev/sdb1", "&&", "swapon", "/dev/sdb1", "mkfs.swap", "-a", "swapoff", "fdisk", "blkid", "mount"],
    explanation: "mkswap форматирует раздел под область подкачки, после чего swapon включает его использование системой в текущей сессии.",
    manHint: "mkswap(8) - set up a Linux swap area. swapon(8) - enable devices and files for paging and swapping."
  },
  {
    id: 33,
    book: "rh134",
    question: "Откройте порт 8080/tcp постоянно (persistent) в зоне public системного firewalld и примените изменения без перезагрузки сервера.",
    correctCommand: ["firewall-cmd", "--permanent", "--zone=public", "--add-port=8080/tcp", "&&", "firewall-cmd", "--reload"],
    options: ["firewall-cmd", "--permanent", "--zone=public", "--add-port=8080/tcp", "&&", "firewall-cmd", "--reload", "--add-service=http", "--runtime-to-permanent", "--list-ports", "--zone=trusted", "iptables"],
    explanation: "Флаг --permanent записывает правило в постоянную конфигурацию, но не применяет его к работающему демону; --reload перечитывает конфигурацию и активирует правило немедленно.",
    manHint: "firewall-cmd(1) - --permanent make changes permanent, --add-port add a port to a zone, --reload reload firewall rules."
  },
  {
    id: 34,
    book: "rh134",
    question: "Веб-сервер httpd должен слушать нестандартный порт 8081/tcp. Разрешите это в политике SELinux, добавив порт к типу http_port_t.",
    correctCommand: ["semanage", "port", "-a", "-t", "http_port_t", "-p", "tcp", "8081"],
    options: ["semanage", "port", "-a", "-t", "http_port_t", "-p", "tcp", "8081", "-m", "-d", "setsebool", "restorecon", "chcon", "-l"],
    explanation: "semanage port -a добавляет новую запись порта в политику SELinux; ключ -t задает тип, а -p — протокол.",
    manHint: "semanage-port(8) - manage SELinux port type definitions. -a add a record, -t type, -p protocol."
  },
  {
    id: 35,
    book: "rh134",
    question: "Вручную смонтируйте экспортированный ресурс NFS server1:/export/data в директорию /mnt/data (без изменения /etc/fstab).",
    correctCommand: ["mount", "-t", "nfs", "server1:/export/data", "/mnt/data"],
    options: ["mount", "-t", "nfs", "server1:/export/data", "/mnt/data", "-t", "nfs4", "showmount", "-e", "autofs", "exportfs", "-a"],
    explanation: "Команда mount -t nfs монтирует удаленную экспортированную файловую систему по указанному пути в локальное дерево каталогов.",
    manHint: "mount(8) - mount a filesystem. -t nfs specifies the NFS filesystem type."
  },
  {
    id: 36,
    book: "rh134",
    question: "Активируйте профиль tuned throughput-performance для повышения общей производительности сервера.",
    correctCommand: ["tuned-adm", "profile", "throughput-performance"],
    options: ["tuned-adm", "profile", "throughput-performance", "list", "active", "recommend", "powersave", "balanced", "off"],
    explanation: "tuned-adm profile <name> переключает систему на указанный профиль настройки производительности, применяя соответствующие параметры ядра и служб.",
    manHint: "tuned-adm(8) - profile switch to the given profile. list shows available profiles."
  },
  {
    id: 37,
    book: "rh134",
    question: "Скопируйте директорию /data на удаленный сервер backup.example.com в каталог /backup/ по SSH, сохраняя права доступа и владельца, с выводом прогресса.",
    correctCommand: ["rsync", "-avz", "--progress", "/data/", "backup.example.com:/backup/"],
    options: ["rsync", "-avz", "--progress", "/data/", "backup.example.com:/backup/", "-e", "ssh", "scp", "-r", "--delete", "-avzP"],
    explanation: "rsync с флагами -a (archive, сохраняет права/владельца/время) и -z (сжатие) эффективно копирует данные по SSH, а --progress показывает ход передачи.",
    manHint: "rsync(1) - a fast, versatile file copying tool. -a archive mode, -z compress, --progress show progress during transfer."
  },
  {
    id: 38,
    book: "rh134",
    question: "Создайте сжатый архив /backup/home.tar.gz из директории /home, исключив из архива поддиректорию /home/guest.",
    correctCommand: ["tar", "-czvf", "/backup/home.tar.gz", "--exclude=/home/guest", "/home"],
    options: ["tar", "-czvf", "/backup/home.tar.gz", "--exclude=/home/guest", "/home", "-xzvf", "--exclude-from", "gzip", "zip", "-cjvf"],
    explanation: "Флаги -czvf создают gzip-сжатый архив с выводом файлов, а --exclude исключает указанный путь из архивирования.",
    manHint: "tar(1) - -c create, -z gzip, -v verbose, -f file. --exclude=PATTERN exclude files matching pattern."
  },
  {
    id: 39,
    book: "rh134",
    question: "Запланируйте однократное выполнение скрипта /opt/cleanup.sh через 5 минут от текущего момента, используя at.",
    correctCommand: ["echo", "/opt/cleanup.sh", "|", "at", "now", "+", "5", "minutes"],
    options: ["echo", "/opt/cleanup.sh", "|", "at", "now", "+", "5", "minutes", "atq", "atrm", "batch", "cron", "systemd-run", "--unit"],
    explanation: "at читает команду со стандартного ввода; передав скрипт через echo и pipe, задача будет выполнена ровно один раз в указанное время.",
    manHint: "at(1) - queue jobs for later execution. Time can be specified as 'now + N minutes/hours/days'."
  },
  {
    id: 40,
    book: "rh134",
    question: "Система загружена в аварийном режиме (после rd.break), и /sysroot примонтирован только для чтения. Перемонтируйте /sysroot в режим чтения-записи, чтобы можно было сбросить пароль root.",
    correctCommand: ["mount", "-o", "remount,rw", "/sysroot"],
    options: ["mount", "-o", "remount,rw", "/sysroot", "-o", "ro", "chroot", "/sysroot/sysroot", "passwd", "touch", "/.autorelabel"],
    explanation: "mount -o remount,rw изменяет опции уже смонтированной файловой системы, переключая ее из read-only в read-write без размонтирования.",
    manHint: "mount(8) - -o remount,rw remounts an already-mounted filesystem with new options, here switching to read-write."
  },
  {
    id: 41,
    book: "rh134",
    question: "Запустите контейнер nginx из образа docker.io/library/nginx в фоновом режиме под именем web, пробросив порт хоста 8080 на порт контейнера 80.",
    correctCommand: ["podman", "run", "-d", "--name", "web", "-p", "8080:80", "docker.io/library/nginx"],
    options: ["podman", "run", "-d", "--name", "web", "-p", "8080:80", "docker.io/library/nginx", "-it", "--rm", "--expose", "docker", "exec", "create"],
    explanation: "podman run -d запускает контейнер в фоне (detached), --name задает имя, а -p host:container пробрасывает порты.",
    manHint: "podman-run(1) - -d run in detached mode, -p publish a container's port to the host, --name assign a name."
  },
  {
    id: 42,
    book: "rh134",
    question: "Вы создали Quadlet-файл ~/.config/containers/systemd/web.container для управления контейнером nginx через systemd (пользовательская сессия). Примените изменения, чтобы systemd подхватил определение и сгенерировал юнит web.service.",
    correctCommand: ["systemctl", "--user", "daemon-reload"],
    options: ["systemctl", "--user", "daemon-reload", "podman", "generate", "systemd", "--new", "enable", "--now", "restart", "reload", "quadlet"],
    explanation: "Начиная с Podman 4.4, рекомендуемый способ запуска контейнеров под управлением systemd — декларативные Quadlet-файлы (.container); команда podman generate systemd объявлена устаревшей (deprecated). После создания или изменения Quadlet-файла достаточно выполнить systemctl daemon-reload — генератор podman-system-generator автоматически создаст соответствующий unit systemd.",
    manHint: "podman-systemd.unit(5) - Quadlet files generate systemd units automatically on 'systemctl daemon-reload'. podman-generate-systemd(1) - DEPRECATED: use Quadlet instead."
  },
  {
    id: 43,
    book: "rh134",
    question: "Покажите записи журнала systemd для юнита sshd.service, начиная со вчерашнего дня.",
    correctCommand: ["journalctl", "-u", "sshd.service", "--since", "yesterday"],
    options: ["journalctl", "-u", "sshd.service", "--since", "yesterday", "-f", "--until", "today", "-xe", "--boot", "tail", "/var/log/messages"],
    explanation: "Флаг -u фильтрует журнал по конкретному юниту, а --since задает нижнюю временную границу выборки записей.",
    manHint: "journalctl(1) - -u UNIT show logs for the specified unit. --since START show entries newer than the specified time."
  },
  {
    id: 44,
    book: "rh134",
    question: "Ваша система развернута через image-based RHEL (bootc). Переключите систему на новый контейнерный образ registry.example.com/rhel-bootc:9.4, подготовив ее к применению после перезагрузки.",
    correctCommand: ["bootc", "switch", "registry.example.com/rhel-bootc:9.4"],
    options: ["bootc", "switch", "registry.example.com/rhel-bootc:9.4", "upgrade", "status", "rollback", "--apply", "podman", "pull", "install"],
    explanation: "bootc switch указывает системе загрузить и развернуть новый образ в качестве следующего загрузочного дерева; изменения вступят в силу после перезагрузки.",
    manHint: "bootc(1) - switch Target a new container image reference to boot."
  },

  // ===================== RH124 (45-49, advanced) =====================
  {
    id: 45,
    book: "rh124",
    question: "Проверьте целостность файлов, установленных пакетом httpd, на предмет изменений относительно оригинала из RPM.",
    correctCommand: ["rpm", "-V", "httpd"],
    options: ["rpm", "-V", "httpd", "-q", "-a", "-qa", "-e", "--verify", "--checksig", "--nodeps", "verify", "dnf"],
    explanation: "rpm -V сравнивает установленные файлы пакета (размер, права, контрольную сумму и т.д.) с данными, зафиксированными в базе RPM.",
    manHint: "rpm(8) - -V, --verify verify installed package(s) by comparing information from installed files with data from packages."
  },
  {
    id: 46,
    book: "rh124",
    question: "Обновите все установленные Flatpak-приложения на актуальную версию без запроса подтверждения.",
    correctCommand: ["flatpak", "update", "-y"],
    options: ["flatpak", "update", "-y", "--assumeyes", "install", "list", "--appstream", "upgrade", "dnf", "remove"],
    explanation: "flatpak update обновляет установленные приложения и рантаймы; флаг -y автоматически подтверждает все запросы.",
    manHint: "flatpak-update(1) - update apps and runtimes. -y, --assumeyes automatically answer yes to questions."
  },
  {
    id: 47,
    book: "rh124",
    question: "Создайте новое соединение NetworkManager с именем static-eth0 для интерфейса eth0 со статическим адресом 192.168.1.50/24 и шлюзом 192.168.1.1.",
    correctCommand: ["nmcli", "connection", "add", "type", "ethernet", "con-name", "static-eth0", "ifname", "eth0", "ip4", "192.168.1.50/24", "gw4", "192.168.1.1"],
    options: ["nmcli", "connection", "add", "type", "ethernet", "con-name", "static-eth0", "ifname", "eth0", "ip4", "192.168.1.50/24", "gw4", "192.168.1.1", "modify", "--temporary", "dhcp", "dns"],
    explanation: "nmcli connection add создает новый профиль соединения; ip4 и gw4 задают статический адрес и шлюз для нового профиля типа ethernet.",
    manHint: "nmcli(1) - connection add type ethernet con-name NAME ifname IFACE ip4 ADDR/PREFIX gw4 GATEWAY creates a static ethernet connection."
  },
  {
    id: 48,
    book: "rh124",
    question: "Скопируйте ваш публичный SSH-ключ на удаленный сервер remote.example.com для пользователя admin, чтобы настроить вход без пароля.",
    correctCommand: ["ssh-copy-id", "admin@remote.example.com"],
    options: ["ssh-copy-id", "admin@remote.example.com", "ssh-keygen", "-t", "rsa", "scp", "~/.ssh/id_rsa.pub", "ssh", "-i", "authorized_keys"],
    explanation: "ssh-copy-id автоматически добавляет ваш публичный ключ в файл ~/.ssh/authorized_keys указанного пользователя на удаленном сервере.",
    manHint: "ssh-copy-id(1) - use locally available keys to authorize logins on a remote machine."
  },
  {
    id: 49,
    book: "rh124",
    question: "Включите сервис httpd для автозапуска при загрузке системы и немедленно запустите его одной командой.",
    correctCommand: ["systemctl", "enable", "--now", "httpd"],
    options: ["systemctl", "enable", "--now", "httpd", "start", "disable", "status", "mask", "restart", "reload"],
    explanation: "Флаг --now у systemctl enable одновременно создает символическую ссылку автозапуска и сразу запускает сервис, избавляя от отдельного вызова systemctl start.",
    manHint: "systemctl(1) - enable --now the unit(s) will also be started."
  },

  // ===================== RH134 (50, regex) =====================
  {
    id: 50,
    book: "rh134",
    question: "С помощью регулярного выражения найдите в файле /etc/passwd все строки, где пользователь использует shell /bin/bash или /bin/sh, и посчитайте их количество.",
    correctCommand: ["grep", "-E", "'/bin/(bash|sh)$'", "/etc/passwd", "|", "wc", "-l"],
    options: ["grep", "-E", "'/bin/(bash|sh)$'", "/etc/passwd", "|", "wc", "-l", "-c", "-v", "awk", "sed", "grep", "-P"],
    explanation: "Флаг -E включает расширенные регулярные выражения, позволяя использовать группировку (|) без экранирования; результат передается по конвейеру в wc -l для подсчета строк.",
    manHint: "grep(1) - -E, --extended-regexp interpret PATTERN as an extended regular expression. wc(1) - -l print the newline counts."
  },

  // ===================== RH124 (51-100) =====================
  {
    id: 51,
    book: "rh124",
    question: "Покажите текущее значение umask (маски прав по умолчанию) для новых файлов в текущей оболочке.",
    correctCommand: ["umask"],
    options: ["umask", "-S", "chmod", "stat", "ls", "-l", "id", "whoami"],
    explanation: "Команда umask без аргументов выводит текущую маску, которая вычитается из прав по умолчанию при создании новых файлов и директорий.",
    manHint: "bash(1) - umask [-p] [-S] [mode] the user file-creation mask is set to mode."
  },
  {
    id: 52,
    book: "rh124",
    question: "Измените владельца файла /var/www/html/index.html на пользователя www с одновременным изменением группы на www.",
    correctCommand: ["chown", "www:www", "/var/www/html/index.html"],
    options: ["chown", "www:www", "/var/www/html/index.html", "chgrp", "chmod", "-R", "www.www", "setfacl", "usermod"],
    explanation: "chown user:group file меняет и владельца, и группу файла одной командой, разделяя их двоеточием.",
    manHint: "chown(1) - change file owner and group. [OWNER][:[GROUP]] FILE."
  },
  {
    id: 53,
    book: "rh124",
    question: "Рекурсивно установите права доступа 750 для директории /srv/data и всего ее содержимого.",
    correctCommand: ["chmod", "-R", "750", "/srv/data"],
    options: ["chmod", "-R", "750", "/srv/data", "-r", "755", "chown", "setfacl", "-m"],
    explanation: "Флаг -R применяет изменение прав рекурсивно ко всем файлам и поддиректориям внутри указанного пути.",
    manHint: "chmod(1) - -R, --recursive change files and directories recursively."
  },
  {
    id: 54,
    book: "rh124",
    question: "Установите специальный бит SGID на директорию /srv/shared, чтобы новые файлы в ней наследовали группу-владельца директории.",
    correctCommand: ["chmod", "g+s", "/srv/shared"],
    options: ["chmod", "g+s", "/srv/shared", "u+s", "o+t", "chmod", "2775", "chown", "-R"],
    explanation: "Бит SGID (g+s) на директории заставляет все новые файлы и поддиректории наследовать группу родительской директории, а не первичную группу создателя.",
    manHint: "chmod(1) - g+s sets the set-group-ID bit; on a directory it affects group ownership inheritance for new files."
  },
  {
    id: 55,
    book: "rh124",
    question: "Создайте нового пользователя alice с домашней директорией /home/alice и оболочкой входа /bin/bash.",
    correctCommand: ["useradd", "-m", "-d", "/home/alice", "-s", "/bin/bash", "alice"],
    options: ["useradd", "-m", "-d", "/home/alice", "-s", "/bin/bash", "alice", "-g", "-G", "adduser", "usermod", "-c"],
    explanation: "useradd -m создает домашнюю директорию, -d задает ее путь, а -s указывает командную оболочку по умолчанию для пользователя.",
    manHint: "useradd(8) - -m create the home directory, -d home directory, -s login shell."
  },
  {
    id: 56,
    book: "rh124",
    question: "Установите пароль пользователю alice в неинтерактивном режиме (без запроса ввода пароля дважды).",
    correctCommand: ["echo", "'alice:Secr3tP@ss'", "|", "chpasswd"],
    options: ["echo", "'alice:Secr3tP@ss'", "|", "chpasswd", "passwd", "alice", "usermod", "-p", "chage", "-l"],
    explanation: "chpasswd читает пары user:password со стандартного ввода и обновляет пароли пакетно, без интерактивного запроса.",
    manHint: "chpasswd(8) - update passwords in batch mode, reading name:password pairs from standard input."
  },
  {
    id: 57,
    book: "rh124",
    question: "Заблокируйте учетную запись пользователя alice, запретив ей вход в систему по паролю.",
    correctCommand: ["passwd", "-l", "alice"],
    options: ["passwd", "-l", "alice", "-u", "usermod", "-L", "userdel", "chage", "-E", "0"],
    explanation: "passwd -l блокирует пароль пользователя, добавляя восклицательный знак перед хешем пароля в /etc/shadow.",
    manHint: "passwd(1) - -l, --lock lock the password of the named account."
  },
  {
    id: 58,
    book: "rh124",
    question: "Установите дату истечения срока действия учетной записи пользователя alice — 2026-12-31.",
    correctCommand: ["chage", "-E", "2026-12-31", "alice"],
    options: ["chage", "-E", "2026-12-31", "alice", "-M", "-d", "usermod", "-e", "passwd", "-x"],
    explanation: "chage -E задает дату, после которой учетная запись будет заблокирована независимо от политики паролей.",
    manHint: "chage(1) - -E, --expiredate EXPIRE_DATE set account expiration date."
  },
  {
    id: 59,
    book: "rh124",
    question: "Удалите пользователя bob вместе с его домашней директорией и почтовым spool-файлом.",
    correctCommand: ["userdel", "-r", "bob"],
    options: ["userdel", "-r", "bob", "-f", "rm", "-rf", "/home/bob", "groupdel", "deluser", "usermod", "-L"],
    explanation: "userdel -r удаляет учетную запись пользователя вместе с его домашней директорией и файлом почтового спула.",
    manHint: "userdel(8) - -r, --remove files in the user's home directory will be removed along with the home directory itself."
  },
  {
    id: 60,
    book: "rh124",
    question: "Покажите полный список всех процессов, принадлежащих пользователю root, в расширенном формате.",
    correctCommand: ["ps", "-U", "root", "-f"],
    options: ["ps", "-U", "root", "-f", "-u", "-e", "top", "-u", "root", "pgrep", "-u", "root"],
    explanation: "ps -U root выбирает процессы по реальному владельцу root, а -f выводит полный (full) формат с командной строкой и родительским PID.",
    manHint: "ps(1) - -U userlist select by real user ID (RUID) or name. -f do full-format listing."
  },
  {
    id: 61,
    book: "rh124",
    question: "Запустите команду sleep 100 с пониженным приоритетом планировщика (значение nice равно 10).",
    correctCommand: ["nice", "-n", "10", "sleep", "100"],
    options: ["nice", "-n", "10", "sleep", "100", "renice", "-n", "10", "-p", "ionice", "-c", "nohup"],
    explanation: "Команда nice запускает новую программу с заданным значением приоритета; чем выше значение nice, тем ниже приоритет процесса.",
    manHint: "nice(1) - run a program with modified scheduling priority. -n adjustment add the adjustment to the niceness."
  },
  {
    id: 62,
    book: "rh124",
    question: "Измените приоритет уже запущенного процесса с PID 4521 на -5 (более высокий приоритет).",
    correctCommand: ["renice", "-n", "-5", "-p", "4521"],
    options: ["renice", "-n", "-5", "-p", "4521", "nice", "-n", "kill", "-5", "ionice", "-p", "top"],
    explanation: "renice изменяет приоритет уже запущенного процесса без его перезапуска; отрицательные значения повышают приоритет и требуют прав root.",
    manHint: "renice(1) - alter priority of running processes. -n specifies the adjustment, -p targets a process ID."
  },
  {
    id: 63,
    book: "rh124",
    question: "Найдите все файлы размером более 100 мегабайт в директории /var.",
    correctCommand: ["find", "/var", "-size", "+100M"],
    options: ["find", "/var", "-size", "+100M", "-100M", "du", "-sh", "-type", "f", "ls", "-lS"],
    explanation: "Опция -size +N задает поиск файлов размером больше указанного значения; суффикс M означает мегабайты.",
    manHint: "find(1) - -size n[cwbkMG] file uses n units of space, rounding up. + means greater than."
  },
  {
    id: 64,
    book: "rh124",
    question: "Найдите все файлы с расширением .tmp в директории /tmp старше 7 дней и удалите их.",
    correctCommand: ["find", "/tmp", "-name", "'*.tmp'", "-mtime", "+7", "-delete"],
    options: ["find", "/tmp", "-name", "'*.tmp'", "-mtime", "+7", "-delete", "-exec", "rm", "{}", "\\;", "-atime", "rm", "-rf"],
    explanation: "-mtime +7 отбирает файлы, измененные более 7 дней назад, а -delete удаляет найденные результаты прямо в рамках команды find.",
    manHint: "find(1) - -mtime n file's data was last modified n*24 hours ago. -delete delete files."
  },
  {
    id: 65,
    book: "rh124",
    question: "Посчитайте количество непустых строк в файле access.log.",
    correctCommand: ["grep", "-c", "'.'", "access.log"],
    options: ["grep", "-c", "'.'", "access.log", "-v", "^$", "wc", "-l", "cat", "sed", "-n"],
    explanation: "grep -c '.' считает строки, содержащие хотя бы один символ (то есть непустые), возвращая только их количество благодаря флагу -c.",
    manHint: "grep(1) - -c, --count print only a count of matching lines per FILE."
  },
  {
    id: 66,
    book: "rh124",
    question: "Выведите последние 20 строк файла /var/log/messages и продолжайте отслеживать появление новых строк в реальном времени.",
    correctCommand: ["tail", "-n", "20", "-f", "/var/log/messages"],
    options: ["tail", "-n", "20", "-f", "/var/log/messages", "-c", "head", "-f", "less", "+F", "cat"],
    explanation: "Флаг -n задает количество выводимых строк с конца файла, а -f (follow) переводит tail в режим непрерывного слежения за новыми записями.",
    manHint: "tail(1) - -n N output the last N lines. -f, --follow output appended data as the file grows."
  },
  {
    id: 67,
    book: "rh124",
    question: "С помощью sed замените все вхождения слова 'old' на 'new' в файле config.txt, изменив файл на месте.",
    correctCommand: ["sed", "-i", "'s/old/new/g'", "config.txt"],
    options: ["sed", "-i", "'s/old/new/g'", "config.txt", "-e", "-n", "awk", "'{gsub}'", "grep", "-r", "tr"],
    explanation: "Флаг -i редактирует файл на месте, а конструкция s/old/new/g заменяет все (g, global) вхождения 'old' на 'new' в каждой строке.",
    manHint: "sed(1) - -i[SUFFIX] edit files in place. s/regexp/replacement/ substitute command, g flag replaces all matches."
  },
  {
    id: 68,
    book: "rh124",
    question: "Выведите третий столбец файла /etc/passwd (UID пользователя), используя двоеточие как разделитель полей.",
    correctCommand: ["awk", "-F:", "'{print $3}'", "/etc/passwd"],
    options: ["awk", "-F:", "'{print $3}'", "/etc/passwd", "-f", "cut", "-d:", "-f3", "sed", "-n", "grep", "-o"],
    explanation: "awk -F: задает разделитель полей ':' , а $3 обращается к третьему полю каждой строки, которым в /etc/passwd является UID.",
    manHint: "awk(1) - -F fs use fs for the input field separator. $N refers to the Nth field of the record."
  },
  {
    id: 69,
    book: "rh124",
    question: "Отсортируйте содержимое файла names.txt по алфавиту и уберите повторяющиеся строки.",
    correctCommand: ["sort", "names.txt", "|", "uniq"],
    options: ["sort", "names.txt", "|", "uniq", "-u", "sort", "-u", "uniq", "-c", "awk", "'!seen'"],
    explanation: "sort упорядочивает строки файла, после чего uniq удаляет соседние повторяющиеся строки, оставляя только уникальные значения.",
    manHint: "sort(1) - sort lines of text files. uniq(1) - report or omit repeated lines (input must be sorted)."
  },
  {
    id: 70,
    book: "rh124",
    question: "Смонтируйте USB-накопитель /dev/sdb1 в директорию /mnt/usb.",
    correctCommand: ["mount", "/dev/sdb1", "/mnt/usb"],
    options: ["mount", "/dev/sdb1", "/mnt/usb", "-t", "vfat", "umount", "blkid", "fdisk", "-l", "lsblk"],
    explanation: "Команда mount с указанием устройства и точки монтирования подключает файловую систему устройства к дереву каталогов.",
    manHint: "mount(8) - mount a filesystem. mount device dir attaches the filesystem found on device to the directory dir."
  },
  {
    id: 71,
    book: "rh124",
    question: "Безопасно отмонтируйте (извлеките) устройство, смонтированное в /mnt/usb.",
    correctCommand: ["umount", "/mnt/usb"],
    options: ["umount", "/mnt/usb", "unmount", "eject", "mount", "-u", "fusermount", "-u", "rmdir"],
    explanation: "umount отсоединяет файловую систему от указанной точки монтирования, после чего устройство можно безопасно извлечь.",
    manHint: "umount(8) - unmount file systems."
  },
  {
    id: 72,
    book: "rh124",
    question: "Определите UUID файловой системы на устройстве /dev/sda1.",
    correctCommand: ["blkid", "/dev/sda1"],
    options: ["blkid", "/dev/sda1", "lsblk", "-f", "fdisk", "-l", "tune2fs", "-l", "df", "-h", "mount", "-l"],
    explanation: "blkid выводит атрибуты блочного устройства, включая UUID, тип файловой системы и метку.",
    manHint: "blkid(8) - locate/print block device attributes such as UUID and TYPE."
  },
  {
    id: 73,
    book: "rh124",
    question: "Проверьте файловую систему ext4 на устройстве /dev/sdb1 на наличие ошибок (устройство должно быть предварительно отмонтировано).",
    correctCommand: ["fsck", "-t", "ext4", "/dev/sdb1"],
    options: ["fsck", "-t", "ext4", "/dev/sdb1", "-y", "-f", "e2fsck", "xfs_repair", "badblocks", "mkfs.ext4"],
    explanation: "fsck -t ext4 запускает проверку целостности файловой системы указанного типа на устройстве и, при необходимости, исправляет ошибки.",
    manHint: "fsck(8) - check and repair a Linux filesystem. -t fstype specify the filesystem type."
  },
  {
    id: 74,
    book: "rh124",
    question: "Установите пакет httpd с помощью dnf без интерактивного запроса подтверждения.",
    correctCommand: ["dnf", "install", "-y", "httpd"],
    options: ["dnf", "install", "-y", "httpd", "-q", "reinstall", "update", "yum", "install", "rpm", "-i"],
    explanation: "dnf install устанавливает указанный пакет и все его зависимости; флаг -y автоматически подтверждает выполнение транзакции.",
    manHint: "dnf(8) - install install a package or packages on your system. -y, --assumeyes automatically answer yes."
  },
  {
    id: 75,
    book: "rh124",
    question: "Удалите пакет httpd из системы с помощью dnf без запроса подтверждения.",
    correctCommand: ["dnf", "remove", "-y", "httpd"],
    options: ["dnf", "remove", "-y", "httpd", "erase", "autoremove", "rpm", "-e", "uninstall", "delete"],
    explanation: "dnf remove удаляет указанный пакет из системы; флаг -y пропускает интерактивный запрос подтверждения.",
    manHint: "dnf(8) - remove remove the specified packages from the system."
  },
  {
    id: 76,
    book: "rh124",
    question: "Покажите список всех включенных репозиториев DNF на системе.",
    correctCommand: ["dnf", "repolist"],
    options: ["dnf", "repolist", "-v", "list", "repos", "dnf", "repository-packages", "yum-config-manager", "--list"],
    explanation: "dnf repolist выводит перечень включенных (по умолчанию) репозиториев с их идентификаторами и описаниями.",
    manHint: "dnf(8) - repolist display the list of configured repositories."
  },
  {
    id: 77,
    book: "rh124",
    question: "Установите группу пакетов 'Development Tools' с помощью dnf.",
    correctCommand: ["dnf", "group", "install", "-y", "'Development Tools'"],
    options: ["dnf", "group", "install", "-y", "'Development Tools'", "groupinstall", "group", "list", "module", "install", "history"],
    explanation: "В DNF5 (пакетный менеджер по умолчанию в RHEL 10) команда group install устанавливает все пакеты указанной группы; устаревший однословный алиас groupinstall из DNF4 в DNF5 больше не поддерживается.",
    manHint: "dnf5(8) - group install GROUP-SPEC install packages from the specified group. Note: the DNF4-style 'groupinstall' alias is not available in DNF5."
  },
  {
    id: 78,
    book: "rh124",
    question: "Используя AI-ассистента командной строки, работающего на базе RHEL Lightspeed, задайте вопрос: 'How do I check the status of the sshd service?'.",
    correctCommand: ["c", "\"How do I check the status of the sshd service?\""],
    options: ["c", "\"How do I check the status of the sshd service?\"", "clad", "goose", "lightspeed", "ask", "rhc", "systemctl", "status", "sshd"],
    explanation: "Команда c — основной интерфейс command-line assistant, работающего на базе RHEL Lightspeed (пакет command-line-assistant); вопрос передается в кавычках сразу после c. Функция доступна на зарегистрированных системах RHEL 9.6+/10.0+.",
    manHint: "command-line-assistant(1) - use the c command followed by your question in quotation marks to interact with the AI assistant powered by RHEL Lightspeed."
  },
  {
    id: 79,
    book: "rh124",
    question: "Определите, каким пакетом RPM установлен файл /usr/bin/vim.",
    correctCommand: ["rpm", "-qf", "/usr/bin/vim"],
    options: ["rpm", "-qf", "/usr/bin/vim", "-qa", "-ql", "dnf", "provides", "/usr/bin/vim", "which", "whereis"],
    explanation: "rpm -qf (query file) определяет, какому установленному пакету принадлежит указанный файл в системе.",
    manHint: "rpm(8) - -q -f, --file query package owning FILE."
  },
  {
    id: 80,
    book: "rh124",
    question: "Обновите все установленные пакеты системы до последних доступных версий без запроса подтверждения.",
    correctCommand: ["dnf", "update", "-y"],
    options: ["dnf", "update", "-y", "upgrade", "check-update", "dnf", "install", "-y", "*", "yum", "update", "reinstall"],
    explanation: "dnf update (синоним upgrade) обновляет все установленные пакеты до последних версий, доступных в подключенных репозиториях.",
    manHint: "dnf(8) - update, upgrade update the specified packages, or all if none given."
  },
  {
    id: 81,
    book: "rh124",
    question: "Выведите список всех установленных на системе Flatpak-приложений.",
    correctCommand: ["flatpak", "list"],
    options: ["flatpak", "list", "--app", "search", "info", "ps", "dnf", "list", "installed"],
    explanation: "flatpak list выводит все установленные приложения и рантаймы Flatpak с их идентификаторами и версиями.",
    manHint: "flatpak-list(1) - list installed apps and/or runtimes."
  },
  {
    id: 82,
    book: "rh124",
    question: "Добавьте удаленный репозиторий Flatpak Flathub, если он еще не был добавлен ранее.",
    correctCommand: ["flatpak", "remote-add", "--if-not-exists", "flathub", "https://flathub.org/repo/flathub.flatpakrepo"],
    options: ["flatpak", "remote-add", "--if-not-exists", "flathub", "https://flathub.org/repo/flathub.flatpakrepo", "remote-list", "install", "-y", "dnf", "config-manager"],
    explanation: "flatpak remote-add регистрирует новый удаленный источник приложений; --if-not-exists предотвращает ошибку, если репозиторий уже настроен.",
    manHint: "flatpak-remote-add(1) - add a new remote repository. --if-not-exists don't fail if the remote already exists."
  },
  {
    id: 83,
    book: "rh124",
    question: "Удалите Flatpak-приложение org.gimp.GIMP с системы.",
    correctCommand: ["flatpak", "uninstall", "org.gimp.GIMP"],
    options: ["flatpak", "uninstall", "org.gimp.GIMP", "remove", "delete", "dnf", "remove", "gimp", "rpm", "-e"],
    explanation: "flatpak uninstall удаляет указанное приложение или рантайм по его идентификатору (application ID).",
    manHint: "flatpak-uninstall(1) - uninstall an application or runtime."
  },
  {
    id: 84,
    book: "rh124",
    question: "Установите статичное имя хоста системы (hostname) равным server1.example.com.",
    correctCommand: ["hostnamectl", "set-hostname", "server1.example.com"],
    options: ["hostnamectl", "set-hostname", "server1.example.com", "hostname", "-b", "nmcli", "general", "hostname", "vi", "/etc/hostname"],
    explanation: "hostnamectl set-hostname меняет статическое имя хоста системы и записывает его в /etc/hostname.",
    manHint: "hostnamectl(1) - set-hostname NAME set the system hostname."
  },
  {
    id: 85,
    book: "rh124",
    question: "Проверьте текущие настройки даты, времени и часового пояса системы.",
    correctCommand: ["timedatectl"],
    options: ["timedatectl", "status", "date", "chronyc", "tracking", "hwclock", "-r", "cal", "uptime"],
    explanation: "timedatectl без аргументов выводит текущую дату, время, часовой пояс и статус синхронизации NTP.",
    manHint: "timedatectl(1) - query and change the system clock and its settings."
  },
  {
    id: 86,
    book: "rh124",
    question: "Измените часовой пояс системы на Asia/Almaty.",
    correctCommand: ["timedatectl", "set-timezone", "Asia/Almaty"],
    options: ["timedatectl", "set-timezone", "Asia/Almaty", "list-timezones", "date", "-s", "tzselect", "ln", "-sf", "/etc/localtime"],
    explanation: "timedatectl set-timezone устанавливает новый часовой пояс системы, обновляя символическую ссылку /etc/localtime.",
    manHint: "timedatectl(1) - set-timezone TIMEZONE set the system time zone."
  },
  {
    id: 87,
    book: "rh124",
    question: "Покажите текущий статус службы sshd (активна ли, включена ли в автозагрузку).",
    correctCommand: ["systemctl", "status", "sshd"],
    options: ["systemctl", "status", "sshd", "is-active", "is-enabled", "show", "list-units", "service", "sshd", "status"],
    explanation: "systemctl status выводит подробную информацию о состоянии юнита: активен/неактивен, включен ли автозапуск и последние строки журнала.",
    manHint: "systemctl(1) - status [PATTERN] show terse runtime status information about units."
  },
  {
    id: 88,
    book: "rh124",
    question: "Остановите службу firewalld и отключите ее автозапуск при загрузке одной командой.",
    correctCommand: ["systemctl", "disable", "--now", "firewalld"],
    options: ["systemctl", "disable", "--now", "firewalld", "stop", "mask", "enable", "--now", "kill", "systemctl", "stop"],
    explanation: "Флаг --now у systemctl disable одновременно останавливает работающую службу и удаляет ссылки автозагрузки.",
    manHint: "systemctl(1) - disable --now the unit(s) will also be stopped."
  },
  {
    id: 89,
    book: "rh124",
    question: "Замаскируйте службу chronyd, чтобы ее нельзя было запустить даже вручную командой systemctl start.",
    correctCommand: ["systemctl", "mask", "chronyd"],
    options: ["systemctl", "mask", "chronyd", "disable", "stop", "unmask", "systemctl", "disable", "kill", "-STOP"],
    explanation: "systemctl mask создает символическую ссылку на /dev/null для юнита, полностью блокируя его запуск любым способом до снятия маски.",
    manHint: "systemctl(1) - mask link unit files to /dev/null to prevent them from being started."
  },
  {
    id: 90,
    book: "rh124",
    question: "Проверьте, включена ли служба postfix в автозагрузку системы.",
    correctCommand: ["systemctl", "is-enabled", "postfix"],
    options: ["systemctl", "is-enabled", "postfix", "is-active", "status", "list-unit-files", "chkconfig", "--list", "enable"],
    explanation: "systemctl is-enabled возвращает enabled/disabled и код завершения, показывая, настроен ли автозапуск указанного юнита.",
    manHint: "systemctl(1) - is-enabled check whether unit files are enabled."
  },
  {
    id: 91,
    book: "rh124",
    question: "Выведите список всех активных (запущенных) юнитов systemd типа service.",
    correctCommand: ["systemctl", "list-units", "--type=service", "--state=running"],
    options: ["systemctl", "list-units", "--type=service", "--state=running", "list-unit-files", "status", "--all", "ps", "-ef", "list-jobs"],
    explanation: "systemctl list-units с фильтрами --type и --state позволяет вывести только запущенные юниты нужного типа.",
    manHint: "systemctl(1) - list-units --type=TYPE, --state=STATE filter the units shown by type or load/active/sub state."
  },
  {
    id: 92,
    book: "rh124",
    question: "Перечитайте конфигурацию systemd после ручного изменения unit-файла службы.",
    correctCommand: ["systemctl", "daemon-reload"],
    options: ["systemctl", "daemon-reload", "reload", "restart", "reset-failed", "daemon-reexec", "reload-or-restart"],
    explanation: "systemctl daemon-reload заставляет systemd перечитать все unit-файлы с диска, применяя изменения без перезапуска самих служб.",
    manHint: "systemctl(1) - daemon-reload reload the systemd manager configuration."
  },
  {
    id: 93,
    book: "rh124",
    question: "Создайте резервную копию файла /etc/ssh/sshd_config перед его редактированием, сохранив исходные права доступа и временные метки.",
    correctCommand: ["cp", "-p", "/etc/ssh/sshd_config", "/etc/ssh/sshd_config.bak"],
    options: ["cp", "-p", "/etc/ssh/sshd_config", "/etc/ssh/sshd_config.bak", "-a", "-r", "mv", "rsync", "-a", "tar", "-cf"],
    explanation: "Флаг -p у cp сохраняет режим доступа, владельца и временные метки исходного файла при копировании.",
    manHint: "cp(1) - -p same as --preserve=mode,ownership,timestamps."
  },
  {
    id: 94,
    book: "rh124",
    question: "Проверьте синтаксис конфигурационного файла sshd перед перезапуском службы SSH.",
    correctCommand: ["sshd", "-t"],
    options: ["sshd", "-t", "-T", "systemctl", "check", "sshd", "sshd", "-d", "ssh", "-V", "sshd", "-v"],
    explanation: "sshd -t проверяет корректность конфигурационного файла и завершает работу, не запуская сам демон, выводя ошибки, если они есть.",
    manHint: "sshd(8) - -t Test mode. Only check the validity of the configuration file and sanity of the keys."
  },
  {
    id: 95,
    book: "rh124",
    question: "Просмотрите список сокетов TCP, которые прослушивает система, вместе с процессами, использующими их.",
    correctCommand: ["ss", "-tlnp"],
    options: ["ss", "-tlnp", "-u", "netstat", "-tlnp", "lsof", "-i", "ss", "-a", "nmap", "localhost"],
    explanation: "ss -tlnp выводит слушающие (l) TCP (t) сокеты в числовом виде (n) вместе с именами процессов (p).",
    manHint: "ss(8) - -t tcp sockets, -l listening sockets, -n numeric, -p show process using socket."
  },
  {
    id: 96,
    book: "rh124",
    question: "Проверьте доступность хоста example.com по сети, отправив ровно 4 ICMP-пакета.",
    correctCommand: ["ping", "-c", "4", "example.com"],
    options: ["ping", "-c", "4", "example.com", "-t", "traceroute", "curl", "-I", "nslookup", "nc", "-zv"],
    explanation: "Флаг -c ограничивает количество отправляемых ICMP-запросов заданным числом, после чего ping автоматически завершает работу.",
    manHint: "ping(8) - -c count stop after sending count ECHO_REQUEST packets."
  },
  {
    id: 97,
    book: "rh124",
    question: "Покажите текущую таблицу маршрутизации системы.",
    correctCommand: ["ip", "route", "show"],
    options: ["ip", "route", "show", "ip", "r", "route", "-n", "netstat", "-rn", "ip", "addr", "traceroute"],
    explanation: "ip route show выводит все маршруты ядра, включая маршрут по умолчанию и адрес шлюза.",
    manHint: "ip-route(8) - show / list routes."
  },
  {
    id: 98,
    book: "rh124",
    question: "Добавьте статический маршрут к сети 10.0.0.0/24 через шлюз 192.168.1.1 (временно, до перезагрузки).",
    correctCommand: ["ip", "route", "add", "10.0.0.0/24", "via", "192.168.1.1"],
    options: ["ip", "route", "add", "10.0.0.0/24", "via", "192.168.1.1", "del", "nmcli", "connection", "route", "-add", "ip", "addr", "add"],
    explanation: "ip route add добавляет запись в таблицу маршрутизации ядра; via указывает адрес шлюза для указанной сети.",
    manHint: "ip-route(8) - add ROUTE add new route. via ADDRESS the address of the nexthop router."
  },
  {
    id: 99,
    book: "rh124",
    question: "Определите версию и название установленного дистрибутива Linux, просмотрев соответствующий системный файл.",
    correctCommand: ["cat", "/etc/os-release"],
    options: ["cat", "/etc/os-release", "/etc/redhat-release", "uname", "-r", "hostnamectl", "lsb_release", "-a", "cat", "/etc/issue"],
    explanation: "/etc/os-release содержит стандартизированную информацию об идентификации операционной системы, включая имя и версию дистрибутива.",
    manHint: "os-release(5) - operating system identification. Located in /etc/os-release or /usr/lib/os-release."
  },
  {
    id: 100,
    book: "rh124",
    question: "Проверьте, сколько свободного места осталось на всех смонтированных файловых системах, в человекочитаемом формате (МБ/ГБ).",
    correctCommand: ["df", "-h"],
    options: ["df", "-h", "-i", "du", "-sh", "/", "free", "-h", "lsblk", "-f", "mount", "|", "grep", "%"],
    explanation: "df -h выводит информацию об использовании дискового пространства на всех смонтированных файловых системах в удобочитаемых единицах.",
    manHint: "df(1) - report file system disk space usage. -h, --human-readable print sizes in powers of 1024."
  },

  // ===================== RH134 (101-150) =====================
  {
    id: 101,
    book: "rh134",
    question: "Покажите список всех физических томов (Physical Volumes) LVM, настроенных в системе.",
    correctCommand: ["pvs"],
    options: ["pvs", "pvdisplay", "vgs", "lvs", "lsblk", "fdisk", "-l", "pvscan"],
    explanation: "pvs выводит краткую табличную сводку по всем физическим томам LVM: устройство, группу томов, размер и свободное место.",
    manHint: "pvs(8) - display information about physical volumes."
  },
  {
    id: 102,
    book: "rh134",
    question: "Покажите подробную информацию о группе томов vg0 (размер, число PV/LV, свободное место).",
    correctCommand: ["vgdisplay", "vg0"],
    options: ["vgdisplay", "vg0", "vgs", "pvdisplay", "lvdisplay", "vgscan", "vgcreate"],
    explanation: "vgdisplay выводит подробный отчет о группе томов, включая общий и свободный размер, количество физических и логических томов.",
    manHint: "vgdisplay(8) - display attributes of a volume group."
  },
  {
    id: 103,
    book: "rh134",
    question: "Добавьте новый физический том /dev/sdc в существующую группу томов vg0, расширив ее.",
    correctCommand: ["vgextend", "vg0", "/dev/sdc"],
    options: ["vgextend", "vg0", "/dev/sdc", "pvcreate", "lvextend", "vgreduce", "vgcreate", "-v"],
    explanation: "vgextend добавляет один или несколько физических томов в существующую группу томов, увеличивая ее общий доступный объем.",
    manHint: "vgextend(8) - add physical volumes to a volume group."
  },
  {
    id: 104,
    book: "rh134",
    question: "Уменьшите размер логического тома /dev/vg0/data до 5G (файловая система уже была уменьшена заранее вручную).",
    correctCommand: ["lvreduce", "-L", "5G", "/dev/vg0/data"],
    options: ["lvreduce", "-L", "5G", "/dev/vg0/data", "-l", "lvextend", "vgreduce", "resize2fs", "lvresize", "--resizefs"],
    explanation: "lvreduce -L задает новый абсолютный размер логического тома; уменьшение всегда требует, чтобы файловая система уже была уменьшена заранее, иначе данные могут быть потеряны.",
    manHint: "lvreduce(8) - reduce the size of a logical volume. -L, --size set the new size."
  },
  {
    id: 105,
    book: "rh134",
    question: "Переименуйте логический том 'data' в 'archive' в группе томов vg0.",
    correctCommand: ["lvrename", "vg0", "data", "archive"],
    options: ["lvrename", "vg0", "data", "archive", "mv", "lvchange", "-n", "vgrename", "lvconvert"],
    explanation: "lvrename изменяет имя существующего логического тома внутри указанной группы томов.",
    manHint: "lvrename(8) - rename a logical volume."
  },
  {
    id: 106,
    book: "rh134",
    question: "Удалите логический том /dev/vg0/old_data, который больше не нужен.",
    correctCommand: ["lvremove", "/dev/vg0/old_data"],
    options: ["lvremove", "/dev/vg0/old_data", "-f", "vgremove", "pvremove", "rm", "-rf", "lvchange", "-an"],
    explanation: "lvremove удаляет указанный логический том вместе с хранящимися на нем данными, после запроса подтверждения.",
    manHint: "lvremove(8) - remove a logical volume."
  },
  {
    id: 107,
    book: "rh134",
    question: "Создайте новую GPT-таблицу разделов на диске /dev/sdc и один primary-раздел на весь диск с помощью parted (в неинтерактивном режиме).",
    correctCommand: ["parted", "/dev/sdc", "mklabel", "gpt", "mkpart", "primary", "0%", "100%"],
    options: ["parted", "/dev/sdc", "mklabel", "gpt", "mkpart", "primary", "0%", "100%", "msdos", "fdisk", "print", "-a", "opt"],
    explanation: "parted позволяет неинтерактивно выполнить несколько команд подряд: mklabel gpt создает GPT-таблицу, а mkpart primary 0% 100% создает раздел на весь диск.",
    manHint: "parted(8) - mklabel LABEL-TYPE create a new disklabel. mkpart PART-TYPE START END create a new partition."
  },
  {
    id: 108,
    book: "rh134",
    question: "Просмотрите таблицу разделов и файловые системы диска /dev/sda в виде дерева.",
    correctCommand: ["lsblk", "/dev/sda"],
    options: ["lsblk", "/dev/sda", "-f", "fdisk", "-l", "/dev/sda", "parted", "-l", "blkid", "df", "-h"],
    explanation: "lsblk выводит список блочных устройств в виде дерева, показывая разделы и точки монтирования указанного диска.",
    manHint: "lsblk(8) - list block devices."
  },
  {
    id: 109,
    book: "rh134",
    question: "Создайте новый логический том с именем swaplv размером 2G в группе vg0, который позже будет использован под подкачку.",
    correctCommand: ["lvcreate", "-n", "swaplv", "-L", "2G", "vg0"],
    options: ["lvcreate", "-n", "swaplv", "-L", "2G", "vg0", "-l", "mkswap", "pvcreate", "vgcreate", "swapon"],
    explanation: "lvcreate -n задает имя нового тома, -L — его фиксированный размер, а последний аргумент — группу томов, в которой он будет создан.",
    manHint: "lvcreate(8) - -n, --name name of the new logical volume. -L, --size size of logical volume."
  },
  {
    id: 110,
    book: "rh134",
    question: "Проверьте текущий режим работы SELinux (enforcing, permissive или disabled).",
    correctCommand: ["getenforce"],
    options: ["getenforce", "setenforce", "sestatus", "-b", "selinuxenabled", "semodule", "-l", "getsebool", "-a"],
    explanation: "getenforce выводит только текущий режим работы SELinux одним словом: Enforcing, Permissive или Disabled.",
    manHint: "getenforce(8) - report the current mode of SELinux."
  },
  {
    id: 111,
    book: "rh134",
    question: "Временно переключите SELinux в режим permissive без перезагрузки системы (изменение сохранится только до перезагрузки).",
    correctCommand: ["setenforce", "0"],
    options: ["setenforce", "0", "1", "getenforce", "sestatus", "vi", "/etc/selinux/config", "systemctl", "restart", "selinux"],
    explanation: "setenforce 0 переключает SELinux в режим permissive (нарушения политики логируются, но не блокируются) до следующей перезагрузки.",
    manHint: "setenforce(8) - modify the mode SELinux is running in. 0 sets permissive mode, 1 sets enforcing mode."
  },
  {
    id: 112,
    book: "rh134",
    question: "Покажите подробный статус SELinux, включая текущий и настроенный (конфигурационный) режим, а также используемую политику.",
    correctCommand: ["sestatus"],
    options: ["sestatus", "-v", "getenforce", "semanage", "-l", "audit2why", "selinuxenabled", "sesearch"],
    explanation: "sestatus выводит развернутую информацию о статусе SELinux: текущий режим, режим из конфигурационного файла и тип загруженной политики.",
    manHint: "sestatus(8) - SELinux status tool."
  },
  {
    id: 113,
    book: "rh134",
    question: "Включите SELinux boolean httpd_can_network_connect постоянно (значение сохранится после перезагрузки).",
    correctCommand: ["setsebool", "-P", "httpd_can_network_connect", "on"],
    options: ["setsebool", "-P", "httpd_can_network_connect", "on", "off", "getsebool", "-a", "semanage", "boolean", "-m", "setenforce"],
    explanation: "Флаг -P у setsebool делает изменение значения булевой переменной SELinux постоянным, записывая его в политику.",
    manHint: "setsebool(8) - set SELinux boolean value. -P make the change permanent."
  },
  {
    id: 114,
    book: "rh134",
    question: "Найдите в журнале аудита недавние (recent) отказы SELinux типа AVC (access vector cache denials).",
    correctCommand: ["ausearch", "-m", "avc", "-ts", "recent"],
    options: ["ausearch", "-m", "avc", "-ts", "recent", "-sc", "sealert", "-a", "journalctl", "-t", "setroubleshoot", "audit2allow"],
    explanation: "ausearch -m avc фильтрует журнал аудита по типу сообщений AVC (отказы SELinux), а -ts recent ограничивает выборку недавними записями.",
    manHint: "ausearch(8) - -m message_type search based on message type, e.g. avc. -ts time-start search for events after time-start."
  },
  {
    id: 115,
    book: "rh134",
    question: "На основании недавних отказов SELinux, связанных с httpd, в журнале аудита сгенерируйте новый политический модуль mypolicy с помощью audit2allow.",
    correctCommand: ["grep", "httpd", "/var/log/audit/audit.log", "|", "audit2allow", "-M", "mypolicy"],
    options: ["grep", "httpd", "/var/log/audit/audit.log", "|", "audit2allow", "-M", "mypolicy", "-w", "ausearch", "-c", "semodule", "-i", "setsebool"],
    explanation: "audit2allow анализирует записи AVC-отказов и генерирует модуль политики (-M создает .te и .pp файлы), разрешающий соответствующие операции.",
    manHint: "audit2allow(1) - generate SELinux policy allow/dontaudit rules from logs of denied operations. -M create a loadable module."
  },
  {
    id: 116,
    book: "rh134",
    question: "Покажите полную конфигурацию активной (по умолчанию) зоны firewalld, включая разрешенные сервисы и порты.",
    correctCommand: ["firewall-cmd", "--list-all"],
    options: ["firewall-cmd", "--list-all", "--list-all-zones", "--get-active-zones", "--list-services", "iptables", "-L", "ufw", "status"],
    explanation: "firewall-cmd --list-all выводит все настройки текущей зоны по умолчанию: интерфейсы, сервисы, порты и rich-правила.",
    manHint: "firewall-cmd(1) - --list-all list everything added for or enabled in the zone."
  },
  {
    id: 117,
    book: "rh134",
    question: "Временно (только для текущей runtime-сессии, без --permanent) разрешите сервис http в зоне public firewalld.",
    correctCommand: ["firewall-cmd", "--zone=public", "--add-service=http"],
    options: ["firewall-cmd", "--zone=public", "--add-service=http", "--permanent", "--add-port=80/tcp", "--reload", "--remove-service=http"],
    explanation: "Без флага --permanent изменение применяется только к текущей runtime-конфигурации и будет потеряно после перезагрузки firewalld.",
    manHint: "firewall-cmd(1) - --add-service=SERVICE add a service to a zone for runtime (default) configuration."
  },
  {
    id: 118,
    book: "rh134",
    question: "Установите зону internal в качестве зоны по умолчанию для firewalld.",
    correctCommand: ["firewall-cmd", "--set-default-zone=internal"],
    options: ["firewall-cmd", "--set-default-zone=internal", "--get-default-zone", "--zone=internal", "--change-zone", "--permanent"],
    explanation: "firewall-cmd --set-default-zone немедленно и постоянно меняет зону по умолчанию для всех интерфейсов без явной привязки.",
    manHint: "firewall-cmd(1) - --set-default-zone=ZONE set the default zone."
  },
  {
    id: 119,
    book: "rh134",
    question: "Проверьте, разрешен ли сервис https в зоне public firewalld в данный момент.",
    correctCommand: ["firewall-cmd", "--zone=public", "--query-service=https"],
    options: ["firewall-cmd", "--zone=public", "--query-service=https", "--list-services", "--add-service=https", "--get-services", "iptables", "-C"],
    explanation: "firewall-cmd --query-service возвращает yes или no и соответствующий код завершения, показывая, разрешен ли сервис в указанной зоне.",
    manHint: "firewall-cmd(1) - --query-service=SERVICE return whether a service has been added for a zone."
  },
  {
    id: 120,
    book: "rh134",
    question: "Покажите список всех ресурсов, экспортируемых NFS-сервером nfs1.example.com.",
    correctCommand: ["showmount", "-e", "nfs1.example.com"],
    options: ["showmount", "-e", "nfs1.example.com", "-a", "exportfs", "-v", "mount", "-t", "nfs", "nfsstat", "rpcinfo", "-p"],
    explanation: "showmount -e запрашивает у указанного NFS-сервера список его экспортируемых директорий и разрешенных клиентов.",
    manHint: "showmount(8) - -e show the NFS server's export list."
  },
  {
    id: 121,
    book: "rh134",
    question: "После изменения файла /etc/exports примените новые правила экспорта NFS-сервера без его перезапуска.",
    correctCommand: ["exportfs", "-ra"],
    options: ["exportfs", "-ra", "-v", "-u", "systemctl", "reload", "nfs-server", "showmount", "-e", "mount", "-a"],
    explanation: "exportfs -r перечитывает /etc/exports и синхронизирует список экспортов, а -a применяет действие ко всем записям сразу.",
    manHint: "exportfs(8) - -r re-export all directories, synchronizing /var/lib/nfs/etab with /etc/exports."
  },
  {
    id: 122,
    book: "rh134",
    question: "Проверьте, какие директории в данный момент активно экспортируются локальным NFS-сервером.",
    correctCommand: ["exportfs", "-v"],
    options: ["exportfs", "-v", "-a", "showmount", "-e", "localhost", "cat", "/etc/exports", "nfsstat", "-s", "rpcinfo"],
    explanation: "exportfs -v (verbose) без дополнительных флагов выводит текущий список активных экспортов вместе с их опциями.",
    manHint: "exportfs(8) - with no options, displays the current export list, optionally with -v for verbose output."
  },
  {
    id: 123,
    book: "rh134",
    question: "Загрузите (скачайте) образ registry.access.redhat.com/ubi9/ubi из реестра с помощью podman.",
    correctCommand: ["podman", "pull", "registry.access.redhat.com/ubi9/ubi"],
    options: ["podman", "pull", "registry.access.redhat.com/ubi9/ubi", "push", "search", "run", "docker", "pull", "podman", "images"],
    explanation: "podman pull загружает указанный образ контейнера из реестра в локальное хранилище образов.",
    manHint: "podman-pull(1) - pull an image from a registry."
  },
  {
    id: 124,
    book: "rh134",
    question: "Покажите список всех локальных образов контейнеров, загруженных podman.",
    correctCommand: ["podman", "images"],
    options: ["podman", "images", "ps", "-a", "podman", "image", "list", "search", "inspect", "pull", "history"],
    explanation: "podman images выводит список всех локально хранимых образов контейнеров с их репозиторием, тегом и размером.",
    manHint: "podman-images(1) - list images in local storage."
  },
  {
    id: 125,
    book: "rh134",
    question: "Покажите список всех контейнеров podman, включая остановленные (не только запущенные).",
    correctCommand: ["podman", "ps", "-a"],
    options: ["podman", "ps", "-a", "--all", "podman", "images", "list", "inspect", "top", "podman", "stats"],
    explanation: "По умолчанию podman ps показывает только запущенные контейнеры; флаг -a (all) добавляет к выводу и остановленные контейнеры.",
    manHint: "podman-ps(1) - -a, --all show all the containers, default is only running containers."
  },
  {
    id: 126,
    book: "rh134",
    question: "Остановите запущенный контейнер с именем web.",
    correctCommand: ["podman", "stop", "web"],
    options: ["podman", "stop", "web", "kill", "rm", "-f", "pause", "restart", "podman", "stop", "-a"],
    explanation: "podman stop посылает контейнеру сигнал SIGTERM (а затем SIGKILL при необходимости), корректно останавливая его работу.",
    manHint: "podman-stop(1) - stop one or more running containers."
  },
  {
    id: 127,
    book: "rh134",
    question: "Удалите уже остановленный контейнер с именем web.",
    correctCommand: ["podman", "rm", "web"],
    options: ["podman", "rm", "web", "-f", "rmi", "stop", "prune", "podman", "container", "prune"],
    explanation: "podman rm удаляет указанный (обязательно остановленный, если не указан -f) контейнер из локального хранилища.",
    manHint: "podman-rm(1) - remove one or more containers."
  },
  {
    id: 128,
    book: "rh134",
    question: "Создайте именованный том podman с именем webdata для хранения постоянных данных контейнера.",
    correctCommand: ["podman", "volume", "create", "webdata"],
    options: ["podman", "volume", "create", "webdata", "volume", "ls", "run", "-v", "podman", "volume", "inspect", "mkdir"],
    explanation: "podman volume create создает именованный том, управляемый Podman, который может быть подключен к одному или нескольким контейнерам.",
    manHint: "podman-volume-create(1) - create a new volume."
  },
  {
    id: 129,
    book: "rh134",
    question: "Запустите новый контейнер nginx под именем web, подключив к нему именованный том webdata к директории /usr/share/nginx/html внутри контейнера.",
    correctCommand: ["podman", "run", "-d", "--name", "web", "-v", "webdata:/usr/share/nginx/html", "nginx"],
    options: ["podman", "run", "-d", "--name", "web", "-v", "webdata:/usr/share/nginx/html", "nginx", "--mount", "-p", "8080:80", "--volume-from"],
    explanation: "Флаг -v volume_name:/path/in/container монтирует именованный том Podman в указанную директорию внутри запускаемого контейнера.",
    manHint: "podman-run(1) - -v, --volume SRC-VOLUME[:DEST]:[OPTIONS] mount a volume into the container."
  },
  {
    id: 130,
    book: "rh134",
    question: "Выведите подробную информацию (inspect) о контейнере web в формате JSON.",
    correctCommand: ["podman", "inspect", "web"],
    options: ["podman", "inspect", "web", "-f", "info", "stats", "logs", "top", "podman", "ps", "-a"],
    explanation: "podman inspect возвращает полную конфигурацию контейнера или образа в формате JSON: сети, тома, переменные окружения и др.",
    manHint: "podman-inspect(1) - display a container or image's configuration."
  },
  {
    id: 131,
    book: "rh134",
    question: "Просмотрите вывод логов (stdout/stderr) контейнера web.",
    correctCommand: ["podman", "logs", "web"],
    options: ["podman", "logs", "web", "-f", "attach", "exec", "top", "journalctl", "-u", "web", "inspect"],
    explanation: "podman logs выводит накопленные записи стандартного вывода и ошибок контейнера с момента его запуска.",
    manHint: "podman-logs(1) - display the logs of one or more containers."
  },
  {
    id: 132,
    book: "rh134",
    question: "Войдите в интерактивную оболочку bash внутри уже запущенного контейнера web.",
    correctCommand: ["podman", "exec", "-it", "web", "/bin/bash"],
    options: ["podman", "exec", "-it", "web", "/bin/bash", "-d", "attach", "run", "-it", "podman", "enter", "ssh"],
    explanation: "podman exec -it запускает новый интерактивный процесс (в данном случае bash) внутри уже работающего контейнера.",
    manHint: "podman-exec(1) - -i, --interactive keep STDIN open. -t, --tty allocate a pseudo-TTY."
  },
  {
    id: 133,
    book: "rh134",
    question: "Соберите новый образ контейнера myapp:1.0 из Containerfile, расположенного в текущей директории.",
    correctCommand: ["podman", "build", "-t", "myapp:1.0", "."],
    options: ["podman", "build", "-t", "myapp:1.0", ".", "-f", "Dockerfile", "run", "create", "docker", "build", "podman", "commit"],
    explanation: "podman build собирает новый образ на основе инструкций Containerfile/Dockerfile; -t задает имя и тег образа, а точка указывает контекст сборки.",
    manHint: "podman-build(1) - -t, --tag name the built image. Build context is the given directory."
  },
  {
    id: 134,
    book: "rh134",
    question: "Авторизуйтесь в приватном реестре контейнеров registry.example.com под пользователем admin.",
    correctCommand: ["podman", "login", "registry.example.com", "-u", "admin"],
    options: ["podman", "login", "registry.example.com", "-u", "admin", "-p", "logout", "pull", "docker", "login", "podman", "auth"],
    explanation: "podman login выполняет аутентификацию в указанном реестре контейнеров, после чего можно скачивать образы из приватных репозиториев.",
    manHint: "podman-login(1) - login to a container registry. -u, --username the username for the registry."
  },
  {
    id: 135,
    book: "rh134",
    question: "Покажите список всех активных таймеров systemd вместе со временем их следующего запуска.",
    correctCommand: ["systemctl", "list-timers"],
    options: ["systemctl", "list-timers", "--all", "list-units", "--type=timer", "crontab", "-l", "at", "-l", "atq"],
    explanation: "systemctl list-timers выводит все активные таймеры systemd с указанием времени следующего и последнего срабатывания.",
    manHint: "systemctl(1) - list-timers list timer units currently in memory, ordered by the time they elapse next."
  },
  {
    id: 136,
    book: "rh134",
    question: "Просмотрите содержимое системного файла /etc/crontab, содержащего задания cron, общие для всех пользователей.",
    correctCommand: ["cat", "/etc/crontab"],
    options: ["cat", "/etc/crontab", "/var/spool/cron", "crontab", "-l", "ls", "/etc/cron.d/", "systemctl", "cat", "cron"],
    explanation: "/etc/crontab — системная crontab-таблица, в которой (в отличие от пользовательских) дополнительно указывается пользователь, от имени которого выполняется задание.",
    manHint: "crontab(5) - the system crontab file (/etc/crontab) has an extra 'user' field."
  },
  {
    id: 137,
    book: "rh134",
    question: "Добавьте для текущего пользователя задание cron, запускающее /opt/backup.sh каждый день в 3:15 ночи, неинтерактивным способом (без открытия редактора).",
    correctCommand: ["(", "echo", "'15", "3", "*", "*", "*", "/opt/backup.sh'", ")", "|", "crontab", "-"],
    options: ["(", "echo", "'15", "3", "*", "*", "*", "/opt/backup.sh'", ")", "|", "crontab", "-", "crontab", "-e", "-l", "at", "3:15", "systemctl", "enable", "cron"],
    explanation: "Передача сгенерированной строки задания через pipe в 'crontab -' записывает новую crontab-таблицу текущего пользователя без запуска интерактивного редактора.",
    manHint: "crontab(1) - crontab - read a crontab file from standard input. Field order: minute hour day month weekday command."
  },
  {
    id: 138,
    book: "rh134",
    question: "Определите, какой профиль tuned активен в системе в данный момент.",
    correctCommand: ["tuned-adm", "active"],
    options: ["tuned-adm", "active", "list", "recommend", "profile", "status", "sestatus", "systemctl", "status", "tuned"],
    explanation: "tuned-adm active выводит только имя текущего активного профиля производительности tuned.",
    manHint: "tuned-adm(8) - active print current active profile."
  },
  {
    id: 139,
    book: "rh134",
    question: "Покажите список всех доступных профилей tuned на данной системе.",
    correctCommand: ["tuned-adm", "list"],
    options: ["tuned-adm", "list", "active", "recommend", "profile", "-l", "tuned-adm", "profiles", "off"],
    explanation: "tuned-adm list выводит перечень всех доступных профилей, а также отмечает, какой из них активен в данный момент.",
    manHint: "tuned-adm(8) - list list available profiles."
  },
  {
    id: 140,
    book: "rh134",
    question: "Установите целевой уровень загрузки системы по умолчанию (default target) в multi-user (без графического окружения).",
    correctCommand: ["systemctl", "set-default", "multi-user.target"],
    options: ["systemctl", "set-default", "multi-user.target", "get-default", "isolate", "graphical.target", "runlevel", "3", "init", "3"],
    explanation: "systemctl set-default создает символическую ссылку default.target на указанную цель, определяя режим загрузки при следующем старте системы.",
    manHint: "systemctl(1) - set-default NAME set the default target to boot into."
  },
  {
    id: 141,
    book: "rh134",
    question: "Немедленно переключите текущую загруженную систему в экстренный (emergency) режим, не изменяя постоянную цель загрузки по умолчанию.",
    correctCommand: ["systemctl", "isolate", "emergency.target"],
    options: ["systemctl", "isolate", "emergency.target", "set-default", "rescue.target", "reboot", "systemctl", "emergency", "init", "1"],
    explanation: "systemctl isolate переключает систему на указанную цель прямо сейчас, останавливая юниты, не требуемые новой целью, но не меняет target по умолчанию для будущих загрузок.",
    manHint: "systemctl(1) - isolate UNIT start the unit specified and stop all others."
  },
  {
    id: 142,
    book: "rh134",
    question: "Пересоберите конфигурационный файл GRUB2 после изменения параметров загрузки ядра на системе с BIOS.",
    correctCommand: ["grub2-mkconfig", "-o", "/boot/grub2/grub.cfg"],
    options: ["grub2-mkconfig", "-o", "/boot/grub2/grub.cfg", "-o", "/etc/grub2.cfg", "grubby", "--update-kernel", "update-grub", "grub2-install"],
    explanation: "grub2-mkconfig генерирует новый файл конфигурации GRUB2 на основе текущих настроек и скриптов /etc/grub.d/, сохраняя результат по указанному пути через -o.",
    manHint: "grub2-mkconfig(8) - generate a GRUB configuration file. -o FILE send output to FILE."
  },
  {
    id: 143,
    book: "rh134",
    question: "Добавьте параметр ядра enforcing=0 ко всем установленным ядрам постоянно с помощью grubby, чтобы диагностировать проблему, не изменяя постоянную конфигурацию SELinux в /etc/selinux/config.",
    correctCommand: ["grubby", "--update-kernel=ALL", "--args=\"enforcing=0\""],
    options: ["grubby", "--update-kernel=ALL", "--args=\"enforcing=0\"", "--remove-args", "--default-kernel", "setenforce", "0", "grub2-mkconfig", "vi", "/etc/selinux/config"],
    explanation: "Параметр ядра enforcing=0 загружает систему с SELinux в permissive-режиме уже на этапе загрузки — это полезно, когда setenforce 0 недоступен (например, SELinux мешает раннему старту). grubby --update-kernel=ALL применяет параметр ко всем установленным ядрам через --args.",
    manHint: "grubby(8) - --update-kernel=kernel-path update specified kernels. --args=args arguments to add. selinux(8) - enforcing=0 boots the system with SELinux in permissive mode."
  },
  {
    id: 144,
    book: "rh134",
    question: "Определите, какое ядро в данный момент установлено как ядро по умолчанию для загрузки, с помощью grubby.",
    correctCommand: ["grubby", "--default-kernel"],
    options: ["grubby", "--default-kernel", "--default-index", "--info=ALL", "uname", "-r", "rpm", "-qa", "kernel", "grub2-editenv", "list"],
    explanation: "grubby --default-kernel выводит путь к файлу ядра, которое используется в качестве загружаемого по умолчанию.",
    manHint: "grubby(8) - --default-kernel print the path to the default kernel."
  },
  {
    id: 145,
    book: "rh134",
    question: "Обновите все установленные пакеты системы через dnf, исключив из обновления любые пакеты kernel*.",
    correctCommand: ["dnf", "update", "-y", "--exclude=kernel*"],
    options: ["dnf", "update", "-y", "--exclude=kernel*", "--exclude", "kernel", "-x", "kernel", "dnf", "versionlock", "yum", "update"],
    explanation: "Флаг --exclude позволяет исключить пакеты, соответствующие шаблону, из транзакции обновления, не затрагивая остальные пакеты.",
    manHint: "dnf(8) - --exclude=PACKAGE-SPEC exclude packages specified by PACKAGE-SPEC from the operation."
  },
  {
    id: 146,
    book: "rh134",
    question: "Проверьте список зависимостей, которые требует пакет httpd, не устанавливая сам пакет.",
    correctCommand: ["dnf", "repoquery", "--requires", "httpd"],
    options: ["dnf", "repoquery", "--requires", "httpd", "deplist", "rpm", "-qR", "httpd", "dnf", "info", "httpd", "yumdownloader"],
    explanation: "dnf repoquery --requires выводит список зависимостей указанного пакета, используя метаданные репозитория, без необходимости его установки.",
    manHint: "dnf-repoquery(8) - --requires display capabilities that the package requires."
  },
  {
    id: 147,
    book: "rh134",
    question: "Выполните проверку синтаксической корректности Kickstart-файла /root/ks.cfg перед автоматизированной установкой.",
    correctCommand: ["ksvalidator", "/root/ks.cfg"],
    options: ["ksvalidator", "/root/ks.cfg", "-v", "anaconda", "--kickstart", "ksflatten", "-c", "cat", "syntax-check"],
    explanation: "ksvalidator проверяет синтаксис Kickstart-файла на соответствие поддерживаемым командам и версии, выявляя ошибки до начала установки.",
    manHint: "ksvalidator(1) - validate a kickstart file for syntax and content errors."
  },
  {
    id: 148,
    book: "rh134",
    question: "Создайте загрузочный ISO-образ rhel9-ks.iso для автоматизированной установки, встроив в исходный образ rhel9.iso Kickstart-файл ks.cfg с помощью mkksiso.",
    correctCommand: ["mkksiso", "ks.cfg", "rhel9.iso", "rhel9-ks.iso"],
    options: ["mkksiso", "ks.cfg", "rhel9.iso", "rhel9-ks.iso", "-c", "genisoimage", "ksvalidator", "livecd-creator", "anaconda"],
    explanation: "mkksiso встраивает указанный Kickstart-файл в копию исходного установочного ISO-образа, создавая новый самозагружаемый образ для автоматизированной установки.",
    manHint: "mkksiso(1) - embed a kickstart file into a RHEL boot ISO."
  },
  {
    id: 149,
    book: "rh134",
    question: "Просмотрите текущий статус образа системы в режиме image mode (bootc), включая развернутый и ожидающий образы.",
    correctCommand: ["bootc", "status"],
    options: ["bootc", "status", "--json", "upgrade", "switch", "podman", "images", "rpm-ostree", "status"],
    explanation: "bootc status выводит информацию о текущем загруженном образе, ожидающем обновлении и истории развертываний системы image mode.",
    manHint: "bootc(1) - status show the current image-based deployment status."
  },
  {
    id: 150,
    book: "rh134",
    question: "Откатите систему в режиме image mode (bootc) к предыдущему развернутому образу после неудачного обновления.",
    correctCommand: ["bootc", "rollback"],
    options: ["bootc", "rollback", "switch", "upgrade", "status", "podman", "rollback", "grubby", "--set-default", "reboot"],
    explanation: "bootc rollback переключает систему обратно на предыдущее успешно работавшее развертывание образа, после чего требуется перезагрузка для применения изменения.",
    manHint: "bootc(1) - rollback roll back to the previously booted image deployment."
  }
];

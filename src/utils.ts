import { Question } from './types';

export function getCategoryForQuestion(question: Question): string {
  const text = (question.question + " " + question.explanation + " " + question.correctCommand.join(" ")).toLowerCase();
  
  if (text.match(/lvcreate|vgcreate|pvcreate|lvextend|xfs|ext4|mount|fstab|swap|blkid|parted/)) return "Storage";
  if (text.match(/nmcli|ip |firewall|rsync|ssh|sshd|port/)) return "Network";
  if (text.match(/useradd|usermod|userdel|group|chown|chmod|acl|passwd|chage/)) return "Users & Permissions";
  if (text.match(/selinux|semanage|restorecon|chcon|setsebool/)) return "Security (SELinux)";
  if (text.match(/systemctl|journalctl|cron|ps |top|kill|bg|fg|at|tuned/)) return "Services & Processes";
  if (text.match(/dnf|rpm|flatpak|podman/)) return "Packages & Containers";

  return "Core System";
}

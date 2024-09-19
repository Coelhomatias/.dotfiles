# Aliases

# eza (enhanced ls command)
alias ls="eza --long --git --no-filesize --icons --no-time --no-user --no-permissions --group-directories-first"
alias lss="eza --long --git --no-filesize --icons --no-time --no-user --no-permissions --group-directories-first --sort=size"
alias lst="eza --long --git --no-filesize --icons --no-time --no-user --no-permissions --group-directories-first --sort=modified"
alias lse="eza --long --git --no-filesize --icons --no-time --no-user --no-permissions --group-directories-first --sort=extension"
alias la="eza --long --git --no-filesize --icons --no-time --no-user --no-permissions --group-directories-first --all"
alias ll="eza --long --git --icons --group-directories-first"
alias lla="eza --long --git --icons --group-directories-first --all"
alias lt="eza --tree --git --icons --group-directories-first --level=2"
alias lta="eza --tree --git --icons --group-directories-first --level=2 --all"

# zoxide aliases
alias cd="z"

# git aliases
alias g="git"
alias ga="git add"
alias gaa="git add --all"
alias gb="git branch"
alias gc="git commit -v"
alias gca="git commit -v -a"
alias gcm="git commit -m"
alias gcam="git commit -a -m"
alias gco="git checkout"
alias gcb="git checkout -b"
alias gd="git diff"
alias gds="git diff --staged"
alias gf="git fetch"
alias gl="git log"
alias glg="git log --oneline --graph --decorate"
alias gm="git merge"
alias gp="git push"
alias gpu='git push -u origin $(git rev-parse --abbrev-ref HEAD)'
alias gpl="git pull"
alias gr="git remote"
alias grv="git remote -v"
alias gs="git status"
alias gss="git status -s"

# docker aliases
alias d="docker"
alias dps="docker ps"
alias dpsa="docker ps -a"
alias di="docker images"
alias dip="docker inspect --format '{{ .NetworkSettings.IPAddress }}'"
alias drm="docker rm"
alias drmi="docker rmi"
alias dexec="docker exec -it"
alias dlogs="docker logs"
alias dbuild="docker build"
alias drun="docker run"
alias dstats="docker stats"
alias dstop="docker stop"
alias dstart="docker start"
alias dcompose="docker-compose"
alias dcup="docker-compose up"
alias dcupd="docker-compose up -d"
alias dcdown="docker-compose down"

# Common command aliases
alias cls="clear"
alias h="history"
alias j="jobs -l"
alias vi="vim"
alias please="sudo"
alias cp="cp -iv"          # Confirm before overwriting files
alias mv="mv -iv"
alias rm="rm -I --preserve-root"  # Prompt before deleting
alias mkdir="mkdir -pv"
alias chx="chmod +x"
alias path='echo -e ${PATH//:/\\n}'
alias reload="source ~/.zshrc"
alias update="sudo apt update && sudo apt upgrade -y"

# Navigation shortcuts
alias ..="cd .."
alias ...="cd ../.."
alias ....="cd ../../.."
alias .....="cd ../../../.."

# Network
alias myip="curl ipinfo.io/ip"
alias ports="netstat -tulanp"
alias ipinfo="ip addr show"
alias flushdns="sudo systemd-resolve --flush-caches"

# System information
alias cpuinfo="lscpu"
alias meminfo="free -h"
alias diskinfo="df -h"

# Quick HTTP server
alias serve="python3 -m http.server"

# Clipboard aliases (requires xclip or pbcopy/pbpaste on macOS)
alias pbcopy='xclip -selection clipboard'
alias pbpaste='xclip -selection clipboard -o'

# Process management
alias psmem="ps auxf | sort -nr -k 4 | head -10"  # Top 10 memory-consuming processes
alias pscpu="ps auxf | sort -nr -k 3 | head -10"  # Top 10 CPU-consuming processes

# Grep with color
alias grep="grep --color=auto"
alias egrep="egrep --color=auto"
alias fgrep="fgrep --color=auto"

# Git ignore case-sensitive files
alias gi="git update-index --assume-unchanged"

# Git undo last commit but keep changes
alias guncommit="git reset --soft HEAD~1"

# Docker cleanup
alias dclean="docker system prune -f"

# Kubernetes aliases (if applicable)
alias k="kubectl"
alias kgp="kubectl get pods"
alias kgs="kubectl get services"
alias kga="kubectl get all"
alias kdp="kubectl describe pod"
alias kl="kubectl logs"

# Shortcuts to edit configuration files
alias zshconfig="nvim ~/.zshrc"
alias vimconfig="nvim ~/.vimrc"

# Search command history
alias hgrep="history | grep"

# Tar shortcuts
alias untar="tar xvf"
alias mktar="tar cvf"
alias mktgz="tar czvf"
alias untgz="tar xzvf"


# Colorize output of various commands
alias diff="colordiff"
alias cls="clear"

# Fix typos
alias mroe="more"
alias moer="more"

# Enable aliases to be sudo’ed
alias sudo='sudo '

# Enhanced ping command
alias ping="ping -c 5"

# rsync with progress
alias rsyncp="rsync -ah --progress"

# List only directories
alias lsd="eza -ld"

# Get external IP
alias externalip="curl -s http://ipecho.net/plain; echo"

# Docker remove all stopped containers
alias drm-all='docker rm $(docker ps -a -q)'

# Git remove all merged branches
alias grmmerged='git branch --merged | egrep -v "(^\*|master|dev)" | xargs git branch -d'

# Kubernetes get current context
alias kctx="kubectl config current-context"

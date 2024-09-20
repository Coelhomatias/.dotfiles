# Zsh Options and History Setup

# History File Configuration
HISTFILE=$HOME/.zhistory
HISTSIZE=5000
SAVEHIST=5000

# History Options
setopt SHARE_HISTORY            # Share history across all sessions
setopt APPEND_HISTORY           # Append to the history file, don't overwrite
setopt INC_APPEND_HISTORY       # Incrementally append to the history file
setopt HIST_IGNORE_DUPS         # Ignore duplicate entries
setopt HIST_IGNORE_ALL_DUPS     # Remove all previous duplicates
setopt HIST_EXPIRE_DUPS_FIRST   # Expire duplicate entries first when trimming history
setopt HIST_VERIFY              # Show command with history expansion before executing

bindkey "${terminfo[kcuu1]}" history-beginning-search-backward
bindkey "${terminfo[kcud1]}" history-beginning-search-forward

# Completion styling
zstyle ':completion:*' matcher-list 'm:{a-z}={A-Za-z}'
zstyle ':completion:*' list-colors "${(s.:.)LS_COLORS}"
zstyle ':completion:*' menu no
zstyle ':fzf-tab:complete:cd:*' fzf-preview 'eza -1 --all --icons --color=always $realpath'
zstyle ':fzf-tab:complete:z:*' fzf-preview 'eza -1 --all --icons --color=always $realpath'
